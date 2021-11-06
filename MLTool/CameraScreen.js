import React, {useEffect, useState} from "react";
// Tensorflow.js
import * as tf from "@tensorflow/tfjs";
// Used to import model file
import {bundleResourceIO} from "@tensorflow/tfjs-react-native";
import { // Native components
    //ActivityIndicator, // Native iOS loading circle, doesn't look good
    Alert,
    AsyncStorage,
    Dimensions, Image,
    Linking,
    SafeAreaView,
    TouchableOpacity,
    View
} from "react-native";
import {Camera} from "expo-camera";
// Great button with flexible config, but can't wrap Drew's camera image so currently commented out and use TouchOpacity
import {Button as MaterialButton} from "react-native-paper";
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
// Used to show <- image inside the go back button
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Used to unmount the camera when this screen is not focused
import {useIsFocused} from "@react-navigation/native";
// Get camera button image from here
import Profiles from "../ImageDB";

export default function CameraScreen({navigation}) {
    // Get the status if the camera screen is the first time visited
    const [visited, setVisited] = useState(null);
    // Status of camera permission
    const [granted, setGranted] = useState(null);
    // Status of model loading
    const [isModelReady, setIsModelReady] = useState(false);
    // Reference of model
    const [myModel, setMyModel] = useState(null);

    // Instance of device camera
    const [camera, setCamera] = useState(null);
    // Set different color according to the model loading status
    const [loadingColor, setLoadingColor] = useState('grey');

    // Device's dimension, used to set the size of camera preview and the size of photo
    const Height = Dimensions.get('screen').height;
    const Width = Dimensions.get('screen').width;

    // If this screen is the current screen on top. Used to un-mount camera when this screen is not focused
    const isFocused = useIsFocused();

    useEffect(() => {
        // Initialize tensorflow.js
        const initializeTfAsync = async () => {
            await tf.ready();
        };

        // Load our model from resource folder
        const initializeModelAsync = async () => {
            const model = require("./Siitch_20epochs/model.json");
            const weights = require("./Siitch_20epochs/model.bin");
            const loadedModel = await tf.loadGraphModel(
                bundleResourceIO(model, weights)
            );
            // Set model reference
            setMyModel(loadedModel);
            // Set model loading status
            setIsModelReady(true);
            setLoadingColor('red'); // Useless for now, but it might come in handy in the future
        };

        // Get camera permission status. When first launch, ask for permission.
        const getCameraPermissionAsync = async () => {
            // If permission is asked before, this screen will be recorded as visited.
            AsyncStorage.getItem('permissionAsked').then(value => {
                if(value == null){ // If permission is not asked before
                    AsyncStorage.setItem('permissionAsked', 'true');
                    setVisited(false); // , app won't lead user to setting.
                } else {
                    setVisited(true); // Otherwise, app will lead user to setting if permission is not granted.
                }
            });

            // Get the status of camera permission
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                setGranted(false)
            } else {
                setGranted(true)
            }
        };

        // After the first time user visits this screen, if permission is declined or turned off,
        // shows message to lead user to grant camera permission in setting.
        const checkPermissionAsync = () => {
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
                }
            }
        }
        getCameraPermissionAsync();
        checkPermissionAsync();
        initializeTfAsync();
        initializeModelAsync();
    }, [isFocused, granted, visited]); // Update when isFocused, granted, visited change

    // User taps the camera button, do this
    const takePictureAsync = async () => {
        try {
            // Get the photo user took
            let response = await camera.takePictureAsync(null);

            // Resize image to avoid out of memory crashes, also set it to the size of the screen so that we can display
            // it as background in the Result Screen
            const manipulateResponse = await ImageManipulator.manipulateAsync(
                response.uri,
                [{ resize: { width: Width, height: Height } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            // Pass the image and the model reference to 'ResultsScreen.js' to do prediction
            navigation.push('Confirm', {image: manipulateResponse, myModel: myModel})

        } catch (error) {
            console.log(error);
        }
    };

    return(
        // Only if camera permission is granted and this screen is focused, show camera preview and buttons
        (isFocused && granted &&
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
                        onPress={isModelReady ? takePictureAsync : ()=>{alert('Model loading')}}>
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

                    {/* Amazing third party button*/}
                    {/*<MaterialButton
                        icon={"camera"}
                        mode="contained"
                        color={"#2196f3"}
                        disabled={!isModelReady} //if mobilenet is not ready, disable and turn grey
                        //loading={!isModelReady} //when predicting, show loading animation
                        style={{
                            marginBottom: '5%',
                            borderRadius: 100,
                        }}
                        onPress={takePictureAsync}//take picture
                    >
                        Take Photo
                    </MaterialButton>*/}
                </SafeAreaView>
            </Camera>
        )
    )
}

// Create screen stack for tab 'MLTool'
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
export const camerascreenScreen = () => (
    <CameraScreenStack.Navigator>
        {/* This screen */}
        <CameraScreenStack.Screen
            name="CameraView"
            component={CameraScreen}
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
