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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const itemArr = [
  {name: 'Food & Water', img: images.vsMeat, img2: images.FDA},
  {name: 'Pharmaceutical Drugs', img: images.drug, img2: images.FDA},
  {name: 'Vaccines', img: images.needle, img2: images.FDA},
  {
    name: 'Cosmetic Chemicals',
    img: images.chemicals,
    img2: images.questionMark,
  },
];

const MakeupVs = ({inputData, navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: Height / 20,
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={{fontSize: 25}}>Who is regulating?</Text>
        <View style={{marginLeft: 20, marginRight: 20}}>
          {itemArr.map((item, index) => (
            <View style={{flexDirection: 'row', marginTop: 20}} key={index}>
              <Image source={item.img} style={{width: 50, height: 50}} />
              <View
                style={{
                  width: Width / 2,
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 20}}>{item.name}</Text>
              </View>
              <Image
                source={item.img2}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ))}
          <Text style={{marginTop: 20}}>
            With the exception of color additivies, the Food and Drug
            Administration lacks the power and resources to review the safety of
            chemicals in cosmetics before they are used.
          </Text>
          <Text style={{marginLeft: Width / 1.5}}>- EWG</Text>
        </View>
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
            width: Width * 0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.1}}>
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
export default MakeupVs;
