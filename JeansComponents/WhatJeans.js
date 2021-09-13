import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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
import {images} from '../ImageURL';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const WhatJeans = () => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: Height / 20, fontSize: 24,fontWeight:'bold'}}>
          What Can I do?
        </Text>
      </View>
      <View style={{marginLeft: '10%', marginRight: '10%',marginTop:'5%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Reduce</Text>
        <Text style={{textAlign: 'left',fontSize: 16}}>
          The only way to truly make a meaningful impact is to consume less.
          Contemplate if you really need that new pair of jeans.
        </Text>
      </View>
      <View style={{marginLeft: '10%', marginTop: 15, marginRight: '10%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Repair</Text>
        <Text style={{fontSize: 16}}>Mend worn jeans before replacing them to extend their life.</Text>
      </View>
      <View style={{marginLeft: '10%', marginTop: 15, marginRight: '10%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Repurpose</Text>
        <Text style={{fontSize: 16}}>
          Use jeans as rags instead of throwing them out, or better yet,
          repurpose them. Here are{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://urldefense.com/v3/__https://www.treehugger.com/sustainable-fashion/15-ways-repurpose-old-jeans.html__;!!LIr3w8kk_Xxm!90fFPjQZ0TDFYSOZmx5Xl9qyowxJpJUrrZs2TbXhTq-u3DAdizRT1WKojMcjBg$')}>
            15 ways to repurpose old jeans.
          </Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#00adef',
          marginLeft: 15,
          marginTop: 25,
          borderRadius: 20,
          height: 200,
          width:'100%'
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 10,
            marginLeft: 15,
          }}>
          Donate or shop at Thrift Stores
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={images.thrift}
            style={{marginLeft: -15, paddingTop: 20}}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop:10
                }}>
                -
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  width: Width / 2,
                  marginTop:10
                }}>
                extends life of jeans
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                -
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  width: Width / 2.3,
                  marginTop: 20,
                }}>
                reduces the water and carbon footprint of each pair of jeans.
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* end of blue frame */}
      <View style={{marginLeft: '10%', marginTop: 40, marginRight: '10%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recycle</Text>
        <Text style={{fontSize: 16}}>Recycle them:</Text>
        <Text
          onPress={() => Linking.openURL('https://bluejeansgogreen.org/')}
          style={{color: 'blue'}}>
          bluejeansgogreen.org
        </Text>
        <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
          Refuse
        </Text>
        <Text style={{fontSize: 16}}>
          Avoid fast fashion brands. If you know a brand is not producing items
          ethically or in ways that are harmful to the environment, why give
          them your money?
        </Text>
      </View>
      {/* green part */}
      <View
        style={{
          backgroundColor: '#8DC73F',
          borderRadius: 20,
          marginTop: 20,
          flexDirection: 'row',
          marginLeft: Width / 2.5,
          height: Height / 3,
          width:Width
        }}>
        <Image
          source={images.purpose}
          style={{
            borderRadius: 20,
            marginLeft: -Width / 2.5,
            marginTop: Height / 20,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,
            width: Width / 2.3,
            marginTop: Height / 30,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Shop with Purpose
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 20,
              marginLeft:5
            }}>
            When you do buy new jeans, choose a brand you know is doing things
            right. See our list for suggestion.
          </Text>
        </View>
      </View>
      {/* green part end */}
      <View
        style={{
          marginTop: Height / 10,
          marginLeft: '10%',
          marginRight: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ask</Text>
        <Text style={{fontSize:16}}>
          Ask your favorite brands to do better. Email them or use social media.
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '5%'}}>
          Avoid
        </Text>
        <Text style={{fontSize:16}}>
          Avoid jeans made with regular cotton. Organic cotton is grown without
          harmful pesticides leaving the soil healthier. Other Benefits of
          growing organic v.s regular cotton:{' '}
        </Text>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Text style={{fontSize:16}}>--</Text>
          <Text style={{fontSize:16}}>45% reduction in CO2</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:16}}>--</Text>
          <Text style={{fontSize:16}}>87% reduction in water</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:16}}>--</Text>
          <Text style={{fontSize:16}}>62% reduction in energy</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:16}}>--</Text>
          <Text style={{fontSize:16}}>improves working conditions for farmers</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: (3 * Width) / 5,
          marginTop: '3%',
          marginRight:'5%'
        }}>
        <Text style={{fontSize: 14}}>-</Text>
        <Text style={{fontSize: 14}}>Soil Association org, Patagonia</Text>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default WhatJeans;
