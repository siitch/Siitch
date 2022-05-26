import React from 'react';
import {images} from '../ImageURL';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {MakeupBrands} from "./MakeupBrands/MakeupBrands";
const Height = Dimensions.get('window').height;

const MakeupRecycle = () => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{marginLeft: 50, marginRight: 50}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: Height / 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>120 Billion +</Text>
        <Text style={{fontSize: 20, marginTop: 15}}>
          Units of packaging produced every year by the global cosmetics
          industry. Most of it is not recyclable.
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 40,
            color: '#A77C57',
          }}>
          1,000 Years
        </Text>
        <Image
          source={images.moisture}
          style={{width: 150, height: 150, marginTop: 10}}
        />
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: '5%'}}>
          The average moisturizer pot takes 1,000 years to decompose
        </Text>
        </View>

      <MakeupBrands currentTab={'Makeup - Recycle'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupRecycle;
