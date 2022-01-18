import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements';
const {width, height} = Dimensions.get('screen');

import Onboarding from 'react-native-onboarding-swiper';


const Tutorial = ({navigation}) => {

    return(
        <Onboarding
    showDone={false}
    onSkip={() => navigation.goBack("Landing Page")}
    pages={[
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial1.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial2.png')}/>
          </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial3.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial4.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial5.png')}/>
            </ScrollView>

        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial6.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial7.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial8.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <View style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
            <ImageBackground
              style={{
                width: width,
                height: 3584 * width / 1656,
                flexDirection: 'column-reverse'
              }}
              source={require('../images2/Tutorial9.png')}
              resizeMode={'contain'}
            >
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 50,
                  color: '#ffffff',
                  alignItems: "center",
                  backgroundColor: "#70BF41",
                  borderRadius: 25,
                  marginBottom: (1656 / 3584) * 3584 * (1 / 13),
                  alignSelf: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => {
                  navigation.goBack("Landing Page")
                }}
              >
                <Text style={{ color: "white", fontSize:25, fontFamily: 'Arial', fontWeight:'bold'}}>LET'S GO!</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ),
      },
    ]}
  />

    );
};

export {Tutorial}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
      width: 300,
      height: 50,
      color: '#ffffff',
      alignItems: "center",
      backgroundColor: "#70BF41",
      padding: 10,
      marginBottom: '50%',
      marginTop: '-10%',
      borderRadius: 25,
      justifyContent: 'center'

    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
});
