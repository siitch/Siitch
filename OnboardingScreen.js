import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button, Image,StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
const {width, height} = Dimensions.get('screen');
import Profiles from './ImageDB';

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {

    return(
        <Onboarding
    showDone={false}
    onSkip={() => navigation.replace("Landing Page")}
    pages={[
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-1.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-2.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-3.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-4.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-5.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-6.png')}/>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <Image style={{height:height
            , width:width}} source={require('./images/Image_new/Onboarding/onb-7.png')}/>
        ),
      },
      
      
      {
        title: "",
        subtitle: (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.replace("Landing Page")
            }}
            >
        <Text style={{ color: "white", fontSize:25, fontFamily: 'Arial', fontWeight:'bold'}}>LETS GET STARTED</Text>
          </TouchableOpacity>
          // <Button
          // style={{backgroundColor: '#70BF41'}}
          //   title={'Get Started'}
          //   color='#70BF41'
          //   backgroundColor={'#1E6738'}
          //   containerViewStyle={{ marginTop: 20 }}
          //   borderRadius={5}
            // onPress={() => {
            //   navigation.navigate("Landing Page")
            // }}
          // />
        ),
        backgroundColor: '#FFFFFF',
        image: (
          <Image style={{height:height/3
            , width:width, resizeMode:'contain'}} source={require('./images/Image_new/Onboarding/graphic.png')}/>
        ),
      },
    ]}
  />

    );
};

export {OnboardingScreen}

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
      borderRadius: 25,
      justifyContent: 'center'
      
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
});
