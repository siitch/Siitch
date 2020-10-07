import firebase from 'firebase';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  PanResponder,
  Linking,
  TextInput,
} from 'react-native';

const Database = ({input}) => {
  const [data, setData] = useState({});
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
  useEffect(() => {
    readData();
  }, []);
  const readData = () => {
    firebase
      .database()
      .ref(input)
      .on('value', get => setData(get.val()));
  };
  return (
    <View>
      <Text>{input}</Text>
      {Object.keys(data).map(ind => (
        <Text key={ind}>
          {ind}: {data[ind]}
        </Text>
      ))}
    </View>
  );
};
export default Database;
