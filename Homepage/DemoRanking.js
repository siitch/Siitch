import { homepageStyle } from "../Styles/Style";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Profiles from "../ImageDB";
import * as Progress from 'react-native-progress';
import React from "react";
import { useNavigation } from "@react-navigation/native";
const DeviceWidth = Dimensions.get('window').width;

export const DemoRanking = () => {
  const navigation = useNavigation();
  const rankingItems = [
    ['Potato chips', 49, 'p/200g bag'],
    ['Pizza slice', 42, 'p/slice'],
    ['Icecream 1 scoop', 42, 'p/scoop'],
    ['Yogurt', 35, 'p/serving'],
    ['Cheese slice', 25, 'p/slice']
  ]
  const rankingMax = 49;
  return (
    <View style={homepageStyle.rankingSectionContainer}>
      <Text style={homepageStyle.rankingSectionTitleText}>See Items Ranked</Text>
      <View style={homepageStyle.rankingListContainer}>
        {
          rankingItems.map((item, index) => {
            return(
              <View key={index} style = {homepageStyle.rankingItemContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Detail', {itemName: item[0]})}}>
                  <View style={homepageStyle.rankingItemCol}>
                    <Image
                      style={homepageStyle.rankingItemImage}
                      source={Profiles[item[0]]}
                    />
                    <Text style={homepageStyle.rankingItemText}>
                      {item[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={homepageStyle.progressCol}>
                  {/* TODO: -adjust the bar length */}
                  <Progress.Bar
                    progress={1-(rankingMax-parseInt(item[1]))/rankingMax < 0.01 ? 0.01 : 1-(rankingMax-parseInt(item[1]))/rankingMax}
                    width={DeviceWidth*0.62}
                    height={10}
                    borderWidth={1}
                    borderRadius={50}
                    borderColor="#b5b5b5"
                    color="#81CAFF"
                  />
                  <Text style={homepageStyle.progressTxt}>
                    {item[1]} {'Gallons'} {item[2]}
                  </Text>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
