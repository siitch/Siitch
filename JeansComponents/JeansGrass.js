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
import * as Analytics from "expo-firebase-analytics";
import * as WebBrowser from "expo-web-browser";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const JeansGrass = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <ImageBackground
        source={images.earthBackground}
        style={{width: Width, height: Height / 1.8}}
        imageStyle={{resizeMode: 'stretch'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Height / 40,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Image source={images.cotton} style={{resizeMode: 'cover'}} />
          <Text
            style={{
              color: 'white',
              width: Width / 1.5,
              fontSize: 20,
              marginLeft:-15,
              marginTop:'3%',
              textAlign:'right',
            }}>
            Cotton is an extremely thirsty crop to grow.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Height / 45,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
            }}>
            65% of the worlds denims are still made using a heavy chemical
            process; bleach etc
          </Text>
          <Image source={images.percent} style={{resizeMode: 'cover'}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Height / 45,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Image source={images.drain} style={{resizeMode: 'cover'}} />
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
              marginLeft: 15,
            }}>
            That outflow often pours into the rivers in countries like India &
            China, poisoning the soils & flowing into our oceans
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Height / 30,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
              marginTop: 15,
            }}>
            You can a make a difference! Support brands doing good.
          </Text>
          <Image source={images.dollar} style={{resizeMode: 'cover'}} />
        </View>
      </ImageBackground>

      <TouchableHighlight
        onPress={() => {
            navigation.navigate('What')
            Analytics.logEvent('What_can_I_do',{
                item: 'Jeans - Env'
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
          width: Width * 0.9,
          textAlign: 'center',
          fontSize: 20,
          marginTop: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.3,textAlign:'center',marginTop:'2%'}}>
          U.S.A companies, as recommended by
          <Text
            onPress={() => {
                WebBrowser.openBrowserAsync('https://goodonyou.eco/')
                Analytics.logEvent('Source_click',{
                    source_name: 'Good On You',
                    source_url: 'https://goodonyou.eco/'
                })
            }}
            style={{color: '#00ADEF'}}>
            {' '}
            Good On You,{' '}
          </Text>
          in random order.
        </Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}} />
      </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.asket.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'ASKET'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.asket} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.outlanddenim.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'OUTLAND DENIM'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.outland} />
                </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.patagonia.com/home/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'patagonia'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.patagonia} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.boyish.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Boyish'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.boyish} />
                </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.outerknown.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'OUTERKNOWN'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.outerknown} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://amourvert.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'AMOUR VERT'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.amourvert} />
                </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://citizensofhumanity.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'CITIZENS of HUMANITY'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.citizens} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://triarchy.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Triarchy'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.triarchy} />
                </TouchableHighlight>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.dl1961.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'DL 1961'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.dl} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.g-star.com/en_us');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'G-STAR'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.g_star} />
                </TouchableHighlight>
            </View>
        </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansGrass;
