import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupRecycle = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>120 Billion +</Text>
        <Text style={{fontSize: 20}}>
          Units of packaging produced every year by the global cosmetics
          industry. Most of it is not recyclable.
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 40}}>
          1000 Years
        </Text>
        <Image source={images.moisture} style={{width: 150, height: 150}} />
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          The average moisturizer pot takes 1000 years to decompose
        </Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('What')}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            width: Width - Width / 5,
            height: Height / 20,
            alignItems: 'center',
            borderRadius: 10,
            marginLeft: Width / 10,
            marginRight: Width / 10,
            justifyContent: 'center',
            marginTop: '10%',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
export default MakeupRecycle;
