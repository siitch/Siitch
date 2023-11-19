import { Animated, Dimensions, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { frequencies, getItemDisplayMetric, impactUnits, quantities } from "./CalculatorGeneral";
import { calculatorStyle } from "../Styles/Style";
import { Chevron } from "react-native-shapes";
import RNPickerSelect from "react-native-picker-select";
import React, { useEffect, useRef, useState } from "react";
import pluralize from "pluralize";
import { SearchBar } from "@rneui/themed";

const DeviceWidth = Dimensions.get("window").width;

export const QuantityPicker = ({
                                 itemName,
                                 globalUnit,
                                 pickerValue,
                                 setQuantityPickerValue,
                                 quantity,
                                 setQuantity,
                                 handleQuantityUpdate,
                                 customStyle,
                                 customInputComponent,
                                 hasTitle,
                                 inputTextMaxWidth,
                                 dynamicFontScaleFactor
                               }) => {
  const picker = useRef(null);
  const quantityPickerShadowLift = useRef(new Animated.Value(0)).current;
  const [dynamicFontSize, setDynamicFontSize] = useState(20);
  const scaleFontSize = (width) => {
    const actualWidth = width + dynamicFontSize;
    const scaledSize = Math.min(20, dynamicFontSize * (DeviceWidth * dynamicFontScaleFactor / actualWidth));
    setDynamicFontSize(scaledSize);
  };
  const onContentSizeChange = ({ nativeEvent }) => {
    const { target, contentSize } = nativeEvent;
    const { width } = contentSize;
    scaleFontSize(width);
  };
  return (
    <View style={hasTitle ? {alignItems: "center"} : {}}>
      {hasTitle && (
        <Text style={{
          fontSize: 25,
          fontWeight: "500",
        }}>
          Quantity
          {
            itemName !== '' &&
            (getItemDisplayMetric(itemName, globalUnit) ==='lb'||
              getItemDisplayMetric(itemName, globalUnit) ==='kg') &&
            (<Text> ({getItemDisplayMetric(itemName, globalUnit)})</Text>)
          }
        </Text>
      )}
      <Animated.View style={[
        customStyle ? customStyle : calculatorStyle.pickerContainer,
        calculatorStyle.animatedShadow, {
          shadowOpacity: quantityPickerShadowLift,
        }]}>
        <TextInput
          style={{
            flex: 1,
            fontSize: dynamicFontSize,
            maxWidth: inputTextMaxWidth ? inputTextMaxWidth : "75%",
          }}
          onContentSizeChange={onContentSizeChange}
          numberOfLines={1}
          textAlign={"center"}
          placeholder={"Select"}
          keyboardType={"decimal-pad"}
          returnKeyType={"done"}
          editable={false}
          value={quantity ? quantity.toString() : ""}
          onTouchStart={() => {
            picker.current.togglePicker(true);
          }}
        />
        <TouchableOpacity
          style={calculatorStyle.chevronIconStyle}
          onPress={() => picker.current.togglePicker(true)}>
          <Chevron type={"thin"} size={1}></Chevron>
        </TouchableOpacity>
        <RNPickerSelect
          ref={picker}
          items={quantities}
          value={pickerValue}
          placeholder={{
            label: "Pick a quantity",
            value: null,
            color: "#9EA0A4",
          }}
          style={{
            inputIOS: {
              display: "none",
            },
          }}
          InputAccessoryView={() => {
            return ( customInputComponent ? customInputComponent :
              <MainPickerInputAccessoryView
                itemName={itemName}
                globalUnit={globalUnit}
                initialQuantity={quantity}
                handleQuantityUpdate={handleQuantityUpdate} />
            );
          }}
          onOpen={() => {
            global.occupied = true;
            liftUp(quantityPickerShadowLift);
          }}
          onValueChange={(value) => {
            if (value !== null) {
              setQuantityPickerValue(value);
              setQuantity(value);
            }
          }}
          onClose={() => {
            global.occupied = false;
            setQuantityPickerValue(null);
            dropDown(quantityPickerShadowLift);
          }}
        />
      </Animated.View>
    </View>
  )
}

export const FrequencyPicker = ({
                                  frequency,
                                  setFrequency,
                                  hasTitle,
                                  customFrequencies,
                                  hasPlaceholder,
                                  customStyle
                                }) => {
  const frequencyPickerShadowLift = useRef(new Animated.Value(0)).current;
  return (
    <View style={hasTitle ? {alignItems: "center"} : {}}>
      {hasTitle && (
        <Text style={{
          fontSize: 25,
          fontWeight: "500",
        }}>
          Frequency
        </Text>
      )}
      <Animated.View style={[calculatorStyle.animatedShadow, {
        shadowOpacity: frequencyPickerShadowLift,
      }]}>
        <RNPickerSelect
          items={customFrequencies ? customFrequencies : frequencies}
          value={frequency}
          placeholder={hasPlaceholder ? {
            label: "Select a frequency",
            inputLabel: "Select",
            value: null,
            color: "#9EA0A4",
          } : {}}
          Icon={() => {
            return <Chevron type={"thin"} size={1}></Chevron>;
          }}
          style={customStyle ? customStyle : {
            inputIOS: {
              marginBottom: 1,
              fontSize: 20,
              textAlign: "center",
              marginRight: 25,
            },
            inputIOSContainer: calculatorStyle.pickerContainer,
            iconContainer: calculatorStyle.chevronIconStyle,
          }}
          onOpen={() => {
            global.occupied = true;
            liftUp(frequencyPickerShadowLift);
          }}
          onValueChange={(frequency) => {
            setFrequency(frequency);
          }}
          onClose={() => {
            global.occupied = false;
            dropDown(frequencyPickerShadowLift);
          }}
        />
      </Animated.View>
    </View>
  )
}

export const ImpactPicker = ({impactUnit, setImpactUnit, customUnits}) => {
  const impactPickerShadowLift = useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={[calculatorStyle.animatedShadow, {
      width: "100%",
      shadowOpacity: impactPickerShadowLift,
    }]}>
      <RNPickerSelect
        items={customUnits ? customUnits : impactUnits}
        value={impactUnit}
        placeholder={{}}
        Icon={() => {
          return <Chevron type={"thin"} size={1}></Chevron>;
        }}
        style={{
          inputIOS: {
            height: "100%",
            textAlign: "center",
            fontSize: 20,
          },
          viewContainer: {
            alignSelf: "center",
            backgroundColor: "white",
            width: "90%",
            height: 45,
            marginTop: 5,
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "#80CAFF",
          },
          iconContainer: {
            height: "100%",
            width: 30,
            marginRight: 5,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        onOpen={() => {
          global.occupied = true;
          liftUp(impactPickerShadowLift);
        }}
        onValueChange={(unit) => {
          setImpactUnit(unit);
        }}
        onClose={() => {
          global.occupied = false;
          dropDown(impactPickerShadowLift);
        }}
      />
    </Animated.View>
  )
}

const liftUp = (pickerShadow) => {
  Animated.timing(
    pickerShadow, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
}

const dropDown = (pickerShadow) => {
  Animated.timing(
    pickerShadow, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
}

function MainPickerInputAccessoryView({ itemName, globalUnit, initialQuantity, handleQuantityUpdate }) {
  // experimental
  const mainSearchBar = useRef(null);
  const [inputBarText, setInputBarText] = useState(initialQuantity);
  const [displayMetric, setDisplayMetric] = useState("");
  useEffect(() => {
    if (itemName === "") return;
    let itemDisplayMetricFetched = getItemDisplayMetric(itemName, globalUnit);
    if (itemDisplayMetricFetched === "lb" ||
      itemDisplayMetricFetched === "kg" ||
      itemDisplayMetricFetched === "dozen") {
      setDisplayMetric(itemDisplayMetricFetched);
    } else {
      setDisplayMetric(pluralize(itemDisplayMetricFetched, inputBarText * 1));
    }
  }, [inputBarText]);
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        backgroundColor: "#D2D4D9",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
      <SearchBar
        ref={mainSearchBar}
        keyboardType={"decimal-pad"}
        placeholder="Pick a quantity or type here..."
        platform={"ios"}
        searchIcon={null}
        clearIcon={itemName !== "" &&
          (<Text style={{ fontSize: 15 }}>{displayMetric}</Text>)}
        cancelButtonTitle={"Done"}
        containerStyle={{
          backgroundColor: "#D2D4D9",
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        }}
        value={inputBarText ? inputBarText.toString() : ""}
        onChangeText={(value) => {
          if (!isNaN(value)) {
            setInputBarText(value);
          }
        }}
        onBlur={() => {
          handleQuantityUpdate(inputBarText);
        }}
        onClear={() => {
          handleQuantityUpdate(inputBarText);
        }}
      />
    </KeyboardAvoidingView>
  );
}
