import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
import {JeansBrands} from "./JeansBrands/JeansBrands";
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const JeansRecycle = () => {
  return (
    <ScrollView
      style={{flexDirection: 'column', flex: 1, backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop:'2%'
        }}>
        <Image
          source={images.jeans}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
          }}
          resizeMode="contain"
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to {'\n'}grow
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
          }}>
          N/A
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
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
            marginTop: '8%',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            width: 130,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '8%',
          }}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
            marginTop: '8%',
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
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
            marginTop: '8%',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            width: 130,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '8%',
          }}>
          Time to{'\n'}decompose
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
            alignItems: 'center',
            marginTop: '8%',
          }}>
          3+ Years
        </Text>
      </View>

      <JeansBrands currentTab={'Jeans - Recycle'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansRecycle;
