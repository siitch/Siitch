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
    <ScrollView style={{flexDirection: 'column', flex: 1}}>
      <View
        style={{
          paddingTop: Height / 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.jeans}
          style={{
            marginLeft: Width / 30,
            marginRight: Width / 30,
            width: Width / 4,
            height: Height / 8.5,
          }}
          resizeMode='contain'
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
            width: Width / 4,
            height: Height / 8.5,
            marginTop:'20%',
          }}
          resizeMode='contain'
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20, marginTop:'20%',}}>
          Compostable?
        </Text>
        <View style={{height: '100%', width: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            marginLeft: Width / 30,
            textAlign: 'center',
            width: Width / 3.5,
            fontSize: 20,
            marginTop:'20%',
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
            width: Width / 4,
            height: Height / 8.5,
            marginTop:'20%',
          }}
          resizeMode='contain'
        />
        <Text style={{width: 130, textAlign: 'center', fontSize: 20, marginTop:'20%',}}>
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
            marginTop:'20%',
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
          <Text style={{color:'#00ADEF'}}> Good On You, </Text>
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
      </View>
    </ScrollView>
  );
};
export default JeansRecycle;
