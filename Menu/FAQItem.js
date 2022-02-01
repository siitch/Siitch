import React, {useEffect, useState} from "react";
import {Dimensions, Text, TouchableHighlight, View} from "react-native";
import * as Analytics from "expo-firebase-analytics";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as WebBrowser from "expo-web-browser";
const {width} = Dimensions.get('screen');

export const FAQItem = ({question, navigation, color}) => {

  const Width = width;
  const [expand, setExpand] = useState(false);
  const [fontColor, setFontColor] = useState('black');

  useEffect(()=>{
    if (color !== null){
      setFontColor(color)
    }
  })

  function getAnswer(){
    switch (question){
      case "What can Siitch do for me?":
        return "This app will give you context for what you consume. Are you concerned about the planet? Your " +
          "micro-actions over your lifetime have a major impact. This app will help you better understand the impact " +
          "of your decisions. Right now, the metric is water."
      case "What am I supposed to do with this information?":
        return (
          <Text>
            Use Siitch to motivate behavior change. {'\n'}
            Use Siitch to remind yourself how much water is required to produce the simplest of items, from a glass of milk to paper coffee cups. {'\n'}
            Use the statistics to have conversations with your kids, to help teach them that everything has a cost. {'\n'}
            Use the statistics to teach your friends about the deeper cost of food waste.{'\n'}
            Use the statistics to teach them that casually throwing out single-use items has a much bigger impact than they imagine. {'\n'}
            Use Siitch to understand that when you buy or throw something away, whether a pair of jeans or an egg, that water and the earth's resources make it possible. {'\n'}
            Use the compare tool to visualize the differences.
          </Text>
        )
      case "Why did you build this app?":
        return "We love this planet. We thought everyone should have a better understanding of what they consume. We " +
          "hope by having better awareness, you can make better decisions that are right for you and the planet, one " +
          "Siitch-uation at a time."
      case "Are you going to break down the units in the future, so I can select 1/2 or 1/4 of a pound (or kilo) of an item vs a full pound or kilo?":
        return "That's the plan. Baby steps."
      case "Why should I care about water?":
        return "Let's break it down: 97% of the world's water is too salty to drink. 2% is locked in icecaps and glaciers." +
          " Less than 1% of earth's water is drinkable. Agriculture uses about 70% of freshwater globally. Due to climate" +
          " change, farmers and cities can no longer rely on snowmelt and glacier runoff during the summer. Aquifers are" +
          " drying up: 21 of the world’s largest 37 aquifers have exceeded sustainability tipping points. Less water " +
          "means less food. There's roughly 7.8 billion people on earth today. We're heading towards 9 billion by 2050. " +
          "We're going to need every drop.\n\n" +
          "Apart from keeping us alive, water enables societies to thrive. Clean, sustainable water provides the foundation" +
          " for everything we rely on: agriculture, trade, sanitation, political stability, our health and so much more."
      case "What is virtual water, and why should I care?":
        return (
          <Text>
            Virtual water is the volume of water used to produce consumer products such as food, clothes, your phone,
            plastic cups etc. Scientists estimate 90-97% of the water we use every day is virtual water, which is why
            it's important to understand how our everyday decisions impact the planet. Virtual water includes rain,
            irrigated, and the water used to clean an item (also known as green, blue and gray water) before it is ready
            for consumption. See our <Text
            onPress={() => navigation.navigate('Virtual')}
            style={{
              color: '#00ADEF',
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 10,
              paddingBottom: '7%',
              alignSelf: 'center',
            }
            }>
            Virtual Water
          </Text> page for more details.
          </Text>
        )
      case "How much water does the average person use every day?":
        return (
          <Text>
            According to <Text
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://www.watercalculator.org',
              )
              Analytics.logEvent('Source_click',{
                source_name: 'Water Calculator',
                source_url: 'https://www.watercalculator.org/'
              })
            }}
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontSize: 17,
              marginTop: 10,
              paddingBottom: '7%',
              alignSelf: 'center',
            }
            }>
            www.watercalculator.org
          </Text> the US average / water consumption per person is 1,802 gallons per day (6,821 L). This accounts for
            direct and indirect water use. Examples of direct water use are bathing, cooking, doing laundry:
            essentially, any time you turn on a tap. Indirect water, also known as virtual water (the statistics that
            this app mainly shows) is the total volume of water used to produce consumer products.
          </Text>
        )
      case "Is there a scale that shows me where I am compared to everyone else?":
        return (
          <Text>
            The 1,802 gallons per day statistic is broad. We are not affiliated with the GRACE Communications Foundation,
            but their terrific
            <Text onPress={() => {
              WebBrowser.openBrowserAsync('https://www.watercalculator.org')
              Analytics.logEvent('Source_click',{
                source_name: 'Water Calculator',
                source_url: 'https://www.watercalculator.org/'
              })
            }}
                  style={{color: '#00ADEF'}}> Water Calculator </Text>
            can help you see how you compare.
          </Text>
        )
      case "If the average American uses 1,802 gallons of water per day, what should we be aiming for?":
        return "Less than that. What's important is making every day and every decision count. Knowing the impact of " +
          "your actions and purchasing decisions is key."
      case "These statistics are shocking. What are your sources?":
        return (
          <Text>
            We were shocked by the numbers as well. See our <Text
            onPress={() => navigation.navigate('Sources')}
            style={{
              color: '#00ADEF',
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 10,
              paddingBottom: '7%',
              alignSelf: 'center',
            }
            }>
            Sources
          </Text> page in the menu.
          </Text>
        )
      case "So, should I stop eating avocados?":
        return "No! Avocados are good for you! What's important is being aware of what it takes to make them, so you " +
          "don't waste them. If you buy a pound of avocados and let them go bad, you've just wasted 237 gallons of water. " +
          "Worse still, if you're not composting, they will then sit in a landfill with other trash and emit carbon and " +
          "methane, further contributing to climate change. Your daily micro-actions have a major impact."
      case "Why can't I find information for items like Pop Tarts and mac & cheese?":
        return "Statistics for processed foods or foods with multiple ingredients are hard to find. Our database " +
          "currently has ~200 items and we plan to add more."
      case "Are you going to show other statistics in the future?":
        return "That's the goal."
      case "What can I do to reduce my impact?":
        return (
          <Text>
            There are hundreds of small things you can do every day to make a difference.
            The first step? Know what you’re consuming. And stick to the 8 R's of sustainability:
            refuse, reduce, reuse, refill, repair, regift, recycle, repeat. {'\n'} {'\n'}
            In the Search pages, you'll see a list of ideas within the 'What Can I Do'
            links. {'\n'} {'\n'}
            A few other terrific sites, this for water: <Text
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://wateruseitwisely.com/100-ways-to-conserve-water')
              Analytics.logEvent('Source_click',{
                source_name: '100 ways to conserve water',
                source_url: 'https://wateruseitwisely.com/100-ways-to-conserve-water'
              })
            }}
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontSize: 17,
              marginTop: 10,
              paddingBottom: '7%',
              alignSelf: 'center',
            }
            }>
            www.wateruseitwisely.com
          </Text> {'\n'}And this for reducing your waste: <Text
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://zerowastehome.com/tips/')
              Analytics.logEvent('Source_click',{
                source_name: 'Tips for reducing waste',
                source_url: 'https://zerowastehome.com/tips/'
              })
            }}
            style={{
              color: 'blue',
              fontSize: 17,
              marginTop: 10,
              textDecorationLine: 'underline',
              paddingBottom: '7%',
              alignSelf: 'center',
            }
            }>
            www.zerowastehome.com
          </Text>
          </Text>
        )
      case "Why does my screen look misaligned/weird?":
        return "This app is just in its beginning stages. Right now Siitch looks best on newer iPhones with regular " +
          "non-zoomed in text.\nAndroid devices, iPads, Apple Watches, older phones, and iPhones with zoomed in displays" +
          " are currently not supported. We plan on supporting all platforms in the future."
    }
  }

  return (
    <View>
      <View
        style={{
          marginTop: 5,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: 20,
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
            color: fontColor
          }}
          onPress={() => {
            if(!expand){
              Analytics.logEvent('FAQ_question_pressed',{
                question: question
              })
            }
            setExpand(!expand)
          }}>
          {question}
        </Text>
        {expand ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: '3%',
            }}>
            {getAnswer()}
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
      <View style={{borderBottomColor: 'lightgray', borderBottomWidth: 1, paddingTop: '3%'}}/>
    </View>
  )
}
