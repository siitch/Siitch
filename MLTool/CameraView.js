import React, {useEffect, useState} from "react";
// Tensorflow.js
import * as tf from "@tensorflow/tfjs";
// Used to import .bin model file
import {bundleResourceIO} from "@tensorflow/tfjs-react-native";
import { // Native components
  Alert,
  Dimensions, Image,
  Linking,
  SafeAreaView,
  TouchableOpacity,
  View
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Camera} from "expo-camera";
// Third party loading indicator, looks great
import {ActivityIndicator} from "react-native-paper";
// Used to change the dimension of photo
import * as ImageManipulator from "expo-image-manipulator";
// Screen stack for tab 'MLTool'
import {createStackNavigator} from "@react-navigation/stack";
// Screens included in this stack
import ItemDetail from "./ItemDetail";
import Catalogue from "./Catalogue";
import ResultsScreen from "./ResultsScreen";
import {CategoryPage} from "./CategoryPage";
import {Virtual} from "../Menu/Virtual";
// Used to show arrow <- image inside the go back button
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Used to unmount the camera when this screen is not focused
import {useIsFocused} from "@react-navigation/native";
// Get camera button image from here
import Profiles from "../ImageDB";
// React native's firebase analytics library
import analytics from '@react-native-firebase/analytics';
// Expo's filesystem library to delete temp photo
import * as FileSystem from 'expo-file-system';

function CameraView({navigation}) {
  // init status
  const [init, setInit] = useState(true);
  // Get the status if the camera screen is the first time visited
  const [visited, setVisited] = useState(null);
  // Status of camera permission
  const [granted, setGranted] = useState(null);
  // Status of model loading
  const [isModelReady, setIsModelReady] = useState(false);

  // Instance of device camera
  const [camera, setCamera] = useState(null);
  // Set different color according to the model loading status
  const [loadingColor, setLoadingColor] = useState('grey');

  // Device's dimension, used to set the size of camera preview and the size of image
  let Height = Dimensions.get('screen').height;
  let Width = Dimensions.get('screen').width;

  // If this screen is the current screen on top. Used to un-mount camera when this screen is not focused
  let isFocused = useIsFocused();

  // Get camera permission status. When first launch, ask for permission.
  function getCameraPermission() {
    // If permission is asked before, this screen will be recorded as visited.
    AsyncStorage.getItem('permissionAsked').then(value => {
      if(value == null){ // If permission is not asked before
        AsyncStorage.setItem('permissionAsked', 'true');
        setVisited(false) // , app won't lead user to setting.
      } else {
        setVisited(true)
      }
    });
    // Get the status of camera permission
    Camera.requestCameraPermissionsAsync().then((response) => {
      if (response.status !== 'granted') {
        setGranted(false)
      } else {
        setGranted(true)
      }
    })
  }

  function prepareModal() {
    // Initialize tensorflow.js
    tf.ready().then(()=>{
      // Load our model from resource folder
      const model = require("./Siitch_model/model.json");
      const weights = require("./Siitch_model/group1-shard1of1.bin");
      tf.loadGraphModel(bundleResourceIO(model, weights)).then((GraphModel) => {
        global.siitchmodel = GraphModel
      }).then(()=>{
        setIsModelReady(true);
        setLoadingColor('red'); // Useless for now, but it might come in handy in the future
      })
    })
  }

  useEffect(() => {
    // After the first time user visits this screen, if permission is declined or turned off,
    // shows message to lead user to grant camera permission in setting.
    if(granted !== null && visited !== null){
      if(isFocused && !granted && visited){
        Alert.alert(
          "Permission denied",
          "Do you want to go to settings to grant camera permission?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"), // Useless log, can be null
              style: "cancel"
            },
            { text: "OK", onPress: () => Linking.openURL('app-settings:') }
          ]
        );
        navigation.goBack(null); // Block user from entering this screen if permission not granted.
      } else if(isFocused && !granted && !visited) {
        setVisited(true); // App will lead user to setting next time if permission is not granted.
        navigation.goBack(null); // Block user from entering this screen if permission not granted for the first time.
      }
    }
  }, [granted, isFocused]) // changes of isFocused, granted, update this screen

  useEffect(() => {
    if(init){ // After all the functions are called when this screen is initializing, don't call them again when
      getCameraPermission()
      prepareModal()
      setInit(false)
    }
  })

  // User taps the camera button, do this
  function takePicture() {
    camera.pausePreview()
    camera.takePictureAsync({onPictureSaved: picture => {
        ImageManipulator.manipulateAsync(
          picture.uri,
          [{resize: {width: Width, height: Height}}],
          {compress: 1, format: ImageManipulator.SaveFormat.JPEG}
        ).then(ImageResult => {
          navigation.push('Confirm', {image: ImageResult})
          FileSystem.deleteAsync(picture.uri)
        })
      }}).then(()=>{
      analytics().logEvent('take_photo', {
        userAction: 'User took a photo'
      })
    })
  }

  return(
    // Only if camera permission is granted and this screen is focused, show camera preview and buttons
    (isFocused && granted === true &&
      <Camera
        ref={(ref) => setCamera(ref)}
        type={Camera.Constants.Type.back}
        style={{
          aspectRatio: Width / Height,// Change this value to change the ratio of camera preview area
        }}
      >
        {/* Use SafeAreaView to make sure go-back button and camera button lay inside the safe area */}
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            marginLeft: '2%',
            marginRight: '2%',
            marginBottom: '2%',
          }}>
          {/* Go-back button on the top left */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: '6%',
              left: '0%',
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 100,
              borderColor: 'black',
              borderWidth: 3,
              backgroundColor: 'white',
            }}
            onPress={() => {
              navigation.goBack(null)
            }}>
            <MaterialCommunityIcons name="arrow-left-thick" size={40}/>
          </TouchableOpacity>

          {/* Camera button on the bottom center */}
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
            onPress={isModelReady ? takePicture : ()=>{Alert.alert('Model loading')}}>
            {/* Camera button image*/}
            <Image style={{
              width: 80,
              height: 80,
              alignSelf: 'center',
              alignItems: 'center',
            }} source={Profiles.camera}/>
            {/* When model is loading, show loading indicator */}
            {!isModelReady && (
              <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                borderRadius: 100,
                width: 80,
                height: 80,
                borderColor: 'black',
                borderWidth: 6,
                backgroundColor: loadingColor,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
              }}>
                <ActivityIndicator animating={true} size={'large'} color={'black'}/>
              </View>
            )}
          </TouchableOpacity>
        </SafeAreaView>
      </Camera>
    )
  )
}

// Create screen stack for tab 'Camera'
const CameraScreenStack = createStackNavigator();

// Leveraged from Ranking
const Meats = () => {
  return (
    <CategoryPage category='Meat' />
  )
}
const Fruits = () => {
  return (
    <CategoryPage category='Fruit' />
  )
}
const Vegetables = () => {
  return (
    <CategoryPage category='Vegetables' />
  )
}
const EverydayFoods = () => {
  return (
    <CategoryPage category='EDF' />
  )
}
const EverydayItems = () => {
  return (
    <CategoryPage category='EDI' />
  )
}
const NutsBeans = () => {
  return (
    <CategoryPage category='Nuts & Beans' />
  )
}
const Grains = () => {
  return (
    <CategoryPage category='Grains' />
  )
}
const Seeds = () => {
  return (
    <CategoryPage category='Seeds' />
  )
}
const Oils = () => {
  return (
    <CategoryPage category='Oils' />
  )
}
const DrinksAll = () => {
  return (
    <CategoryPage category='Drinks - All' />
  )
}
const DrinksAlcoholic = () => {
  return (
    <CategoryPage category='Drinks - Alc' />
  )
}
const DrinksNonAlcoholic = () => {
  return (
    <CategoryPage category='Drinks - NA' />
  )
}

// Screen stack navigation
export const CameraScreen = () => (
  <CameraScreenStack.Navigator>
    {/* This screen */}
    <CameraScreenStack.Screen
      name="CameraView"
      component={CameraView}
      options={{
        headerShown: false,
      }}
    />
    {/* Result screen */}
    <CameraScreenStack.Screen
      name="Confirm"
      component={ResultsScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* Item detail screen */}
    <CameraScreenStack.Screen
      name="Detail"
      component={ItemDetail}
      options={({navigation}) => ({
        headerBackTitleVisible: false,
        headerRight: () => (
          <MaterialCommunityIcons
            name="home"
            size={25}
            color={'grey'}
            style={{
              paddingRight: 15
            }}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      })}
    />
    {/* Nope, see catalogue */}
    <CameraScreenStack.Screen
      name="Catalogue"
      component={Catalogue}
      options={({navigation}) => ({
        headerBackTitleVisible: false,
        headerRight: () => (
          <MaterialCommunityIcons
            name="home"
            size={25}
            color={'grey'}
            style={{
              paddingRight: 15
            }}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      })}
    />
    {/* Virtual Water screen */}
    <CameraScreenStack.Screen
      name="Virtual Water"
      component={Virtual}
      options={({navigation}) => ({
        headerBackTitleVisible: false,
        headerRight: () => (
          <MaterialCommunityIcons
            name="home"
            size={25}
            color={'grey'}
            style={{
              paddingRight: 15
            }}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      })}
    />

    {/* Different category screen */}
    <CameraScreenStack.Screen name="Meats" component={Meats} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Fruits" component={Fruits} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Vegetables" component={Vegetables} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Everyday Foods" component={EverydayFoods} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Everyday Items" component={EverydayItems} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15,
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Nuts, Beans" component={NutsBeans} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Grains" component={Grains} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Seeds" component={Seeds} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Oils" component={Oils} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Drinks-All" component={DrinksAll} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Drinks-Alcoholic" component={DrinksAlcoholic} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
    <CameraScreenStack.Screen name="Drinks-NonAlcoholic" component={DrinksNonAlcoholic} options={({navigation}) => ({
      headerBackTitleVisible: false,
      headerRight: () => (
        <MaterialCommunityIcons
          name="home"
          size={25}
          color={'grey'}
          style={{
            paddingRight: 15
          }}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    })}/>
  </CameraScreenStack.Navigator>
);
