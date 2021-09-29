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

export const Mission = ({ navigation }) => {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: '10%',
          marginRight: '7%',
        }}>
        The mission of Siitch is to help you make a <Text style={{color: '#70BF41'}} > MASSIVE IMPACT </Text> 
        on the environment over your lifetime by focusing on day to day decisions. 
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        How?
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
     Change starts with <Text style={{color: '#70BF41'}} >AWARENESS</Text>. 
    With Siitch, you’ll learn about the 
    environmental cost of what you buy, and 
    tips on how you can do better, so you can 
    make every decision and every purchase count.
      </Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 4, alignItems: 'center', paddingLeft: '35%'}}>
            <Image
              source={require('./../images2/blue_info_button.png')}
              style={{width: 50, height: 70}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingLeft: '9%'}}>
            <Image
              source={require('./../images2/green_jigsaw.png')}
              style={{width: 105, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingRight: '9%'}}>
            <Image
              source={require('./../images2/quote_tip.png')}
              style={{width: 65, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingRight: '35%'}}>
            <Image
              source={require('./../images2/green_lightbulb.png')}
              style={{width: 100, height: 120}}
              resizeMode="contain"
            />
          </View>
        </View>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 40,
          marginRight: '7%',
        }}>
            Our goal is to provide tips, games and challenges within 
            the app to make spreading awareness easy and fun. 
      </Text>
      <View
            style={{
              flexDirection: 'row',
              width: 400,
              height: 150,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: '7%',
            }}> 
            <Text style={{fontSize: 18, color: 'white', marginRight: '13%', marginLeft: '3%'}}>
            Never doubt that a small group of thoughtful, 
            committed citizens can change the world. {'\n'}
            It's the only thing that ever has.  {'\n'}{'\n'} <Text style={{fontWeight: 'bold'}}>- Margaret Meade</Text>{' '}
             {'\n'}   (Anthropologist) </Text>
        </View>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        Right Now
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
        You won’t see these tips and games: most of the app 
        is placeholders to see what features you want the most.
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        Water First
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
        We’re focusing on water first, carbon later. 
        Many factors determine whether a product is sustainable. 
        But water is something we can all relate to. 
      </Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 6, alignItems: 'center', paddingLeft: '3%'}}>
            <Image
              source={require('./../images2/broccoli.png')}
              style={{width: 55, height: 70}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/coffee.png')}
              style={{width: 70, height: 85}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/bananas_copy.png')}
              style={{width: 70, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/chicken.png')}
              style={{width: 72, height: 85}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/jeans_small.png')}
              style={{width: 60, height: 65}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center', paddingRight: '4%'}}>
            <Image
              source={require('./../images2/wine_glass.png')}
              style={{width: 75, height: 80}}
              resizeMode="contain"
            />
          </View>
        </View>
      <View
            style={{
              flexDirection: 'row',
              width: 410,
              height: 125,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginRight: 20,
              marginLeft: -20,
            }}> 
            <Text style={{fontSize: 19, color: 'white', marginLeft: 20, }}>
            If you give nature a chance, it recovers.  {'\n'}{'\n'} <Text style={{fontWeight: 'bold', Left: 30,}}>- Sir David Attenborough</Text>{' '}
            {'\n'}   (Host, Planet Earth)</Text>
        </View>
      </ScrollView>
    );
  }