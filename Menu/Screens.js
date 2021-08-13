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
              source={require('./../images2/Tutorial2.png')}
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              Tutorial {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '57%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              Sources & Resources {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '27%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              Mission {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '56%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              About {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '59%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              Virtual Water {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '44%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 44, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              Feedback {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '51%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
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
              style={{width: 45, height: 45, marginTop: 3, marginRight: '5%', marginLeft: '4%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%', marginRight: 4, marginLeft: '-2%'}}>
              FAQ {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '63%', marginTop: '1%', marginRight: '5%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: '15%', borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <View
            style={{
              flexDirection: 'row',
              width: width * 0.9,
              height: 200,
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
            This is an early release, so we'd love your thoughts
            on how to improve it. Share your ideas by clicking our <Text
            onPress={() => navigation.navigate('Feedback')}
            style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 10,
            paddingBottom: '7%',
            alignSelf: 'center',
            }
            }>
            Feedback
          </Text> link.
            {'\n'}{'\n'}
            Thank you!
            </Text>
        </View>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          alignContent: 'auto',
          margin: '5%',
          marginBottom: '7%',
          textAlign: 'center'
        }}>
            This app only works on iPhones at this time. {'\n'}
            It does not work on iPads, iWatches, or any Android devices.
      </Text>
          <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </View>
        </View>
      </ScrollView>
    );
  }
