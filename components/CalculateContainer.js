import React, {useEffect, useState} from "react";
import {StyleSheet, Image, Text, View, Dimensions} from "react-native";
import NumberTicker from "./NumberTicker";
import {WaterContainerCounterNumberFormatter} from "../Calculate/NumberFormatter";

let deviceWidth = Dimensions.get('screen').width

export default function CalculateContainer ({numberCost}) {
  const [cost, setCost] = useState(numberCost)
  useEffect(() => {
    setCost(numberCost);
  },[numberCost]);

  return (
    <Counter cost={cost}/>
  )
}

function Counter ({cost}) {
  const containers = {
    bathTub: {
      image: require('../images2/80Gal.jpeg'),
      metric: 80,
      context: '80 gal. bathtub\n(302 L.)',
      size: {
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.5
      }
    },
    waterTruck: {
      image: require('../images2/2000Gal.jpeg'),
      metric: 2000,
      context: '2,000 gal. tank\n(7,570 L.)',
      size: {
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.5
      }
    },
    mediumTank: {
      image: require('../images2/12000Gal.jpeg'),
      metric: 12000,
      context: '12,000 gal. tank\n(45,425 L.)',
      size: {
        height: deviceWidth * 0.3,
        width: deviceWidth * 0.5
      }
    },
    hugeTank: {
      image: require('../images2/100000Gal.jpeg'),
      metric: 100000,
      context: '100,000 gal. tank\n(378,541 L.)',
      size: {
        height: deviceWidth * 0.2,
        width: deviceWidth * 0.65
      }
    },
    olympicPool: {
      image: require('../images2/660000Gal.jpeg'),
      metric: 660000,
      context: '660,000 gal. (2.5 mil L.)\nOlympic pool',
      size: {
        height: deviceWidth * 0.35,
        width: deviceWidth * 0.6
      }
    }
  }

  const [containerType, setContainerType] = useState(containers.bathTub)
  const [color, setColor] = useState()

  useEffect(()=>{
    if (cost < 2000) {
      setContainerType(containers.bathTub)
      setColor('#A68E41')
    } else if (cost >= 2000 && cost < 12000) {
      setContainerType(containers.waterTruck)
      setColor('#00ADEF')
    } else if (cost >= 12000 && cost < 100000) {
      setContainerType(containers.mediumTank)
      setColor('orange')
    } else if (cost >= 100000 && cost < 660000) {
      setContainerType(containers.hugeTank)
      setColor('#FF9500')
    } else if (cost >= 660000) {
      setContainerType(containers.olympicPool)
      setColor('#C06069')
    }
  },[cost])

  return(
    <View style={styles.outerView}>
      <View style={{
        height: containerType.size.height,
        width: containerType.size.width,
      }}>
        <Image
          source={containerType.image}
          style={[styles.containerImage, {height: containerType.size.height, width: containerType.size.width}]}/>
        <Text style={styles.imageContext}>{containerType.context}</Text>
      </View>
      <Text style={[styles.timesMark, {color: color}]}> &times; </Text>
      <NumberTicker
        number={WaterContainerCounterNumberFormatter(cost / containerType.metric, 1)}
        margin={Number.isInteger(1 * WaterContainerCounterNumberFormatter(cost / containerType.metric, 1)) ? 5 : 0}
        textSize={25}
        duration={1500}
        textStyle={{fontWeight: 'bold', color: color}}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  outerView: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 45,
  },
  fillUpText: {
    fontSize: 20,
    fontWeight: '500'
  },
  timesMark: {
    fontWeight: 'bold',
    fontSize: 20
  },
  containerImage: {
    borderRadius: 20,
    resizeMode: 'cover'
  },
  imageContext: {
    textAlign: 'center',
    fontSize: 17
  }
})
