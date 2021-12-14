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
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {images} from '../ImageURL';
import * as Analytics from "expo-firebase-analytics";
import * as WebBrowser from 'expo-web-browser';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const JeansWater = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={{alignItems: 'center', marginTop: Height / 20}}>
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
              color: '#0091FE',
              lineHeight: 30,
            }}>
            2866
          </Text>
          <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
            gal
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'2%'}}>
        <Image
          source={images.jeans}
          style={{width: 150, height: 150}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '8%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#00ADEF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.truck}
            style={{width: 110, height: 110, marginTop: 2,marginLeft:-20}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 18, marginLeft: '5%', color: 'white'}}>
            Context {'\n'}<Text style={{fontWeight:'bold'}}>3,000</Text> gallon tank
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: '#D3D3D3',
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </View>

      <View>
        <ImageBackground
          source={images.waterBackground}
          style={{width: Width, height: Height / 2}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 15,
              marginRight: 15,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: 'white',
                  marginLeft: 15,
                }}>
                2,247 gal.
              </Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <Text style={{fontSize: 20, color: 'white',fontWeight:'bold'}}>
                to grow the cotton
              </Text>
              <Text style={{fontSize: 14, color: 'white'}}>
                - worldwide average
              </Text>
            </View>
            <Image
              source={images.rain}
              style={{
                resizeMode: 'cover',
                marginLeft: 5,
                marginTop: -10,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.blue_plus}
              style={{resizeMode: 'cover', marginLeft: 15, marginTop: -30}}
            />
            <Image
              source={images.cotton}
              style={{
                resizeMode: 'cover',
                width: 95,
                height: 95,
                marginTop: -30,
                marginLeft: '40%',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              165 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to dilute pesticides & fertilizers that go with cotton growing
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              97 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to treat chemicals that treat the raw cotton
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              95 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to treat bleach, dye, fabric print
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              238 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to thin out chemical streams
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              36 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to finish it
            </Text>
          </View>
          <View
            style={{
              width: Width / 4,
              height: 1,
              backgroundColor: 'white',
              marginTop: 15,
              marginLeft: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              2866 gal.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '45%',
                marginTop: 30,
              }}>
              - Kostigen, 2010
            </Text>
          </View>
        </ImageBackground>
      </View>
      <TouchableHighlight
        onPress={() => {
            navigation.navigate('What')
            Analytics.logEvent('What_can_I_do',{
                item: 'Jeans - Water'
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
export default JeansWater;
