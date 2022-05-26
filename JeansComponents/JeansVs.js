import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import Profiles from '../Search/SearchDB';
import {JeansBrands} from "./JeansBrands/JeansBrands";
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const arr = [
  {name: 'Pair of jeans', water: 2866, picture: images.jeansVs},
  {name: 'Leather shoes', water: 2113, picture: Profiles['Leather shoes']},
  {name: 'Cotton T shirt', water: 660, picture: Profiles['Cotton T shirt']},
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

      <JeansBrands navigation={navigation} currentTab={'Jeans - Vs'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansVs;
