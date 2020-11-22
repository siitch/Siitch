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
  Pressable,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import Profiles from '../Search/SearchDB';
import Water from '../MeatComponents/Water';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const arr = [
  {name: 'Pair of jeans', water: 2866, picture: images.jeansVs},
  {name: 'Leather shoes', water: 2113, picture: Profiles['Leather shoes']},
  {name: 'Cotton t-shirt', water: 660, picture: Profiles.Shirt},
  {name: 'socks', water: 244, picture: Profiles.Socks},
];

const JeansVs = ({inputData, navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#00adef',
          height: Height / 10,
          width:Width,
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
          marginBottom:'5%'
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              width: Width / 6,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: Width / 10,
            }}>
            One of these
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              textAlign: 'center',
              fontSize: 20,
            }}>
            =
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: Width / 10,
              width: Width / 2.2,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            This many gallons of water
          </Text>
        </View>
      </View>
      {arr.map((row, i) => (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: Width / 10,
            alignItems: 'center',
            marginTop: Height / 250,
          }}
          key={i}>
          <Image
            source={row.picture}
            style={{
              width: Width / 5,
              height: Height / 9,
              marginRight: Width / 20,
            }}
            resizeMode='contain'
          />
          <View style={{alignItems:'flex-start',flexDirection:'column'}}>
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <Image
              source={images.water}
              style={{width: Width / 15, height: Height / 23, marginLeft:'30%'}}
              resizeMode='contain'
            />
            <Text style={{color: '#00adef',fontWeight:'bold',fontSize:20,width:Width/3}}>{row.water} gallons</Text>
          </View>
          <Text style={{fontSize:16,marginLeft:'40%',textAlign:'left',marginTop:-5}}>{row.name}</Text>
          </View>
        </View>
      ))}
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
          marginTop: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold',marginTop:'2%'}}>Doing good</Text>
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
export default JeansVs;
