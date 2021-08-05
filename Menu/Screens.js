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
import { OnboardingScreen } from '../OnboardingScreen';
const Width = width;

export const MenuMain = ({ navigation }) => {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.replace("Tutorial")}
        >
            <Image
              source={require('./../images2/Tutorial.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '5%', marginLeft: '5%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4}}>
              Tutorial {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: 230, marginTop: '1%', marginRight: '7%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Sources')}
        >
            <Image
              source={require('./../images2/Source_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '5%', marginLeft: '5%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4}}>
              Sources & Resources {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: 106, marginTop: '1%', marginRight: '7%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Mission')}
        >
        <Image
              source={require('./../images2/Mission_PNG.png')}
              style={{width: 46, height: 46, marginTop: 3, marginRight: '5%', marginLeft: '6%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 1,}}>
              Mission {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: 229, marginTop: '1%', marginRight: '7%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('About')}
        >
        <Image
              source={require('./../images2/About_PNG.png')}
              style={{width: 48, height: 48, marginTop: 3, marginRight: '5%', marginLeft: '5%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 10}}>
              About {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: 225, marginTop: '1%', marginRight: '7%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Virtual')}
        >
        <Image
              source={require('./../images2/Blue_Water_Drop_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '3%', marginLeft: '-1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Virtual Water {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '45%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Feedback')}
        >
        <Image
              source={require('./../images2/Feedback_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '6%', marginLeft: '1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Feedback {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '49%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('FAQ')}
        >
        <Image
              source={require('./../images2/FAQ_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '7%', marginLeft: '0%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              FAQ {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '60%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <View
            style={{
              flexDirection: 'row',
              width: width * 0.9,
              height: 220,
              borderRadius: 20,
              backgroundColor: '#f2d3ac',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              marginLeft: '5%',
              marginRight: '5%',
            }}> 
            <Text style={{fontSize: 18, color: 'black', margin: '5%',}}>
            Dear Environmentalists,
            {'\n'}{'\n'}
            This is just a prototype. 
            Click the Feedback link after you’ve played around. 
            We’d love your thoughts on how to improve it. 
            {'\n'}{'\n'}{'\n'}
            Thank you.
            </Text>
        </View>
        <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          margin: '12%',
          textAlign: 'center'
        }}>
            Have friends who love the planet? {'\n'}
            Feel free to share this prototype!
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          alignContent: 'auto',
          margin: '5%',
          textAlign: 'center'
        }}>
            This app only works on iPhones at this time. {'\n'}
            It does not work on iPads or any Android devices.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://bit.ly/3i4kebj',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginTop: 30,
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
            paddingBottom: 10,
            alignSelf: 'center',
            }
            }>
            {' '}
            Terms of Use{' '}
          </Text>
          <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() =>
              Linking.openURL(
                'https://www.facebook.com/SiitchHQ',
              )
            }>
              <Image style={{
                marginTop: 40, 
                marginRight: 10,
                marginBottom: 25,
                height: 55,
                width: 55,
            }} source={require('./../images2/Facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              Linking.openURL(
                'https://twitter.com/SiitchHQ',
              )
            }>
              <Image style={{
                marginTop: 40,
                marginLeft: 10, 
                marginBottom: 25,
                height: 55,
                width: 55,
            }} source={require('./../images2/Twitter.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
