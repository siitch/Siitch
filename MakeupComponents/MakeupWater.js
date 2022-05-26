import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import {MakeupBrands} from "./MakeupBrands/MakeupBrands";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupWater = () => {
  const [expand, setExpand] = useState(false);
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            width: Width / 1.2,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: Height / 20,
          }}>
          How Green is Your Makeup: {'\n'}Ingredients & Packaging?
        </Text>
        <Image
          source={images.makeup}
          style={{width: Width / 1.8, height: Height / 7}}
        />
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderWidth: 1,
            borderRadius: 15,
            width: Width * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            Each day, women use an average of 12 products that contain nearly
            170 different types of chemicals.{' '}
            {expand ? (
              <Text>
                Men use an average of six products a day and 85 unique
                chemicals.{'\n'}
                <Text>
                  &emsp;&emsp;&emsp;&emsp;&emsp;- Environmental Working Group
                </Text>
              </Text>
            ) : null}
          </Text>
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.32, marginTop: -30}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.32, marginTop: -30}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          70 - 80%{' '}
          <Image
            source={images.water}
            style={{width: 10, height: 25, marginLeft: 10}}
          />
        </Text>
        <Text style={{fontSize: 16}}>
          On average, a standard cosmetic product (cream, lotion, etc.)
          comprises between{' '}
          <Text style={{fontWeight: 'bold'}}>70 and 80% </Text>of water.
        </Text>
      </View>

      <MakeupBrands currentTab={'Makeup - Water'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupWater;
