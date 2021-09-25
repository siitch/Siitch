import React, { useEffect, useRef, useState } from "react";

import {
  ActivityIndicator,
  Image, Modal,
  Platform,
  ScrollView,
  StyleSheet, TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

import * as mobilenet from "@tensorflow-models/mobilenet";

import * as jpeg from "jpeg-js";
import * as ImagePicker from "expo-image-picker";
import { Camera } from 'expo-camera';
import * as ImageManipulator from "expo-image-manipulator";

import { fetch } from "@tensorflow/tfjs-react-native";

import { Text, View } from "./Themed";
import {createStackNavigator} from "@react-navigation/stack";

import { Button as MaterialButton } from 'react-native-paper';

export default function MLToolScreen() {
  //The status of tensorflow
  const [isTfReady, setIsTfReady] = useState(false);

  //The status of mobilenet model
  const [isModelReady, setIsModelReady] = useState(false);
  const model = useRef(null);

  //Predictions from mobilenet
  const [predictions, setPredictions] = useState(null);

  //This is to receive user's photo
  const [imageToAnalyze, setImageToAnalyze] = useState(null);

  //Set the visibility of the pop-out result window
  const [modalVisible, setModalVisible] = useState(false);

  //The status of prediction
  const [predicting, setPredicting] = useState(false);

  //Use for initialize the camera
  const [camera, setCamera] = useState(null);

  //When the screen loads, do this
  useEffect(() => {
    const initializeTfAsync = async () => {
      await tf.ready();
      setIsTfReady(true);
    };

    const initializeModelAsync = async () => {
      model.current = await mobilenet.load();
      setIsModelReady(true);
    };

    const getCameraRollPermissionAsync = async () => {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    const getCameraPermissionAsync = async () => {
      // here is how you can get the camera permission
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission for camera access needed.');
      }
    };

    //Load tensorflow
    initializeTfAsync();

    //Load mobilenet, currently commented out to prevent crash
    //initializeModelAsync();

    //Get camera roll permission
    getCameraRollPermissionAsync();

    //Get camera permission
    getCameraPermissionAsync()
  }, []);

  //Convert raw image data to tensor
  const imageToTensor = (rawImageData) => {
    const { width, height, data } = jpeg.decode(rawImageData, {
      useTArray: true,
    }); // return as Uint8Array

    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];

      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
  };

  //Use mobilenet model to classify the image
  const classifyImageAsync = async (source) => {
    try {
      const imageAssetPath = Image.resolveAssetSource(source);
      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = imageToTensor(rawImageData);
      const newPredictions = await model.current.classify(imageTensor);
      //Set the results
      setPredictions(newPredictions);
      setPredicting(false);
    } catch (error) {
      console.log("Exception Error: ", error);
    }
  };

  //Function to classify the image took from camera
  const takePictureAsync = async () => {
    try {
      setPredicting(true);
      let response = await camera.takePictureAsync(null);

      // resize image to avoid out of memory crashes
      const manipResponse = await ImageManipulator.manipulateAsync(
          response.uri,
          [{ resize: { width: 900 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      const source = { uri: manipResponse.uri };
      setImageToAnalyze(source);
      setPredictions(null);
      await classifyImageAsync(source);

    } catch (error) {
      console.log(error);
    }
  };

  ////Function to classify the image selected from camera roll
  const selectImageAsync = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!response.cancelled) {
        // resize image to avoid out of memory crashes
        const manipResponse = await ImageManipulator.manipulateAsync(
            response.uri,
            [{ resize: { width: 900 } }],
            { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );

        const source = { uri: manipResponse.uri };
        setImageToAnalyze(source);
        setPredictions(null);
        await classifyImageAsync(source);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.headerText}>MobileNet Image Classification</Text>

            <View style={styles.loadingContainer}>
              <View style={styles.loadingTfContainer}>
                <Text style={styles.text}>TensorFlow.js ready?</Text>
                {isTfReady ? (
                    <Text style={styles.text}>✅</Text>
                ) : (
                    <ActivityIndicator size="small" />
                )}
              </View>

              <View style={styles.loadingModelContainer}>
                <Text style={styles.text}>MobileNet model ready? </Text>
                {isModelReady ? (
                    <Text style={styles.text}>✅</Text>
                ) : (
                    <ActivityIndicator size="small" />
                )}
              </View>
            </View>
          </View>



          <View>
            <Camera
                ref={(ref) => setCamera(ref)}
                type={Camera.Constants.Type.back}
                style={{
                  aspectRatio: 0.75,//Change this value to change the ratio of camera preview area
                }}
            >
              {/* Put something here to show on camera preview area, such as a round button*/}
            </Camera>
            <View style={
              {
                marginTop: '3%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }
            }>
              <MaterialButton
                  icon="camera"
                  mode="contained"
                  disabled={!isModelReady} //if mobilenet is not ready, disable and turn grey
                  loading={predicting} //when predicting, show loading animation
                  onPress={takePictureAsync}//take picture
              >
                Take Picture
              </MaterialButton>

              {/* if prediction results are ready, show a result button that can
            set the modal pop-out window visible */}
              {predictions && (
                  <TouchableOpacity
                      style={{
                        backgroundColor: '#FF0266',
                        //width: 75,
                        height: 75,
                        borderRadius:50,
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '3%',
                        marginBottom: '3%',
                        marginRight: '3%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={()=>setModalVisible(true)} >
                    <Text style={{color: 'white', margin: '3%'}}>Results</Text>
                  </TouchableOpacity>
              )}

              {/* pop-out modal window */}
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
              >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <View style={styles.modalView}>

                    {/* show the photo just took or selected */}
                    {imageToAnalyze && (
                        <Image source={imageToAnalyze} style={styles.imageContainer} />
                    )}
                    {/* show three result buttons */}
                    {predictions &&
                    predictions.map((p, index) => {
                      console.log(`${index} ${p.className}: ${p.probability}`);

                      return (
                          <MaterialButton
                              key={index}
                              mode="contained"
                              style={{
                                marginTop: '3%',
                                marginBottom: '3%',
                              }}
                              onPress={()=>{}}>
                            {p.className}
                          </MaterialButton>
                      );
                    })}

                    {/* Close button that can set this modal invisible */}
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#70BF41" }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                    >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

            </View>
          </View>


          {/* This area shows a image picker and a list of prediction results */}
          <View style={styles.welcomeContainer}>


            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={isModelReady ? selectImageAsync : undefined}
            >
              {imageToAnalyze && (
                  <Image source={imageToAnalyze} style={styles.imageContainer} />
              )}

              {isModelReady && !imageToAnalyze && (
                  <Text style={styles.transparentText}>Tap to choose image</Text>
              )}
            </TouchableOpacity>
            <View style={styles.predictionWrapper}>
              {isModelReady && imageToAnalyze && (
                  <Text style={styles.text}>
                    Predictions: {predictions ? "" : "Predicting..."}
                  </Text>
              )}
              {isModelReady &&
              predictions &&
              predictions.length &&
              console.log("=== Classify image predictions: ===")}
              {isModelReady &&
              predictions &&
              predictions.map((p, index) => {
                console.log(`${index} ${p.className}: ${p.probability}`);

                return (
                    <Text key={index} style={styles.text}>
                      {p.className}: {p.probability}
                    </Text>
                );
              })}

            </View>


          </View>


        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingContainer: {
    marginTop: 5,
  },
  text: {
    fontSize: 16,
  },
  loadingTfContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  loadingModelContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderColor: "#66c8cf",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 280,
    height: 280,
  },
  predictionWrapper: {
    height: 100,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  transparentText: {
    opacity: 0.8,
  },
  modalView: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
});

const MLToolStack = createStackNavigator();

//Tab navigator from LandingPage.js leads us here.
//We need to decide what will be on this page.
export const mltoolScreen = () => (
    //Create a stack to store user's browse history
    <MLToolStack.Navigator>
      <MLToolStack.Screen
          name="Camera"
          //Here comes our tool
          component={MLToolScreen}
          //Set to true to see difference
          options={{headerShown: false}}
      />
    </MLToolStack.Navigator>
);
