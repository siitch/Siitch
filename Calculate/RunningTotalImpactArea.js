import React, { useEffect, useState } from "react";
import { frequency_values } from "./CalculatorGeneral";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { VirtualWaterInfoModal } from "../components/Modals/Modals";
import CalculateContainer from "../components/CalculateContainer";
import { GLSwitcher } from "../components/GLSwitcher";
import { calculatorStyle } from "../Styles/Style";
import { NumberWithTextLabel } from "./NumberFormatter";
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import { ImpactPicker } from "./CustomPicker";
import analytics from "@react-native-firebase/analytics";
const DeviceWidth = Dimensions.get('window').width;

export function RunningTotalImpactArea({ globalUnit, runningTotalList, GLSwitchHandler }) {
  const [impactNumber, setImpactNumber] = useState({
    'subTotalGallon': 0,
    'subTotalLiter': 0,
    'imageCounterSingleUseCount': 0,
    'imageCounterSubYearlyImpact': 0,
    'yearly': {
      'Gallon': 0,
      'Liter': 0,
    },
    'monthly': {
      'Gallon': 0,
      'Liter': 0,
    },
    'weekly': {
      'Gallon': 0,
      'Liter': 0,
    },
    'daily': {
      'Gallon': 0,
      'Liter': 0,
    },
    'single use': {
      'Gallon': 0,
      'Liter': 0,
    }
  });
  const [impactUnit, setImpactUnit] = useState('yearly');

  function calculateAllTheMath() {
    if (runningTotalList.length > 0) {
      let subTotalGallon = 0;
      let subTotalLiter = 0;

      let singleUseImpactGallon = 0;
      let singleUseImpactLiter = 0;

      let subYearlyImpactGallon = 0;
      let subYearlyImpactLiter = 0;

      runningTotalList.forEach((runningItem, i) => {
        subTotalGallon += runningItem.itemWaterInGallon * runningItem.itemQuantity;
        subTotalLiter += runningItem.itemWaterInLiter * runningItem.itemQuantity;

        if (runningItem.itemFrequency === 'single_use') {
          singleUseImpactGallon += runningItem.itemWaterInGallon * runningItem.itemQuantity;
          singleUseImpactLiter += runningItem.itemWaterInLiter * runningItem.itemQuantity;
        }

        if (runningItem.itemFrequency !== 'single_use') {
          subYearlyImpactGallon +=
            runningItem.itemWaterInGallon *
            runningItem.itemQuantity *
            frequency_values[runningItem.itemFrequency];
          subYearlyImpactLiter +=
            runningItem.itemWaterInLiter *
            runningItem.itemQuantity *
            frequency_values[runningItem.itemFrequency];
        }
      });

      setImpactNumber({
        'subTotalGallon': subTotalGallon,
        'subTotalLiter': subTotalLiter,
        'imageCounterSingleUseCount': singleUseImpactGallon,
        'imageCounterSubYearlyImpact': subYearlyImpactGallon,
        'yearly': {
          'Gallon': subYearlyImpactGallon + singleUseImpactGallon,
          'Liter': subYearlyImpactLiter + singleUseImpactLiter,
        },
        'monthly': {
          'Gallon': subYearlyImpactGallon / 12 + singleUseImpactGallon,
          'Liter': subYearlyImpactLiter / 12 + singleUseImpactLiter,
        },
        'weekly': {
          'Gallon': (subYearlyImpactGallon / 365) * 7 + singleUseImpactGallon,
          'Liter': (subYearlyImpactLiter / 365) * 7 + singleUseImpactLiter,
        },
        'daily': {
          'Gallon': subYearlyImpactGallon / 365 + singleUseImpactGallon,
          'Liter': subYearlyImpactLiter / 365 + singleUseImpactLiter,
        },
        'single use': {
          'Gallon': subTotalGallon,
          'Liter': subTotalLiter,
        }
      });
    }
  }
  useEffect(() => {
    calculateAllTheMath();
  }, [runningTotalList]);
  // Virtual water info popup
  const [infoVisible, setInfoVisible] = useState(false);
  function closeInfoModal() {
    setInfoVisible(false);
  }

  return (
    <View>
      {/* Summary Area */}
      <View style={{paddingHorizontal: '5%'}}>
        {/* Summary Bar */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            marginRight: 10,
          }}>
            Total
          </Text>
          <GLSwitcher globalUnit={globalUnit}  customStyle={calculatorStyle.summaryBarSwitchContainer} switchHandler={GLSwitchHandler}/>
          <View style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
            alignItems: 'center',
          }}>
            <Image
              source={require('./../images/water_drop_150px_wide2.png')}
              style={{
                width: 30,
                height: 30,
              }}/>
            <Text style={{
              fontSize: 20,
              fontWeight: '500',
              maxWidth: DeviceWidth * 3 / 7
            }}
                  numberOfLines={1}>
              {globalUnit === 'G' ?
                NumberWithTextLabel(impactNumber['subTotalGallon']) + ' G' :
                NumberWithTextLabel(impactNumber['subTotalLiter']) + ' L'}
            </Text>
          </View>
        </View>

        {/* Impact Area */}
        <View style={{
          marginTop: 10,
          alignItems: 'center',
        }}>

          {/* Impact Title and Info Button*/}
          <Text style={{
            fontSize: 30,
            fontWeight: '600',
            marginLeft: 25
          }}>
            Impact
            <TouchableOpacity
              onPress={() => {
                setInfoVisible(true);
                analytics().logEvent('Info_button_pressed',{
                  infoName: 'Virtual_Water'
                });
              }}>
              <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
            </TouchableOpacity>
          </Text>

          {/* Impact Dropdown */}
          <ImpactPicker
            impactUnit={impactUnit}
            setImpactUnit={setImpactUnit}
            customUnits={[
              {label: 'Daily', value: 'daily'},
              {label: 'Weekly', value: 'weekly'},
              {label: 'Monthly', value: 'monthly'},
              {label: 'Yearly', value: 'yearly'},
            ]}/>

          {/* Running Total Number */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Image
              source={require('./../images/water_drop_150px_wide2.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: 23
              }}/>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 30,
                fontWeight: '500',
                marginTop: 20
              }}>
              {globalUnit === 'G' ?
                NumberWithTextLabel(impactNumber[impactUnit]['Gallon']) + ' Gal' :
                NumberWithTextLabel(impactNumber[impactUnit]['Liter']) + ' L'}
            </Text>
          </View>

        </View>

      </View>

      {/* Running Total Visualize */}
      <CalculateContainer numberCost={impactNumber[impactUnit]['Gallon']}/>
      <VirtualWaterInfoModal infoVisible={infoVisible} handler={closeInfoModal}/>
    </View>
  )
}
