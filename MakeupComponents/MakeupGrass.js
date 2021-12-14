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
import * as Analytics from "expo-firebase-analytics";
import * as WebBrowser from "expo-web-browser";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupGrass = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
      }}>
      <View
        style={{
          width: Width,
          height: 100,
        }}>
        <Image source={images.label} style={{height: 100, width: Width}} />
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16}}>
          Palm oil derivatives appear in 70% of cosmetics, contributing to
          rapid deforestation, wildlife extinction and climate change.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
        <Image source={images.frog} style={{width: Width / 1.5, height: 100}} />
        <Text style={{fontSize: 16}}>
          Personal care products flushed or rinsed down the drain have been
          linked to decreased fertility and skewed sexual development in
          everything from frogs to fish.
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 60}}>
          <Text>-</Text>
          <Text>Kostigen, The Green Blue Book</Text>
        </View>
      </View>

      <TouchableHighlight
        onPress={() => {
            navigation.navigate('What')
            Analytics.logEvent('What_can_I_do',{
                item: 'Makeup - Env'
            })
        }}
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
            onPress={() => {
                WebBrowser.openBrowserAsync(
                    'https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/',
                )
                Analytics.logEvent('Source_click',{
                    source_name: 'Sustainable Jungle',
                    source_url: 'https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/'
                })
            }
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
                        WebBrowser.openBrowserAsync('https://axiologybeauty.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'AXIOLOGY beauty'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.axiology_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.etsy.com/market/dab_herb_makeup/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Dab Herb Makeup'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.fatandthemoon.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'FAT AND THE MOON'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.fat_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.etsy.com/shop/plantmakeup/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Plant Makeup'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.etsy.com/shop/NudiGoods/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Nudi Goods'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.nudi_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://elatebeauty.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'elate beauty'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.etsy.com/shop/CleanFacedCosmetics');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Clean Faced Cosmetics'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.cleanfaced_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://seawitchbotanicals.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Sea Witch Botanicals'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.100percentpure.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: '100% pure'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.percent100_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.phbethicalbeauty.co.uk/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'PHB ETHICAL BEAUTY'
                        })
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
                        WebBrowser.openBrowserAsync('https://odylique.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'ODYLIQUE'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.odylique_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.etsy.com/shop/VyanaPlantBeauty');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Vyana Plant Beauty'
                        })
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
                        WebBrowser.openBrowserAsync(
                            'https://www.etsy.com/market/dirty_hippie_cosmetics',
                        );
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Dirty Hippie Cosmetics'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.dirty_logo} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.biome.com.au/489_neek');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'NEEK'
                        })
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
export default MakeupGrass;
