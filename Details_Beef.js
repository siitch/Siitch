import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {styles} from './App';
import { Image } from 'react-native'

  
const Details_Beef = ({input, goBack}) => {
    return (
        <View>
            <ScrollView>
                <View style={{alignItems: 'center', marginTop: '40%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        One Pound Beef
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                    <Image source = {require('./images/WaterDrop_BLUE.png')}
                        style = {{ width: 20, height: 20, }}
                    />
                    <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold',color:'#3AADFA',lineHeight: 30}}>1847</Text>
                        <Text style={{fontSize: 15, marginLeft: '5%',lineHeight: 37}}>gal</Text>
                    </View>
                </View>
                <View style = {{ marginTop: '5%',alignItems: 'center',justifyContent: 'center'}}>
                    <Image source = {require('./images/BeefPage/beef_steak.png')}
                     style = {{ width: 250, height: 250 }}
                    />
                </View>
                
                <View style={{flexDirection: 'row',width:350,height: 130,borderRadius:20,backgroundColor: '#3AADFA', marginTop: '15%',justifyContent: 'center',alignItems: 'center',}}>
                    <Image source = {require('./images/BeefPage/2000gal_truck.png')}
                        style = {{ width: 150, height: 150 }}
                    />
                    <Text style={{fontSize: 22,marginLeft: '5%',color:'white'}}>Context {"\n"} 2,000 gallon tank</Text>
                </View>
            </ScrollView>
        </View>
    );

};

export default Details_Beef;