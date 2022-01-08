import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button, Image,StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
const {width, height} = Dimensions.get('screen');

import Onboarding from 'react-native-onboarding-swiper';


const Tutorial = ({navigation}) => {

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
      /*
      {
        title: '',
        subtitle: '',
        backgroundColor: '#ffffff',
        image: (
          <ScrollView style={{backgroundColor: 'white', marginTop: height - (height * 1.2)}}>
          <Image style={{height:height
            , width:width}} source={require('../images2/Tutorial9.png')}/>
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
            , width:width, resizeMode:'contain'}} source={require('../images/Image_new/Onboarding/graphic.png')}/>
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
