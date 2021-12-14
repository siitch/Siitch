import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  Image,
  Dimensions,
} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import * as WebBrowser from "expo-web-browser";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MakeupHeart = ({inputData, navigation}) => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{marginLeft: 50, marginRight: 50}}>
      <View style={{marginTop: Height / 20, alignItems: 'center'}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>1400 vs. 30</Text>
        <Text style={{fontSize: 20, marginTop: 15}}>
          The European Union has banned {'\n'}or restriced 1400 ingredients.{' '}
          {'\n'}The U.S? Only 30.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>89%</Text>
        </View>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width * 0.9,
            marginTop: 5,
          }}>
          <Text style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
            89% of U.S. cosmetics ingredients have not been tested publically
            for safety. Cosmetics products are not subject to FDA approval.
          </Text>
          {expand1 ? (
            <View style={{marginTop: 20}}>
              <Text style={{marginLeft: 20, marginRight: 20}}>
                Most industries have watchdogs. With cosmetics, you have to
                watch our for yourself. How? Start with this article from{' '}
                <Text
                  style={{textDecorationLine: 'underline'}}
                  onPress={() => {
                      WebBrowser.openBrowserAsync('https://thegoodfaceproject.com/articles/check-ingredients-in-cosmetics')
                      analytics().logEvent('Source_click',{
                          source_name: 'The Good Face Project On How to Check Cosmetic Ingredients for Safety',
                          source_url: 'https://thegoodfaceproject.com/articles/check-ingredients-in-cosmetics'
                      })
                  }}>
                  The Good Face Project On How to Check Cosmetic Ingredients for
                  Safety.
                </Text>
              </Text>
              <TouchableHighlight
                style={{marginLeft: Width / 1.32, marginTop: -30}}
                onPress={() => setExpand1(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.32, marginTop: -30}}
              onPress={() => setExpand1(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <Image
          source={images.perfume}
          style={{width: 80, height: 80, marginTop: 20, marginBottom: 20}}
        />
        <Text>Great Resouces: </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
              WebBrowser.openBrowserAsync('https://www.ewg.org')
              analytics().logEvent('Source_click',{
                  source_name: 'EWG',
                  source_url: 'https://www.ewg.org'
              })
          }}>
          EWG
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
              WebBrowser.openBrowserAsync('https://www.thinkdirtyapp.com')
              analytics().logEvent('Source_click',{
                  source_name: 'Think Dirty',
                  source_url: 'https://www.thinkdirtyapp.com'
              })
          }}>
          Think Dirty
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
              WebBrowser.openBrowserAsync('http://www.safecosmetics.org')
              analytics().logEvent('Source_click',{
                  source_name: 'SafeCosmetic.org',
                  source_url: 'http://www.safecosmetics.org'
              })
          }}>
          SafeCosmetic.org
        </Text>
        <Text style={{fontSize: 28, marginTop: 20, fontWeight: 'bold'}}>
          1938
        </Text>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width * 0.9,
            marginTop: 10,
          }}>
          <Text style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
            The last time the FDA passed a bill regulating the safety of
            cosmetic products was 1938. Why?
          </Text>
          {expand2 ? (
            <View>
              <View style={{marginLeft: 20, marginRight: 20}}>
                <Text style={{marginTop: 10}}>
                  The cosmetics business is a $60 billion industry in the USA.
                  $440 billion worldwide.
                </Text>
                <Text style={{marginTop: 10}}>
                  Their lobbying power is ... strong.
                </Text>
                <Text style={{marginTop: 10}}>
                  If you're interested in learning more:
                </Text>
                <Text
                  style={{textDecorationLine: 'underline', marginTop: 10}}
                  onPress={() => {
                      WebBrowser.openBrowserAsync('https://www.ewg.org/news-insights/news/80-years-later-cosmetics-chemicals-still-unregulated')
                      analytics().logEvent('Source_click',{
                          source_name: '80 Years Later, Cosmetic Chemical Still Unregulated',
                          source_url: 'https://www.ewg.org/news-insights/news/80-years-later-cosmetics-chemicals-still-unregulated'
                      })
                  }}>
                  80 Years Later, Cosmetic Chemical Still Unregulated.
                  <Text>- EWG</Text>
                </Text>
                <Text
                  style={{textDecorationLine: 'underline', marginTop: 10}}
                  onPress={() => {
                      WebBrowser.openBrowserAsync('https://www.byrdie.com/banned-ingredients-europe')
                      analytics().logEvent('Source_click',{
                          source_name: '9 Beauty Ingredients That Are Banned Overseas',
                          source_url: 'https://www.byrdie.com/banned-ingredients-europe'
                      })
                  }}>
                  9 Beauty Ingredients That Are Banned Overseas (But Legal in
                  the U.S.) - Byrdie
                  <Text>- EWG</Text>
                </Text>
              </View>

              <TouchableHighlight
                style={{marginLeft: Width / 1.32, marginTop: -30}}
                onPress={() => setExpand2(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.32, marginTop: -30}}
              onPress={() => setExpand2(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            marginTop: 10,
            width: Width * 0.9,
          }}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>
            1938 Food, Drug, Cosmetic Act
          </Text>
          {expand3 ? (
            <View style={{marginTop: 10}}>
              <Text style={{marginLeft: 20, marginRight: 20}}>
                FDR signed the Food, Drug, and Cosmetic Act on 25 June 1938. The
                new law brought cosmetics and medical devices under control...
                The 1938 act required colors to be certified as harmless and
                suitable by the FDA for their use in cosmetics. The 1960 color
                amendments strengthened the safety requirement for color
                additives, necessitating additional testing for many existing
                color additives to meet the new safety standard. The FDA
                attempted to interpret the new law as applying to every
                ingredient of color-imparting products, such as lipstick and
                rouge, but the courts rebuffed this proposal. - FDA.gov
              </Text>
              <TouchableHighlight
                style={{marginLeft: Width / 1.32, marginTop: -30}}
                onPress={() => setExpand3(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.32, marginTop: -30}}
              onPress={() => setExpand3(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <TouchableHighlight
          onPress={() => {
              navigation.navigate('What')
              analytics().logEvent('What_can_I_do',{
                  item: 'Makeup - Health'
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
export default MakeupHeart;
