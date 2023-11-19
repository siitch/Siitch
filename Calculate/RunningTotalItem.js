import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Profiles from "../ImageDB";
import React, {useEffect, useRef, useState} from "react";
import {NumberFormatter} from "./NumberFormatter";
import { SearchBar } from '@rneui/themed';
import pluralize from "pluralize";
import { getItemDisplayMetric } from "./CalculatorGeneral";
import { FrequencyPicker, QuantityPicker } from "./CustomPicker";
const DeviceWidth = Dimensions.get('window').width;

export default function RunningTotalItem (
  {
    itemIndex,
    globalUnit,
    itemName,
    itemDisplayedMetricInGallon,
    itemDisplayedMetricInLiter,
    itemWaterInGallon,
    itemWaterInLiter,
    itemQuantity,
    itemFrequency,
    updateRunningTotalList,
    removeItemFromRunningTotalList,
  }) {

  // Main picker
  const [quantityPickerValue, setQuantityPickerValue] = useState(null);
  const [quantity, setQuantity] = useState(itemQuantity);
  const [frequency, setFrequency] = useState(itemFrequency);
  useEffect(()=>{
    setQuantity(itemQuantity);
  }, [itemQuantity]);
  useEffect(()=>{
    setFrequency(itemFrequency);
  }, [itemFrequency]);
  useEffect(()=>{
    updateRunningTotalList(itemIndex, quantity, frequency);
  }, [quantity]);
  useEffect(()=>{
    updateRunningTotalList(itemIndex, quantity, frequency);
  }, [frequency]);

  function handleQuantityUpdate(newQuantity) {
    setQuantity(newQuantity);
    setQuantityPickerValue(newQuantity);
  }

  function CustomInputAccessoryView({itemName, initialQuantity, handleQuantityUpdate}) {
    // experimental
    const mainSearchBar = useRef(null);
    const [inputBarText, setInputBarText] = useState(initialQuantity);
    const [displayMetric, setDisplayMetric] = useState('');
    useEffect(() => {
      let itemDisplayMetricFetched = getItemDisplayMetric(itemName, globalUnit);
      if (itemDisplayMetricFetched === 'lb' ||
        itemDisplayMetricFetched === 'kg' ||
        itemDisplayMetricFetched === 'dozen') {
        setDisplayMetric(itemDisplayMetricFetched);
      } else {
        setDisplayMetric(pluralize(itemDisplayMetricFetched, inputBarText*1));
      }
    }, [inputBarText]);
    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#D2D4D9',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -3
          },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
        <View style={{
          height: 48,
          width: 48,
          marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={Profiles[itemName]}/>
        </View>
        <SearchBar
          ref={mainSearchBar}
          keyboardType={'decimal-pad'}
          placeholder="Pick a quantity or type here..."
          platform={'ios'}
          searchIcon={null}
          clearIcon={<Text style={{fontSize: 15}}>{displayMetric}</Text>}
          cancelButtonTitle={'Done'}
          containerStyle={{
            width: DeviceWidth - 58,
            backgroundColor: '#D2D4D9',
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
          value={inputBarText ? inputBarText.toString() : ''}
          onChangeText={(value) => {
            if (!isNaN(value)) {
              setInputBarText(value);
            }
          }}
          onBlur={()=>{
            handleQuantityUpdate(inputBarText);
          }}
          onClear={()=>{
            handleQuantityUpdate(inputBarText);
          }}
        />
      </KeyboardAvoidingView>
    )
  }

  return(
    <View>
      {/* Item Container */}
      <View style={{paddingHorizontal: '5%'}}>
        {/* Item image and name */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={Profiles[itemName]}/>
          <Text style={{
            fontSize: 20,
            fontWeight: '400',
            marginLeft:7,
            marginTop:10
          }}>
            {itemName}{' '}
            {globalUnit === 'G' ?
              itemDisplayedMetricInGallon :
              itemDisplayedMetricInLiter}
          </Text>
        </View>

        {/* Pickers, item total, and clear button */}
        <View style={{
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          {/* Pickers */}
          <QuantityPicker
            itemName={itemName}
            globalUnit={globalUnit}
            pickerValue={quantityPickerValue}
            setQuantityPickerValue={setQuantityPickerValue}
            quantity={quantity}
            setQuantity={setQuantity}
            handleQuantityUpdate={handleQuantityUpdate}
            customStyle={{
              paddingHorizontal: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              height: 50,
              width: DeviceWidth * 0.3,
              borderWidth: 2,
              borderRadius: 20,
              borderColor: '#80CAFF',
            }}
            customInputComponent={
            <CustomInputAccessoryView
              itemName={itemName}
              initialQuantity={quantity}
              handleQuantityUpdate={handleQuantityUpdate}/>}
            inputTextMaxWidth={"70%"}
            dynamicFontScaleFactor={0.21}
            hasTitle={false}
          />
          <FrequencyPicker
            frequency={frequency}
            setFrequency={setFrequency}
            hasTitle={false}
            customFrequencies={[
              {label: 'single use', inputLabel: 'S', value: 'single_use'},
              {label: 'a day', inputLabel: 'D', value: 'per_day'},
              {label: 'a week', inputLabel: 'W', value: 'per_week'},
              {label: 'a month', inputLabel: 'M', value: 'per_month'},
              {label: 'a year', inputLabel: 'Y', value: 'per_year'},
            ]}
            hasPlaceholder={false}
            customStyle={{
              inputIOS: {
                fontSize: 20,
                height: '100%',
                textAlign: 'center',
                marginRight: 30,
              },
              inputIOSContainer: {
                backgroundColor: 'white',
                overflow: 'hidden',
                height: 50,
                width: DeviceWidth * 0.2,
                marginLeft: 10,
                borderWidth: 2,
                borderColor: '#80CAFF',
                borderRadius: 20,
              },
              iconContainer: {
                height: '100%',
                width: 30,
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          />

          {/* Item total and clear button */}
          <View style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
          }}>
            <Text
              numberOfLines={1}
              style={{
              fontSize: 20,
              fontWeight: '400',
              maxWidth: DeviceWidth / 4,
            }}>
              {globalUnit === 'G' ?
                NumberFormatter(itemWaterInGallon * quantity, 1) :
                NumberFormatter(itemWaterInLiter * quantity, 1)}
            </Text>
            <TouchableOpacity onPress={() => removeItemFromRunningTotalList(itemIndex)}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft:15,
                }}
                source={require('./../images/red_x.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View
        style={{
          borderBottomColor: '#00000033',
          borderBottomWidth: 1,
          marginTop: 1,
        }}
      />
    </View>
  )
}
