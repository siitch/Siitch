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
import Water from '../MeatComponents/Water';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const arr = [
  {name: 'Pair of jeans', water: 2866, picture: images.jeansVs},
  {name: 'Leather shoes', water: 2113, picture: images.shoes},
  {name: 'Cotton t-shirt', water: 660, picture: images.tshirt},
  {name: 'socks', water: 244, picture: images.socks},
];

const JeansVs = ({inputData, navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#00adef',
          height: Height / 10,
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
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
              width: Width / 2,
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
            marginTop: Height / 20,
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
          <Image
            source={images.water}
            style={{width: Width / 15, height: Height / 23, marginLeft:'20%'}}
            resizeMode='contain'
          />
          <View>
            <Text style={{color: '#00adef',fontWeight:'bold',fontSize:20}}>{row.water} gallons</Text>
            <Text>{row.name}</Text>
          </View>
        </View>
      ))}
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - (Width/5),
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop:'10%'
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,width:Width/1.3}}>U.S.A companies, as recommended by
          <Text onPress={() => Linking.openURL('https://goodonyou.eco/')} style={{color:'#00ADEF'}}> Good On You, </Text>
          in random order.
        </Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginLeft:'5%'}}>
            <ImageIcon category='brand' image={images.ref}></ImageIcon>
            <ImageIcon category='brand' image={images.outland}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.patagonia}></ImageIcon>
            <ImageIcon category='brand' image={images.boyish}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.outerknown}></ImageIcon>
            <ImageIcon category='brand' image={images.amourvert}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.citizens}></ImageIcon>
            <ImageIcon category='brand' image={images.triarchy}></ImageIcon>
          </View>
          <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
            <ImageIcon category='brand' image={images.dl}></ImageIcon>
            <ImageIcon category='brand' image={images.g_star}></ImageIcon>
          </View>
      </View>
    </ScrollView>
  );
};
export default JeansVs;
