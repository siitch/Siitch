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
import {ImageIcon} from '../ImageIcon';
import analytics from '@react-native-firebase/analytics';
import * as WebBrowser from 'expo-web-browser';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupWater = ({inputData, navigation}) => {
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

      <TouchableHighlight
        onPress={() => {
            navigation.navigate('What')
            analytics().logEvent('What_can_I_do',{
                item: 'Makeup - Water'
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
                analytics().logEvent('Source_click',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
                analytics().logEvent('Doing_good',{
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
export default MakeupWater;
