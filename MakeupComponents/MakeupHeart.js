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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MakeupHeart = ({inputData, navigation}) => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: Height / 20, alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>1400 V.S 30</Text>
        <Text style={{fontSize: 20}}>
          The European Union has banned {'\n'}or restriced 1400 ingredients.{' '}
          {'\n'}The U.S? Only 30.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 25}}>89%</Text>
          <Image source={images.exclamation} style={{width: 25, height: 25}} />
        </View>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width / 1.2,
            marginTop: 10,
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
                  onPress={() => Linking.openURL('https://www.google.com/')}>
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
          style={{width: 80, height: 80, marginTop: 20}}
        />
        <Text>Great Resouces: </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          EWG
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          Think Dirty
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          SafeCosmetic.org
        </Text>
        <Text style={{fontSize: 25, marginTop: 20, fontWeight: 'bold'}}>
          1938
        </Text>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width / 1.2,
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
                  onPress={() => Linking.openURL('https://www.google.com/')}>
                  80 Years Later, Cosmetic Chemical Still Unregulated.
                  <Text>- EWG</Text>
                </Text>
                <Text
                  style={{textDecorationLine: 'underline', marginTop: 10}}
                  onPress={() => Linking.openURL('https://www.google.com/')}>
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
            width: Width / 1.2,
          }}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>
            1938 Food, Drug, Cosmetic Art
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
export default MakeupHeart;
