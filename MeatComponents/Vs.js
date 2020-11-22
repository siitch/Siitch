import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');
import {images} from '../ImageURL';
import Profiles from '../ImageDB';
import {ImageIcon} from '../ImageIcon';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
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
              width: Width / 6,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: Width / 10,
            }}>
            One of these
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
              marginLeft: Width / 10,
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
        <View style={{alignItems: 'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('What')}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            height: 50,
            borderWidth: 2,
            borderColor: '#8DC73F',
            borderRadius: 30, 
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'5%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>Doing good</Text>
          <Text style={{fontSize:16,marginTop:5}}>Ranked in no particular order.</Text>
          <Image source={images.down_arrow} style={{width:60,height:60}}></Image>
        </View>
        <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://impossiblefoods.com/grocery/')}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.beyondmeat.com/')}}>
            <Image source={images.beyond_meat} style={{width:130,height:130}}></Image>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://lightlife.com/')}}>
              <ImageIcon category='brand' image={images.lightlife}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.hungryplanetfoods.com/')}}>
              <ImageIcon category='brand' image={images.hungry_planet}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.nextlevelburger.com/')}}>
              <ImageIcon category='brand' image={images.nextlevel}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.quorn.us/')}}>
              <ImageIcon category='brand' image={images.quorn}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.bocaburger.com/')}}>
              <ImageIcon category='brand' image={images.boca}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.gardein.com/')}}>
              <ImageIcon category='brand' image={images.gardein}></ImageIcon>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{height:Height/10}}/>
      </ScrollView>
  );
};
export default Vs;
