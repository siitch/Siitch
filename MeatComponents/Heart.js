import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
import What from './What';
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
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{paddingTop: Height / 20,width:Width}}>
      <View style={{flexDirection: 'row',alignItems:'center',marginLeft:30}}>
        <Text style={{width:Width*1.6/3,fontSize:16}}>
          Reducing red meat intake can have numerous health benefits, including a lower risk of developing type 2 diabetes, cardiovascular disease, and certain cancers.
        </Text>
        <View style={{width:Width*1.1/3,alignItems:'center',marginLeft:5}}>
        <Image source={images.heart_small} style={{width:110,height:110}} resizeMode='contain'/>
        </View>
      </View>
      <Text style={{marginLeft:'10%',marginTop:'2%',fontSize:12}}>- News Medical Life Sciences</Text>
      <View style={{flexDirection: 'row',marginTop:Height/20}}>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center',fontSize:16}}>Type 2{'\n'} Diabetes</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center', fontSize:16, marginLeft: '10%'}}>
            Cardiovascular{'\n'}Disease
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center',fontSize:16}}>Certain{'\n'}Cancers</Text>
        </View>
      </View>

      <View style={{alignItems: 'center',marginTop:-15}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('What')}
          activeOpacity={1}
          underlayColor="#8DC73F"
          style={{
            backgroundColor: '#8DC73F',
            height: 50,
            borderWidth: 2,
            borderColor: '#8DC73F',
            borderRadius: 20, 
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'15%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
        </View>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
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
    </View>
    <View style={{height:Height/10}}/>
  </ScrollView>
  );
};
export default Heart;
