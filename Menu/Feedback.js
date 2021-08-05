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

export const Feedback = ({ navigation }) => {
    return (
      <WebView
        source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfXTM0QORW9VGi7KE6bgNpNM8SGZgzsYu3YS1wZdi0oL6S-4A/viewform?vc=0&c=0&w=1&flr=0' }}
    />
    );
  }