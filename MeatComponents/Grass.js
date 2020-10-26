import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {ImageIcon} from './ImageIcon';
import What from './What';
import {createStackNavigator} from '@react-navigation/stack';
import {ArrowIcon} from './ArrowIcon';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  Linking,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
import {images} from '../ImageURL';
const Stack = createStackNavigator();
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Grass = ({inputData, navigation}) => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: '10%',
          }}>
          <View style={{width: '50%'}}>
            <Image
              source={require('./../images/Beef_Earth/graphic_large.png')}
              style={{width: 150, height: 150, marginLeft: '10%'}}
            />
          </View>
          <View style={{width: '50%', flexDirection: 'column'}}>
            <Image
              source={require('./../images/Beef_Earth/treestump_small.png')}
              style={{width: 50, height: 50, marginLeft: '60%'}}
            />
            <View>
              <Text style={{fontSize: 14}}>
                Livestock production uses 75% of earth’s agricultural land and
                is a leading driver for global deforestation.
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10, marginLeft: '15%'}}>
                - Climate Nexus;
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10, marginLeft: '20%'}}>
                Our World in Data
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Image
            style={{width: 150, height: 150, marginTop: '10%'}}
            source={images.car}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '15%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>29 mi.</Text>
                <ArrowIcon />
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '40%'}}
                source={images.steak_small}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>3 mi.</Text>
                <ArrowIcon />
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '40%'}}
                source={images.broccolli}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', width: width / 1.4}}>
            <Text>
              The pollution generated in producing a typical 8 ounce steak is
              equivalent to driving a small car for 29 milies.
            </Text>
          </View>
        </View>
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
    </View>
  );
};
export default Grass;
