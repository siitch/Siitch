import { itemDetailStyle } from "../Styles/Style";
import { Text, TouchableOpacity, View } from "react-native";
import analytics from "@react-native-firebase/analytics";
import React from "react";

export const GLSwitcher = ({globalUnit, switchHandler, customStyle}) => {
  const switchUnit = (unit) => {
    switchHandler(unit);
    analytics().logEvent("Use_GL_switch", {
      switch_to: unit === "G" ? "Gallons" : "Liters",
    });
  }
  return (
    <View style={customStyle ? customStyle : itemDetailStyle.GLSwitchContainer}>
      <TouchableOpacity
        onPress={() => switchUnit("G")}>
        <Text
          style={itemDetailStyle.letterG(globalUnit)}>
          G
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}> / </Text>
      <TouchableOpacity
        onPress={() => switchUnit("L")}>
        <Text
          style={itemDetailStyle.letterL(globalUnit)}>
          L
        </Text>
      </TouchableOpacity>
    </View>
  );
}
