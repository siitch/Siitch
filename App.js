import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LandingDetails} from './LandingPage';
import {OnboardingScreen} from './OnboardingScreen';

import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import firebase from "firebase";

const AppStack = createStackNavigator();
global.globalList = []
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
    const config = {
      apiKey: 'AIzaSyA0mAVUu-4GHPXCdBlqqVaky7ZloyfRARk',
      authDomain: 'siitch-6b176.firebaseapp.com',
      databaseURL: 'https://siitch-6b176.firebaseio.com',
      projectId: 'siitch-6b176',
      storageBucket: 'siitch-6b176.appspot.com',
      messagingSenderId: '282599031511',
      appId: '1:282599031511:web:bb4f5ca5c385550d8ee692',
      measurementId: 'G-13MVLQ6ZPF',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase
      .database()
      .ref('/')
      .once('value', data => {
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
