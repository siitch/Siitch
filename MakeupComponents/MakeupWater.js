import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import {images} from '../ImageURL';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupWater = ({inputData, navigation}) => {
  const [expand, setExpand] = useState(false);
  return (
    <ScrollView
      style={{marginTop: Height / 20}}
      contentContainerStyle={{alignItems: 'center'}}>
      {!expand ? (
        <View>
          <Text style={{width: Width / 1.2, textAlign: 'center', fontSize: 25}}>
            How Green is Your Makeup: {'\n'}Ingredients & Packaging?
          </Text>
          <Image
            source={images.makeup}
            style={{width: Width / 1.2, height: Height / 3}}
          />
          <View
            style={{
              marginTop: Height / 10,
              backgroundColor: '#3AADFA',
              borderColor: '#3AADFA',
              borderWidth: 1,
              borderRadius: 15,
              width: Width / 1.2,
              height: Height / 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22}}>
              Each day, women use an average of {'\n'} 12 products that contain
              nearly 170 different types of chemical.
            </Text>
            <TouchableHighlight
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>
            70 - 80%{' '}
            <Image
              source={images.water}
              style={{width: Width / 20, height: Height / 30}}
            />
          </Text>
          <Text style={{marginTop: Height / 20, textAlign: 'center'}}>
            On average, a standard cosmetic product {'\n'} (cream, lotion, etc.)
            comprises between{' '}
            <Text style={{fontWeight: 'bold'}}>70 and 80% </Text>of water
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={images.coconut}
                style={{
                  width: Width / 5,
                  height: Height / 10,
                  marginRight: Width / 10,
                }}
              />
              <Text>762 gal/lb</Text>
            </View>
            <View>
              <Image
                source={images.cocoa}
                style={{width: Width / 5, height: Height / 10}}
              />
              <Text>6808 gal/lb</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: Height / 10,
              backgroundColor: '#3AADFA',
              borderColor: '#3AADFA',
              borderWidth: 1,
              borderRadius: 15,
              width: Width / 1.2,
              height: Height / 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22}}>
              Moisturizers, for exapmle, come in {'\n'} two types: water and oil
              based.
            </Text>
            <TouchableHighlight
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          </View>
        </View>
      )}
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - Width / 5,
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};
export default MakeupWater;
