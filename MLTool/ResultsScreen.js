import { // Native components
    ActivityIndicator, Dimensions,
    Image,
    ImageBackground,
    Modal,
    SafeAreaView,
    Text,
    View
} from "react-native";
import React, {useEffect, useState} from "react";
// Great button with flexible config
import {Button as MaterialButton} from "react-native-paper";
// Used for image preparation
import * as jpeg from "jpeg-js";
import * as tf from "@tensorflow/tfjs";
import * as ImageManipulator from "expo-image-manipulator";
import {FileSystem} from "react-native-unimodules";
// Used to map index results to item names
import {CLASSES} from "./Siitch_20epochs/class_names";

export default function ResultsScreen({route, navigation}){
    // Get image and model reference from Camera Screen
    const { image, myModel } = route.params
    // Store prediction results
    const [predictions, setPredictions] = useState(null);
    // The status of prediction
    const [predicting, setPredicting] = useState(false);
    // Device's dimension, used to crop image to a square
    const Height = Dimensions.get('screen').height;
    const Width = Dimensions.get('screen').width;
    // Choose the shorter side to crop image
    const CorpSize = Height >= Width ? Width : Height;
    // Compute the starting X, Y axis value of the crop
    let CorpX
    let CorpY
    if(Height >= Width){
        CorpX = 0
        CorpY = Math.abs((Height/2) - (CorpSize/2))
    } else {
        CorpX = Math.abs((Width/2) - (CorpSize/2))
        CorpY = 0
    }


    useEffect(() => {
        // Only one thing to do, predict!
        ClassifyAsync();
    }, []);

    const ClassifyAsync = async () => {
        try {
            // Set the status to predicting
            setPredicting(true);
            // Clear the prediction results
            setPredictions(null);

            // Crop the center square of the image for later use, because MobileNet only take 224 * 224
            const manipResponse = await ImageManipulator.manipulateAsync(
                image.uri,
                [{ crop: { height: CorpSize, originX: CorpX, originY: CorpY, width: CorpSize } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            // Pass the edited image to next function
            const source = { uri: manipResponse.uri };
            await classifyImageAsync(source);
        } catch (error) {
            console.log("Image error: ", error);
        }
    };

    const classifyImageAsync = async (source) => {
        try {
            // Get the image from ClassifyAsync and turn it into tensor
            const imageAssetPath = Image.resolveAssetSource(source);
            const fileUri = imageAssetPath.uri;
            const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
            const raw = new Uint8Array(imgBuffer)
            const imageTensor = imageToTensor(raw);

            // Get prediction results from our model
            const newPredictions = await myModel.predict(imageTensor);

            // Confidence for all items the model can identify
            const values = newPredictions.dataSync();
            // Used for debug
            //console.log(values)

            // Get the top three results
            let predictionList = [];
            for (let i = 0; i < values.length; i++) {
                predictionList.push({ value: values[i], index: i });
            }
            predictionList = predictionList
                .sort((a, b) => {
                    return b.value - a.value;
                })
                .slice(0, 3);

            // Used for debug
            console.log(
                predictionList.map(x => {
                    return { label: CLASSES[x.index], value: x.value };
                })
            )
            // Map the results to labels and store the results for display
            setPredictions(
                predictionList.map(x => {
                    return { label: CLASSES[x.index], value: x.value };
                })
            );
            // Hide the prediction indicator when finished
            setPredicting(false);
        } catch (error) {
            console.log("Something happened during image processing or prediction: ", error);
        }
    };

    // Tensor preparation
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

        // Resize image to fit model requirements
        const img = tf.tensor3d(buffer, [height, width, 3]);
        const resized_img = tf.image.resizeBilinear(img, [224, 224]);

        // add a fourth batch dimension to the tensor
        const expanded_img = resized_img.expandDims(0);

        // normalise the rgb values to -1-+1
        return expanded_img.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
    };

    return (
        /* Use image took in CameraScreen as background */
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={ image }>
            {/* Use SafeAreaView to make sure buttons won't get blocked*/}
            <SafeAreaView
                style={{flex: 1}}>
                {/* This is a commented out Go to Home Page button on the top right. It's redundant when we have
                tab bar displayed. */}
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
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginLeft: '5%',
                        marginRight: '5%',
                    }}>
                        {predictions.map((p, index) => {
                            // Used for debug
                            // console.log(`${index} ${p.label}: ${p.value}`);
                            return (
                                <MaterialButton
                                    key={index}
                                    mode="contained"
                                    color={"#ffffff"}
                                    style={{
                                        marginTop: '3%',
                                        marginBottom: '3%',
                                        borderRadius: 100,
                                        borderColor: 'black',
                                        borderWidth: 1,
                                    }}
                                    onPress={() => {
                                        /* When one item button is tapped, forward item name to ItemDetail screen */
                                        navigation.navigate('Detail', {itemName: p.label})
                                    }}>
                                    {p.label}
                                </MaterialButton>
                            );
                        })}
                        <MaterialButton
                            mode="contained"
                            color={"#ff8f00"}
                            style={{
                                marginTop: '3%',
                                marginBottom: '10%',
                                borderRadius: 100,
                            }}
                            onPress={() => {
                                navigation.push('Catalogue')
                            }}>
                            Nope, see catalogue
                        </MaterialButton>
                        <MaterialButton
                            icon={"reload"}
                            mode="contained"
                            color={"#7cb342"}
                            style={{
                                marginBottom: '5%',
                                borderRadius: 100,
                                alignSelf: 'center',
                                width: 200
                            }}
                            onPress={() => {
                                navigation.goBack(null)
                            }}//take picture
                        >
                            Try Again
                        </MaterialButton>
                    </View>
                )}

            </SafeAreaView>

            {/* Show a model when predicting */}
            {predicting && (
                /* Use an absolute view to center the modal */
                <View style={{
                    flex: 1,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0.5,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={predicting}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: "center",
                                backgroundColor: "white",
                                borderRadius: 20,
                                height: 80,
                                width: 100,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5
                            }}>
                                <ActivityIndicator size="large"/>
                                <Text style={{color: 'black'}}>Predicting...</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            )}
        </ImageBackground>
    )
}
