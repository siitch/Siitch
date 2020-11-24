import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {ImageIcon} from '../ImageIcon';
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

const JeansHeart = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row', marginTop: Height / 20}}>
        <Image
          source={images.jeans_health}
          style={{height: 250, marginLeft: -80}}
          resizeMode="contain"
        />
        <View
          style={{flexDirection: 'column', width: Width / 2, marginLeft: -60}}>
          <Text style={{fontSize:16}}>
            The chemical washes and sandblasting process that gets the
            ‘distressed’ look can have major health consequences on factory
            workers where health and safety protocols are not followed.
          </Text>
          <Image
            source={images.jeans_health_folded}
            style={{height: 110, width: 110, marginTop: '20%', marginLeft: 20}}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 18, width: Width / 1.3}}>
          Check out Good on You’s
          <Text
            onPress={() =>
              Linking.openURL(
                'https://goodonyou.eco/material-guide-ethical-denim/',
              )
            }
            style={{color: '#00ADEF'}}>
            {' '}
            Material Guide: How Ethical is Denim?
          </Text>
        </Text>
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
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.3,textAlign:'center',marginTop:'2%'}}>
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
              Linking.openURL('https://www.asket.com/');
            }}>
            <ImageIcon category="brand" image={images.asket} />
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
export default JeansHeart;
