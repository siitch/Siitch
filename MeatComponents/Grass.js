import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {ImageIcon} from '../ImageIcon';
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
import * as WebBrowser from "expo-web-browser";
import analytics from '@react-native-firebase/analytics';
const Stack = createStackNavigator();
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Grass = ({inputData, navigation}) => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            marginTop: Height / 20 + 20,
            marginRight:'10%',
            marginLeft:'10%'
          }}>
          <View style={{width: width/4,alignItems:'center'}}>
            <Image
              source={require('./../images/Beef/Beef_Earth/graphic_large.png')}
              style={{width: 150, height: 150,}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width*2.2/4,marginLeft:'10%',flexDirection: 'column'}}>
            <Image
              source={require('./../images/Beef/Beef_Earth/treestump_small.png')}
              style={{width: 50, height: 50,marginTop:-20,marginLeft:130}}
              resizeMode="contain"
            />
            <View style={{alignItems:'center',marginTop:10,marginRight:30}}>
              <Text style={{fontSize: 16}}>
                Livestock production uses 75% of earth’s agricultural land and
                is a leading driver for global deforestation.
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10}}>
                - Climate Nexus;
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10}}>
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
            marginTop: Height / 50,
            marginRight:'10%',
            marginLeft:'5%'
          }}>
          <Image
            style={{width: 170, height: 170}}
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
                marginTop:'-15%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>29 mi.</Text>
                <ArrowIcon w={120}/>
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '35%'}}
                source={images.steak_small}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop:10
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>3 mi.</Text>
                <ArrowIcon w={30} />
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '35%'}}
                source={images.broccolli}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center',width:width,marginTop:10}}>
          <View style={{flexDirection: 'row', width: width / 1.5}}>
            <Text style={{fontSize:16}}>
              The pollution generated in producing a typical 8 ounce steak is
              equivalent to driving a small car for 29 milies.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => {
              navigation.navigate('What')
              analytics().logEvent('What_can_I_do',{
                  item: 'Beef - Env'
              })
          }}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            height: 50,
            borderWidth: 2,
            borderColor: '#8DC73F',
            borderRadius: 30,
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'10%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'6%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
          <Text style={{fontSize:16,marginTop:5}}>Ranked in no particular order.</Text>
          <Image source={images.down_arrow} style={{width: 60, height: 60}}/>
        </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://impossiblefoods.com/grocery/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'IMPOSSIBLE foods'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.impossible} />
                  </TouchableHighlight>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.beyondmeat.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'BEYOND MEAT'
                          })
                      }}>
                      <Image
                          source={images.beyond_meat}
                          style={{width: 130, height: 130}}
                      />
                  </TouchableHighlight>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://lightlife.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'Lightlife'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.lightlife} />
                  </TouchableHighlight>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.hungryplanetfoods.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'HUNGRY PLANET foods'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.hungry_planet} />
                  </TouchableHighlight>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.nextlevelburger.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'Next Level Burger'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.nextlevel} />
                  </TouchableHighlight>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.quorn.us/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'Quorn'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.quorn} />
                  </TouchableHighlight>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.bocaburger.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'BOCA burger'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.boca} />
                  </TouchableHighlight>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://www.gardein.com/');
                          analytics().logEvent('Doing_good',{
                              brandName: 'gardein'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.gardein} />
                  </TouchableHighlight>
              </View>
          </View>
        <View style={{height:Height/10}}/>
      </ScrollView>
    </View>
  );
};
export default Grass;
