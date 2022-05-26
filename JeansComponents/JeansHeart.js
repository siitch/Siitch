import React from 'react';
import {images} from '../ImageURL';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {JeansBrands} from "./JeansBrands/JeansBrands";
import {openSourceLink} from "../util/common";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const JeansHeart = () => {
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
            onPress={() => {
              openSourceLink(
                'https://goodonyou.eco/material-guide-ethical-denim/',
                {
                  name: 'Material Guide: How Ethical is Denim',
                  url: 'https://goodonyou.eco/material-guide-ethical-denim/'
                }
              )
            }}
            style={{color: '#00ADEF'}}>
            {' '}
            Material Guide: How Ethical is Denim?
          </Text>
        </Text>
      </View>

      <JeansBrands currentTab={'Jeans - Health'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansHeart;
