import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MenuMain } from "../Menu/Screens";
import { Sources } from "../Menu/Sources";
import { Mission } from "../Menu/Mission";
import { About } from "../Menu/About";
import { Virtual } from "../Menu/Virtual";
import { FAQ } from "../Menu/FAQ";
import { Feedback } from "../Menu/Feedback";
import { Tutorial } from "../Menu/Tutorial";
import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as Progress from 'react-native-progress';
import { DemoEcoCam } from "./DemoEcoCam";
import { DemoCalculator } from "./DemoCalculator";
import { DemoCompare } from "./DemoCompare";
import YoutubePlayer from "react-native-youtube-iframe";
import analytics from "@react-native-firebase/analytics";
import Profiles from "../ImageDB";
import waterDropWorld from "../images/water_drop_world.png";
import blueWater from "../images2/blue_water.png";
import carbon from "../images2/HomepageIcons/noun_carbon.png";
import energy from "../images2/HomepageIcons/noun_energy.png";
import factory from "../images2/HomepageIcons/noun_factory.png";
import landfill from "../images2/HomepageIcons/noun_landfill.png";
import oil from "../images2/HomepageIcons/noun_oil.png";
import timelessFashion from "../images2/HomepageIcons/noun_timeless_fashion.png";
import trees from "../images2/HomepageIcons/noun_trees.png";
import truck from "../images2/HomepageIcons/noun_truck.png";
import homeSloth from "../images2/HomepageIcons/home_sloth.png";
import { styles } from "../Ranking/Styles";
import { homepageStyle } from "../Styles/Style";
const DeviceWidth = Dimensions.get('window').width;

function HomeScreen() {
  const navigation = useNavigation();

  const [siitchVideoPlayed, setSiitchVideoPlayed] = useState(false);
  const onSiitchVideoStateChange = useCallback((state) => {
    if (state === "playing") {
      if (!siitchVideoPlayed){
        analytics().logEvent('Siitch_Video_Played')
        setSiitchVideoPlayed(true)
      }
    }
  }, [siitchVideoPlayed])

  const searchItems = [
    ['Salad', 'Toast', 'Chocolate'],
    ['Soy sauce', 'Car', 'Leather shoes'],
    ['Suede shoes', 'Cotton T shirt', 'Socks']
  ];

  const rankingItems = [
    ['Icecream 1 scoop', 42, 'p/scoop'],
    ['Yogurt', 35, 'p/serving'],
    ['Cheese slice', 25, 'p/slice'],
    ['Salad', 20, 'p/serving'],
    ['Toast', 11, 'p/slice']
  ]
  const rankingMax = 42;

  const whenWeWasteFood = [
    'We waste all the energy and water it takes to grow, harvest, transport, and package it',
    'If food goes to the landfill and rots, it produces methane—a greenhouse gas even more potent than carbon dioxide (WWF)'
  ];

  const costsOfTheFashionIndustry = [
    '70-100 million trees are cut down every year to make cellulose fabrics',
    'Textile production, manufacturing and distribution makes up about 10% of carbon emissions, pollutes water sources and more',
    'It takes 342 million barrels of oil to manufacture synthetic fibers every year',
    '85% of textiles and other fashion waste ends up in landfills every year'
  ]

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* Header */}
      <View style={homepageStyle.betaContainer}>
        <View style={homepageStyle.betaBox}>
          <Text style={homepageStyle.betaText}>BETA</Text>
        </View>
      </View>

      <View style={{
        alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Image
            style={homepageStyle.waterDropImage}
            source={waterDropWorld}/>
          <Text style={homepageStyle.siitchLogoText}>
            s
            <Text style={{textShadowOffset: {width: -2.3}}}>i</Text>
            <Text style={{textShadowOffset: {width: -2.2}}}>i</Text>
            <Text style={{textShadowOffset: {width: -2}}}>t</Text>
            <Text style={{textShadowOffset: {width: -1.7}}}>c</Text>
            <Text style={{textShadowOffset: {width: -1.3}}}>h</Text>
          </Text>
        </View>
        <Text style={homepageStyle.siitchSloganText}>
          Know your environmental impact,{'\n'}
          one siitchuation at a time.
        </Text>
      </View>

      {/* Take a pic */}
      <DemoEcoCam/>

      {/* Compare Items */}
      <DemoCompare/>

      {/* Explore the tools */}
      <View style={{ alignItems: 'center' }}>
        <Text style={homepageStyle.toolsSectionTitleText}>
          Explore the tools
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
                width: 75
              }}
            />
            <Text style={homepageStyle.toolsText}>Eco-Cam</Text>
          </TouchableOpacity>
        </View>
        {/* Video */}
        <View style={homepageStyle.siitchVideoContainer}>
          <YoutubePlayer
            height={'100%'}
            width={'100%'}
            onChangeState={onSiitchVideoStateChange}
            webViewStyle={{
              borderWidth: 0,
              borderRadius: 10,
            }}
            videoId={"TJcGh43_COo"}
          />
        </View>

      </View>

      {/* See Items Ranked */}
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

      {/* Search for Items */}
      <View style={homepageStyle.searchSectionContainer}>
        <Text style={homepageStyle.searchSectionTitleText}>
          Search for Items
        </Text>
        <View>
          {searchItems.map((itemRow, i) => (
            <View key={i} style={styles.avatarView}>
              {itemRow.map(itemName => (
                <TouchableHighlight
                  key={itemName}
                  onPress={() =>
                    navigation.navigate('Detail', {itemName: itemName})}
                  activeOpacity={1}
                  underlayColor="transparent"
                  style={{marginLeft: 10}}>
                  <View style={styles.eachAvatar}>
                    <Image
                      source={Profiles[itemName]}
                      style={homepageStyle.searchItemImage}
                      resizeMode="contain"
                    />
                    <Text style={{width: 90, textAlign: 'center'}}>
                      {itemName}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Use the Eco-Calculator */}
      <DemoCalculator/>

      {/* Info */}
      <View style={{ alignItems: 'center' }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
          <Image style={{height: 83, width: 83}} source={landfill}/>
          <Text style={{fontFamily: 'Lato-Regular', fontSize: 32, marginHorizontal: 5}}>=</Text>
          <Image style={{height: 36, width: 36}} source={blueWater}/>
          <Image style={{height: 60, width: 60}} source={carbon}/>
          <Image style={{height: 56, width: 56, marginBottom: 15}} source={energy}/>
          <Image style={{height: 42, width: 71, marginLeft: 7}} source={truck}/>
        </View>

        <View style={{ width: '77%' }}>
          <Text style={{
            fontFamily: 'Lato-Regular',
            fontSize: 15,
            lineHeight: 22,
            marginLeft: -7,
          }}>
            When we waste food:
          </Text>
          {whenWeWasteFood.map((item, index) => {
            return(
              <View key={index} style={{flexDirection: 'row'}}>
                <View style={{marginRight: 5}}>
                  <Text style={{fontSize: 8, marginTop: 7}}>●</Text>
                </View>
                <View>
                  <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 15,
                    lineHeight: 22
                  }}>{item}</Text>
                </View>
              </View>
            )
          })}
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40
        }}>
          <Image style={{height: 71, width: 71}} source={timelessFashion}/>
          <Text style={{fontFamily: 'Lato-Regular', fontSize: 32}}>=</Text>
          <Image style={{height: 65, width: 65}} source={trees}/>
          <Image style={{height: 36, width: 36}} source={blueWater}/>
          <Image style={{height: 60, width: 60}} source={carbon}/>
          <Image style={{height: 34, width: 34, marginTop: 5}} source={oil}/>
          <Image style={{height: 48, width: 48, marginBottom: 5}} source={factory}/>
        </View>

        <View style={{
          width: '77%',
          marginTop: 15,
        }}>
          <Text style={{
            fontFamily: 'Lato-Regular',
            fontSize: 15,
            lineHeight: 22,
            marginLeft: -7,
          }}>
            Costs of the fashion industry:
          </Text>
          {costsOfTheFashionIndustry.map((item, index) => {
            return(
              <View key={index}  style={{flexDirection: 'row'}}>
                <View style={{marginRight: 5}}>
                  <Text style={{fontSize: 8, marginTop: 7}}>●</Text>
                </View>
                <View>
                  <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 15,
                    lineHeight: 22
                  }}>{item}</Text>
                </View>
              </View>
            )
          })}
        </View>

        <Image style={{height: 242, width: 313, marginTop: 25}} source={homeSloth}/>

      </View>

      {/* Foot */}
      <View style={homepageStyle.footerContainer}>
        <Text style={homepageStyle.footerText}>
          After using it for a few days, would you mind filling out the Feedback
          form in the menu?
          {'\n\n'}
          We’re <Text style={{color: '#FFD359'}}>REFRAMING</Text> how we see
          the world to help everyone <Text style={{color: '#FFD359'}}>REDUCE </Text>
          their impact on the Earth.
          {'\n\n'}
          This is phase #1: <Text style={{color: '#FFD359'}}>AWARENESS.</Text>{'\n'}
          Is it helpful? Let us know.
        </Text>
      </View>

    </ScrollView>
  );
}

// Create screen stack for tab 'Home'
const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={({navigation}) => ({
        headerBackTitleVisible: false,
        headerShown : true,
        title: null,
        headerRight: () => (
          <Ionicons
            name="menu"
            size={35}
            color={'#B2B2B2'}
            style={{
              paddingRight: 20
            }}
            onPress={() => navigation.navigate('Menu')}
          />
        ),
      })}
    />
    <HomeStack.Screen
      name = "Menu"
      component = {MenuMain}
    />
    <HomeStack.Screen
      name = "Sources"
      component = {Sources}
      options = {{
        headerTitle: "Sources & Resources"
      }}
    />
    <HomeStack.Screen
      name = "Mission"
      component = {Mission}
    />
    <HomeStack.Screen
      name = "About"
      component = {About}
    />
    <HomeStack.Screen
      name = "Virtual"
      component = {Virtual}
      options = {{
        headerTitle: "Virtual Water"
      }}
    />
    <HomeStack.Screen
      name = "FAQ"
      component = {FAQ}
      options = {{
        headerTitle: "Frequently Asked Questions"
      }}
    />
    <HomeStack.Screen
      name = "Feedback"
      component = {Feedback}
    />
    <HomeStack.Screen
      name = "Tutorial"
      component = {Tutorial}
    />
  </HomeStack.Navigator>
);
