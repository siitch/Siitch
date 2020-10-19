import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {styles} from './App';
import { Image } from 'react-native'
import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const Beef_Water = ({input, goBack}) => {
    return (
        <View style={{alignItems: 'center', marginTop: '30%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>
                WHY SO MUCH
                <Image source = {require('./images/WaterDrop_BLUE.png')}
                        style = {{ width: 20, height: 20, }}
                />
                ?
            </Text>
            <View style={{width:250}}>
                <Text style={{fontSize: 14,marginTop:'5%'}}>
                    The food cattle eats accounts for 98% of beef's water footprint.
                </Text>
            </View>

            <View style={{ width: width, marginTop:'10%',display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <Image source={require("./images/Beef_Water/rain_wheat.png")}style={{ width: "35%", height: 150 }} />
                <Image source={require("./images/Beef_Water/cows_hose.png")}style={{ marginLeft:'10%',width: "35%", height: 150 }} />
            </View>
            <View style={{ width: width, marginTop:'5%',display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
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
                <View style={{width: 100, height: 100, marginLeft:'10%',borderRadius:20,backgroundColor: '#6dbd64'}}>
                    <Text style={{fontSize: 20,color:'white'}}>
                    Rain{"\n"}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>1,727</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                    </View>
                </View>
                <View style={{width: 100, height: 100, borderRadius:20,marginLeft:'5%',backgroundColor: '#3AADFA'}}>
                <Text style={{fontSize: 20,color:'white'}}>
                    Irrigation{"\n"}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>66</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                    </View>
                </View>
                <View style={{width: 100, height: 100, borderRadius:20,marginLeft:'5%',marginRight:'7%',backgroundColor: '#bfbfbf'}}>
                <Text style={{fontSize: 20,color:'white'}}>
                    Ceaning{"\n"}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold',color:'white',lineHeight: 30}}>54</Text>
                        <Text style={{fontSize: 15,color:'white',lineHeight: 37}}>gal</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default Beef_Water;