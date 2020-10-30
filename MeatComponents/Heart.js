import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
import What from './What';
import {ArrowIconCol} from './ArrowIconCol';
import {ImageIcon} from '../ImageIcon';
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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Heart = ({navigation, inputData}) => {
  return (
    <ScrollView>
    <View style={{paddingTop: Height / 20}}>
      <View style={{flexDirection: 'row',marginLeft:10}}>
        <Text style={{width: Width / 1.3}}>
          Reducing red meat intake can have numerous health benefits, including a lower risk of developing type 2 diabetes, cardiovascular disease, and certain cancers.
        </Text>
        <Image source={images.heart_small} resizeMode='contain'/>
      </View>
      <Text style={{marginLeft:'40%',marginTop:'2%',fontSize:12}}>- News Medical Life Sciences</Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#EF7A6A',
          marginTop: '10%',
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ArrowIconCol h={90} />
          <Text style={{alignItems: 'center'}}>Type 2{'\n'} Diabetes</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ArrowIconCol h={120} />
          <Text style={{alignItems: 'center', marginLeft: '10%'}}>
            Cardiovascular{'\n'}Disease
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ArrowIconCol h={90} />
          <Text style={{alignItems: 'center'}}>Certain{'\n'}Cancers</Text>
        </View>
      </View>

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
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16}}>Ranked in no particular order.</Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://impossiblefoods.com/grocery/')}}>
            <ImageIcon category='brand' image={images.impossible}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.beyondmeat.com/')}}>
            <ImageIcon category='brand' image={images.beyond_meat}></ImageIcon>
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
    </View>
  </ScrollView>
  );
};
export default Heart;
