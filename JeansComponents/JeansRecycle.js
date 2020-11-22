import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {images} from '../ImageURL';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const JeansRecycle = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{flexDirection: 'column', flex: 1, backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop:'2%'
        }}>
        <Image
          source={images.jeans}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
          }}
          resizeMode="contain"
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20}}>
          Time to {'\n'}grow
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
          }}>
          N/A
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
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
            marginTop: '8%',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            width: 130,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '8%',
          }}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
            marginTop: '8%',
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
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 5,
            height: Height / 9,
            marginTop: '8%',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            width: 130,
            textAlign: 'center',
            fontSize: 20,
            marginTop: '8%',
          }}>
          Time to{'\n'}decompose
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            width: Width / 3.5,
            fontSize: 20,
            textAlign: 'center',
            alignItems: 'center',
            marginTop: '8%',
          }}>
          10 - 12 Months
        </Text>
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
          borderRadius: 30,
          width: Width * 0.9,
          textAlign: 'center',
          fontSize: 20,
          marginTop: '5%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
        <Text style={{fontSize: 16, width: Width / 1.3,textAlign:'center',marginTop:'2%'}}>
          U.S.A companies, as recommended by
          <Text
            onPress={() => Linking.openURL('https://goodonyou.eco/')}
            style={{color: '#00ADEF'}}>
            {' '}
            Good On You,{' '}
          </Text>
          in random order.
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
              Linking.openURL('https://www.thereformation.com/');
            }}>
            <ImageIcon category="brand" image={images.asket} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.outlanddenim.com/');
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
              Linking.openURL('https://www.patagonia.com/home/');
            }}>
            <ImageIcon category="brand" image={images.patagonia} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.boyish.com/');
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
              Linking.openURL('https://www.outerknown.com/');
            }}>
            <ImageIcon category="brand" image={images.outerknown} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://amourvert.com/');
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
              Linking.openURL('https://citizensofhumanity.com/');
            }}>
            <ImageIcon category="brand" image={images.citizens} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://triarchy.com/');
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
              Linking.openURL('https://www.dl1961.com/');
            }}>
            <ImageIcon category="brand" image={images.dl} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="transperant"
            style={{width: Width / 2, alignItems: 'center'}}
            onPress={() => {
              Linking.openURL('https://www.g-star.com/en_us');
            }}>
            <ImageIcon category="brand" image={images.g_star} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansRecycle;
