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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupGrass = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
      }}>
      <View
        style={{
          width: Width,
          height: 100,
        }}>
        <Image source={images.label} style={{height: 100, width: Width}} />
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16}}>
          Palm oil derivatives appear in 70% of cosmetics, contributing to
          rapid deforestation, wildlife extinction and climate change.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
        <Image source={images.frog} style={{width: Width / 1.5, height: 100}} />
        <Text style={{fontSize: 16}}>
          Personal care products flushed or rinsed down the drain have been
          linked to decreased fertility and skewed sexual development in
          everything from frogs to fish.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
      </View>

      <MakeupBrands navigation={navigation} currentTab={'Makeup - Env'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupGrass;
