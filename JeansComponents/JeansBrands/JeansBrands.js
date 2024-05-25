import {TouchableHighlight, View, Dimensions, Text, Image} from "react-native";
import analytics from '@react-native-firebase/analytics';
import {ImageIcon} from "../../ImageIcon";
import {images} from "../../ImageURL";
import React from "react";
import {openBrandLink, openSourceLink} from "../../util/common";
import { useNavigation } from "@react-navigation/native";
const Width = Dimensions.get('window').width;

export const JeansBrands = ({currentTab}) => {
  const navigation = useNavigation();
  const brandsList = {
    'ASKET': 'https://www.asket.com/',
    'OUTLAND DENIM': 'https://www.outlanddenim.com/',
    'patagonia': 'https://www.patagonia.com/home/',
    'Boyish': 'https://www.boyish.com/',
    'OUTERKNOWN': 'https://www.outerknown.com/',
    'AMOUR VERT': 'https://amourvert.com/',
    'CITIZENS of HUMANITY': 'https://citizensofhumanity.com/',
    'Triarchy': 'https://triarchy.com/',
    'DL 1961': 'https://www.dl1961.com/',
    'G-STAR': 'https://www.g-star.com/en_us',
  }
  const handleBrand = (brand) => {
    openBrandLink(brandsList[brand], brand)
  }
  return (
    <View style={{alignItems: 'center'}}>
      {/* What Can I Do */}
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('What', {itemName: 'Jeans'})
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
        <Text style={{fontSize: 16, width: Width / 1.3,textAlign:'center',marginTop:'2%'}}>
          U.S.A companies, as recommended by{'\n'}
          <Text
            onPress={() => {
              openSourceLink(
                'https://goodonyou.eco/',
                {
                  name: 'Good On You',
                  url: 'https://goodonyou.eco/'
                })
            }}
            style={{color: '#00ADEF'}}>
            Good On You
          </Text>
          , in random order.
        </Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}} />
      </View>

      {/* Jeans Brands */}
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('ASKET')
            }}>
            <ImageIcon category="brand" image={images.asket} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('OUTLAND DENIM')
            }}>
            <ImageIcon category="brand" image={images.outland} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('patagonia')
            }}>
            <ImageIcon category="brand" image={images.patagonia} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Boyish')
            }}>
            <ImageIcon category="brand" image={images.boyish} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('OUTERKNOWN')
            }}>
            <ImageIcon category="brand" image={images.outerknown} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('AMOUR VERT')
            }}>
            <ImageIcon category="brand" image={images.amourvert} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('CITIZENS of HUMANITY')
            }}>
            <ImageIcon category="brand" image={images.citizens} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('Triarchy')
            }}>
            <ImageIcon category="brand" image={images.triarchy} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('DL 1961')
            }}>
            <ImageIcon category="brand" image={images.dl} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              handleBrand('G-STAR')
            }}>
            <ImageIcon category="brand" image={images.g_star} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}
