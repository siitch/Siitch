import React from 'react';
import {images} from '../ImageURL';
import Profiles from '../ImageDB';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {MeatBrands} from "./MeatBrands/MeatBrands";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const arr = [
  {water: 1847, picture: images.beef_steak},
  {water: 718, picture: Profiles.Pork},
  {water: 518, picture: images.chicken},
  {water: 302, picture: Profiles.Tofu},
];
const Vs = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <View
        style={{
          backgroundColor: '#00adef',
          height: Height / 10,
          width:Width,
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              width: Width / 5.2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: Width / 10,
            }}>
            One lb of these
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              textAlign: 'center',
              fontSize: 20,
            }}>
            =
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 13,
              width: Width / 2.2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            This many gallons of water
          </Text>
        </View>
      </View>
      {arr.map((row, i) => (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: Width / 10,
            alignItems: 'center',
            marginTop: Height / 250,
          }}
          key={i}>
          <Image
            source={row.picture}
            style={{
              width: Width / 5,
              height: Height / 9,
              marginRight: Width / 20,
            }}
            resizeMode='contain'
          />
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <Image
              source={images.water}
              style={{width: Width / 15, height: Height / 23, marginLeft:'30%'}}
              resizeMode='contain'
            />
            <Text style={{color: '#00adef',fontWeight:'bold',fontSize:20}}>{row.water} gallons</Text>
          </View>
        </View>
      ))}

        <MeatBrands navigation={navigation} currentTab={'Beef - Vs'}/>
        <View style={{height:Height/10}}/>
      </ScrollView>
  );
};
export default Vs;
