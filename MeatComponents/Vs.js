import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import { images } from '../ImageURL';
import { ImageIcon } from './ImageIcon';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';

const Vs = () => {
  return (
    <View>
      <View style={{
          flexDirection: 'row',
          width: width,
          height: 100,
          backgroundColor: '#3AADFA',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            One Pound {'\n'} of this
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white',marginLeft: '15%'}}>=</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white',marginLeft: '5%'}}>
            This many gallons{'\n'} of water
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <ImageIcon category='Beef' image = {images.beef_steak}/>
        <View style={{width:width/3,alignItems: 'center',}}>
          <Image
            source={require('./../images/WaterDrop_BLUE.png')}
            style={{width: 30, height: 30}}
          />
        </View>
       
        <View style={{flexDirection: 'row',width:width/3,alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>1,847</Text>
            <Text style={{fontSize: 15, marginLeft: '2%',lineHeight: 37}}>gal</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        
        <ImageIcon category='pig_vs' image = {images.pig_vs}/>
        <View style={{width:width/3,alignItems: 'center',}}>
          <Image
            source={require('./../images/WaterDrop_BLUE.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={{flexDirection: 'row',alignItems: 'flex-start',width:width/3,alignItems: 'center'}}>
          <Text style={{fontSize: 26, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>718</Text>
          <Text style={{fontSize: 15, marginLeft: '2%',lineHeight: 37}}>gal</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <ImageIcon category='Goat' image = {images.goat}/>
        <View style={{width:width/3,alignItems: 'center',}}>
          <Image
            source={require('./../images/WaterDrop_BLUE.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={{flexDirection: 'row',width:width/3,alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>662</Text>
            <Text style={{fontSize: 15, marginLeft: '2%',lineHeight: 37}}>gal</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <ImageIcon category='tofu' image = {images.tofu}/>
        <View style={{width:width/3,alignItems: 'center',}}>
          <Image
            source={require('./../images/WaterDrop_BLUE.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={{flexDirection: 'row',width:width/3,alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>302</Text>
            <Text style={{fontSize: 15, marginLeft: '2%',lineHeight: 37}}>gal</Text>
        </View>
      </View>
    </View>
  );
};
export default Vs;
