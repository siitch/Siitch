import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button, Image,StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
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
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/Onboard1.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/Onboard2.png')}/>
          </ScrollView>        
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/Onboard3.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/Onboard4.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/Onboard5.png')}/>
            </ScrollView>

        ),
      },
      /*{
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/OnboardP6.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/OnboardP7.png')}/>
            </ScrollView>
        ),
      },
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
          <Image style={{height:height
            , width:width}} source={require('./images2/OnboardP8.png')}/>
            </ScrollView>
        ),
      },
      */
      
      {
        title: "",
        subtitle: (            
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.replace("Landing Page")
            }}
            >
        <Text style={{ color: "white", fontSize:25, fontFamily: 'Arial', fontWeight:'bold'}}>LET'S GET STARTED</Text>
          </TouchableOpacity>
        ),
        backgroundColor: '#FFFFFF',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
            <Text style={{fontSize: 32, alignContent: 'center', textAlign: 'center', marginTop: 30, marginHorizontal: '10%'}}>
            Made for people who
          care about the planet      </Text>
          <Image style={{height:height/3
            , width:width-10, resizeMode:'contain', marginTop: '5%'}} source={require('./images2/OnboardFinalImage.png')}/>
        </ScrollView>
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
