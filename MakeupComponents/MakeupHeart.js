import React, {useState} from 'react';
import {images} from '../ImageURL';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';
import {MakeupBrands} from "./MakeupBrands/MakeupBrands";
import {openSourceLink} from "../util/common";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MakeupHeart = () => {
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
                    openSourceLink(
                      'https://thegoodfaceproject.com/articles/check-ingredients-in-cosmetics',
                      {
                        name: 'The Good Face Project On How to Check Cosmetic Ingredients for Safety',
                        url: 'https://thegoodfaceproject.com/articles/check-ingredients-in-cosmetics'
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
            openSourceLink(
              'https://www.ewg.org',
              {
                name: 'EWG',
                url: 'https://www.ewg.org'
              })
          }}>
          EWG
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            openSourceLink(
              'https://www.thinkdirtyapp.com',
              {
                name: 'Think Dirty',
                url: 'https://www.thinkdirtyapp.com'
              })
          }}>
          Think Dirty
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            openSourceLink(
              'https://www.safecosmetics.org',
              {
                name: 'SafeCosmetic.org',
                url: 'https://www.safecosmetics.org'
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
                    openSourceLink(
                      'https://www.ewg.org/news-insights/news/80-years-later-cosmetics-chemicals-still-unregulated',
                      {
                        name: '80 Years Later, Cosmetic Chemical Still Unregulated',
                        url: 'https://www.ewg.org/news-insights/news/80-years-later-cosmetics-chemicals-still-unregulated'
                      })
                  }}>
                  80 Years Later, Cosmetic Chemical Still Unregulated.
                  <Text>- EWG</Text>
                </Text>
                <Text
                  style={{textDecorationLine: 'underline', marginTop: 10}}
                  onPress={() => {
                    openSourceLink(
                      'https://www.byrdie.com/banned-ingredients-europe',
                      {
                        name: '9 Beauty Ingredients That Are Banned Overseas',
                        url: 'https://www.byrdie.com/banned-ingredients-europe'
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
      </View>

      <MakeupBrands currentTab={'Makeup - Health'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupHeart;
