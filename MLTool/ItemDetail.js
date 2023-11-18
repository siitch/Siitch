import {
  Animated,
  Dimensions,
  Image, KeyboardAvoidingView,
  ScrollView,
  Text, TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Hyperlink from "react-native-hyperlink";
import { Card } from "react-native-ui-lib";
import { FirebaseRealtimeDatabase, ref, onValue } from "../Firebase/firebase";
import React, { useEffect, useRef, useState } from "react";
import ResultImage from "./ResultImage";
import Profiles from "../ImageDB.js";
import itemDetailImages from "./ItemDetailImages/itemDetailImages";
import { SimpleCalculator } from "./SimpleCalculator";
import analytics from "@react-native-firebase/analytics";
import SpecialItem from "./SpecialItem";
import { openSourceLink } from "../util/common";
import {
  ContextAndChallengeModal,
  DetailPageInfoModal,
  DetailPageWaterCardModal, ReminderModal,
  VirtualWaterInfoModal,
} from "../components/Modals/Modals";
import { getItemDisplayMetric, quantities } from "../Calculate/CalculatorGeneral";
import { Chevron } from "react-native-shapes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RNPickerSelect from "react-native-picker-select";
import { calculatorStyle } from "../Calculate/Calculate";
import pluralize from "pluralize";
import { SearchBar } from "@rneui/themed";
import { NumberWithTextLabel } from "../Calculate/NumberFormatter";
import CalculateContainer from "../components/CalculateContainer";
import { useNavigation } from "@react-navigation/native";

export default function ItemDetail({ route }) {
  const navigation = useNavigation();
  const DeviceWidth = Dimensions.get("window").width;
  // Get item name passed from other screen
  const { itemName } = route.params;
  const { localQuantity } = route.params;
  // Item data fetched from the database, only used to show the raw data for debug and UI design, can be removed later
  const [item, setItem] = useState({});

  // Global info
  // Item category
  const [category, setCategory] = useState("");
  // Global unit, G or L
  const [globalUnit, setGlobalUnit] = useState("G");
  // Gallons
  const [gallons, setGallons] = useState("");
  // Liters
  const [liters, setLiters] = useState("");
  // The water number displayed, Gallons or Liters
  const [displayWater, setDisplayWater] = useState(gallons);
  // Challenge Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  function closeContextChallengeModal() {
    setModalVisible(false);
  }

  // Rain/Irrigation/Cleaning context Modal visibility
  const [waterCardModalVisible, setWaterCardModalVisible] = useState(false);
  const [waterType, setWaterType] = useState("");

  function closeWaterCardModal() {
    setWaterCardModalVisible(false);
  }

  // Info button Modal visibility
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoShown, setInfoShown] = useState("");

  function closeInfoModal() {
    setInfoVisible(false);
  }
  // Reminder Modal visibility
  const [reminderVisible, setReminderVisible] = useState(false);
  function closeReminderModal() {
    setReminderVisible(false)
  }

  // Number formatting util function
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // First section - G/L button, item image, item name, a number, a unit
  const [metricToDisplay, setMetricToDisplay] = useState(metricToDisplay);
  const [metricToDisplayG, setMetricToDisplayG] = useState(null);
  const [metricToDisplayL, setMetricToDisplayL] = useState(null);
  const [measurementG, setMeasurementG] = useState(null);
  const [measurementL, setMeasurementL] = useState(null);
  const [measurement, setMeasurement] = useState(measurementG);
  const [color, setColor] = useState();

  // Second section - Rain / Irrigation / Cleaning
  // Gallons
  const [rain, setRain] = useState("");
  const [irrigation, setIrrigation] = useState("");
  const [cleaning, setCleaning] = useState("");
  // Liters
  const [rainKg, setRainKg] = useState("");
  const [irrigationKg, setIrrigationKg] = useState("");
  const [cleaningKg, setCleaningKg] = useState("");

  // Third section - To make 1 [unit]:
  const [individualUnitG, setIndividualUnitG] = useState("");
  const [individualUnitL, setIndividualUnitL] = useState("");
  const [individualUnit, setIndividualUnit] = useState(individualUnitG);

  // Fourth section - Time to decompose:
  const [timetodecompose, setTimetodecompose] = useState("");
  const [decomposetime, setDecomposetime] = useState("");

  // Fifth section - Compostable?
  const [compostable, setCompostable] = useState("");
  const [compostableCheck, setCompostableCheck] = useState(false);
  const [compostableCross, setCompostableCross] = useState(false);

  // Sixth section - Recyclable?
  const [recyclable, setRecyclable] = useState("");
  const [recyclableCheck, setRecyclableCheck] = useState(false);
  const [recyclableCross, setRecyclableCross] = useState(false);

  // What Can I Do Dropdown Button
  const [whatCanIDoDropdown, setWhatCanIDoDropdown] = useState(false);

  // Seventh section - Simple calculator leveraged from Lingchen's code
  const [itemDisplayedMetricInGallon, setItemDisplayedMetricInGallon] = useState("");
  const [itemDisplayedMetricInLiter, setItemDisplayedMetricInLiter] = useState("");

  const quantityPickerShadowLift = useRef(new Animated.Value(0)).current;
  const frequencyPickerShadowLift = useRef(new Animated.Value(0)).current;
  const impactPickerShadowLift = useRef(new Animated.Value(0)).current;
  const [dynamicFontSize, setDynamicFontSize] = useState(20);
  const picker = useRef(null);
  const liftSelfUp = (pickerName) => {
    Animated.timing(
      pickerName === "frequencyPicker" ? frequencyPickerShadowLift : (pickerName === "quantityPicker" ? quantityPickerShadowLift : impactPickerShadowLift), {
        toValue: 0.4,
        duration: 150,
        useNativeDriver: true,
      }).start();
  };
  const dropSelfDown = (pickerName) => {
    Animated.timing(
      pickerName === "frequencyPicker" ? frequencyPickerShadowLift : (pickerName === "quantityPicker" ? quantityPickerShadowLift : impactPickerShadowLift), {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
  };
  const scaleFontSize = (width) => {
    const actualWidth = width + dynamicFontSize;
    const scaledSize = Math.min(20, dynamicFontSize * (DeviceWidth * 0.33 / actualWidth));
    setDynamicFontSize(scaledSize);
  };
  const onContentSizeChange = ({ nativeEvent }) => {
    const { target, contentSize } = nativeEvent;
    const { width } = contentSize;
    scaleFontSize(width);
  };
  const [pickerValue, setPickerValue] = useState(null);
  const [quantity, setQuantity] = useState(localQuantity === undefined ? 1 : localQuantity);
  const [frequency, setFrequency] = useState("single_use");
  const [impactUnit, setImpactUnit] = useState("yearly");
  const [impactNumber, setImpactNumber] = useState({
    "yearly": {
      "Gallon": 0,
      "Liter": 0,
    },
    "monthly": {
      "Gallon": 0,
      "Liter": 0,
    },
    "weekly": {
      "Gallon": 0,
      "Liter": 0,
    },
    "daily": {
      "Gallon": 0,
      "Liter": 0,
    },
  });

  function calculateImpact() {
    let yearlyImpactGallon;
    let yearlyImpactLiter;
    if (frequency === "single_use") {
      yearlyImpactGallon = quantity * gallons;
      yearlyImpactLiter = quantity * liters;
    } else {
      yearlyImpactGallon = quantity * gallons * frequency_values[frequency];
      yearlyImpactLiter = quantity * liters * frequency_values[frequency];
    }
    setImpactNumber({
      yearly: {
        Gallon: yearlyImpactGallon,
        Liter: yearlyImpactLiter,
      },
      monthly: {
        Gallon: yearlyImpactGallon / 12,
        Liter: yearlyImpactLiter / 12,
      },
      weekly: {
        Gallon: (yearlyImpactGallon / 365) * 7,
        Liter: (yearlyImpactLiter / 365) * 7,
      },
      daily: {
        Gallon: yearlyImpactGallon / 365,
        Liter: yearlyImpactLiter / 365,
      },
    });
  }

  const [individual_total, setIndividualTotal] = useState(null);
  const [showContext, setShowContext] = useState(false);
  const [virtualWaterInfoVisible, setVirtualWaterInfoVisible] = useState(false);
  function closeVirtualWaterInfoModal() {
    setVirtualWaterInfoVisible(false);
  }

  const waterParameter = (category) => {
    if (globalUnit === "L") {
      if (category === "EDI") {
        return "Single item   L";
      } else {
        return "Global Liters p kg";
      }
    } else if (globalUnit === "G") {
      if (category === "EDI") {
        return "Single item   Gal";
      } else {
        return "Global Gallon p lb";
      }
    }
  };
  const frequencies = [
    { label: "single use", value: "single_use" },
    { label: "a day", value: "per_day" },
    { label: "a week", value: "per_week" },
    { label: "a month", value: "per_month" },
    { label: "a year", value: "per_year" },
  ];
  const frequency_values = {
    null: 0,
    single_use: 1,
    per_day: 365,
    per_week: 52,
    per_month: 12,
    per_year: 1,
  };
  function handleQuantityUpdate(newQuantity) {
    setQuantity(newQuantity);
    setPickerValue(newQuantity);
  }
  function MainPickerInputAccessoryView({ initialQuantity, handleQuantityUpdate }) {
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

  useEffect(() => {
    readData(itemName);
    calculateImpact();
    changeMetric();
    checkCompostable();
    checkRecyclable();
    changeColor();
  }, [globalUnit, gallons, individualUnitG, metricToDisplay, timetodecompose, recyclable, quantity, frequency]);

  useEffect(() => {
    async function logItemName() {
      await analytics().logEvent("ViewItem", {
        ItemName: itemName,
      });
    }

    // Log the current item name to firebase
    logItemName();
  }, []);

  // When the global metric changes, do corresponding changes
  const changeMetric = () => {
    if (globalUnit === "G") {
      setDisplayWater(gallons);
      if (metricToDisplay !== "years") {
        setMetricToDisplay("gallons");
      }
      setMeasurement(measurementG);
      setIndividualUnit(individualUnitG);
      setMetricToDisplay(metricToDisplayG);
    } else {
      setDisplayWater(liters);
      if (metricToDisplay !== "years") {
        setMetricToDisplay("liters");
      }
      setMeasurement(measurementL);
      setIndividualUnit(individualUnitL);
      setMetricToDisplay(metricToDisplayL);
    }
  };

  // Used to change the color of the text to RED when the metric is years
  const changeColor = () => {
    if (metricToDisplay !== "gallons" && metricToDisplay !== "liters") {
      setColor("#f32133");
    } else {
      setColor("#00ADEF");
    }
  };

  // Check compostable
  const checkCompostable = () => {
    if (compostable !== "") {
      const firstWord = compostable.split(" ")[0];
      if (firstWord === "No" || firstWord === "No.") {
        setCompostableCross(true);
      } else if (firstWord === "Yes" || firstWord === "Yes.") {
        setCompostableCheck(true);
      }
    }
  };

  // Check recyclable
  const checkRecyclable = () => {
    if (recyclable !== "") {
      const firstWord = recyclable.split(" ")[0];
      if (firstWord === "No" || firstWord === "No.") {
        setRecyclableCross(true);
      } else if (firstWord === "Yes" || firstWord === "Yes.") {
        setRecyclableCheck(true);
      }
    }
  };

  const readData = itemName => {
    const getItemRef = ref(FirebaseRealtimeDatabase, itemName);
    onValue(getItemRef, function(get) {
      if (get.val() === null && itemName !== "Makeup") {
        alert("No info for " + itemName + " now");
        console.log("No info for this item");
      } else {
        const itemObj = get.val();
        // Global
        setItem(itemObj);
        setCategory(itemObj["Category"]);
        setGallons(itemObj[category === "EDI" ? "Single item   Gal" : "Global Gallon p lb"]);
        setLiters(itemObj[category === "EDI" ? "Single item   L" : "Global Liters p kg"]);

        // First section
        setMetricToDisplayG(itemObj["Metric to display"]);
        setMetricToDisplayL(itemObj["Metric to display L"]);
        setMeasurementG(itemObj["Measurement1"]);
        setMeasurementL(itemObj["Measurement L"]);

        // Second section
        setRain(itemObj["Global Imperial Green Gal p lb"]);
        setIrrigation(itemObj["Global Imperial Blue Gal p lb"]);
        setCleaning(itemObj["Global Imperial Gray Gal p lb"]);

        setRainKg(itemObj["Global Green L p kg"]);
        setIrrigationKg(itemObj["Global Blue L p kg"]);
        setCleaningKg(itemObj["Global Gray L p kg"]);

        // Third section
        setIndividualUnitG(itemObj["Individiual Unit Gal"]);
        setIndividualUnitL(itemObj["Individiual Unit L"]);
        setItemDisplayedMetricInGallon(itemObj["Display Unit Imperial"]);
        setItemDisplayedMetricInLiter(itemObj["Display Unit Metric"]);

        // Fourth section
        setTimetodecompose(itemObj["Time to decompose"]);
        setDecomposetime(itemObj["Decomposition Time"]);

        // Fifth section
        setCompostable(itemObj["Compostable"]);

        // Sixth section
        setRecyclable(itemObj["Recycle"]);

        // Seventh section
        setIndividualTotal(itemObj[waterParameter(itemObj["Category"])]);

      }
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        {/* First section */}
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            flexDirection: "row",
            marginTop: "5%",
            marginLeft: 20,
            borderColor: "#00ADEF",
            borderWidth: 2,
            borderRadius: 10,
            width: 65,
            height: 26,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setGlobalUnit("G");
              analytics().logEvent("Use_GL_switch", {
                switch_to: "Gallons",
              });
            }}>
            <Text
              style={{
                color: globalUnit === "G" ? "#00ADEF" : "black",
                paddingTop: 5,
                fontSize: 20,
                fontWeight: globalUnit === "G" ? "bold" : "normal",
              }}>
              G
            </Text>
          </TouchableOpacity>
          <Text style={{ paddingTop: 5, fontSize: 20 }}> / </Text>
          <TouchableOpacity
            onPress={() => {
              setGlobalUnit("L");
              analytics().logEvent("Use_GL_switch", {
                switch_to: "Liters",
              });
            }}>
            <Text
              style={{
                color: globalUnit === "L" ? "#00ADEF" : "black",
                paddingTop: 5,
                fontSize: 20,
                fontWeight: globalUnit === "L" ? "bold" : "normal",
              }}>
              L
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 25, marginBottom: 12 }}>
          <Image source={ResultImage[itemName]} style={{ width: 220, height: 220 }} />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{itemName}</Text>
          <View style={{
            flexDirection: "row",
          }}>
            {(metricToDisplay === "gallons" || metricToDisplay === "liters") && (
              <Image source={Profiles.water} style={{ width: 28, height: 28 }} />
            )}
            {!(metricToDisplay === "gallons" || metricToDisplay === "liters") && (
              <Image source={Profiles.clock} style={{ width: 28, height: 28 }} />
            )}
            <Text style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
              color: color,
            }}>{displayWater !== "" ? numberWithCommas(displayWater) : timetodecompose} {metricToDisplay}</Text>
          </View>
          <Text>{measurement}</Text>
        </View>

        {/* Second section */}
        {(rain !== "" || irrigation !== "" || cleaning !== "") && (
          <View>
            <Text style={{
              alignSelf: "center",
              marginTop: 5,
              fontSize: 17,
              fontWeight: "500",
            }}>Water Breakdown</Text>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-around",
              flex: 4,
              marginLeft: 7,
              marginRight: 7,
              marginBottom: 7,
              padding: 5,
              height: 90,
            }}>
              <Card
                containerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 6,
                  backgroundColor: "#70BF41",
                  shadowColor: "black",
                  flex: 1,
                }}
                borderRadius={17}
                flex
                onPress={() => {
                  console.log("rain pressed");
                  analytics().logEvent("Water_Card_pressed", {
                    cardName: "Rain",
                  });
                  setWaterCardModalVisible(true);
                  setWaterType("Rain");
                }}
              >
                <Text style={{ color: "white" }}>Rain</Text>
                <Text
                  style={{ color: "white" }}>{globalUnit === "G" ? numberWithCommas(rain) : numberWithCommas(rainKg)} {globalUnit === "G" ?
                  individualUnitG.split(" ")[0] : individualUnitL.split(" ")[0]}</Text>
              </Card>

              <Card
                containerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 6,
                  backgroundColor: "#00ADEF",
                  shadowColor: "black",
                  flex: 1,
                }}
                borderRadius={17}
                flex
                onPress={() => {
                  console.log("irrigation pressed");
                  analytics().logEvent("Water_Card_pressed", {
                    cardName: "Irrigation",
                  });
                  setWaterCardModalVisible(true);
                  setWaterType("Irrigation");
                }}
              >
                <Text style={{ color: "white" }}>Irrigation</Text>
                <Text
                  style={{ color: "white" }}>{globalUnit === "G" ? numberWithCommas(irrigation) : numberWithCommas(irrigationKg)} {globalUnit === "G" ?
                  individualUnitG.split(" ")[0] : individualUnitL.split(" ")[0]}</Text>
              </Card>

              <Card
                containerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 6,
                  backgroundColor: "#C2C2C2",
                  shadowColor: "black",
                  flex: 1,
                }}
                borderRadius={17}
                flex
                onPress={() => {
                  console.log("card pressed");
                  analytics().logEvent("Water_Card_pressed", {
                    cardName: "Cleaning",
                  });
                  setWaterCardModalVisible(true);
                  setWaterType("Cleaning");
                }}
              >
                <Text style={{ color: "white" }}>Cleaning</Text>
                {cleaning !== "" && (
                  <Text
                    style={{ color: "white" }}>{globalUnit === "G" ? numberWithCommas(cleaning) : numberWithCommas(cleaningKg)} {globalUnit === "G" ?
                    individualUnitG.split(" ")[0] : individualUnitL.split(" ")[0]}</Text>)}
              </Card>
            </View>

          </View>
        )}

        {/* Divider attached to three cards*/}
        <View
          style={{
            borderBottomColor: "rgba(0,0,0,0.25)",
            borderBottomWidth: 1,
          }}
        />

        {/* To make 1 */}
        {individualUnit !== "" && (
          <View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                <Image source={itemDetailImages.earth} style={{ width: 28, height: 28 }} />
                <Text style={{
                  fontSize: 17,
                  fontWeight: "500",
                  marginLeft: 5,
                }}>
                  To make 1 {individualUnit !== "" ? individualUnit.split("/")[1] : itemName}
                </Text>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                <Image source={Profiles.water} style={{ width: 20, height: 20 }} />
                <Text style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#00ADEF",
                }}>{displayWater !== null ?
                  numberWithCommas(displayWater) : null} {globalUnit === "G" ?
                  individualUnitG.split(" ")[0] : individualUnitL.split(" ")[0]}
                </Text>
              </View>
            </View>
            {/* Divider */}
            <View
              style={{
                borderBottomColor: "rgba(0,0,0,0.25)",
                borderBottomWidth: 1,
              }}
            />
          </View>
        )}

        {/* Time to decompose*/}
        <View style={{ margin: 10 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Image source={itemDetailImages.decompose} style={{ width: 28, height: 28 }} />
              <Text style={{
                fontSize: 17,
                fontWeight: "500",
                marginLeft: 5,
              }}>
                Time to Decompose
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setInfoVisible(true);
                  setInfoShown("Decompose");
                  analytics().logEvent("Info_button_pressed", {
                    infoName: "Time to Decompose",
                  });
                }}>
                <Image source={itemDetailImages.info} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
          </View>
          {decomposetime !== "" && (
            <Text style={{ marginTop: 10, marginLeft: 5, marginBottom: 5 }}>
              {decomposetime}
            </Text>
          )}
        </View>

        {/* Divider */}
        <View
          style={{
            borderBottomColor: "rgba(0,0,0,0.25)",
            borderBottomWidth: 1,
          }}
        />

        {/* Compostable? */}
        <View style={{ margin: 10 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Image source={itemDetailImages.compostable} style={{ width: 28, height: 28 }} />
              <Text style={{
                fontSize: 17,
                fontWeight: "500",
                marginLeft: 5,
              }}>
                Compostable?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setInfoVisible(true);
                  setInfoShown("Compostable");
                  analytics().logEvent("Info_button_pressed", {
                    infoName: "Compostable?",
                  });
                }}>
                <Image source={itemDetailImages.info} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
            {compostableCheck && (
              <Image source={itemDetailImages.greenCheck} style={{ width: 33, height: 33 }} />
            )}
            {compostableCross && (
              <Image source={itemDetailImages.redCross} style={{ width: 30, height: 30 }} />
            )}
          </View>
          {!(compostable === "Yes" || compostable === "No") && compostable !== "" && (
            <Hyperlink
              linkStyle={{ color: "#00ADEF" }}
              onPress={(url =>
                  openSourceLink(url, { name: url, url: url })
              )}>
              <Text style={{ marginTop: 10, marginLeft: 5, marginBottom: 5 }}>
                {compostable}
              </Text>
            </Hyperlink>
          )}
        </View>

        {/* Divider */}
        <View
          style={{
            borderBottomColor: "rgba(0,0,0,0.25)",
            borderBottomWidth: 1,
          }}
        />

        {/* Recyclable? */}
        <View style={{ margin: 10 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Image source={itemDetailImages.recyclable} style={{ width: 28, height: 28 }} />
              <Text style={{
                fontSize: 17,
                fontWeight: "500",
                marginLeft: 5,
              }}>
                Recyclable?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setInfoVisible(true);
                  setInfoShown("Recyclable");
                  analytics().logEvent("Info_button_pressed", {
                    infoName: "Recyclable?",
                  });
                }}>
                <Image source={itemDetailImages.info} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
            {recyclableCheck && (
              <Image source={itemDetailImages.greenCheck} style={{ width: 33, height: 33 }} />
            )}
            {recyclableCross && (
              <Image source={itemDetailImages.redCross} style={{ width: 30, height: 30 }} />
            )}
          </View>
          {!(recyclable === "Yes" || recyclable === "No") && recyclable !== "" && (
            <Hyperlink
              linkStyle={{ color: "#00ADEF" }}
              onPress={(url =>
                  openSourceLink(url, { name: url, url: url })
              )}
            >
              <Text style={{ marginTop: 10, marginLeft: 5, marginBottom: 5 }}>
                {recyclable}
              </Text>
            </Hyperlink>
          )}

        </View>


      </View>

      {/* Divider */}
      <View
        style={{
          borderBottomColor: "rgba(0,0,0,0.25)",
          borderBottomWidth: 1,
        }}
      />

      {/* What Can I Do Button */}
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity
          style={{
            width: "88%",
            marginTop: 20,
            padding: 12,
            borderRadius: 30,
            backgroundColor: "#70BF41",
            shadowColor: "rgba(0,0,0,0.4)",
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 0.5,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setWhatCanIDoDropdown(!whatCanIDoDropdown);
          }}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: "white",
              }}>
              What Can I Do?
            </Text>
          </View>
          {whatCanIDoDropdown ? (
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  marginTop: 15,
                  alignSelf: "center",
                  width: "77%",
                  fontWeight: "600",
                  fontSize: 16,
                  color: "white",
                }}>
                Information for each item will appear here in the future.
              </Text>
              <MaterialCommunityIcons
                name="menu-up"
                size={50}
                color="white"
                style={{ alignSelf: "flex-end", marginVertical: -10 }}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      </View>

      {itemName === "Oranges" && (
        <SpecialItem globalUnit={globalUnit} />
      )}

      {/* Simple calculator */}
      {metricToDisplay !== null && (metricToDisplay === "gallons" || metricToDisplay === "liters") && (
        <View style={{
          marginBottom: 20,
          paddingHorizontal: "5%",
        }}>
          <View style={{
            alignItems: "center",
            marginTop: 30,
          }}>
            <View style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              {/* Quantity Picker */}
              <View style={{ alignItems: "center" }}>
                <Text style={{
                  fontSize: 25,
                  fontWeight: "500",
                }}>
                  Quantity
                  {
                    (getItemDisplayMetric(itemName, globalUnit) === "lb" ||
                      getItemDisplayMetric(itemName, globalUnit) === "kg") &&
                    (<Text> ({getItemDisplayMetric(itemName, globalUnit)})</Text>)
                  }
                </Text>
                <Animated.View style={[
                  calculatorStyle.pickerContainer,
                  calculatorStyle.animatedShadow, {
                    shadowOpacity: quantityPickerShadowLift,
                  }]}>
                  <TextInput
                    style={{
                      flex: 1,
                      fontSize: dynamicFontSize,
                      maxWidth: "75%",
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
                      return (
                        <MainPickerInputAccessoryView
                          initialQuantity={quantity}
                          handleQuantityUpdate={handleQuantityUpdate} />
                      );
                    }}
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
                      dropSelfDown("quantityPicker");
                    }}
                  />
                </Animated.View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{
                  fontSize: 25,
                  fontWeight: "500",
                }}>
                  Frequency
                </Text>
                <Animated.View style={[calculatorStyle.animatedShadow, {
                  shadowOpacity: frequencyPickerShadowLift,
                }]}>
                  <RNPickerSelect
                    items={frequencies}
                    value={frequency}
                    placeholder={{
                      label: "Select a frequency",
                      inputLabel: "Select",
                      value: null,
                      color: "#9EA0A4",
                    }}
                    Icon={() => {
                      return <Chevron type={"thin"} size={1}></Chevron>;
                    }}
                    style={{
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
              </View>
            </View>
          </View>

          {/* Computation result and buttons */}
          <View style={{
            alignItems: "center",
            marginBottom: 20,
          }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "black",
                marginTop: 30,
              }}>
              Individual Total
            </Text>
            {individual_total !== null && (
              <SimpleCalculator
                value={individual_total}
                unit={globalUnit}
                id={category}
                individualUnit={individualUnit}
                type="individual"
              />
            )}
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "black",
                marginTop: 30,
              }}>
              Yearly Total
            </Text>
            {individual_total !== null && (
              <View style={{
                borderColor: "#80CAFF",
                marginTop: 10,
                width: "100%",
                height: 50,
                borderWidth: 2,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    maxWidth: "95%",
                  }}>
                  {globalUnit === "G" ?
                    NumberWithTextLabel(gallons * frequency_values[frequency] * quantity) + " gal." :
                    NumberWithTextLabel(liters * frequency_values[frequency] * quantity) + " L."}
                </Text>
              </View>
            )}

            {/* Impact Area */}
            <View style={{
              marginTop: 30,
              width: "100%",
              alignItems: "center",
            }}>
              <Text style={{
                fontSize: 25,
                fontWeight: "500",
                marginLeft: 25,
              }}>
                Impact
                <TouchableOpacity
                  onPress={() => {
                    setVirtualWaterInfoVisible(true);
                    analytics().logEvent('Info_button_pressed',{
                      infoName: 'Virtual_Water'
                    });
                  }}>
                  <Image source={itemDetailImages.info} style={{ width: 30, height: 25 }} />
                </TouchableOpacity>
              </Text>

              {/* Impact Dropdown */}
              <Animated.View style={[calculatorStyle.animatedShadow, {
                width: "100%",
                shadowOpacity: impactPickerShadowLift,
              }]}>
                <RNPickerSelect
                  items={[
                    { label: "Daily", value: "daily" },
                    { label: "Weekly", value: "weekly" },
                    { label: "Monthly", value: "monthly" },
                    { label: "Yearly", value: "yearly" },
                  ]}
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
                    liftSelfUp("impactPicker");
                  }}
                  onValueChange={(unit) => {
                    setImpactUnit(unit);
                  }}
                  onClose={() => {
                    global.occupied = false;
                    dropSelfDown("impactPicker");
                  }}
                />
              </Animated.View>

              {/* Running Total Number */}
              <View style={{
                flexDirection: "row",
                justifyContent: "center",
              }}>
                <Image
                  source={require("./../images/water_drop_150px_wide2.png")}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 23,
                  }} />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 30,
                    fontWeight: "500",
                    marginTop: 20,
                  }}>
                  {globalUnit === "G" ?
                    NumberWithTextLabel(impactNumber[impactUnit]["Gallon"]) + " Gal" :
                    NumberWithTextLabel(impactNumber[impactUnit]["Liter"]) + " L"}
                </Text>
              </View>

            </View>

            {/* Visual / Image Counter */}
            <CalculateContainer numberCost={impactNumber[impactUnit]["Gallon"]} />
          </View>
          {/* Context and Add to Running Total Button */}
          <View style={{
            width: "100%",
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              {/* Context button */}
              <TouchableOpacity
                onPress={() => {
                  setShowContext(true);
                  setModalVisible(true);
                  analytics().logEvent('Context_pressed')
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: "#404040",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                  }}>
                  Context
                </Text>
              </TouchableOpacity>
              {/* Add to Running Total button */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calculate", {
                    screen: "Calculator", params: {
                      outsideItem: {
                        itemName: itemName,
                        itemDisplayedMetricInGallon: itemDisplayedMetricInGallon,
                        itemDisplayedMetricInLiter: itemDisplayedMetricInLiter,
                        itemWaterInGallon: gallons,
                        itemWaterInLiter: liters,
                        itemQuantity: quantity ? quantity : 1,
                        itemFrequency: frequency ? frequency : "single_use",
                      },
                    },
                  });
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: "#70BF41",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                  }}>
                  Add to Running Total
                </Text>
              </TouchableOpacity>
            </View>
            {/* Clear and Challenge Button */}
            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}>
              {/* Clear button */}
              <TouchableOpacity
                onPress={() => {
                  setQuantity(0);
                  setFrequency(null);
                }}
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 35,
                  marginRight: 5,
                  borderRadius: 30,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                  }}>
                  Clear
                </Text>
              </TouchableOpacity>
              {/* Challenge button */}
              <TouchableOpacity
                onPress={() => {
                  setShowContext(false);
                  setModalVisible(true);
                  analytics().logEvent("Challenge_pressed");
                }}
                style={{
                  padding: 15,
                  marginLeft: 5,
                  borderRadius: 30,
                  backgroundColor: "#29A3FE",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "white",
                    }}>
                    Challenge
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Reminder */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15
            }}>
              <TouchableOpacity
                onPress={() => {
                  setReminderVisible(true)
                  analytics().logEvent('Reminder_pressed')
                }}
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  borderRadius: 30,
                  backgroundColor: '#FFD359',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                  }}>
                  Reminder
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      )}

      {/* Pop up window of 'Context' and 'Challenge' */}
      <ContextAndChallengeModal
        modalVisible={modalVisible}
        showContext={showContext}
        handler={closeContextChallengeModal} />

      {/* Rain/Irrigation/Cleaning context modal */}
      <DetailPageWaterCardModal
        waterCardModalVisible={waterCardModalVisible}
        waterType={waterType}
        handler={closeWaterCardModal} />

      {/* Info button modal */}
      <DetailPageInfoModal
        infoVisible={infoVisible}
        infoShown={infoShown}
        handler={closeInfoModal} />

      {/* Virtual Water Info Modal */}
      <VirtualWaterInfoModal
        infoVisible={virtualWaterInfoVisible}
        handler={closeVirtualWaterInfoModal} />

      {/* Reminder Modal */}
      <ReminderModal
        reminderVisible={reminderVisible}
        handler={closeReminderModal}/>

      {/* Delete later */}
      {/*<View style={{backgroundColor: 'grey', margin: 20}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>RAW DATA</Text>
                    {Object.keys(item).map((key, i) =>(
                            <Text key={i} style={{marginTop: 10}}>
                                {key}: {item[key]}
                            </Text>
                        )
                    )}
                </View>*/}
    </ScrollView>
  );
}
