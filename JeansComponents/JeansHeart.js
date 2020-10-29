import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {ImageIcon} from '../ImageIcon';
import {images} from '../ImageURL';
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
  Image,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const JeansHeart = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <View style={{flexDirection:'row',marginTop:'5%'}}>
        <Image source={images.jeans_health} style={{height:250,marginLeft:-60}} resizeMode="contain" />
        <View style={{flexDirection:'column',width:Width/2,marginLeft:-60}}>
          <Text style={{marginTop:'10%'}}>The chemical washes and sandblasting process that gets the ‘distressed’ look can have major health consequences on factory workers where health and safety protocols aren’t followed.</Text>
          <Image source={images.jeans_health_folded} style={{height:150,width:150,marginTop:'5%',marginLeft:20}} resizeMode="contain" />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 18, width: Width / 1.3}}>
          Check out Good on You’s
          <Text onPress={() => Linking.openURL('https://goodonyou.eco/material-guide-ethical-denim/')} style={{color: '#00ADEF'}}> Material Guide: How Ethical is Denim?</Text>
        </Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - Width / 5,
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.3}}>
          U.S.A companies, as recommended by
          <Text onPress={() => Linking.openURL('https://goodonyou.eco/')} style={{color: '#00ADEF'}}> Good On You, </Text>
          in random order.
        </Text>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: '5%'}}>
          <ImageIcon category="brand" image={images.ref} />
          <ImageIcon category="brand" image={images.outland} />
        </View>
        <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: '5%'}}>
          <ImageIcon category="brand" image={images.patagonia} />
          <ImageIcon category="brand" image={images.boyish} />
        </View>
        <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: '5%'}}>
          <ImageIcon category="brand" image={images.outerknown} />
          <ImageIcon category="brand" image={images.amourvert} />
        </View>
        <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: '5%'}}>
          <ImageIcon category="brand" image={images.citizens} />
          <ImageIcon category="brand" image={images.triarchy} />
        </View>
        <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.dl}></ImageIcon>
            <ImageIcon category='brand' image={images.g_star}></ImageIcon>
        </View>
      </View>
    </ScrollView>
  );
};
export default JeansHeart;
