import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import * as WebBrowser from "expo-web-browser";
import analytics from '@react-native-firebase/analytics';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Recycle = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          marginTop: Height / 20,
          width: Width,
        }}>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={images.meats}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
            }}
            resizeMode="contain"
          />
          <Text style={{width: 120, textAlign: 'center', fontSize: 16}}>
            Time to {'\n'}grow
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              width: Width / 3.5,
              fontSize: 16,
              textAlign: 'center',
            }}>
            3 yrs
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={images.compost}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
              marginTop: '10%',
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              width: 120,
              textAlign: 'center',
              fontSize: 16,
              marginTop: '10%',
            }}>
            Compostable?
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              textAlign: 'center',
              width: Width / 3.5,
              fontSize: 16,
              marginTop: '10%',
            }}>
            Professional Only
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: Height / 20,
          }}>
          <Image
            source={images.clock}
            style={{
              marginLeft: Width / 40,
              marginRight: Width / 40,
              width: Width / 3,
              height: Height / 10,
              marginTop: '10%',
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              width: 120,
              textAlign: 'center',
              fontSize: 16,
              marginTop: '10%',
            }}>
            Time to{'\n'}decompose
          </Text>
          <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
          <Text
            style={{
              marginLeft: Width / 30,
              width: Width / 3.5,
              fontSize: 16,
              textAlign: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            2 Months
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: -35}}>
          <TouchableHighlight
            onPress={() => {
                navigation.navigate('What')
                analytics().logEvent('What_can_I_do',{
                    item: 'Beef - Recycle'
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
        </View>
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
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                  <TouchableHighlight
                      activeOpacity={1}
                      underlayColor="transperant"
                      style={{width: Width / 2, alignItems: 'center'}}
                      onPress={() => {
                          WebBrowser.openBrowserAsync('https://impossiblefoods.com/grocery/');
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
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
                          analytics().logEvent('Doing_good',{
                              brandName: 'gardein'
                          })
                      }}>
                      <ImageIcon category="brand" image={images.gardein} />
                  </TouchableHighlight>
              </View>
          </View>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default Recycle;
