import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated, KeyboardAvoidingView,
} from "react-native";
import Profiles from "../ImageDB";
import React, {useEffect, useRef, useState} from "react";
import {Chevron} from "react-native-shapes";
import RNPickerSelect from 'react-native-picker-select';
import {NumberFormatter} from "./NumberFormatter";
import {calculatorStyle} from "./Calculate";
import { SearchBar } from '@rneui/themed';
import { ItemDisplayUnitDictionary } from "./ItemDisplayUnitDict";
import pluralize from "pluralize";
import { getItemDisplayMetric, quantities } from "./CalculatorGeneral";
const DeviceWidth = Dimensions.get('window').width;

export default function RunningTotalItem (
  {
    itemIndex,
    unit,
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
  const picker = useRef(null);
  const [pickerValue, setPickerValue] = useState(null);
  const [dynamicFontSize, setDynamicFontSize] = useState(20);
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
  const quantityPickerShadowLift = useRef(new Animated.Value(0)).current;
  const frequencyPickerShadowLift = useRef(new Animated.Value(0)).current;
  const liftSelfUp = (pickerName) => {
    Animated.timing(
      pickerName === 'frequencyPicker' ? frequencyPickerShadowLift : quantityPickerShadowLift, {
        toValue: 0.4,
        duration: 150,
        useNativeDriver: true
      }).start();
  }
  const dropSelfDown = (pickerName) => {
    Animated.timing(
      pickerName === 'frequencyPicker' ? frequencyPickerShadowLift : quantityPickerShadowLift, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start();
  }
  const scaleFontSize = width => {
    const actualWidth = width + dynamicFontSize;
    const scaledSize = Math.min(20, dynamicFontSize * (DeviceWidth * 0.21 / actualWidth));
    setDynamicFontSize(scaledSize);
  };
  const onContentSizeChange = ({ nativeEvent }) => {
    const { target, contentSize } = nativeEvent;
    const { width } = contentSize;
    scaleFontSize(width);
  };

  function handleQuantityUpdate(newQuantity) {
    setQuantity(newQuantity);
    setPickerValue(newQuantity);
  }

  function CustomInputAccessoryView({itemName, initialQuantity, handleQuantityUpdate}) {
    // experimental
    const mainSearchBar = useRef(null);
    const [inputBarText, setInputBarText] = useState(initialQuantity);
    const [displayMetric, setDisplayMetric] = useState('');
    useEffect(() => {
      let itemDisplayMetricFetched = getItemDisplayMetric(itemName, unit);
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
            {unit === 'G' ?
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
          <Animated.View style={{
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
            ...calculatorStyle.animatedShadow,
            shadowOpacity: quantityPickerShadowLift,
          }}>
            <TextInput
              style={{
                flex: 1,
                fontSize: dynamicFontSize,
                maxWidth: '70%',
              }}
              onContentSizeChange={onContentSizeChange}
              numberOfLines={1}
              textAlign={'center'}
              placeholder={'Edit'}
              keyboardType={'decimal-pad'}
              returnKeyType={'done'}
              editable={false}
              value={quantity ? quantity.toString() : ''}
              onTouchStart={() => {
                picker.current.togglePicker(true);
              }}
            />
            <TouchableOpacity
              style={{
                width: 30,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => picker.current.togglePicker(true)}>
              <Chevron type={'thin'} size={1}></Chevron>
            </TouchableOpacity>
            <RNPickerSelect
              ref={picker}
              items={quantities}
              value={pickerValue}
              placeholder={{
                label: 'Pick a quantity',
                value: null,
                color: '#9EA0A4',
              }}
              style={{
                inputIOS: {
                  display: 'none'
                }
              }}
              InputAccessoryView={() => {
                return (
                  <CustomInputAccessoryView
                    itemName={itemName}
                    initialQuantity={quantity}
                    handleQuantityUpdate={handleQuantityUpdate}/>
              )}}
              onOpen={() => {
                global.occupied = true;
                liftSelfUp("quantityPicker");
              }}
              onValueChange={(value) => {
                if (value !== null) {
                  setPickerValue(value);
                  setQuantity(value);
                }
              }}
              onClose={() => {
                global.occupied = false;
                setPickerValue(null);
                dropSelfDown('quantityPicker');
              }}
            />
          </Animated.View>
          <Animated.View style={[calculatorStyle.animatedShadow, {
            shadowOpacity: frequencyPickerShadowLift
          }]}>
            <RNPickerSelect
              items={[
                {label: 'single use', inputLabel: 'S', value: 'single_use'},
                {label: 'a day', inputLabel: 'D', value: 'per_day'},
                {label: 'a week', inputLabel: 'W', value: 'per_week'},
                {label: 'a month', inputLabel: 'M', value: 'per_month'},
                {label: 'a year', inputLabel: 'Y', value: 'per_year'},
              ]}
              value={frequency}
              placeholder={{}}
              Icon={() => {
                return <Chevron type={'thin'} size={1}></Chevron>
              }}
              style={{
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
              onOpen={() => {
                global.occupied = true;
                liftSelfUp("frequencyPicker");
              }}
              onValueChange={(frequency) => {
                setFrequency(frequency);
              }}
              onClose={() => {
                global.occupied = false;
                dropSelfDown("frequencyPicker");
              }}
            />
          </Animated.View>

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
              {unit === 'G' ?
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
