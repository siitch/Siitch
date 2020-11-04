import 'react-native-gesture-handler';
import firebase from 'firebase';
import {useState, useEffect} from 'react';
import * as React from 'react';
import {Searchbar, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
  Image
} from 'react-native';

import {styles} from './Ranking/Styles';
const DeviceWidth = Dimensions.get('window').width;

const Search = ({searchData, navigation}) => {
  const [index, setIndex] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');
  const Tab = createBottomTabNavigator();
  const catImage = [
    [
      {image: require('./images/Beef/beef_search_page.png'), name: 'Beef'},
      {image: require('./images/Beef/jeans_search_page.png'), name: 'Jeans'},
      {image: require('./images/Beef/makeup_search_page.png'), name: 'Makeup'},
    ],
    [
      {
        image: require('./images2/chocolate.png'),
        name: 'Chocolate',
      },
      {image: require('./images2/artichoke.png'), name: 'Artichokes'},
      {image: require('./images2/asparagus.jpg'), name: 'Asparagus'},
    ],
    [
      {image: require('./images2/bananas.png'), name: 'Bananas'},
      {image: require('./images2/blackberry.png'), name: 'Blackberries'},
      {image: require('./images2/bread.png'), name: 'Bread'},
    ],
    [
      {
        image: require('./images2/brussel_sprouts.png'),
        name: 'Brussel sprouts',
      },
      {image: require('./images2/cabbage.png'), name: 'Cabbage'},
      {image: require('./images2/car_pix.png'), name: 'Car'},
    ],
    [
      {
        image: require('./images2/cauliflower.png'),
        name: 'Cauliflower',
      },
      {image: require('./images2/celery.png'), name: 'Celery'},
      {image: require('./images2/cheese.png'), name: 'Cheese'},
    ],
    [
      {image: require('./images2/yogurt-regular-small.png'), name: 'Yogurt'},
      {image: require('./images2/watermelon.png'), name: 'Watermelon'},
      {image: require('./images2/zucchini.jpg'), name: 'Zucchini'},
    ],
    [
      {image: require('./images2/tomato.png'), name: 'Tomato'},
      {image: require('./images2/sweet_potato.png'), name: 'Sweet Potato'},
      {image: require('./images2/toast_small.png'), name: 'Toast'},
    ],
    [
      {image: require('./images2/squash.jpg'), name: 'Squash'},
      {image: require('./images2/spinach_small.png'), name: 'Spinach'},
      {image: require('./images2/strawberry.png'), name: 'Strawberry'},
    ],
    [
      {image: require('./images2/pig_small.png'), name: 'Pork'},
      {image: require('./images2/pasta_3.png'), name: 'Pasta'},
      {image: require('./images2/potato.png'), name: 'Potato'},
    ],
    [
      {image: require('./images2/okra.png'), name: 'Okra'},
      {
        image: require('./images2/potato_chips.png'),
        name: 'Potato chips',
      },
      {image: require('./images2/broccolli.png'), name: 'Broccoli'},
    ],
    [
      {image: require('./images2/carrot.png'), name: 'Carrots'},
      {image: require('./images2/chilis.png'), name: 'Chilis'},
      {image: require('./images2/ketchup.png'), name: 'Tomato ketchup'},
    ],
    [
      {
        image: require('./images2/suede_shoes.jpg'),
        name: 'Suede shoes',
      },
      {image: require('./images2/rice_white_1.png'), name: 'Rice'},
    ],
  ];
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
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
    <View style={styles.searchFrame}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.title}>Search</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={text => setKeyword(text)}
          onIconPress={toDatabase}
          style={{borderColor: '#80CAFF',
          marginTop: 20,
          height: 50,
          borderWidth: 2,
          borderRadius: 20, 
          width: DeviceWidth*0.7,
          textAlign: 'center',
          fontSize: 20}}
        />
        <Text style={{marginTop: 10, marginBottom: 10}}>
          For prototype, only Beef, Jeans & Makeup search {'\n'} pages are
          active. We're curious what you think.
        </Text>
        {catImage.map((row, i) => (
          <View key={i} style={styles.avatarView}>
            {row.map(url => (
              <TouchableHighlight
                key={url.name}
                onPress={() => readData(url.name)}
                activeOpacity={1}
                underlayColor="transparent"
                style={{marginLeft: 25}}>
                <View style={styles.eachAvatar}>
                  <Image
                    source={url.image}
                    style={{
                      backgroundColor: 'white', 
                      width: 60, 
                      height: 60,
                      marginBottom: 10
                    }}
                    resizeMode='contain'
                  />
                  <Text style={{maxWidth: 100}}>{url.name}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        ))}
        <View style={{marginBottom: 40}}></View>
      </ScrollView>
    </View>
    </View>
  );
};

export default Search;
