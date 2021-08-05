import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
const {width, height} = Dimensions.get('screen');
import { WebView } from 'react-native-webview';
import {View, Text, Image, Dimensions, Linking, Pressable, Button, TouchableOpacity, TouchableHighlight, ScrollView, StyleSheet} from 'react-native';
import { styles } from '../Ranking/Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenContainer } from 'react-native-screens';
const Width = width;

export const Sources = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: '10%',
          marginRight: '7%',
        }}>
        All attempts have been made to represent the most accurate information
        possible. Facts and statistics have been sourced from numerous publicly available scientific 
        studies, white papers, and news articles. The main sources are listed below.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/Report47-WaterFootprintCrops-Vol1.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 40
            }
            }>
            {' '}
            Mekonnen and Hoekstra 2010 - Crops{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/Report-48-WaterFootprint-AnimalProducts-Vol1_1.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            Mekonnen and Hoekstra 2010 - Animals{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/TheWaterFootprintAssessmentManual_2.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            Water Footprint Assessment Manual, 2011{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/en/resources/waterstat/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            Water Footprint Network{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.watercalculator.org/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            Water Calculator{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.amazon.com/Your-Water-Footprint-Shocking-Everyday/dp/1770852956',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            Your Water Footprint - Leahy{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://fdc.nal.usda.gov/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            USDA Food Data Central{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.fda.gov/home',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            USFDA{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'http://www.fao.org/home/en/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            United Nations F.A.O.{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.nrdc.org/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            National Resource Defence Council{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.amazon.com/Green-Book-Everyday-Saving-Planet/dp/0307381358',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            The Green Blue Book - Rogers & Kostigen{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.nationalgeographic.com/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            National Geographic{' '}
          </Text>
          <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
        }}>
        We are in deep gratitude to the Professors, Scientists and Journalists 
        working to shed light on the true costs of what we consume. 
        We encourage everyone to explore these sources.
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
        }}>
        Landing page people vector created by
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://www.freepik.com/vectors/people',
              )
            }
            style={{
            fontSize: 18,
            marginLeft: '6%',
            textDecorationLine: 'underline',
            }
            }>
            {' '}
            rawpixel.com{' '}
          </Text>
        </ScrollView>
      );
}