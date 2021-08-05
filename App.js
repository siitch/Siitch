import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, Image, Dimensions, Button, Pressable, ScrollView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';


import {landingdetails} from './LandingPage';
import {OnboardingScreen} from './OnboardingScreen';

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
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name = "Landing Page" component={landingdetails} />
          </AppStack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Landing Page" component={landingdetails} />
          </AppStack.Navigator>
        </NavigationContainer>
      );
    }

    // return(
    //   <NavigationContainer independent={true}>
    //       <AppStack.Navigator headerMode="none">
    //         <AppStack.Screen name = "Onboarding" component={OnboardingScreen} />
    //         <AppStack.Screen name = "Landing Page" component={landingdetails} />
    //       </AppStack.Navigator>
    //     </NavigationContainer>

    // );
  
  
};

export default App;
