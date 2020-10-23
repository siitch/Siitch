import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import { ImageIcon } from './ImageIcon';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  Linking,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { images } from '../ImageURL';

const Grass = () => {
  return (
    <View>
       <ScrollView>
        <View style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop:'10%'
          }}>
          <View style={{width:'50%'}}>
              <Image
              source={require('./../images/Beef_Earth/graphic_large.png')}
              style={{width: 150, height: 150,marginLeft:'10%'}}
              />
          </View>
          <View style={{width:'50%',flexDirection: 'column'}}>
              <Image
              source={require('./../images/Beef_Earth/treestump_small.png')}
              style={{width: 50, height: 50,marginLeft:'60%'}}
              />
              <View>
                <Text style={{fontSize: 14}}>Livestock production uses 75% of earth’s agricultural land and is a leading driver for global deforestation.</Text>
                <Text style={{fontWeight: 'bold',fontSize: 10,marginLeft:'15%'}}>- Climate Nexus;</Text>
                <Text style={{fontWeight: 'bold',fontSize: 10,marginLeft:'20%'}}>Our World in Data</Text>
              </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
          }}>
          
          <ImageIcon category='car' image = {images.car}/>
        
        </View>
        <View style={{alignItems:'center'}}>
        <View  style={{flexDirection: 'row', width: width/1.4,}}>
          <Text>
            The pollution generated in producing a typical 8 ounce steak is equivalent to driving a small car for 29 milies.
          </Text>
        </View>
        </View>
        </ScrollView>
    </View>
  );
};
export default Grass;
