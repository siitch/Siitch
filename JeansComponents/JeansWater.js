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
  ImageBackground,
} from 'react-native';
import {images} from '../ImageURL';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const JeansWater = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: '2%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>One pair Jeans</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '2%',
        }}>
        <Image
          source={require('./../images/WaterDrop_BLUE.png')}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#3AADFA',
              lineHeight: 30,
            }}>
            2866
          </Text>
          <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
            gal
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.jeans}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '2%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#3AADFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.truck}
            style={{width: 120, height: 120, alignItems: 'center'}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 18, marginLeft: '5%', color: 'white'}}>
            Context {'\n'} 3,000 gallon tank
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'black',
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <View>
        <ImageBackground
          source={images.waterBackground}
          style={{width: Width, height: Height}}>
          <Text>test</Text>
        </ImageBackground>
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
    </ScrollView>
  );
};
export default JeansWater;
