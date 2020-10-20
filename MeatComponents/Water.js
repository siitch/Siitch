import React, {useState, useEffect} from 'react';
import { Image } from 'react-native';
import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';

const Water = inputData => {
  
  return (
    <View>
      <ScrollView>
          <View style={{alignItems: 'center', marginTop: '2%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        One Pound Beef
              </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '2%'}}>
              <Image source = {require('./../images/WaterDrop_BLUE.png')}
                        style = {{ width: 20, height: 20, }}
              />
              <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 24, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>1847</Text>
                  <Text style={{fontSize: 15, marginLeft: '5%',lineHeight: 37}}>gal</Text>
              </View>
            </View>
            <View style = {{ alignItems: 'center',justifyContent: 'center'}}>
                <Image source = {require('./../images/BeefPage/beef_steak.png')}
                     style = {{ width: 200, height: 200 }}
                    />
            </View>
                
            <View style={{alignItems: 'center', marginTop: '2%'}}>
            <View style={{flexDirection: 'row',width:300,height: 100,borderRadius:20,backgroundColor: '#3AADFA',justifyContent: 'center',alignItems: 'center',}}>
                <Image source = {require('./../images/BeefPage/2000gal_truck.png')}
                        style = {{ width: 120, height: 120,alignItems:'center' }}
                    />
                <Text style={{fontSize: 18,marginLeft: '5%',color:'white'}}>Context {"\n"} 2,000 gallon tank</Text>
            </View>
            </View>
            <View style={{alignItems: 'center',marginTop: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                WHY SO MUCH
                <Image source = {require('./../images/WaterDrop_BLUE.png')}
                        style = {{ width: 20, height: 20}}
                />
                ?
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{width:250}}>
                <Text style={{fontSize: 14}}>
                    The food cattle eats accounts for 98% of beef's water footprint.
                </Text>
              </View>
            </View>

            <View style={{ width: width,display: "flex", flexDirection: "row", flexWrap: "wrap",alignItems: "center", justifyContent: "center" }}>
                <Image source={require("./../images/Beef_Water/rain_wheat.png")}style={{ width: "35%", height: 250 }} />
                <Image source={require("./../images/Beef_Water/cows_hose.png")}style={{ marginLeft:'10%',width: "35%", height: 250 }} />
            </View>
            <View style={{ width: width, marginTop:'3%',display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 14}}>
                    <Text style={{fontWeight: 'bold',fontSize: 18}}>98%</Text>
                    {"\n"}Rain & irrigation{"\n"} to grow crops
                </Text>
                <Text style={{ fontSize: 14,marginLeft:'15%'} }>
                    <Text style={{fontWeight: 'bold',fontSize: 18}}>2%</Text>
                        {"\n"}Drinking Water{"\n"} & Cleaning needs
                    </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row',marginTop:'7%',alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <View style={{width: 100, height: 100, marginLeft:'10%',borderRadius:20,backgroundColor: '#6dbd64',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color:'white'}}>
                    {"\n"}Rain
                    </Text>
                    <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>1,727</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                    </View>
                    </View>
                </View>
                <View style={{width: 100, height: 100, borderRadius:20,marginLeft:'5%',backgroundColor: '#3AADFA',alignItems: 'center'}}>
                <Text style={{fontSize: 20,color:'white'}}>
                {"\n"}Irrigation
                    </Text>
                    <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>66</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                    </View>
                    </View>
                </View>
                <View style={{width: 100, height: 100, borderRadius:20,marginLeft:'5%',marginRight:'7%',backgroundColor: '#bfbfbf',alignItems: 'center'}}>
                <Text style={{fontSize: 20,color:'white'}}>
                {"\n"}Cleaning
                    </Text>
                    <View style={{alignItems: 'center'}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>54</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                      </View>
                    </View>
                </View>
            </View>
      </ScrollView>
    </View>
  );
};
export default Water;
