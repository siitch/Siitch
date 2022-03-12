import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Profiles from "../ImageDB";
import Counter from "react-native-counters";
import React, {useEffect, useState} from "react";

export default function CompareItem({navigation, name, itemInfo, metric, minItems,
                                      selectedMetricToDisplay, selectedMeasurement,
                                      selectedSize, updateParent}) {
  let [localCount, setLocalCount] = useState(1);
  const [nonWaterUnit] = useState(metric.localeCompare('Time to decompose') === 0)

  let [min, setMin] = useState(false)
  useEffect(()=>{
    if (!nonWaterUnit) {
      updateParent(name, localCount * itemInfo[metric])
      minItems.includes(name) ? setMin(true) : setMin(false)
    }
  })
  useEffect(()=>{

  },[min])

  function numberWithCommas(x) {
    if( isNaN(x) ) return " -"
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  let [localTotal, setLocalTotal] = useState(itemInfo[metric])
  function handleUpdate() {
    if (!nonWaterUnit) {
      updateParent(name, localTotal)
    }
  }

  useEffect(()=>{
    setLocalTotal(parseInt(itemInfo[metric]) * localCount)
  },[localCount])
  useEffect(()=>{
    handleUpdate()
  },[localTotal])

  return (
    <View style={min ? itemStyle.minContainer : itemStyle.container}>
      {(metric.localeCompare('Time to decompose') !== 0 && (
        <View style={itemStyle.counter}>
          <Counter
            buttonStyle={{ borderWidth: 0 }}
            buttonTextStyle={{ color: '#0e0f0f', fontSize: 20, fontWeight: '500'}}
            countTextStyle={{ color: '#0e0f0f', fontSize: 17}}
            start={1}
            onChange={(len, type)=>{
              setLocalCount(localCount + (type === "+" ? 1 : -1))
            }}
          />
        </View>
      )) ||  <Text style={{marginBottom: 23}}>  </Text>}

      <TouchableOpacity onPress={()=>{navigation.navigate('Detail', {itemName: name, localQuantity: localCount})}}>
        <Image
          source={Profiles[name]}
          style={itemStyle.image}
          resizeMode="contain"/>
      </TouchableOpacity>
      <Text style={itemStyle.itemName}>{name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={!nonWaterUnit && {width: 16, height: 16 } || {width: 20, height: 20 }}
          source={!nonWaterUnit && Profiles.water || Profiles.clock}
        />
        <Text style={!nonWaterUnit && itemStyle.boldTextFormatBlueCompare || itemStyle.boldTextFormatRedCompare}>
          {numberWithCommas(parseInt(itemInfo[metric]) * localCount)} {itemInfo[selectedMetricToDisplay]}
        </Text>
      </View>
      <View>
        <Text style={itemStyle.textFormatCompare}>{localCount === 1 ? itemInfo[selectedMeasurement] : "total"}</Text>
        <Text style={{paddingBottom: 5, fontSize:13}}>{itemInfo[selectedSize]}</Text>
      </View>
    </View>
  )
}

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "column",
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  minContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "column",
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#6dbd64',
    borderWidth: 4,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  counter: {
    borderWidth:1,
    borderColor: '#0e0f0f',
    borderRadius:50,
    marginTop: 5,
    transform: [{scale: 0.8}],
  },
  image: {
    width: 144,
    height: 144,
    alignItems:'center'
  },
  itemName: {
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold'
  },
  boldTextFormatBlueCompare: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ADEF'
  },
  boldTextFormatRedCompare: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ef0100'
  },
  textFormatCompare: {
    textAlign: 'center',
    fontSize: 16,
  },
})
