import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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

const MakeupGrass = ({inputData, navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <View
        style={{
          width: Width,
          height: 100,
        }}>
        <Image source={images.label} style={{height: 100, width: Width}} />
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 20}}>
          Palm oil derivatives appear in 70% of cosmetics, contributing to
          repaid deforestation, wildlife extinction and climate change.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
        <Image source={images.frog} style={{width: Width / 1.5, height: 100}} />
        <Text style={{fontSize: 20}}>
          Personal care products flushed or rinsed down the drain have been
          linked to decreased fertility and skewed sexual development in
          everything from frogs to fish.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
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
export default MakeupGrass;
