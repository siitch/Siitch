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
} from 'react-native';
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Recycle = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          marginTop: Height / 20,
          width: Width,
        }}>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={images.meats}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
            }}
            resizeMode="contain"
          />
          <Text style={{width: 120, textAlign: 'center', fontSize: 16}}>
            Time to {'\n'}grow
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              width: Width / 3.5,
              fontSize: 16,
              textAlign: 'center',
            }}>
            3 yrs
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={images.compost}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
              marginTop: '10%',
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              width: 120,
              textAlign: 'center',
              fontSize: 16,
              marginTop: '10%',
            }}>
            Compostable?
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              textAlign: 'center',
              width: Width / 3.5,
              fontSize: 16,
              marginTop: '10%',
            }}>
            Professional Only
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: Height / 20,
          }}>
          <Image
            source={images.clock}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
              marginTop: '10%',
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              width: 120,
              textAlign: 'center',
              fontSize: 16,
              marginTop: '10%',
            }}>
            Time to{'\n'}decompose
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              width: Width / 3.5,
              fontSize: 16,
              textAlign: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            2 Months
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: -35}}>
          <TouchableHighlight
            onPress={() => navigation.navigate('What')}
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
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              What Can I do?
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
          <Text style={{fontSize: 16, marginTop: 5}}>
            Ranked in no particular order.
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
                Linking.openURL('https://impossiblefoods.com/grocery/');
              }}>
              <ImageIcon category="brand" image={images.impossible} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                Linking.openURL('https://www.beyondmeat.com/');
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
                Linking.openURL('https://lightlife.com/');
              }}>
              <ImageIcon category="brand" image={images.lightlife} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                Linking.openURL('https://www.hungryplanetfoods.com/');
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
                Linking.openURL('https://www.nextlevelburger.com/');
              }}>
              <ImageIcon category="brand" image={images.nextlevel} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                Linking.openURL('https://www.quorn.us/');
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
                Linking.openURL('https://www.bocaburger.com/');
              }}>
              <ImageIcon category="brand" image={images.boca} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                Linking.openURL('https://www.gardein.com/');
              }}>
              <ImageIcon category="brand" image={images.gardein} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default Recycle;
