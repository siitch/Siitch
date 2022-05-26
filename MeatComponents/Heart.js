import React from 'react';
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {MeatBrands} from "./MeatBrands/MeatBrands";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Heart = ({navigation, inputData}) => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{paddingTop: Height / 20,width:Width}}>
      <View style={{flexDirection: 'row',alignItems:'center',marginLeft:30}}>
        <Text style={{width:Width*1.6/3,fontSize:16}}>
          Reducing red meat intake can have numerous health benefits, including a lower risk of developing type 2 diabetes, cardiovascular disease, and certain cancers.
        </Text>
        <View style={{width:Width*1.1/3,alignItems:'center',marginLeft:5}}>
        <Image source={images.heart_large} style={{width:110,height:110}} resizeMode='contain'/>
        </View>
      </View>
      <Text style={{marginLeft:'10%',marginTop:'2%',fontSize:12}}>- News Medical Life Sciences</Text>
      <View style={{flexDirection: 'row',marginTop:Height/20}}>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center',fontSize:16}}>Type 2{'\n'} Diabetes</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center', fontSize:16, marginLeft: '10%'}}>
            Cardiovascular{'\n'}Disease
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: Width / 3,
            alignItems: 'center',
          }}>
          <ImageIcon category='healt' image={images.arrow_graph} />
          <Text style={{alignItems: 'center',fontSize:16}}>Certain{'\n'}Cancers</Text>
        </View>
      </View>

      <MeatBrands navigation={navigation} currentTab={'Beef - Health'}/>
    </View>
    <View style={{height:Height/10}}/>
  </ScrollView>
  );
};
export default Heart;
