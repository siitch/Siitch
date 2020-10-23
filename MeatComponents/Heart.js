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
  Image,
  Dimensions,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Heart = inputData => {
  return (
    <View style={{paddingTop: Height / 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{width: Width / 1.2}}>
          {inputData.inputData['Search Health Page']}
        </Text>
        <Image source={images.heart_small} />
      </View>
    </View>
  );
};
export default Heart;
