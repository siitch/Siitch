import React from 'react';
import {images} from '../ImageURL';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {MakeupBrands} from "./MakeupBrands/MakeupBrands";
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
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{marginLeft: 50, marginRight: 50}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: Height / 20,
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Who is regulating?
        </Text>
        <View>
          {itemArr.map((item, index) => (
            <View style={{flexDirection: 'row', marginTop: 20}} key={index}>
              <Image source={item.img} style={{width: 50, height: 50}} />
              <View
                style={{
                  width: Width / 2,
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 10, fontSize: 16}}>{item.name}</Text>
              </View>
              <Image
                source={item.img2}
                style={{
                  width: 50,
                  height: 50,
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
          <Text style={{marginLeft: Width * 0.6}}>- EWG</Text>
        </View>
      </View>

      <MakeupBrands navigation={navigation} currentTab={'Makeup - Vs'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default MakeupVs;
