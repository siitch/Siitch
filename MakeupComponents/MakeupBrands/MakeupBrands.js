import {Image, TouchableHighlight, View, Dimensions, Text} from "react-native";
import analytics from '@react-native-firebase/analytics';
import {ImageIcon} from "../../ImageIcon";
import {images} from "../../ImageURL";
import React from "react";
import {openBrandLink, openSourceLink} from "../../util/common";
import { useNavigation } from "@react-navigation/native";
const Width = Dimensions.get('window').width;

export const MakeupBrands = ({currentTab}) => {
  const navigation = useNavigation();
  const brandsList = {
    'AXIOLOGY beauty': 'https://axiologybeauty.com/',
    'Dab Herb Makeup': 'https://www.etsy.com/market/dab_herb_makeup/',
    'FAT AND THE MOON': 'https://www.fatandthemoon.com/',
    'Plant Makeup': 'https://www.etsy.com/shop/plantmakeup/',
    'Nudi Goods': 'https://www.etsy.com/shop/NudiGoods/',
    'elate beauty': 'https://elatebeauty.com/',
    'Clean Faced Cosmetics': 'https://www.etsy.com/shop/CleanFacedCosmetics',
    'Sea Witch Botanicals': 'https://seawitchbotanicals.com/',
    '100% pure': 'https://www.100percentpure.com/',
    'PHB ETHICAL BEAUTY': 'https://www.phbethicalbeauty.co.uk/',
    'ODYLIQUE': 'https://odylique.com/',
    'Vyana Plant Beauty': 'https://www.etsy.com/shop/VyanaPlantBeauty',
    'Dirty Hippie Cosmetics': 'https://www.etsy.com/market/dirty_hippie_cosmetics',
    'NEEK': 'https://www.biome.com.au/489_neek',
  }
  const handleBrand = (brand) => {
    openBrandLink(brandsList[brand], brand)
  }
  return (
    <View style={{alignItems: 'center'}}>
      {/* What Can I Do */}
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('What')
          analytics().logEvent('What_can_I_do',{
            item: currentTab
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
              openSourceLink(
                'https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/',
                {
                  name: 'Sustainable Jungle',
                  url: 'https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/'
                })
            }}
            style={{color: '#00ADEF'}}> Sustainable Jungle.
          </Text>
        </Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}} />
      </View>
      {/* Makeup brands */}
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('AXIOLOGY beauty')
            }}>
            <ImageIcon category="brand" image={images.axiology_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Dab Herb Makeup')
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
              handleBrand('FAT AND THE MOON')
            }}>
            <ImageIcon category="brand" image={images.fat_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Plant Makeup')
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
              handleBrand('Nudi Goods')
            }}>
            <ImageIcon category="brand" image={images.nudi_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('elate beauty')
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
              handleBrand('Clean Faced Cosmetics')
            }}>
            <ImageIcon category="brand" image={images.cleanfaced_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Sea Witch Botanicals')
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
              handleBrand('100% pure')
            }}>
            <ImageIcon category="brand" image={images.percent100_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('PHB ETHICAL BEAUTY')
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
              handleBrand('ODYLIQUE')
            }}>
            <ImageIcon category="brand" image={images.odylique_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Vyana Plant Beauty')
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
              handleBrand('Dirty Hippie Cosmetics')
            }}>
            <ImageIcon category="brand" image={images.dirty_logo} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('NEEK')
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
    </View>
  )
}
