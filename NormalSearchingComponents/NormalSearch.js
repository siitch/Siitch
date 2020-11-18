import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import Profiles from '../ImageDB';
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
const Height = Dimensions.get('screen').height;

const NormalSearch = ({name, inputData}) => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <Image source={Profiles[name]} />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{name}</Text>
      </View>
      <View style={{marginLeft: 20}}>
        {Object.keys(inputData).map((key, i) =>
          inputData[key] !== '' ? (
            <Text key={i} style={{marginTop: 10}}>
              {key}: {inputData[key]}
            </Text>
          ) : null,
        )}
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default NormalSearch;
