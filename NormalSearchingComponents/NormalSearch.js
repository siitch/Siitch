import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import Profiles from '../Comparing/ImageDB';
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

const NormalSearch = ({name, inputData}) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};
export default NormalSearch;
