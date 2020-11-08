import 'react-native-gesture-handler';
import firebase from 'firebase';
import {useState, useEffect} from 'react';
import * as React from 'react';
import {Searchbar, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profiles from './SearchDB';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Alert,
  Dimensions,
  Image,
} from 'react-native';

import {styles} from '../Ranking/Styles';
const DeviceWidth = Dimensions.get('window').width;

const Search = ({searchData, navigation}) => {
  const [line, setLine] = useState(1);
  const [index, setIndex] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');
  const [item, setItem] = useState([]);
  const Tab = createBottomTabNavigator();
  var itemArr = [];

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
      .on('value', get =>
        get.val() === null && image !== 'Makeup' ? (
          <View>
            {Alert.alert('Error!', "Can't find result for this keyword")}
          </View>
        ) : (
          navigation.navigate('Search', {name: image, value: get.val()})
        ),
      );
  };
  useEffect(() => {
    let index = 0;
    let arr;
    for (const [key, value] of Object.entries(Profiles)) {
      if (index % 3 === 0) {
        arr = [];
        itemArr.push(arr);
      }
      let dict = {};
      dict['image'] = value;
      dict['name'] = key;
      arr.push(dict);
      index++;
    }
    setItem(itemArr);
  }, []);
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.searchFrame}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Text style={styles.title}>Search</Text>
          <Searchbar
            placeholder="Search"
            onChangeText={text => setKeyword(text)}
            onIconPress={toDatabase}
            style={{
              borderColor: '#80CAFF',
              shadowOpacity: 0,
              marginTop: 20,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              width: DeviceWidth * 0.7,
              textAlign: 'center',
              fontSize: 20,
            }}
          />
          <Text style={{marginTop: 30, marginBottom: 10, textAlign: 'center'}}>
            For the prototype, only the Beef, Jeans & Makeup {'\n'} search pages
            are active. We're curious what you think.
          </Text>

          {item.map((row, i) => (
            <View key={i} style={styles.avatarView}>
              {row.map(url => (
                <TouchableHighlight
                  key={url.name}
                  onPress={() => readData(url.name)}
                  activeOpacity={1}
                  underlayColor="transparent"
                  style={{marginLeft: 10}}>
                  <View style={styles.eachAvatar}>
                    <Image
                      source={url.image}
                      style={{
                        backgroundColor: 'white',
                        width: 60,
                        height: 60,
                        marginBottom: 10,
                        marginTop: 10,
                      }}
                      resizeMode="contain"
                    />
                    <Text style={{width: 90, textAlign: 'center'}}>
                      {url.name}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          ))}
          <View style={{marginBottom: 40}} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
