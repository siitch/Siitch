import {Dimensions, Image, Text, TouchableHighlight, View} from "react-native";
import analytics from '@react-native-firebase/analytics';
import {ImageIcon} from "../../ImageIcon";
import {images} from "../../ImageURL";
import React from "react";
import { openBrandLink } from "../../util/common";
const Width = Dimensions.get('window').width;

export const MeatBrands = ({navigation, currentTab}) => {
  const brandsList = {
    'IMPOSSIBLE foods': 'https://impossiblefoods.com/grocery/',
    'BEYOND MEAT': 'https://www.beyondmeat.com/',
    'Lightlife': 'https://lightlife.com/',
    'HUNGRY PLANET foods': 'https://www.hungryplanetfoods.com/',
    'Next Level Burger': 'https://www.nextlevelburger.com/',
    'Quorn': 'https://www.quorn.us/',
    'BOCA burger': 'https://www.bocaburger.com/',
    'gardein': 'https://www.gardein.com/'
  }
  const handleBrand = (brand) => {
    openBrandLink(brandsList[brand], brand)
  }
  return (
    <View style={{alignItems: 'center'}}>
      {/* What Can I Do*/}
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
        <Text style={{fontSize: 16, marginTop: 5, textAlign: 'center'}}>
          Ranked in no particular order.{'\n'}
          Click on these companies to see{'\n'}
          how they're making a difference.
        </Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}} />
      </View>

      {/* Meat Brands */}
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('IMPOSSIBLE foods')
            }}>
            <ImageIcon category="brand" image={images.impossible} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('BEYOND MEAT')
            }}>
            <Image
              source={images.beyond_meat}
              style={{width: 130, height: 130}}
            />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Lightlife')
            }}>
            <ImageIcon category="brand" image={images.lightlife} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('HUNGRY PLANET foods')
            }}>
            <ImageIcon category="brand" image={images.hungry_planet} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Next Level Burger')
            }}>
            <ImageIcon category="brand" image={images.nextlevel} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Quorn')
            }}>
            <ImageIcon category="brand" image={images.quorn} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('BOCA burger')
            }}>
            <ImageIcon category="brand" image={images.boca} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('gardein')
            }}>
            <ImageIcon category="brand" image={images.gardein} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}
