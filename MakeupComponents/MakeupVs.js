import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const itemArr = [
  {name: 'Food & Water', img: images.vsMeat, img2: images.FDA},
  {name: 'Pharmaceutical Drugs', img: images.drug, img2: images.FDA},
  {name: 'Vaccines', img: images.needle, img2: images.FDA},
  {
    name: 'Cosmetic Chemicals',
    img: images.chemicals,
    img2: images.questionMark,
  },
];

const MakeupVs = ({inputData, navigation}) => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
    <View style={{alignItems: 'center', marginTop: Height / 20, backgroundColor:'#FFFFFF'}}>
      <Text style={{fontSize: 25}}>Who is regulating?</Text>
      <View style={{marginLeft: 20, marginRight: 20}}>
        {itemArr.map((item, index) => (
          <View style={{flexDirection: 'row', marginTop: 20}} key={index}>
            <Image source={item.img} style={{width: 50, height: 50}} />
            <View
              style={{
                width: Width / 2,
                justifyContent: 'center',
              }}>
              <Text style={{marginLeft: 20}}>{item.name}</Text>
            </View>
            <Image
              source={item.img2}
              style={{
                width: 50,
                height: 50,
                marginLeft: 20,
                resizeMode: 'contain',
              }}
            />
          </View>
        ))}
        <Text style={{marginTop: 20}}>
          With the exception of color additivies, the Food and Drug
          Administration lacks the power and resources to review the safety of
          chemicals in cosmetics before they are used.
        </Text>
        <Text style={{marginLeft: Width / 1.5}}>- EWG</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - Width / 5,
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
    </View>
    </View>
  );
};
export default MakeupVs;
