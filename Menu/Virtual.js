import 'react-native-gesture-handler';
import React from 'react';
const {width} = Dimensions.get('screen');
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import {openSourceLink} from "../util/common";

export const Virtual = () => {
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
          alignContent: 'flex-start',
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
          alignContent: 'flex-start',
          marginLeft: '7%',
          marginTop: '7%',
          marginRight: '7%',
        }}>
        Simply put, virtual water is the volume of water used to
        produce consumer products. Green water is rain water; blue
        water is irrigated water (water from aquifers, lakes, rivers);
        and gray water is water required to clean pollutants in the
        production process.
        {'\n'}{'\n'}
        Here’s a great site if you want to learn more.
      </Text>
      <Text
        onPress={() => {
          openSourceLink(
            'https://waterfootprint.org/en/',
            {
              name: 'Water footprint',
              url: 'https://waterfootprint.org/en/'
            })
        }}
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
          alignContent: 'flex-start',
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
          alignContent: 'flex-start',
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
          alignContent: 'flex-start',
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
          alignContent: 'flex-start',
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
