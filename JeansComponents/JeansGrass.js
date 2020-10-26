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
  Dimensions,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const JeansGrass = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <Text>JeansGrass</Text>
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
    </ScrollView>
  );
};
export default JeansGrass;
