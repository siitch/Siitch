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
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Recycle = () => {
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.meats}
          style={{
            marginLeft: Width / 20,
            marginRight: Width / 20,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to grow
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 20,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
          }}>
          3 yrs
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.compost}
          style={{
            marginLeft: Width / 20,
            marginRight: Width / 20,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 20,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
          }}>
          Professional Only
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: Height / 20,
        }}>
        <Image
          source={images.clock}
          style={{
            marginLeft: Width / 20,
            marginRight: Width / 20,
            width: Width / 4,
            height: Height / 8.5,
          }}
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to decompose
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 20,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
            alignItems: 'center',
          }}>
          2 Months
        </Text>
      </View>
    </View>
  );
};
export default Recycle;
