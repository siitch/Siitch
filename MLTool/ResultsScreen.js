import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Modal,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// Great button with flexible config
import {Button as MaterialButton} from 'react-native-paper';
// Used for image preparation
import * as ImageManipulator from 'expo-image-manipulator';
// Used to map index results to item names
import {CLASSES} from './Siitch_model/class_names';
// Used to get item category from itemName
import {FirebaseRealtimeDatabase, ref, onValue} from "../Firebase/firebase";
// For category images, if needed
import Profiles from '../ImageDB.js';
// Firebase analytics
import analytics from '@react-native-firebase/analytics';
// Expo's filesystem library to delete temp photo
import * as FileSystem from 'expo-file-system';
import {ReactNavigationOverlay} from "../components/ReactNavigationOverlay";
import { useNavigation } from "@react-navigation/native";
import TensorflowLite from "@switt/react-native-tensorflow-lite";

export default function ResultsScreen({route}) {
  const navigation = useNavigation();
  // Get the image from Camera Screen
  const {image} = route.params;
  // Store prediction results
  const [predictions, setPredictions] = useState(null);
  // The status of prediction
  const [predicting, setPredicting] = useState(false);
  // Category State
  const [category, setCategory] = useState('');
  const [categoryDisplayName, setCategoryDisplayName] = useState('');
  // Device's dimension, used to crop image to a square
  const Height = Dimensions.get('screen').height;
  const Width = Dimensions.get('screen').width;
  // Choose the shorter side to crop image
  const CorpSize = Height >= Width ? Width : Height;
  // Compute the starting X, Y axis value of the crop area
  let CorpX;
  let CorpY;
  if (Height >= Width) {
    CorpX = 0;
    CorpY = Math.abs(Height / 2 - CorpSize / 2);
  } else {
    CorpX = Math.abs(Width / 2 - CorpSize / 2);
    CorpY = 0;
  }

  useEffect(() => {
    // Only one thing to do, predict!
    ClassifyAsync();
  }, []);

  useEffect(() => {
    // Choose most likely category based on predictions
    ChooseCategory();
  }, [predictions]);

  useEffect(() => {
    // Create nice display name for category
    CreateCategoryDisplayName();
  }, [category]);

  const ChooseCategory = async () => {
    // Set the category state to the category of the most likely item...
    if (predictions) {
      const getPredictionItemsRef = ref(FirebaseRealtimeDatabase, predictions[0].label);
      onValue(getPredictionItemsRef, function(get) {
        if (get.val() === null && predictions[0].label !== 'Makeup') {
          alert('No info for ' + predictions[0].label + ' now');
          console.log('No info for this item');
        } else {
          const itemObj = get.val();
          // Give higher priority to more specific categories
          if (itemObj['Category 3']) {
            if (Math.random() > 0.4) {
              setCategory(itemObj['Category 3']);
            } else {
              setCategory(itemObj['Category']);
            }
          } else if (itemObj['Category 2']) {
            if (Math.random() > 0.1) {
              setCategory(itemObj['Category 2']);
            } else {
              setCategory(itemObj['Category']);
            }
          } else {
            setCategory(itemObj['Category']);
          }
        }
      });
    }
  };

  const CreateCategoryDisplayName = async () => {
    let categoryNavName = getCategoryNavName(category);
    // Making Category Name look nice for display
    if (categoryNavName === 'Meats') {
      setCategoryDisplayName('🍖 See Meats');
    } else if (categoryNavName === 'Fruits') {
      setCategoryDisplayName('🍎 See Fruits');
    } else if (categoryNavName === 'Vegetables') {
      setCategoryDisplayName('🥦 See Vegetables');
    } else if (categoryNavName === 'Everyday Foods') {
      setCategoryDisplayName('🍔 See Everyday Foods');
    } else if (categoryNavName === 'Everyday Items') {
      setCategoryDisplayName('👖 See Everyday Items');
    } else if (categoryNavName === 'Nuts, Beans') {
      setCategoryDisplayName('🥜 See Nuts & Beans');
    } else if (categoryNavName === 'Seeds') {
      setCategoryDisplayName('🧆 See Seeds');
    } else if (categoryNavName === 'Grains') {
      setCategoryDisplayName('🍚 See Grains');
    } else if (categoryNavName === 'Oils') {
      setCategoryDisplayName('🫒 See Oils');
    } else if (categoryNavName === 'Drinks-All') {
      setCategoryDisplayName('☕️ See Drinks');
    } else if (categoryNavName === 'Drinks-Alcoholic') {
      setCategoryDisplayName('🍷 See Drinks (Alcoholic)');
    } else if (categoryNavName === 'Drinks-NonAlcoholic') {
      setCategoryDisplayName('🥛 See Drinks (Non-alcoholic)');
    } else {
      setCategoryDisplayName('');
    }
  };

  const getCategoryNavName = cat => {
    let categoryNavName = '';
    if (cat === 'Meat') {
      categoryNavName = 'Meats';
    } else if (cat === 'Fruit') {
      categoryNavName = 'Fruits';
    } else if (cat === 'Vegetables') {
      categoryNavName = 'Vegetables';
    } else if (cat === 'EDF') {
      categoryNavName = 'Everyday Foods';
    } else if (cat === 'EDI') {
      categoryNavName = 'Everyday Items';
    } else if (cat === 'Nuts & Beans') {
      categoryNavName = 'Nuts, Beans';
    } else if (cat === 'Seeds') {
      categoryNavName = 'Seeds';
    } else if (cat === 'Grains') {
      categoryNavName = 'Grains';
    } else if (cat === 'Oils') {
      categoryNavName = 'Oils';
    } else if (cat === 'Drinks - All') {
      categoryNavName = 'Drinks-All';
    } else if (cat === 'Drinks - Alc') {
      categoryNavName = 'Drinks-Alcoholic';
    } else if (cat === 'Drinks - NA') {
      categoryNavName = 'Drinks-NonAlcoholic';
    }
    return categoryNavName;
  };

  const ClassifyAsync = async () => {
    try {
      // Set the status to predicting
      setPredicting(true);
      // Clear the prediction results
      setPredictions(null);

      // Crop the center square of the image for later use, because MobileNet only take 224 * 224
      const manipResponse = await ImageManipulator.manipulateAsync(image.uri, [
        {
          crop: {
            height: CorpSize,
            originX: CorpX,
            originY: CorpY,
            width: CorpSize,
          },
        },
      ]);

      await classifyImageAsync(manipResponse);
    } catch (error) {
      console.log('Image processing error: ', error);
    }
  };

  const classifyImageAsync = async source => {
    try {
      const result = await TensorflowLite.runModelWithFiles({
        model: tfliteModel.localUri,
        files: [source.uri],
      });
      // [[{"data": [Array], "shape": [Array]}]]
      // console.log(result[0][0].data)

      // Get the top three results
      let predictionList = [];
      for (let i = 0; i < result[0][0].data.length; i++) {
        predictionList.push({value: result[0][0].data[i], index: i});
      }
      predictionList = predictionList
        .sort((a, b) => {
          return b.value - a.value;
        })
        .slice(0, 3);

      // Used for debug
      console.log(
        predictionList.map(x => {
          return {label: CLASSES[x.index], value: x.value};
        }),
      );
      // Map the results to labels and store the results for display
      setPredictions(
        predictionList.map(x => {
          return {label: CLASSES[x.index], value: x.value};
        }),
      );
      // Hide the prediction indicator when finished
      setPredicting(false);
    } catch (error) {
      console.log(
        'Something happened during image processing or prediction: ',
        error,
      );
    }
  };

  return (
    /* Use image took in CameraScreen as background */
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={image}>
      {/* Use SafeAreaView to make sure buttons won't get blocked*/}
      <SafeAreaView style={{flex: 1}}>
        {/* This is a commented out Go to Home Page button on the top right.
        It's redundant when we have tab bar displayed. */}
        {/*<TouchableOpacity
          style={{
            position: "absolute",
            top: '6%',
            right: '0%',
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
            navigation.navigate('Home')
          }}>
          <MaterialCommunityIcons name="home" size={40}/>
        </TouchableOpacity>*/}

        {/* When predictions are available, show result buttons, catalogue button and retry button. */}
        {predictions && (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginLeft: '8%',
              marginRight: '8%',
            }}>
            {categoryDisplayName ? (
              <MaterialButton
                mode="contained"
                color={'#00ADEF'}
                uppercase={false}
                style={{
                  marginBottom: '3%',
                  borderRadius: 100,
                }}
                contentStyle={{
                  height: 52,
                }}
                labelStyle={{
                  fontWeight: '500',
                  fontSize: 21,
                  color: 'white',
                }}
                onPress={() => {
                  let categoryNavName = getCategoryNavName(category);
                  navigation.navigate(categoryNavName);
                  analytics().logEvent('Category_button_pressed',{
                    userAction: 'User pressed the category button on top of the three predictions'
                  })
                }}>
                {/* TODO: Create state for category string */}
                {categoryDisplayName}
              </MaterialButton>
            ) : null }
            {predictions.map((p, index) => {
              // Used for debug
              // console.log(`${index} ${p.label}: ${p.value}`);
              return (
                <MaterialButton
                  key={index}
                  mode="contained"
                  color={'#ffffff'}
                  uppercase={false}
                  style={{
                    marginTop: '3%',
                    marginBottom: '3%',
                    borderRadius: 100,
                    // borderColor: 'black',
                    // borderWidth: 1,
                  }}
                  contentStyle={{
                    height: 52,
                  }}
                  labelStyle={{
                    fontWeight: '300',
                    fontSize: 22,
                  }}
                  onPress={() => {
                    /* When one item button is tapped, forward item name to ItemDetail screen */
                    navigation.navigate('Detail', {itemName: p.label});
                  }}>
                  {p.label}
                </MaterialButton>
              );
            })}
            <MaterialButton
              mode="contained"
              color={'#ffce39'}
              uppercase={false}
              style={{
                marginTop: '3%',
                marginBottom: '3%',
                borderRadius: 100,
              }}
              contentStyle={{
                height: 52,
              }}
              labelStyle={{
                fontWeight: '300',
                fontSize: 22,
              }}
              onPress={() => {
                navigation.navigate('Catalogue')
                analytics().logEvent('Nope_see_catalogue')
              }}>
              Nope, see catalogue
            </MaterialButton>
            <MaterialButton
              mode="contained"
              color={'#8DC73F'}
              uppercase={false}
              style={{
                marginTop: '4.7%',
                marginBottom: '7.7%',
                borderRadius: 100,
                alignSelf: 'center',
                width: 200,
              }}
              contentStyle={{
                height: 52,
              }}
              labelStyle={{
                fontWeight: '500',
                fontSize: 22,
                color: 'white',
              }}
              onPress={() => {
                setCategory(''); // Reset Category
                navigation.goBack(null);
                analytics().logEvent('Try_Again')
                FileSystem.deleteAsync(image.uri)
              }} //take picture
            >
              Try Again
            </MaterialButton>
          </View>
        )}
      </SafeAreaView>

      {/* Show a model when predicting */}
      {predicting && (
        /* Use an absolute view to center the modal */
        <View
          style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Modal animationType="fade" transparent={true} visible={predicting}>
            {predicting && <ReactNavigationOverlay/>}
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  height: 80,
                  width: 100,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
                <ActivityIndicator size="large" />
                <Text style={{color: 'black'}}>Predicting...</Text>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </ImageBackground>
  );
}
