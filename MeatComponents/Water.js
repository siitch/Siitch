import React, {useState, useEffect, Component, PropTypes} from 'react';
import {Image} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {ImageIcon} from './ImageIcon';

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { images } from '../ImageURL';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Water = ({inputData, navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: '2%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>One Pound Beef</Text>
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
            resizeMode='contain'
          />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#3AADFA',
                lineHeight: 30,
              }}>
              {inputData['Global Gallon p lb']}
            </Text>
            <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('./../images/Beef/BeefPage/beef_steak.png')}
            style={{width: 200, height: 200}}
            resizeMode='contain'
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
              source={require('./../images/Beef/BeefPage/2000gal_truck.png')}
              style={{width: 120, height: 120, alignItems: 'center'}}
              resizeMode='contain'
            />
            <Text style={{fontSize: 18, marginLeft: '5%', color: 'white'}}>
              Context {'\n'} 2,000 gallon tank
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            WHY SO MUCH
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
              resizeMode='contain'
            />
            ?
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{width: 250}}>
            <Text style={{fontSize: 14}}>
              The food cattle eats accounts for 98% of beef's water footprint.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./../images/Beef/Beef_Water/rain_wheat.png')}
            style={{width: '35%', height: 250}}
            resizeMode='contain'
          />
          <Image
            source={require('./../images/Beef/Beef_Water/cows_hose.png')}
            style={{marginLeft: '10%', width: '35%', height: 250}}
            resizeMode='contain'
          />
        </View>
        <View
          style={{
            width: width,
            marginTop: '3%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>98%</Text>
            {'\n'}Rain & irrigation{'\n'} to grow crops
          </Text>
          <Text style={{fontSize: 14, marginLeft: '15%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>2%</Text>
            {'\n'}Drinking Water{'\n'} & Cleaning needs
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: '7%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#6dbd64',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Rain',
                  'Rain water (Green water): The amount of rainwater required to make an item.',
                )
              }>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white'}}>{'\n'}Rain</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    1,727
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#3AADFA',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Irrigation',
                  'Irrigated water (Blue water): The amount of surface water and groundwater required to produce an item.',
                )
              }>
              <Text style={{fontSize: 20, color: 'white'}}>
                {'\n'}Irrigation
              </Text>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    66
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#bfbfbf',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Cleaning',
                  'Cleaning water (Gray water): The amount of freshwater required to dilute the wastewater generated in manufacturing, in order to maintain water quality, as determined by state and local standards. Definitions: www.watercalculator.org',
                )
              }>
              <Text style={{fontSize: 20, color: 'white'}}>{'\n'}Cleaning</Text>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    54
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
          <Text style={{fontSize: 20, fontWeight:'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
          <Text style={{fontSize:16}}>Ranked in no particular order.</Text>
        </View>
        <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginLeft:'5%'}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            <ImageIcon category='brand' image={images.beyond_meat}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.lightlife}></ImageIcon>
            <ImageIcon category='brand' image={images.hungry_planet}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.nextlevel}></ImageIcon>
            <ImageIcon category='brand' image={images.quorn}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.boca}></ImageIcon>
            <ImageIcon category='brand' image={images.gardein}></ImageIcon>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Water;
