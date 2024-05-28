import {Dimensions, Text, View} from "react-native";
import RunningTotalItem from "../Calculate/RunningTotalItem";
import { homepageStyle } from "../Styles/Style";
import React, {useState} from "react";
import { RunningTotalImpactArea } from "../Calculate/RunningTotalImpactArea";
const DeviceWidth = Dimensions.get('window').width;

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
                  width: DeviceWidth * 0.23,
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
                    marginRight: 20,
                  },
                  inputIOSContainer: {
                    width: 100,
                  },
                  iconContainer: {
                    marginRight: 3,
                  },
                }}
              />
            </View>
          ))
        }

        <RunningTotalImpactArea
          globalUnit={globalUnit}
          runningTotalList={runningTotalList}
          GLSwitchHandler={setGlobalUnit}
        />

      </View>
      <Text style={homepageStyle.calculatorReminderText}>
        Remember, it’s not just about the{'\n'}
        numbers. Keep eating avocados. It’s{'\n'}
        awareness that everything has a cost.
      </Text>
    </View>
  )
}
