import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
const {width} = Dimensions.get('screen');
import {View, Text, Dimensions, Linking, TouchableHighlight, ScrollView,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Width = width;

export const FAQ = ({ navigation }) => {
  const [expand, setExpand] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);
  const [expand6, setExpand6] = useState(false);
  const [expand7, setExpand7] = useState(false);
  const [expand8, setExpand8] = useState(false);
  const [expand9, setExpand9] = useState(false);
  const [expand10, setExpand10] = useState(false);
  const [expand11, setExpand11] = useState(false);
  const [expand12, setExpand12] = useState(false);

  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          marginTop: 10,
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
          }}
          onPress={() => setExpand(!expand)}>
          What can Siitch do for me?
        </Text>
        {expand ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: '3%',
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
      <View style={{borderBottomColor: 'lightgray', borderBottomWidth: 1, paddingTop: '3%'}}/>
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
            color: '#2f97ef'
          }}
          onPress={() => setExpand1(!expand1)}>
          <Text>
            What am I supposed to do with this information?
          </Text>
        </Text>
        {expand1 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            Use Siitch to motivate behavior change. {'\n'}
            Use Siitch to remind yourself how much water is required to produce the simplest of items, from a glass of milk to paper coffee cups. {'\n'}
            Use the statistics to have conversations with your kids, to help teach them that everything has a cost. {'\n'}
            Use the statistics to teach your friends about the deeper cost of food waste.{'\n'}
            Use the statistics to teach them that casually throwing out single-use items has a much bigger impact than they imagine. {'\n'}
            Use Siitch to understand that when you buy or throw something away, whether a pair of jeans or an egg, that water and the earth's resources make it possible. {'\n'}
            Use the compare tool to visualize the differences.

          </Text>
        ) : null}
        {expand1 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand1(false)}
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
            onPress={() => setExpand1(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand2(!expand2)}>
          <Text>
            Why did you build this app?
          </Text>
        </Text>
        {expand2 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            We love this planet. We thought everyone should have a better
            understanding of what they consume. We hope by having better awareness,
            you can make better decisions that are right for you and the planet,
            one Siitch-uation at a time.

          </Text>
        ) : null}
        {expand2 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand2(false)}
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
            onPress={() => setExpand2(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand3(!expand3)}>
          <Text>
            Why should I care about water?
          </Text>
        </Text>
        {expand3 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

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
        {expand3 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand3(false)}
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
            onPress={() => setExpand3(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand4(!expand4)}>
          <Text>
            What is virtual water, and why should I care?
          </Text>
        </Text>
        {expand4 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            Virtual water is the volume of water used to produce consumer products such as food,
            clothes, your phone, plastic cups etc. Scientists estimate 90-97% of the water we use every day is virtual water,
            which is why it's important to understand how our everyday decisions impact the planet.
            Virtual water includes rain, irrigated, and the water used to clean an item
            (also known as green, blue and gray water) before it is ready for consumption.
            See our <Text
            onPress={() => navigation.navigate('Virtual')}
            style={{
              color: 'black',
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
        ) : null}
        {expand4 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand4(false)}
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
            onPress={() => setExpand4(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand5(!expand5)}>
          <Text>
            How much water does the average person use every day?
          </Text>
        </Text>
        {expand5 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            According to <Text
            onPress={() => Linking.openURL(
              'https://www.watercalculator.org',
            )}
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
          </Text> the US average / water
            consumption per person is 1,802 gallons per day (6,821 L).
            This accounts for direct and indirect water use. Examples of direct water use are bathing,
            cooking, doing laundry: essentially, any time you turn on a tap.
            Indirect water, also known as virtual water (the statistics that this app mainly shows)
            is the total volume of water used to produce consumer products.


          </Text>
        ) : null}
        {expand5 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand5(false)}
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
            onPress={() => setExpand5(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand6(!expand6)}>
          <Text>
            Is there a scale that shows me where I am compared to everyone else?
          </Text>
        </Text>
        {expand6 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            The 1,802 gallons per day statistic is broad.
            We are not affiliated with the GRACE Communications Foundation,
            but their terrific Water Calculator can help you see how you compare.
          </Text>
        ) : null}
        {expand6 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand6(false)}
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
            onPress={() => setExpand6(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand7(!expand7)}>
          <Text>
            If the average American uses 1,802 gallons of water per day, what should we be aiming for?
          </Text>
        </Text>
        {expand7 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            Less than that. What's important is making every day and every decision count.
            Knowing the impact of your actions and purchasing decisions is key.
          </Text>
        ) : null}
        {expand7 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand7(false)}
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
            onPress={() => setExpand7(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand8(!expand8)}>
          <Text>
            These statistics are shocking. What are your sources?
          </Text>
        </Text>
        {expand8 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            We were shocked by the numbers as well. See our <Text
            onPress={() => navigation.navigate('Sources')}
            style={{
              color: 'black',
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
        ) : null}
        {expand8 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand8(false)}
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
            onPress={() => setExpand8(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand9(!expand9)}>
          <Text>
            So, should I stop eating avocados?
          </Text>
        </Text>
        {expand9 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            No! Avocados are good for you! Just because certain foods/items take a lot of resources,
            does not mean you should stop eating them. What's important is being aware
            of what it takes to make them, so you don't waste them.
            If you buy a pound of avocados and let them go bad, you've just wasted 237 gallons of water.
            Worse still, if you're not composting, they will then sit in a landfill with other trash and emit carbon and methane,
            further contributing to climate change. Your daily micro-actions have a major impact.
          </Text>
        ) : null}
        {expand9 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand9(false)}
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
            onPress={() => setExpand9(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand10(!expand10)}>
          <Text>
            Are you going to show other statistics {'\n'}in the future?
          </Text>
        </Text>
        {expand10 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            That's the goal.
          </Text>
        ) : null}
        {expand10 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand10(false)}
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
            onPress={() => setExpand10(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand11(!expand11)}>
          <Text>
            What can I do to reduce my impact?
          </Text>
        </Text>
        {expand11 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            There are hundreds of small things you can do every day to make a difference.
            The first step? Know what you’re consuming. And stick to the 8 R's of sustainability:
            refuse, reduce, reuse, refill, repair, regift, recycle, repeat. {'\n'} {'\n'}
            In the Search pages, you'll see a list of ideas within the 'What Can I Do'
            links. {'\n'} {'\n'}
            A few other terrific sites, this for water: <Text
            onPress={() => Linking.openURL(
              'https://wateruseitwisely.com/100-ways-to-conserve-water',
            )}
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
            onPress={() => Linking.openURL(
              'https://zerowastehome.com/tips/',
            )}
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
        ) : null}
        {expand11 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand11(false)}
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
            onPress={() => setExpand11(true)}
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
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          marginBottom: '5%',
          width: Width,
        }}>
        <Text
          style={{
            fontSize: 17,
            paddingTop: '1%',
            marginLeft: '3%',
            paddingRight: 15,
            paddingBottom: 10,
            fontWeight: 'bold',
          }}
          onPress={() => setExpand12(!expand12)}>
          <Text>
            Why does my screen look misaligned/weird?
          </Text>
        </Text>
        {expand12 ? (
          <Text
            style= {{
              fontWeight: 'normal',
              fontSize: 17,
              marginLeft: '3%',
              marginRight: "3%" ,

            }}>
            This app is just in its beginning stages. Right now Siitch looks
            best on newer iPhones with regular non-zoomed in text. {'\n'}
            Android devices, iPads, Apple Watches, older phones, and iPhones with zoomed in displays are
            currently not supported. We plan on supporting all platforms in the future.
          </Text>
        ) : null}
        {expand10 ? (
          <TouchableHighlight
            style={{marginLeft: Width / 1.125, marginTop: -20}}
            onPress={() => setExpand12(false)}
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
            onPress={() => setExpand12(true)}
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
