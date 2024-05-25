import React from 'react';
import {
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
const {width, height} = Dimensions.get('screen');

import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";


const OnboardingScreen = () => {
  const navigation = useNavigation();

    return(
        <Onboarding
    showDone={false}
    onSkip={() => navigation.replace("HomeTabs")}
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
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white'}}>
            <ImageBackground style={{height:height
              , width:width, flexDirection: 'column-reverse'}} source={require('./images2/Onboard6.png')}>
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 50,
                  color: '#ffffff',
                  alignItems: "center",
                  backgroundColor: "#70BF41",
                  marginBottom: height/7,
                  borderRadius: 25,
                  alignSelf: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => {
                  navigation.replace("HomeTabs")
                }}
              >
                <Text style={{ color: "white", fontSize:25, fontFamily: 'Arial', fontWeight:'bold'}}>LET'S GET STARTED</Text>
              </TouchableOpacity>
            </ImageBackground>
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

      /*{
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
      },*/
    ]}
  />

    );
};

export {OnboardingScreen}
