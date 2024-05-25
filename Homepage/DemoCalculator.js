import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import RunningTotalItem from "../Calculate/RunningTotalItem";
import { calculatorStyle, homepageStyle } from "../Styles/Style";
import {NumberWithTextLabel} from "../Calculate/NumberFormatter";
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import {ImpactPicker} from "../Calculate/CustomPicker";
import CalculateContainer from "../components/CalculateContainer";
import React, {useEffect, useState} from "react";
import {frequency_values} from "../Calculate/CalculatorGeneral";
import {VirtualWaterInfoModal} from "../components/Modals/Modals";
import {GLSwitcher} from "../components/GLSwitcher";
const DeviceWidth = Dimensions.get('window').width;
// TODO: -isolate the running total module
//       -isolate the style of the module
export const DemoCalculator = () => {
  const [globalUnit, setGlobalUnit] = useState('G');
  const [runningTotalList, setRunningTotalList] = useState([
    {
      itemName: 'Avocado',
      itemDisplayedMetricInGallon: 'p/lb',
      itemDisplayedMetricInLiter: 'p/kg',
      itemWaterInGallon: 237,
      itemWaterInLiter: 1981,
      itemQuantity: 4,
      itemFrequency: 'per_month',
    },
    {
      itemName: 'Toast',
      itemDisplayedMetricInGallon: 'p/slice',
      itemDisplayedMetricInLiter: 'p/slice',
      itemWaterInGallon: 11,
      itemWaterInLiter: 40,
      itemQuantity: 5,
      itemFrequency: 'per_week',
    },
    {
      itemName: 'Coffee 1 cup',
      itemDisplayedMetricInGallon: 'p/cup',
      itemDisplayedMetricInLiter: 'p/cup',
      itemWaterInGallon: 37,
      itemWaterInLiter: 140,
      itemQuantity: 1,
      itemFrequency: 'per_day',
    }
  ]);
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
  function updateRunningTotalList(index, newQuantity, newFrequency) {
    const updatedRunningTotalList = runningTotalList.map(
      (runningItem, i) => {
        if (i !== index) {
          return runningItem;
        } else {
          return {
            itemName: runningItem.itemName,
            itemDisplayedMetricInGallon: runningItem.itemDisplayedMetricInGallon,
            itemDisplayedMetricInLiter: runningItem.itemDisplayedMetricInLiter,
            itemWaterInGallon: runningItem.itemWaterInGallon,
            itemWaterInLiter: runningItem.itemWaterInLiter,
            itemQuantity: newQuantity,
            itemFrequency: newFrequency,
          };
        }
      });
    setRunningTotalList(updatedRunningTotalList);
  }

  useEffect(() => {
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
    calculateAllTheMath();
  }, [runningTotalList]);
  const [infoVisible, setInfoVisible] = useState(false);
  function closeInfoModal() {
    setInfoVisible(false);
  }
  return (
    <View style={homepageStyle.calculatorSectionContainer}>
      <Text style={homepageStyle.calculatorSectionTitleText}>
        Use the Eco-Calculator
      </Text>
      <View style={homepageStyle.calculatorBox}>
        {
          runningTotalList.map((runningItem, index) => (
            <View key={index}>
              <RunningTotalItem
                itemIndex={index}
                globalUnit={globalUnit}
                itemName={runningItem.itemName}
                itemDisplayedMetricInGallon={runningItem.itemDisplayedMetricInGallon}
                itemDisplayedMetricInLiter={runningItem.itemDisplayedMetricInLiter}
                itemWaterInGallon={runningItem.itemWaterInGallon}
                itemWaterInLiter={runningItem.itemWaterInLiter}
                itemQuantity={runningItem.itemQuantity}
                itemFrequency={runningItem.itemFrequency}
                updateRunningTotalList={updateRunningTotalList}
                removable={false}
                customQuantityPickerStyle={{
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  height: 50,
                  width: DeviceWidth * 0.23,
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: '#80CAFF',
                }}
                dynamicFontScaleFactor={0.13}
                customFrequencies={[
                  {label: 'single use', inputLabel: 'Single', value: 'single_use'},
                  {label: 'a day', inputLabel: 'Day', value: 'per_day'},
                  {label: 'a week', inputLabel: 'Week', value: 'per_week'},
                  {label: 'a month', inputLabel: 'Month', value: 'per_month'},
                  {label: 'a year', inputLabel: 'Year', value: 'per_year'},
                ]}
                customFrequencyPickerStyle={{
                  inputIOS: {
                    fontSize: 20,
                    height: '100%',
                    textAlign: 'center',
                    marginRight: 20,
                  },
                  inputIOSContainer: {
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    height: 50,
                    width: 100,
                    marginLeft: 10,
                    borderWidth: 2,
                    borderColor: '#80CAFF',
                    borderRadius: 20,
                  },
                  iconContainer: {
                    height: '100%',
                    width: 30,
                    marginRight: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
              />
            </View>
          ))
        }

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
            <GLSwitcher globalUnit={globalUnit}  customStyle={calculatorStyle.summaryBarSwitchContainer} switchHandler={setGlobalUnit}/>
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
                  /*analytics().logEvent('Info_button_pressed',{
                    infoName: 'Virtual_Water'
                  });*/
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

      </View>
      <Text style={homepageStyle.calculatorReminderText}>
        Remember, it’s not just about the{'\n'}
        numbers. Keep eating avocados. It’s{'\n'}
        awareness that everything has a cost.
      </Text>
      <VirtualWaterInfoModal infoVisible={infoVisible} handler={closeInfoModal}/>
    </View>
  )
}
