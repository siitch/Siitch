import { Image, Text, TouchableOpacity, View } from "react-native";
import { homepageStyle } from "../Styles/Style";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const DemoTools = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: 'center', marginBottom: 30 }}>
      <Text style={homepageStyle.toolsSectionTitleText}>
        Explore the tools{'\n'}
        <Text style={{
          fontFamily: 'Lato-Regular',
          fontSize: 20,
          lineHeight: 27,
          color: '#00ADEF'
        }}>
          We’re starting with water
        </Text>
      </Text>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <TouchableOpacity
          style={[
            homepageStyle.toolsContainer,{
              marginRight: 15,
            }]}
          onPress={()=>{
            navigation.navigate('Rank')
          }}>
          <Image
            source={require('../images2/HomepageIcons/RankingIcon.png')}
            style={{
              height: 53,
              width: 58,
              marginBottom: 2
            }}
          />
          <Text style={[homepageStyle.toolsText, {marginTop: 11}]}>Rank</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homepageStyle.toolsContainer}
          onPress={()=>{
            navigation.navigate('CompareTab')
          }}>
          <Text style={{
            fontFamily: 'Lato-Regular',
            fontSize: 66,
            textAlign: 'center',
            color: '#999999',
          }}>
            V<Text style={{color: '#EF7A6A'}}>S</Text>
          </Text>
          {/*<Image
              source={require('../images2/HomepageIcons/Compare.png')}
              style={{
                height: 49,
                width: 79
              }}
            />*/}
          <Text style={homepageStyle.toolsText}>Compare</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <TouchableOpacity
          style={[
            homepageStyle.toolsContainer,{
              marginRight: 10,
            }]}
          onPress={()=>{
            navigation.navigate('Search Tool')
          }}>
          <Image
            source={require('../images2/HomepageIcons/Search.png')}
            style={{
              height: 77,
              width: 77
            }}
          />
          <Text style={homepageStyle.toolsText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            homepageStyle.toolsContainer,{
              marginRight: 10,
            }]}
          onPress={()=>{
            navigation.navigate('Calculate')
          }}>
          <Image
            source={require('../images2/HomepageIcons/Calculator.png')}
            style={{
              height: 55,
              width: 54,
              marginLeft: -8
            }}
          />
          <Text style={homepageStyle.toolsText}>Eco{'\n'}Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homepageStyle.toolsContainer}
          onPress={()=>{
            navigation.navigate('MLTool')
          }}>
          <Image
            source={require('../images2/HomepageIcons/EcoCam.png')}
            style={{
              height: 70,
              width: 75,
              marginBottom: 2
            }}
          />
          <Text style={homepageStyle.toolsText}>Eco-Cam</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
