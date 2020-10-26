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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const MakeupVs = ({inputData, navigation}) => {
  return (
    <View style={{alignItems: 'center', marginTop: Height / 20}}>
      <Text style={{fontSize: 25}}>Who is regulating?</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#00FF00"
        style={{
          backgroundColor: '#00FF00',
          width: Width / 2,
          height: Height / 15,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 4,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
    </View>
  );
};
export default MakeupVs;
