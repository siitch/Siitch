import 'react-native-gesture-handler';
import {FirebaseRealtimeDatabase, ref, onValue} from "../Firebase/firebase";
import {useState, useEffect} from 'react';
import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profiles from './SearchDB';

import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Alert,
  Dimensions,
  Image,
} from 'react-native';

import {styles} from './Style';
const DeviceWidth = Dimensions.get('window').width;

export default function Search() {
  const navigation = useNavigation();
  const [line, setLine] = useState(1);
  const [index, setIndex] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');
  const [item, setItem] = useState([]);
  const [name, setName] = useState('');
  const Tab = createBottomTabNavigator();
  var itemArr = [];
  let itemsList = [];

  const toDatabase = () => {
    if (keyword === '') {
      return;
    } else {
      let input =
          keyword.charAt(0).toUpperCase() +
          keyword.slice(1, keyword.length).toLowerCase();
      readData(input);
    }
  };
  const readData = image => {
    const searchRef = ref(FirebaseRealtimeDatabase, image);
    onValue(searchRef, (get) => {
      if (image === 'Beef' || image === 'Jeans' || image === 'Makeup'){
        navigation.navigate('SpecialItemTabs', {itemName: image})
      } else if (get.val() === null) {
        Alert.alert('Error!', "Can't find result for this keyword")
      } else {
        navigation.navigate('Detail', {itemName: image})
      }
      //   get.val() === null && image !== 'Makeup' ? (
      //     <View>
      //       {Alert.alert('Error!', "Can't find result for this keyword")}
      //     </View>
      //   ) : (
      //     navigation.navigate('Search', {name: image, value: get.val()})
      //   ),
    });
  };
  useEffect(() => {
    let index = 0;
    let arr;
    for (const [key, value] of Object.entries(Profiles)) {
      const keyUpp = key.toUpperCase();

      if (!keyUpp.includes(keyword.toUpperCase())) {
        continue;
      }
      itemsList.push(key);
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
  }, [keyword]);
  return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View style={styles.searchFrame}>
          <ScrollView
              style={{backgroundColor: '#FFFFFF'}}
              contentContainerStyle={{alignItems: 'center'}}>
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

            <Text style={{fontSize: 15, marginTop: 30, marginBottom: 10, marginHorizontal: 20, textAlign: 'center'}}>
              For the prototype, <Text style={{fontSize: 16, marginTop: 30, marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>only the Beef, Jeans & Makeup
              search pages are active.</Text> We're curious what you think.
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
                              source={Profiles[url.name]}
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
