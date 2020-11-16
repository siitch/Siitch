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
              marginLeft: 10,
              marginRight: 10,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: 'white',
                  marginLeft: 10,
                }}>
                2,247 gal.
              </Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{fontSize: 20, color: 'white'}}>
                to grow the cotton
              </Text>
              <Text style={{fontSize: 14, color: 'white'}}>
                - worldwide average
              </Text>
            </View>
            <Image
              source={images.rain}
              style={{resizeMode: 'cover', marginLeft: 10, marginTop: -10}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.blue_plus}
              style={{resizeMode: 'cover', marginLeft: 10, marginTop: -30}}
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
              marginLeft: 10,
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
              marginLeft: 10,
              marginTop: 5,
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
              marginLeft: 10,
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
              marginLeft: 10,
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
              marginLeft: 10,
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
              marginLeft: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
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
                fontSize: 12,
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
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          height: 50,
          borderWidth: 2,
          borderColor: '#8DC73F',
          borderRadius: 20,
          width: Width * 0.9,
          textAlign: 'center',
          fontSize: 20,
          marginTop: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.3}}>
          U.S.A companies, as recommended by
          <Text
            onPress={() => Linking.openURL('https://goodonyou.eco/')}
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
              Linking.openURL('https://www.thereformation.com/');
            }}>
            <ImageIcon category="brand" image={images.ref} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.outlanddenim.com/');
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
              Linking.openURL('https://www.patagonia.com/home/');
            }}>
            <ImageIcon category="brand" image={images.patagonia} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.boyish.com/');
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
              Linking.openURL('https://www.outerknown.com/');
            }}>
            <ImageIcon category="brand" image={images.outerknown} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://amourvert.com/');
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
              Linking.openURL('https://citizensofhumanity.com/');
            }}>
            <ImageIcon category="brand" image={images.citizens} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://triarchy.com/');
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
              Linking.openURL('https://www.dl1961.com/');
            }}>
            <ImageIcon category="brand" image={images.dl} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.g-star.com/en_us');
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
