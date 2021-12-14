import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
import {images} from '../ImageURL';
import Profiles from '../ImageDB';
import {ImageIcon} from '../ImageIcon';
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
  Dimensions,
} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import analytics from '@react-native-firebase/analytics';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const arr = [
  {water: 1847, picture: images.beef_steak},
  {water: 718, picture: Profiles.Pork},
  {water: 518, picture: images.chicken},
  {water: 302, picture: Profiles.Tofu},
];
const Vs = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <View
        style={{
          backgroundColor: '#00adef',
          height: Height / 10,
          width:Width,
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              width: Width / 5.2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: Width / 10,
            }}>
            One lb of these
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              textAlign: 'center',
              fontSize: 20,
            }}>
            =
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 13,
              width: Width / 2.2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            This many gallons of water
          </Text>
        </View>
      </View>
      {arr.map((row, i) => (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: Width / 10,
            alignItems: 'center',
            marginTop: Height / 250,
          }}
          key={i}>
          <Image
            source={row.picture}
            style={{
              width: Width / 5,
              height: Height / 9,
              marginRight: Width / 20,
            }}
            resizeMode='contain'
          />
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <Image
              source={images.water}
              style={{width: Width / 15, height: Height / 23, marginLeft:'30%'}}
              resizeMode='contain'
            />
            <Text style={{color: '#00adef',fontWeight:'bold',fontSize:20}}>{row.water} gallons</Text>
          </View>
        </View>
      ))}
        <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => {
              navigation.navigate('What')
              analytics().logEvent('What_can_I_do',{
                  item: 'Beef - Vs'
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
            marginTop:'5%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>Doing good</Text>
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
  );
};
export default Vs;
