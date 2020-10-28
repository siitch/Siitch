import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Recycle = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{flexDirection: 'column', flex: 1}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.meats}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
          }}
          resizeMode='contain'
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
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
            marginTop:'20%',
          }}
          resizeMode='contain'
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20,marginTop:'20%',}}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
            marginTop:'20%',
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
            width: Width / 4,
            height: Height / 8.5,
            marginTop:'20%',
          }}
          resizeMode='contain'
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20, marginTop:'20%',}}>
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
            marginTop:'20%',
          }}>
          2 Months
        </Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - (Width/5),
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop:'10%'
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
          <Text style={{fontSize:16}}>Ranked in no particular order.</Text>
        </View>
        <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginLeft:'5%'}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            <ImageIcon category='brand' image={images.beyond_meat}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.lightlife}></ImageIcon>
            <ImageIcon category='brand' image={images.hungry_planet}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.nextlevel}></ImageIcon>
            <ImageIcon category='brand' image={images.quorn}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.boca}></ImageIcon>
            <ImageIcon category='brand' image={images.gardein}></ImageIcon>
          </View>
        </View>
    </View>
  </ScrollView>
  );
};
export default Recycle;
