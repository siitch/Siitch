import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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
  Dimensions,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import Water from '../MeatComponents/Water';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const arr = [
  {name: 'Pair of jeans', water: 2866, picture: images.jeansVs},
  {name: 'Leather shoes', water: 2113, picture: images.shoes},
  {name: 'Cotton t-shirt', water: 660, picture: images.tshirt},
  {name: 'socks', water: 244, picture: images.socks},
];

const JeansVs = ({inputData}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#00adef',
          height: Height / 10,
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              width: Width / 6,
              textAlign: 'center',
              fontSize: 20,
              marginLeft: Width / 10,
            }}>
            One of these
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              textAlign: 'center',
              fontSize: 20,
            }}>
            =
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              width: Width / 2,
              textAlign: 'center',
              fontSize: 20,
            }}>
            This many gallons of water
          </Text>
        </View>
      </View>
      {arr.map((row, i) => (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: Width / 10,
            alignItems: 'center',
            marginTop: Height / 20,
          }}
          key={i}>
          <Image
            source={row.picture}
            style={{
              width: Width / 5,
              height: Height / 9,
              marginRight: Width / 20,
            }}
          />
          <Image
            source={images.water}
            style={{width: Width / 15, height: Height / 23}}
          />
          <View>
            <Text style={{color: '#00adef'}}>{row.water} gallons</Text>
            <Text>{row.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default JeansVs;
