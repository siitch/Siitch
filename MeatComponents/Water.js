import React, {useState, useEffect, Component, PropTypes} from 'react';
import {Image} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {ImageIcon} from '../ImageIcon';

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
    <View style={{backgroundColor:'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: '2%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>One Pound Beef</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems:'baseline',
            marginTop: '2%',
            justifyContent:'center'
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
            style={{width: 200, height: 200,marginTop:'-10%'}}
            resizeMode='contain'
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#3AADFA',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:'-5%'
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
            <Text style={{fontSize: 16}}>
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
            marginTop:'5%',
            width:width
          }}>
          <View style={{width:width/2,alignItems:'center'}}>
          <Image
            source={require('./../images/Beef/Beef_Water/rain_wheat.png')}
            style= {{width:150, height:200}}
            resizeMode='contain'
          />
          </View>
          <View style={{width:width/2,alignItems:'center'}}>
          <Image
            source={require('./../images/Beef/Beef_Water/cows_hose.png')}
            style= {{width:150, height:200}}
            resizeMode='contain'
          />
          </View>
        </View>
        <View
          style={{
            width: width,
            marginTop: '3%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <View style={{flexDirection:'column',alignItems:'center',width:width/2}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>98%</Text>
            <Text style={{fontSize: 16}}>
            Rain & irrigation{'\n'} to grow crops
            </Text>
          </View>
          <View style={{flexDirection:'column',alignItems:'center',width:width/2}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>2%</Text>
            <Text style={{fontSize: 16}}>
              Drinking Water{'\n'} & Cleaning needs
            </Text>
          </View>
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
        <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('What')}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            height: 50,
            borderWidth: 2,
            borderColor: '#8DC73F',
            borderRadius: 20, 
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'10%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
          <Text style={{fontSize:16}}>Ranked in no particular order.</Text>
        </View>
        <View  style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://impossiblefoods.com/grocery/')}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.beyondmeat.com/')}}>
            <Image source={images.beyond_meat} style={{width:150,height:150}}></Image>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://lightlife.com/')}}>
              <ImageIcon category='brand' image={images.lightlife}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.hungryplanetfoods.com/')}}>
              <ImageIcon category='brand' image={images.hungry_planet}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.nextlevelburger.com/')}}>
              <ImageIcon category='brand' image={images.nextlevel}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.quorn.us/')}}>
              <ImageIcon category='brand' image={images.quorn}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.bocaburger.com/')}}>
              <ImageIcon category='brand' image={images.boca}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.gardein.com/')}}>
              <ImageIcon category='brand' image={images.gardein}></ImageIcon>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Water;
