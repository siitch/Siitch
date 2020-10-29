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
  Image
} from 'react-native';

const NormalSearch = ({name, inputData}) => {
  const imageURL = name + '.png';
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}><Text>{name}</Text></View> 
      <View style={{marginLeft: 20}}>
        {Object.keys(inputData).map((key, i) => inputData[key] !== '' ? <Text key={i} style={{marginTop: 10}}>{key}: {inputData[key]}</Text> : null)}
      </View>
    </ScrollView>
  );
};
export default NormalSearch;
