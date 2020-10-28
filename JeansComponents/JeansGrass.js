import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {ImageIcon} from '../ImageIcon';
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
  ImageBackground,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const JeansGrass = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        source={images.earthBackground}
        style={{width: Width, height: Height}}
        imageStyle={{resizeMode: 'stretch'}}>
        <View style={{flexDirection: 'row', marginTop: 50, marginLeft: 20}}>
          <Image source={images.cotton} style={{resizeMode: 'cover'}} />
          <Text
            style={{
              color: 'white',
              width: Width / 1.5,
              fontSize: 25,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Cotton is an extremely thirsty crop to grow.
          </Text>
        </View>
      </ImageBackground>

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
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,width:Width/1.3}}>U.S.A companies, as recommended by
          <Text style={{color:'#00ADEF'}}> Good On You, </Text>
          in random order.
        </Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginLeft:'5%'}}>
            <ImageIcon category='brand' image={images.ref}></ImageIcon>
            <ImageIcon category='brand' image={images.outland}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.patagonia}></ImageIcon>
            <ImageIcon category='brand' image={images.boyish}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.outerknown}></ImageIcon>
            <ImageIcon category='brand' image={images.amourvert}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.citizens}></ImageIcon>
            <ImageIcon category='brand' image={images.triarchy}></ImageIcon>
          </View>
      </View>
    </ScrollView>
  );
};
export default JeansGrass;
