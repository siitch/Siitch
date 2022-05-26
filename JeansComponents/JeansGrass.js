import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import {JeansBrands} from "./JeansBrands/JeansBrands";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const JeansGrass = () => {
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

      <JeansBrands currentTab={'Jeans - Env'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansGrass;
