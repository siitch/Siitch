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
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{marginLeft: 50, marginRight: 50}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: Height / 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>120 Billion +</Text>
        <Text style={{fontSize: 20, marginTop: 15}}>
          Units of packaging produced every year by the global cosmetics
          industry. Most of it is not recyclable.
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 40,
            color: '#A77C57',
          }}>
          1,000 Years
        </Text>
        <Image
          source={images.moisture}
          style={{width: 150, height: 150, marginTop: 10}}
        />
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: '5%'}}>
          The average moisturizer pot takes 1,000 years to decompose
        </Text>
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
            width: Width * 0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            textAlign: 'center',
          }}>
          Many companies make sustainable makeup. Here’s a few to get started,
          as recommended and rated by
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/',
              )
            }
            style={{color: '#00ADEF'}}>
            {' '}
            Sustainable Jungle.{' '}
          </Text>
        </Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}} />
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://axiologybeauty.com/');
            }}>
            <ImageIcon category="brand" image={images.axiology_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.etsy.com/market/dab_herb_makeup/');
            }}>
            <ImageIcon category="brand" image={images.dab_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.axiology_rate} />
          <Image source={images.dab_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.fatandthemoon.com/');
            }}>
            <ImageIcon category="brand" image={images.fat_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.etsy.com/shop/plantmakeup/');
            }}>
            <ImageIcon category="brand" image={images.plant_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.fat_rate} />
          <Image source={images.plant_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.etsy.com/shop/NudiGoods/');
            }}>
            <ImageIcon category="brand" image={images.nudi_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://elatebeauty.com/');
            }}>
            <ImageIcon category="brand" image={images.elate_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.nudi_rate} />
          <Image source={images.elate_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.etsy.com/shop/CleanFacedCosmetics');
            }}>
            <ImageIcon category="brand" image={images.cleanfaced_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://seawitchbotanicals.com/');
            }}>
            <ImageIcon category="brand" image={images.sea_witch_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.cleanfaced_rate} />
          <Image source={images.sea_witch_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.100percentpure.com/');
            }}>
            <ImageIcon category="brand" image={images.percent100_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.phbethicalbeauty.co.uk/');
            }}>
            <ImageIcon category="brand" image={images.phb_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.percent100_rate} />
          <Image source={images.phb_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://odylique.com/');
            }}>
            <ImageIcon category="brand" image={images.odylique_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.etsy.com/shop/VyanaPlantBeauty');
            }}>
            <ImageIcon category="brand" image={images.vyana_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.odylique_rate} />
          <Image source={images.vyana_rate} />
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL(
                'https://www.etsy.com/market/dirty_hippie_cosmetics',
              );
            }}>
            <ImageIcon category="brand" image={images.dirty_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.biome.com.au/489_neek');
            }}>
            <ImageIcon category="brand" image={images.neek_logo} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Image source={images.dirty_rate} />
          <Image source={images.neek_rate} />
        </View>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupRecycle;
