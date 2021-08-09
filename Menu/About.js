import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
const {width, height} = Dimensions.get('screen');
import { WebView } from 'react-native-webview';
import {View, Text, Image, Dimensions, Linking, Pressable, Button, TouchableOpacity, TouchableHighlight, ScrollView, StyleSheet} from 'react-native';
import { styles } from '../Ranking/Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenContainer } from 'react-native-screens';
const Width = width;


export const About = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 30,
        }}>
        How We Started 
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 20,
          marginRight: '7%',
        }}>
         Siitch started as a Party Tool to help people save money 
         and reduce food waste. People were achieving both (see below), 
         but they were curious about their environmental impact.
         {'\n'}{'\n'}Per feedback, we’re seeing if a simple app like this, 
         in addition to the party tool, can help you make a greater impact.
      </Text>
      <View
            style={{
              flexDirection: 'row',
              width: 400,
              height: 200,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 35,
              marginLeft: '7%',
            }}> 
            <Text style={{fontSize: 17.5, color: 'white', fontWeight: 'bold'}}>
            {'\n'}
            We cannot solve the climate crisis by being {'\n'}‘good’ consumers. 
            But we absolutely can {'\n'}make things much better by being good {'\n'}citizens. 
            {'\n'}
            {'\n'} <Text style={{fontWeight: 'bold',}}>- Emma Marris {'\n'}
            (Contributer, National Geographic)</Text>{' '}
            {'\n'}</Text>
        </View>
        <Text
        style={{
          fontSize: 24,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 35,
        }}>
        Siitch is about Awareness
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 5,
          color: 'green'
        }}>
        Change Starts with Awareness
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 40,
          marginRight: '7%',
        }}>
         Every time you open your wallet, you get to vote. 
         Our hope is by shedding light on the environmental cost of items, 
         you can make the decision that’s right for your siitch-uation, 
         and the planet.
        {'\n'}{'\n'}
        Like Kelly below when she used the party tool, 
        she knew exactly how much to buy, and she knew what NOT to buy. 
        That helped her save $145 and reduce food waste. 
        It also helped reduce her event’s environmental footprint by over 
        12,000 gallons of water.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'siitch.com',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 50
            }
            }>
            www.siitch.com
          </Text>
      <Image
              source={require('./../images2/Kelly_saved.png')}
              style={{width: 300, height: 300, marginTop: 15, alignSelf: 'center'}}
              resizeMode="contain"
            />
        <Image
              source={require('./../images2/Earth_saved.png')}
              style={{width: 300, height: 300, marginTop: 20, alignSelf: 'center'}}
              resizeMode="contain"
            />
        <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 50,
        }}>
        Your Voice Matters 
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 20,
          marginBottom: 40,
          marginRight: '7%',
        }}>
         We'd love your feedback on this prototype.
        Is it useful? If so, what other features could be helpful?
        Thank you so much!
      </Text>
      <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "white",
            flexDirection: 'row',
            borderRadius: 30,
            borderWidth: 3,
            borderColor: 'lightgreen',
            alignItems: 'center',
            marginLeft: '15%',
            marginRight: '15%',
            marginBottom: '5%',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Feedback')}
        >
            <Text style={{fontSize: 17, fontFamily: 'Futura-MediumItalic', color: 'black', textAlign: 'center', marginTop: '7%'}}>
              FEEDBACK {'\n'}
            </Text>
        </TouchableOpacity>
        <Text
            onPress={() =>
              Linking.openURL(
                'https://bit.ly/3i4kebj',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginTop: 20,
            alignSelf: 'center',
            }
            }>
            {' '}
            Privacy Policy{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://bit.ly/2UBNugJ',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginTop: 10,
            paddingBottom: '5%',
            alignSelf: 'center',
            }
            }>
            {' '}
            Terms of Use{' '}
          </Text>
        </ScrollView>
      );
}