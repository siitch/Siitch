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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MakeupHeart = ({inputData, navigation}) => {
  return (
    <View style={{marginTop: Height / 20, alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>1400 V.S 30</Text>
      <Text style={{fontSize: 20}}>
        The European Union has banned {'\n'}or restriced 1400 ingredients.{' '}
        {'\n'}The U.S? Only 30.
      </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - (Width/5),
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop:'10%'
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
    </View>
  );
};
export default MakeupHeart;
