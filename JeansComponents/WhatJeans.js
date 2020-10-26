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

const WhatJeans = () => {
  return (
    <ScrollView style={{}}>
      <Text>What Can I do? Jeans</Text>
    </ScrollView>
  );
};
export default WhatJeans;
