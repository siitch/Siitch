import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import {FirebaseRealtimeDatabase, ref, onValue} from "./Firebase/firebase";
import {LandingDetails} from './LandingPage';

global.globalList = []
global.currentSurpriseModal = null
global.occupied = false
global.tfliteModel = null
const App = () => {

  const [initialRouteName, setInitialRouteName] = React.useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setInitialRouteName('Onboarding');
      } else {
        setInitialRouteName('HomeTabs');
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

  if (initialRouteName === null) { return }
  return (
    <PaperProvider>
      <LandingDetails initialRouteName={initialRouteName}/>
      <FlashMessage position={'top'}/>
    </PaperProvider>
  )

};


export default App;
