import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {images} from '../ImageURL';
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
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const WhatMakeUp = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{width: Width, alignItems: 'center', marginTop: Height / 20}}>
        <Text style={{fontSize: 24, alignContent: 'center'}}>
          What Can I do?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: '5%'}}>
        <Image
          source={images.nail_polish}
          style={{width: Width / 1.5, height: Height / 4}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Do an Eco-Audit
      </Text>
      <View
        style={{
          backgroundColor: '#EF7A6A',
          borderColor: '#EF7A6A',
          borderRadius: 10,
          width: Width / 1.2,
          marginLeft: '10%',
        }}>
        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
          Why do an eco-audit? When you know your impact, you can make simple
          changes that have major benefits.
        </Text>
        {expand1 ? (
          <View style={{marginTop: 20}}>
            <Text style={{marginLeft: 20, marginRight: 20}}>
              It’s easy. Awareness starts with with counting. Count how many
              products:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text>- </Text>
              <Text>are on your bathroom vanity</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>- </Text>
              <Text>are in your shower</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>- </Text>
              <Text>how many are plastic?</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>- </Text>
              <Text>how many are glass?</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>- </Text>
              <Text>
                how often do you buy them: every week, and every year?
              </Text>
            </View>
            <Text style={{marginLeft: 20, marginRight: 20, marginTop: '5%'}}>
              Add up the numbers up and take a minute to think - where can you
              cut back?
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
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image source={images.waterless} resizeMode="contain" />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Consider Going Waterless
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Beyond the obvious water-saving benefits of waterless makeup, per
        Cosmetics Business, there are other benefits as well - Reduction of
        packaging, Reduction or elimination of preservatives, Reduction of CO2
        emissions and energy consumption.
        <Text
          onPress={() =>
            Linking.openURL(
              'https://www.cosmeticsbusiness.com/news/article_page/Blue_gold_Water_in_cosmetics/156328',
            )
          }
          style={{color: '#00ADEF'}}>
          {' '}
          more info
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Go Eco-Friendly
      </Text>
      <View
        style={{
          backgroundColor: '#EF7A6A',
          borderColor: '#EF7A6A',
          borderRadius: 10,
          width: Width / 1.2,
          marginLeft: '10%',
        }}>
        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
          Want to make a difference? Eliminate single use plastics and jars.
          Think refill, not landfill.
        </Text>
        {expand2 ? (
          <View style={{marginTop: 20}}>
            <Text style={{marginLeft: 20, marginRight: 20}}>
              Your bottles, pumps, tubes and jars have a major impact. Support
              brands that:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text>1)</Text>
              <Text> Use refillable aluminum or glass bottles</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>2)</Text>
              <Text> Help you commit to refillable makeup routiner</Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
              <Text>3)</Text>
              <Text>
                {' '}
                Use earth-friendly, reusable, biodegradable packaging made from
                100% recyclable material
              </Text>
            </View>
            <Text style={{marginLeft: 20, marginRight: 20, marginTop: '5%'}}>
              For more zero-waste tips and solutions:
            </Text>
            <Text
              onPress={() => Linking.openURL('https://www.goingzerowaste.com/')}
              style={{marginLeft: 20, marginRight: 20, color: '#00ADEF'}}>
              Going Zero Waste
            </Text>
            <Text
              onPress={() => Linking.openURL('https://packagefreeshop.com/')}
              style={{marginLeft: 20, marginRight: 20, color: '#00ADEF'}}>
              Package Free Shop
            </Text>
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
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image source={images.donotpour} resizeMode="contain" />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Do not pour
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Do not pour cosmetics, moisturizers, shampoos, liquid soaps etc down the
        sink or in the toilet. They contain toxic chemicals like parabens, lead,
        triclosan, DBP, microbeads, BHA and more.
      </Text>
      <Text
        style={{
          fontSize: 16,
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '5%',
          marginRight: '10%',
        }}>
        More info:
      </Text>
      <Text style={{marginLeft: '10%', marginRight: '10%'}}>
        <Text
          onPress={() =>
            Linking.openURL('https://homehacks.co/upcycle-old-perfume-bottles/')
          }
          style={{color: '#00ADEF'}}>
          The Toxic 12 Chemicals and Contaminants in Your Cosmetic
        </Text>
        <Text> - EWG</Text>
      </Text>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image
          source={images.upcycle}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Upcycle
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Use old makeup palettes to store pills, jewelry, bobby pins. Use old
        nail polish to liven up old glasses. Here’s
        <Text
          onPress={() =>
            Linking.openURL('https://homehacks.co/upcycle-old-perfume-bottles/')
          }
          style={{color: '#00ADEF'}}>
          {' '}
          15 ways to upcycle old perfume bottles by HomeHacks.
        </Text>
      </Text>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image
          source={images.recycle_mk}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Recyle
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Recycling is complicated. Gone are the days where we could simply throw
        things in the recycle container. How to make a difference:
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '5%',
          marginRight: '10%',
        }}>
        1. Find out what can, and can’t be recycled in your area. Google
        ‘Recycle Center near me’
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '5%',
          marginRight: '10%',
        }}>
        <Text>2. Sign up for </Text>
        <Text
          onPress={() => Linking.openURL('https://www.terracycle.com/en-US/')}
          style={{color: '#00ADEF'}}>
          Terracycle.
        </Text>
        <Text>They specialize in hard to recycle waste.</Text>
      </Text>
      <View style={{alignItems: 'center'}}>
        <Image
          source={images.Know_Your_Labels}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
        }}>
        Read Labels: Don’t be fooled
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        ‘Natural’ & ‘Clean’ are marketing terms with zero substance. Get to know
        what is real vs. fake. To learn more, check out
        <Text
          onPress={() =>
            Linking.openURL(
              'https://www.schoolofnaturalskincare.com/how-to-read-a-cosmetic-label/',
            )
          }
          style={{color: '#00ADEF'}}>
          {' '}
          How to Read a Cosmetic Label
        </Text>
      </Text>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image source={images.green_dollar} />
      </View>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Support
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Support brands doing good. See our list and search for others.
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Ask
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Ask before you buy: Is this refillable? Does the brand have a recycling
        program? Is this good for my skin? Is this good for the planet?
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          fontWeight: 'bold',
          marginLeft: '10%',
          marginTop: '5%',
        }}>
        Hold
      </Text>
      <Text
        style={{
          alignContent: 'center',
          marginLeft: '10%',
          marginTop: '2%',
          marginRight: '10%',
        }}>
        Hold brands accountable. If your favorite brands aren’t doing enough
        with product testing, packaging or recycling programs, reach out via
        their social media or Contact page. Ask about their sustainability
        strategies. If their answers don’t satisfy you, shop elsewhere.
      </Text>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default WhatMakeUp;
