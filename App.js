import 'react-native-gesture-handler';
import React, {useEffect, Component} from 'react';
import {useState} from 'react';
import {View, Text, Image, Dimensions, Button, Pressable, ScrollView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';


import {landingdetails} from './LandingPage';
import {OnboardingScreen} from './OnboardingScreen';

//react-native-paper provides many great components like Material buttons
//
//See https://callstack.github.io/react-native-paper/getting-started.html
// for usage of react-native-paper
import { Provider as PaperProvider } from 'react-native-paper';

const AppStack = createStackNavigator();

const App = () => {


  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    useEffect(()=>{
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null){
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if(isFirstLaunch === null){
        return null;
    }else if (isFirstLaunch === true) {
      return (
        <PaperProvider>
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name = "Landing Page" component={landingdetails} />
          </AppStack.Navigator>
        </NavigationContainer>
        </PaperProvider>
      );
    } else {
      return (
        <PaperProvider>
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Landing Page" component={landingdetails} />
          </AppStack.Navigator>
        </NavigationContainer>
        </PaperProvider>
      );
    }

};


export default App;
