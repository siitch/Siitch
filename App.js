import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LandingDetails} from './LandingPage';
import {OnboardingScreen} from './OnboardingScreen';

import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import {FirebaseRealtimeDatabase, ref, onValue} from "./Firebase/firebase";

const AppStack = createStackNavigator();
global.globalList = []
global.currentSurpriseModal = null
global.occupied = false
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
        getData()
    }, []);

  function getData () {
    const getDataRef = ref(FirebaseRealtimeDatabase, '/');
    onValue(getDataRef, (data) => {
      let fetchedData = data.val();
      for (let item in fetchedData) {
        if (item === 'Future Library') continue;
        globalList.push({
          name: item,
        });
      }
    });
  }

    if(isFirstLaunch === null){
        return null;
    }else if (isFirstLaunch === true) {
      return (
        <PaperProvider>
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name = "Landing Page" component={LandingDetails} />
          </AppStack.Navigator>
        </NavigationContainer>
          <FlashMessage position="top" />
        </PaperProvider>
      );
    } else {
      return (
        <PaperProvider>
        <NavigationContainer independent={true}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name = "Landing Page" component={LandingDetails} />
          </AppStack.Navigator>
        </NavigationContainer>
          <FlashMessage position="top" />
        </PaperProvider>
      );
    }

};


export default App;
