import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {Overlay} from "./overlay"
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import surpriseSloth from "../images/surpriseSloth.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalModal = () => {
  useEffect(()=> {
    AsyncStorage.setItem('surprisedYet', 'true')
  })
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderColor: '#00ADEF',
        borderWidth: 1.5,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
      }}>
        <TouchableOpacity
          onPress={() => {
            Overlay.close()
          }}
          style={{
            zIndex: 10,
            alignSelf: 'flex-end',
            position: 'absolute'
          }}>
          <Image
            source={itemDetailImages.closeInfoModal}
            style={{
              width: 50,
              height: 50
            }}/>
        </TouchableOpacity>
        <View style={{
          marginTop: 23,
          padding: 20
        }}>
          <Text style={{
            fontSize: 18
          }}>
            Shocked by these numbers? Don’t feel bad.
            They’re just numbers. It’s what you do with the knowledge that counts.
            {'\n\n'}
            One thing you can do today?
            {'\n'}
            Look in your fridge.
            {'\n\n'}
            Move any items or vegetables soon to expire to the front. Eat them first.
            Food waste has a major carbon footprint, and as you’ve seen, a major water footprint!
          </Text>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center'}}>
            <Image
              source={surpriseSloth}
              style={{
                width: 222,
                height: 222 * 320 / 444,
                marginTop: 25
              }}/>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                marginTop: 20,
                backgroundColor: "#8DC73F"
              }}
              onPress={() => {
                Overlay.close()
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
