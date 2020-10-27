import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
import What from './What';
import {ArrowIconCol} from './ArrowIconCol'
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
  TouchableHighlight,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Heart = ({navigation, inputData}) => {
  return (
    <View style={{paddingTop: Height / 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{width: Width / 1.2}}>
          {inputData['Search Health Page']}
        </Text>
        <Image source={images.heart_small} resizeMode='contain'/>
      </View>
      <View style={{width: '100%', height: 2, backgroundColor: '#EF7A6A',marginTop:'10%'}} />
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column',width:Width/3, alignItems:'center'}}>
      <ArrowIconCol></ArrowIconCol>
      <Text style={{alignItems:'center'}}>Type 2{'\n'} Diabetes</Text>
      </View>
      <View style={{flexDirection:'column',width:Width/3,alignItems:'center'}}>
      <ArrowIconCol></ArrowIconCol>
      <Text style={{alignItems:'center',marginLeft: '10%'}}>Cardiovascular{'\n'}Disease</Text>
      </View>
      <View style={{flexDirection:'column',width:Width/3,alignItems:'center'}}>
      <ArrowIconCol></ArrowIconCol>
      <Text style={{alignItems:'center'}}>Certain{'\n'}Cancers</Text>
      </View>
      </View>

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
export default Heart;
