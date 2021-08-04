import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image, Dimensions, Button, Pressable, ScrollView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {landingdetails} from './LandingPage';

const AppStack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer independent={true}>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name = "Landing Page" component={landingdetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
};

export default App;
