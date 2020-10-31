import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
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
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupRecycle = ({inputData, navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>120 Billion +</Text>
        <Text style={{fontSize: 20}}>
          Units of packaging produced every year by the global cosmetics
          industry. Most of it is not recyclable.
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 40}}>
          1000 Years
        </Text>
        <Image source={images.moisture} style={{width: 150, height: 150}} />
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          The average moisturizer pot takes 1000 years to decompose
        </Text>
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
      </View>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,width:Width/1.1}}>Many companies make sustainable makeup. Here’s a few to get started, as recommended and rated by
          <Text onPress={() => Linking.openURL('https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/')} style={{color:'#00ADEF'}}> Sustainable Jungle. </Text>
        </Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://axiologybeauty.com/')}}>
              <ImageIcon category='brand' image={images.axiology_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/market/dab_herb_makeup/')}}>
              <ImageIcon category='brand' image={images.dab_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.axiology_rate}></Image>
            <Image source={images.dab_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.fatandthemoon.com/')}}>
              <ImageIcon category='brand' image={images.fat_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/shop/plantmakeup/')}}>
              <ImageIcon category='brand' image={images.plant_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.fat_rate}></Image>
            <Image source={images.plant_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/shop/NudiGoods/')}}>
              <ImageIcon category='brand' image={images.nudi_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://elatebeauty.com/')}}>
              <ImageIcon category='brand' image={images.elate_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.nudi_rate}></Image>
            <Image source={images.elate_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/shop/CleanFacedCosmetics')}}>
              <ImageIcon category='brand' image={images.cleanfaced_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://seawitchbotanicals.com/')}}>
              <ImageIcon category='brand' image={images.sea_witch_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.cleanfaced_rate}></Image>
            <Image source={images.sea_witch_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.100percentpure.com/')}}>
              <ImageIcon category='brand' image={images.percent100_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.phbethicalbeauty.co.uk/')}}>
              <ImageIcon category='brand' image={images.phb_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.percent100_rate}></Image>
            <Image source={images.phb_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://odylique.com/')}}>
              <ImageIcon category='brand' image={images.odylique_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/shop/VyanaPlantBeauty')}}>
              <ImageIcon category='brand' image={images.vyana_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.odylique_rate}></Image>
            <Image source={images.vyana_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.etsy.com/market/dirty_hippie_cosmetics')}}>
              <ImageIcon category='brand' image={images.dirty_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.biome.com.au/489_neek')}}>
              <ImageIcon category='brand' image={images.neek_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
            <Image source={images.dirty_rate}></Image>
            <Image source={images.neek_rate}></Image>
          </View>
        </View>
    </ScrollView>
  );
};
export default MakeupRecycle;
