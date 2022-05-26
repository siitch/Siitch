import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
import {MeatBrands} from "./MeatBrands/MeatBrands";
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

        <MeatBrands navigation={navigation} currentTab={'Beef - Recycle'}/>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default Recycle;
