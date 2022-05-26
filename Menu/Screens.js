import 'react-native-gesture-handler';
import React from 'react';
const {width} = Dimensions.get('screen');
import {View, Text, Dimensions, ScrollView, TouchableOpacity, Share} from 'react-native';

import {MenuItem} from "./MenuItem";
import analytics from "@react-native-firebase/analytics";
import { useNavigation } from "@react-navigation/native";

export const MenuMain = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <MenuItem menuItemName={'Tutorial'}/>
      <MenuItem menuItemName={'Sources'}/>
      <MenuItem menuItemName={'Mission'}/>
      <MenuItem menuItemName={'About'}/>
      <MenuItem menuItemName={'Virtual'}/>
      <MenuItem menuItemName={'Feedback'}/>
      <MenuItem menuItemName={'FAQ'}/>

      <View
        style={{
          flexDirection: 'row',
          width: width * 0.9,
          borderRadius: 20,
          backgroundColor: '#F8E4A3',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          marginLeft: '5%',
          marginRight: '5%',
        }}>
        <Text style={{fontSize: 18, color: 'black', margin: '5%',}}>
          Hi there,
          {'\n'}{'\n'}
          This is an early release. We'd love your
          thoughts on how to improve it. Share your ideas by clicking the <Text
          onPress={() => navigation.navigate('Feedback')}
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            paddingBottom: '7%',
            alignSelf: 'center',
          }
          }>
          Feedback
        </Text> link.
          {'\n'}{'\n'}
          Thank you!
        </Text>
      </View>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          alignContent: 'flex-start',
          margin: '5%',
          marginBottom: '7%',
          marginTop: '10%',
          textAlign: 'center'
        }}>
        Have friends who love the planet?{'\n'}
        Feel free to share our app.{'\n'}
        The more feedback the better.
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: '#70BF41',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          height: 49,
          width: 270
        }}
          onPress={()=>{
            global.occupied = true
            Share.share({
              url: "https://testflight.apple.com/join/0HGzm3Xo"
            }).then(r => {global.occupied = false})
            analytics().logEvent('Share_public_link')
          }}>
        <Text style={{fontSize: 26, fontWeight: '600', color: 'white'}}>SHARE</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          alignContent: 'flex-start',
          margin: '5%',
          marginBottom: '7%',
          marginTop: '10%',
          textAlign: 'center'
        }}>
        This app only works on iPhones at this time. {'\n'}
        It does not work on iPads, iWatches, iPhone zoomed display, or any Android devices.
      </Text>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </View>
      </View>
    </ScrollView>
  );
}
