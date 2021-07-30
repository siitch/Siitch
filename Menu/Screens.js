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

export const MenuMain = ({ navigation }) => {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Sources')}
        >
            <Image
              source={require('./../images2/Source_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '5%', marginLeft: '-2%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Sources & Resources {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '25%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Mission')}
        >
        <Image
              source={require('./../images2/Mission_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '9%', marginLeft: '-1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Mission {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '50%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('About')}
        >
        <Image
              source={require('./../images2/About_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '7%', marginLeft: '-1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              About {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '55%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Virtual')}
        >
        <Image
              source={require('./../images2/Blue_Water_Drop_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '3%', marginLeft: '-1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Virtual Water {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '45%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Feedback')}
        >
        <Image
              source={require('./../images2/Feedback_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '6%', marginLeft: '1%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              Feedback {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '49%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <TouchableOpacity
        style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            flexDirection: 'row',
            width: width,
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('FAQ')}
        >
        <Image
              source={require('./../images2/FAQ_PNG.png')}
              style={{width: 50, height: 50, marginTop: 3, marginRight: '7%', marginLeft: '0%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, color: 'black', marginTop: '6%'}}>
              FAQ {'\n'}
            </Text>
            <MaterialCommunityIcons name = 'arrow-right' size = {30} style= {{marginLeft: '60%', marginTop: '1%'}}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 55, borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <View
            style={{
              flexDirection: 'row',
              width: width * 0.9,
              height: 220,
              borderRadius: 20,
              backgroundColor: '#f2d3ac',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              marginLeft: '5%',
              marginRight: '5%',
            }}> 
            <Text style={{fontSize: 18, color: 'black', margin: '5%',}}>
            Dear Environmentalists,
            {'\n'}{'\n'}
            This is just a prototype. 
            Click the Feedback link after you’ve played around. 
            We’d love your thoughts on how to improve it. 
            {'\n'}{'\n'}{'\n'}
            Thank you.
            </Text>
        </View>
        <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          margin: '12%',
          textAlign: 'center'
        }}>
            Have friends who love the planet? {'\n'}
            Feel free to share this prototype!
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          alignContent: 'auto',
          margin: '5%',
          textAlign: 'center'
        }}>
            This app only works on iPhones at this time. {'\n'}
            It does not work on iPads or any Android devices.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://bit.ly/3i4kebj',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginTop: 30,
            alignSelf: 'center',
            }
            }>
            {' '}
            Privacy Policy{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://bit.ly/2UBNugJ',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginTop: 10,
            paddingBottom: 10,
            alignSelf: 'center',
            }
            }>
            {' '}
            Terms of Use{' '}
          </Text>
          <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() =>
              Linking.openURL(
                'https://www.facebook.com/SiitchHQ',
              )
            }>
              <Image style={{
                marginTop: 40, 
                marginRight: 10,
                marginBottom: 25,
                height: 55,
                width: 55,
            }} source={require('./../images2/Facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              Linking.openURL(
                'https://twitter.com/SiitchHQ',
              )
            }>
              <Image style={{
                marginTop: 40,
                marginLeft: 10, 
                marginBottom: 25,
                height: 55,
                width: 55,
            }} source={require('./../images2/Twitter.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

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
export const Mission = ({ navigation }) => {
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
        The mission of Siitch is to help you make a <Text style={{color: '#19bf42'}} > MASSIVE IMPACT </Text> 
        on the environment over your lifetime by focusing on day to day decisions. 
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        How?
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
     Change starts with <Text style={{color: '#19bf42'}} >AWARENESS</Text>. 
    With Siitch, you’ll learn about the 
    environmental cost of what you buy, and 
    tips on how you can do better, so you can 
    make every decision and every purchase count.
      </Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 4, alignItems: 'center', paddingLeft: '35%'}}>
            <Image
              source={require('./../images2/blue_info_button.png')}
              style={{width: 50, height: 70}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingLeft: '9%'}}>
            <Image
              source={require('./../images2/green_jigsaw.png')}
              style={{width: 105, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingRight: '9%'}}>
            <Image
              source={require('./../images2/quote_tip.png')}
              style={{width: 65, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 4, alignItems: 'center', paddingRight: '35%'}}>
            <Image
              source={require('./../images2/green_lightbulb.png')}
              style={{width: 100, height: 120}}
              resizeMode="contain"
            />
          </View>
        </View>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 40,
          marginRight: '7%',
        }}>
            Our goal is to provide tips, games and challenges within 
            the app to make spreading awareness easy and fun. 
      </Text>
      <View
            style={{
              flexDirection: 'row',
              width: 400,
              height: 150,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginLeft: '7%',
            }}> 
            <Text style={{fontSize: 18, color: 'white'}}>
            Never doubt that a small group of thoughtful, 
            committed citizens can change the world. {'\n'}
            It's the only thing that ever has.  {'\n'}{'\n'} <Text style={{fontWeight: 'bold'}}>- Margaret Meade</Text>{' '}
             {'\n'}   (Anthropologist) </Text>
        </View>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        Right Now
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
        You won’t see these tips and games: most of the app 
        is placeholders to see what features you want the most.
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        Water First
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
        }}>
        We’re focusing on water first, carbon later. 
        Many factors determine whether a product is sustainable. 
        But water is something we can all relate to. 
      </Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 6, alignItems: 'center', paddingLeft: '3%'}}>
            <Image
              source={require('./../images2/broccoli.png')}
              style={{width: 55, height: 70}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/coffee.png')}
              style={{width: 70, height: 85}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/bananas_copy.png')}
              style={{width: 70, height: 125}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/chicken.png')}
              style={{width: 72, height: 85}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center'}}>
            <Image
              source={require('./../images2/jeans_small.png')}
              style={{width: 60, height: 65}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 6, alignItems: 'center', paddingRight: '4%'}}>
            <Image
              source={require('./../images2/wine_glass.png')}
              style={{width: 75, height: 80}}
              resizeMode="contain"
            />
          </View>
        </View>
      <View
            style={{
              flexDirection: 'row',
              width: 410,
              height: 125,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginRight: 20,
              marginLeft: -20,
            }}> 
            <Text style={{fontSize: 19, color: 'white', marginLeft: 20, }}>
            If you give nature a chance, it recovers.  {'\n'}{'\n'} <Text style={{fontWeight: 'bold', Left: 30,}}>- Sir David Attenborough</Text>{' '}
            {'\n'}   (Host, Planet Earth)</Text>
        </View>
      </ScrollView>
    );
  }

export const About = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 30,
        }}>
        How We Started 
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 20,
          marginRight: '7%',
        }}>
         Siitch started as a Party Tool to help people save money 
         and reduce food waste. People were achieving both (see below), 
         but they were curious about their environmental impact.
         {'\n'}{'\n'}Per feedback, we’re seeing if a simple app like this, 
         in addition to the party tool, can help you make a greater impact.
      </Text>
      <View
            style={{
              flexDirection: 'row',
              width: 400,
              height: 200,
              borderRadius: 20,
              backgroundColor: '#2f97ef',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 35,
              marginLeft: '7%',
            }}> 
            <Text style={{fontSize: 17.5, color: 'white', fontWeight: 'bold'}}>
            {'\n'}
            We cannot solve the climate crisis by being {'\n'}‘good’ consumers. 
            But we absolutely can {'\n'}make things much better by being good {'\n'}citizens. 
            {'\n'}
            {'\n'} <Text style={{fontWeight: 'bold',}}>- Emma Marris {'\n'}
            (Contributer, National Geographic)</Text>{' '}
            {'\n'}</Text>
        </View>
        <Text
        style={{
          fontSize: 24,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 35,
        }}>
        Siitch is about Awareness
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 5,
          color: 'green'
        }}>
        Change Starts with Awareness
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 40,
          marginRight: '7%',
        }}>
         Every time you open your wallet, you get to vote. 
         Our hope is by shedding light on the environmental cost of items, 
         you can make the decision that’s right for your siitch-uation, 
         and the planet.
        {'\n'}{'\n'}
        Like Kelly below when she used the party tool, 
        she knew exactly how much to buy, and she knew what NOT to buy. 
        That helped her save $145 and reduce food waste. 
        It also helped reduce her event’s environmental footprint by over 
        12,000 gallons of water.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'siitch.com',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 50
            }
            }>
            www.siitch.com
          </Text>
      <Image
              source={require('./../images2/Kelly_saved.png')}
              style={{width: 300, height: 300, marginTop: 15, alignSelf: 'center'}}
              resizeMode="contain"
            />
        <Image
              source={require('./../images2/Earth_saved.png')}
              style={{width: 300, height: 300, marginTop: 20, alignSelf: 'center'}}
              resizeMode="contain"
            />
        <Text
        style={{
          fontSize: 22,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 50,
        }}>
        Your Voice Matters 
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 20,
          marginBottom: 40,
          marginRight: '7%',
        }}>
         We'd love your feedback on this prototype.
        Is it useful? If so, what other features could be helpful?
        Thank you so much!
      </Text>
      <Text style={{
          fontSize: 22,
          textAlign: 'center',
          color: '#ab4302',
          marginBottom: '10%',
          fontWeight: 'bold'
      }}> NEED FEEDBACK BUTTON</Text>
        </ScrollView>
      );
}

export const Virtual = ({ navigation }) => {
    return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Text
        style={{
          fontSize: 23,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 30,
        }}>
        What is Virtual Water?
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignContent: 'center',
          textAlign: 'center',
          marginTop: 5,
          color: '#19bf42'
        }}>
        And why does it matter?
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 45,
          marginRight: '7%',
        }}>
        Behind every chocolate bar is a cacao tree. 
        Behind every pair of jeans is a cotton plant. 
        The phone in your hand? All of it needs water 
        to grow or be manufactured.
      </Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '7%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 3, alignItems: 'flex-end', marginLeft: '20%'}}>
            <Image
              source={require('./../images2/green_water.png')}
              style={{width: 75, height: 75}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 3, alignItems: 'center',}}>
            <Image
              source={require('./../images2/blue_water.png')}
              style={{width: 75, height: 75}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 3, alignItems: 'flex-start', marginRight: '20%'}}>
            <Image
              source={require('./../images2/gray_water.png')}
              style={{width: 75, height: 75}}
              resizeMode="contain"
            />
          </View>
        </View>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: '7%',
          marginRight: '7%',
        }}>
        Simply put, virtual water is the volume of water used to 
        produce consumer products. It’s complicated, but in basic terms, 
        green water is rain water; blue water is irrigated water 
        (water from aquifers, lakes, rivers); and gray water is water 
        required to clean pollutants in the production process.
        {'\n'}{'\n'}
        Here’s a great site if you want to learn more.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/en/'
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 18,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            {' '}
            https://waterfootprint.org/en/{' '}
          </Text>
          <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%',
            marginRight: '20%',
            marginLeft: '20%',
          }}>
          <View style={{width: width / 3, alignItems: 'flex-end', marginLeft: '20%'}}>
            <Image
              source={require('./../images2/rainwater_2x.png')}
              style={{width: 90, height: 90}}
              resizeMode= "contain"
            />
          </View>
          <View style={{width: width / 3, alignItems: 'center',}}>
            <Image
              source={require('./../images2/irrigation_2x.png')}
              style={{width: 90, height: 90}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 3, alignItems: 'flex-start', marginRight: '20%'}}>
            <Image
              source={require('./../images2/cleaning_2x.png')}
              style={{width: 90, height: 90}}
              resizeMode="contain"
            />
          </View>
        </View>
          <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: '10%',
          marginRight: '7%',
        }}>
        Put another way, virtual water is: 
        {'\n'}
        “... the water used in the production of a good or service. 
        Hoekstra and Chapagain have defined the virtual-water content 
        of a product as “The volume of freshwater used to produce the product, 
        measured at the place where the product was actually produced.” 
        It refers to the sum of the water use in the various steps of the 
        production chain.”
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 10,
          marginRight: '7%',
          textAlign: 'right'
        }}>
         - Professor John Anthony Allan {'\n'}
         King’s College London {'\n'}
        Creator, Virtual Water concept
      </Text>
      <Text
        style={{
          fontSize: 22,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: '12%',
          marginRight: '7%',
          fontWeight: 'bold',
        }}>
        Numbers
      </Text>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 7,
          marginRight: '7%',
          paddingBottom: 25
        }}>
        In places where virtual water amounts are known, 
        we show the globally averaged amount that it takes to produce an item. 
        {'\n'}{'\n'}
        In places where virtual water amounts are unknown, 
        we’ve used statistics from other reputable sources. 
        See our Sources and Resources page.
      </Text>
      </ScrollView>
    )
}

export const Feedback = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfXTM0QORW9VGi7KE6bgNpNM8SGZgzsYu3YS1wZdi0oL6S-4A/viewform?vc=0&c=0&w=1&flr=0' }}
  />
  );
}

export const FAQ = ({ navigation }) => {
  const [expand, setExpand] = useState(false);
    return (
      <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
      }}>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            What can this app do for me?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                This app will give you context for what you consume. 
                Are you concerned about the planet? 
                Your micro-actions over your lifetime have a major impact. 
                This app will help you better understand the impact of your decisions. 
                Right now, the metric is water. 

            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            What am I supposed to do with this information?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                Use it to remind yourself how much water is required to produce 
                the simplest of items, from a glass of milk to paper coffee cups. 
                Use it to motivate behavior change. 
                Use the statistics to have conversations with your kids, 
                to help teach them that everything has a cost. 
                Use it to help them understand that when they buy or throw something away, 
                whether a pair of jeans or an egg, that water and the earth's resources make it possible. 
                Use the compare tool so they can visualize the differences.

            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            Why did you build this app?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                We love this planet. We thought everyone should have a better 
                understanding of what they consume. We hope by having better awareness, 
                you can make better decisions that are right for you and the planet, 
                one Siitch-uation at a time.

            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            Why should I care about water?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                Let's break it down: 97% of the world's water is too salty to drink. 
                2% is locked in icecaps and glaciers. Less than 1% of earth's water is drinkable. 
                Agriculture uses about 70% of freshwater globally. Due to climate change, 
                farmers and cities can no longer rely on snowmelt and glacier runoff during the summer. 
                Aquifers are drying up: 21 of the world’s largest 37 aquifers have exceeded sustainability tipping points. 
                Less water means less food. There's roughly 7.8 billion people on earth today. 
                We're heading towards 9 billion by 2050. We're going to need every drop.
                {'\n'}{'\n'}
                Apart from keeping us alive, water enables societies to thrive. 
                Clean, sustainable water provides the foundation for everything we rely on: 
                agriculture, trade, sanitation, political stability, our health and so much more.

            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            What is virtual water, and why should I care?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                Virtual water is the volume of water used to produce consumer products such as food, 
                clothes, your phone, plastic cups etc. Scientists estimate 90-97% of the water we use every day is virtual water, 
                which is why it's important to understand how our everyday decisions impact the planet. 
                Virtual water includes rain, irrigated, and the water used to clean an item 
                (also known as green, blue and gray water) before it is ready for consumption. 
                See our Virtual Water page for more details. 

            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            How much water does the average person use every day?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                According to https://www.watercalculator.org the US average / water 
                consumption per person is 1,802 gallons per day (6,821 L). 
                This accounts for direct and indirect water use. Examples of direct water use are bathing, 
                cooking, doing laundry: essentially, any time you turn on a tap. 
                Indirect water, also known as virtual water (the statistics that this app mainly shows) 
                is the total volume of water used to produce consumer products.


            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            Is there a scale that shows me where I am compared to everyone else?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                The 1,802 gallons per day statistic is broad. 
                We are not affiliated with the GRACE Communications Foundation, 
                but their terrific Water Calculator can help you see how you compare.  
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            If the average American uses 1,802 gallons of water per day, what should we be aiming for?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                Less than that. What's important is making every day and every decision count. 
                Knowing the impact of your actions and purchasing decisions is key.
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            These statistics are shocking. What are your sources?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                We were shocked by the numbers as well. See our Sources page in the menu. 
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            So, should I stop eating avocados?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                No! Avocados are good for you! Just because certain foods/items take a lot of resources, 
                does not mean you should stop eating them. What's important is being aware 
                of what it takes to make them, so you don't waste them. 
                If you buy a pound of avocados and let them go bad, you've just wasted 237 gallons of water. 
                Worse still, if you're not composting, they will then sit in a landfill with other trash and emit carbon and methane, 
                further contributing to climate change. Your daily micro-actions have a major impact.
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            Are you going to show other statistics in the future?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                That's the goal.
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFFFFF',
            width: Width,
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            <Text>
            What can I do to reduce my impact?
            </Text>
            </Text>
            {expand ? (
            <Text 
              styles= {{
                fontWeight: 'normal',
                fontSize: 15,
                
            }}>
                There are hundreds of small things you can do every day to make a difference. 
                The first step? Know what you’re consuming. And stick to the 8 R's of sustainability: 
                refuse, reduce, reuse, refill, repair, regift, recycle, repeat. 
                In the Search pages, you'll see a list of ideas within the 'What Can I Do' 
                links. A few other terrific sites, this for water: https://wateruseitwisely.com/100-ways-to-conserve-water/ 
                And this for reducing your waste: https://zerowastehome.com/tips/
            </Text>
            ) : null}
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -20}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.125, marginTop: -37}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
      </ScrollView>
    );
}