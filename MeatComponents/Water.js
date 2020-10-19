import React, {useState, useEffect} from 'react';
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
} from 'react-native';

const Water = inputData => {
  useEffect(() => {
    console.log('useEffect');
    console.log(inputData.inputData);
  }, []);
  return (
    <View>
      <Text>Water Page</Text>
      {Object.keys(inputData.inputData).map(ind => (
        <Text key={ind}>
          {ind}: {inputData[ind]}
        </Text>
      ))}
    </View>
  );
};
export default Water;
