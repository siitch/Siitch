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
} from 'react-native';
import {images} from '../ImageURL';

const JeansWater = ({inputData}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: '2%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>One pair Jeans</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '2%',
        }}>
        <Image
          source={require('./../images/WaterDrop_BLUE.png')}
          style={{width: 20, height: 20}}
        />
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#3AADFA',
              lineHeight: 30,
            }}>
            2866
          </Text>
          <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
            gal
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.jeans} style={{width: 200, height: 200}} />
      </View>
      <View style={{alignItems: 'center', marginTop: '2%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#3AADFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.truck}
            style={{width: 120, height: 120, alignItems: 'center'}}
          />
          <Text style={{fontSize: 18, marginLeft: '5%', color: 'white'}}>
            Context {'\n'} 3,000 gallon tank
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 100,
          height: 80,
          backgroundColor: 'green',
          borderRadius: 100,
        }}>
        <Text>2247 gal. to grow the cotton</Text>
      </View>
    </ScrollView>
  );
};
export default JeansWater;
