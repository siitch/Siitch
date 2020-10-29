import 'react-native-gesture-handler';
import firebase from 'firebase';
import {useState, useEffect} from 'react';
import * as React from 'react';
import {Searchbar, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { styles } from './Styles';
import { createStackNavigator } from '@react-navigation/stack';
import { comparePage} from './ComparePage'
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');



import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Button,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';

const Compare = ({navigation}) => {
  const [index, setIndex] = useState(0);
  //const [keyword, setKeyword] = useState('');
  const [prod1, setprod1] = useState('');
  const [prod2, setprod2] = useState('');
  const [message, setMessage] = useState('');
  const Tab = createBottomTabNavigator();
  var config = {
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
  const toDatabase = () => {
    if (keyword === '') {
      return;
    } else {
      readData(keyword);
    }
  };
  const readData = image => {
    firebase
      .database()
      .ref(image)
      .on('value', get => navigation.navigate('Compare', get.val()));
  };
  const Stack = createStackNavigator();

  return (<View style={styles.rankingPage}>
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: '20%'}}>
        <Text style={styles.title}>Compare</Text>

        <Text style={{alignItems: 'center', marginTop: '20%'}}>Select Item 1</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={text => setprod1(text)}
          //onIconPress={toDatabase}
          style={{width: 250, marginTop: '5%'}}
        />
        <Text style={{alignItems: 'center', marginTop: '20%'}}>Select Item 2</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={text => setprod2(text)}
          //onIconPress={toDatabase}
          style={{width: 250, marginTop: '5%'}}
        />

        <View
            style={{
              width: width / 2,
              height: 50,
              borderRadius: 20,
              backgroundColor: '#6dbd64',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20%'
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Compare Details', {prod1: prod1,prod2: prod2})
              }>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white', alignItems: 'center'}}>Compare</Text>
              </View>
            </TouchableOpacity>
          </View>





      </View>
    </ScrollView>

    </View>)
};


const compareStack = createStackNavigator();

export const compareScreen = () => (
  
  <compareStack.Navigator>
    <compareStack.Screen
        name="Compare"
        component={Compare}
        options={{headerShown: false}}
      />
    <compareStack.Screen name="Compare Details" component={comparePage} />
  </compareStack.Navigator>
);


//export default Compare;
