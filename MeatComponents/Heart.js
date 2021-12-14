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
import * as WebBrowser from "expo-web-browser";
import * as Analytics from "expo-firebase-analytics";
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
        <Image source={images.heart_large} style={{width:110,height:110}} resizeMode='contain'/>
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
          onPress={() => {
              navigation.navigate('What')
              Analytics.logEvent('What_can_I_do',{
                  item: 'Beef - Health'
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
            width: Width*0.9,
            textAlign: 'center',
            fontSize: 20,
            marginTop:'15%',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
        </TouchableHighlight>
        </View>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,marginTop:5}}>Ranked in no particular order.</Text>
        <Image source={images.down_arrow} style={{width: 60, height: 60}}/>
      </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://impossiblefoods.com/grocery/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'IMPOSSIBLE foods'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.impossible} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.beyondmeat.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'BEYOND MEAT'
                        })
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
                        WebBrowser.openBrowserAsync('https://lightlife.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Lightlife'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.lightlife} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.hungryplanetfoods.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'HUNGRY PLANET foods'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.nextlevelburger.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Next Level Burger'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.nextlevel} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.quorn.us/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'Quorn'
                        })
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
                        WebBrowser.openBrowserAsync('https://www.bocaburger.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'BOCA burger'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.boca} />
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transperant"
                    style={{width: Width / 2, alignItems: 'center'}}
                    onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.gardein.com/');
                        Analytics.logEvent('Doing_good',{
                            brandName: 'gardein'
                        })
                    }}>
                    <ImageIcon category="brand" image={images.gardein} />
                </TouchableHighlight>
            </View>
        </View>
    </View>
    <View style={{height:Height/10}}/>
  </ScrollView>
  );
};
export default Heart;
