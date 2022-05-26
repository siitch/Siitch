import React from 'react';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import {ArrowIcon} from './ArrowIcon';

import {
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';
import {images} from '../ImageURL';
import { MeatBrands } from "./MeatBrands/MeatBrands";
const Height = Dimensions.get('window').height;

const Grass = ({inputData, navigation}) => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            marginTop: Height / 20 + 20,
            marginRight:'10%',
            marginLeft:'10%'
          }}>
          <View style={{width: width/4,alignItems:'center'}}>
            <Image
              source={require('./../images/Beef/Beef_Earth/graphic_large.png')}
              style={{width: 150, height: 150,}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width*2.2/4,marginLeft:'10%',flexDirection: 'column'}}>
            <Image
              source={require('./../images/Beef/Beef_Earth/treestump_small.png')}
              style={{width: 50, height: 50,marginTop:-20,marginLeft:130}}
              resizeMode="contain"
            />
            <View style={{alignItems:'center',marginTop:10,marginRight:30}}>
              <Text style={{fontSize: 16}}>
                Livestock production uses 75% of earth’s agricultural land and
                is a leading driver for global deforestation.
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10}}>
                - Climate Nexus;
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 10}}>
                Our World in Data
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: Height / 50,
            marginRight:'10%',
            marginLeft:'5%'
          }}>
          <Image
            style={{width: 170, height: 170}}
            source={images.car}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: '15%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop:'-15%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>29 mi.</Text>
                <ArrowIcon w={120}/>
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '35%'}}
                source={images.steak_small}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop:10
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', paddingLeft: 9}}>3 mi.</Text>
                <ArrowIcon w={30} />
              </View>
              <Image
                style={{width: 50, height: 50, marginLeft: '35%'}}
                source={images.broccolli}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center',width:width,marginTop:10}}>
          <View style={{flexDirection: 'row', width: width / 1.5}}>
            <Text style={{fontSize:16}}>
              The pollution generated in producing a typical 8 ounce steak is
              equivalent to driving a small car for 29 milies.
            </Text>
          </View>
        </View>

        <MeatBrands navigation={navigation} currentTab={'Beef - Env'}/>
        <View style={{height:Height/10}}/>
      </ScrollView>
    </View>
  );
};
export default Grass;
