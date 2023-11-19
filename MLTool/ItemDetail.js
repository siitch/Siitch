import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Hyperlink from "react-native-hyperlink";
import { Card } from "react-native-ui-lib";
import { FirebaseRealtimeDatabase, ref, onValue } from "../Firebase/firebase";
import React, { useEffect, useState } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { itemDetailStyle } from "../Styles/Style";
import { NumberWithTextLabel } from "../Calculate/NumberFormatter";
import CalculateContainer from "../components/CalculateContainer";
import { useNavigation } from "@react-navigation/native";
import { GLSwitcher } from "../components/GLSwitcher";
import { FrequencyPicker, ImpactPicker, QuantityPicker } from "../Calculate/CustomPicker";

export default function ItemDetail({ route }) {
  const navigation = useNavigation();
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
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
  const [timeToDecompose, setTimeToDecompose] = useState("");
  const [decomposeTime, setDecomposeTime] = useState("");

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

  const [quantityPickerValue, setQuantityPickerValue] = useState(null);
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

  function waterParameter(category) {
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
  }
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
    setQuantityPickerValue(newQuantity);
  }

  useEffect(() => {
    readData(itemName);
    calculateImpact();
    changeMetric();
    checkCompostable();
    checkRecyclable();
    changeColor();
  }, [globalUnit, gallons, individualUnitG, metricToDisplay, timeToDecompose, recyclable, quantity, frequency]);

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
  function changeMetric() {
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
  }

  // Used to change the color of the text to RED when the metric is years
  function changeColor() {
    if (metricToDisplay !== "gallons" && metricToDisplay !== "liters") {
      setColor("#f32133");
    } else {
      setColor("#00ADEF");
    }
  }

  // Check compostable
  function checkCompostable() {
    if (compostable !== "") {
      const firstWord = compostable.split(" ")[0];
      if (firstWord === "No" || firstWord === "No.") {
        setCompostableCross(true);
      } else if (firstWord === "Yes" || firstWord === "Yes.") {
        setCompostableCheck(true);
      }
    }
  }

  // Check recyclable
  function checkRecyclable() {
    if (recyclable !== "") {
      const firstWord = recyclable.split(" ")[0];
      if (firstWord === "No" || firstWord === "No.") {
        setRecyclableCross(true);
      } else if (firstWord === "Yes" || firstWord === "Yes.") {
        setRecyclableCheck(true);
      }
    }
  }

  function readData(itemName) {
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
        setTimeToDecompose(itemObj["Time to decompose"]);
        setDecomposeTime(itemObj["Decomposition Time"]);

        // Fifth section
        setCompostable(itemObj["Compostable"]);

        // Sixth section
        setRecyclable(itemObj["Recycle"]);

        // Seventh section
        setIndividualTotal(itemObj[waterParameter(itemObj["Category"])]);

      }
    });
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        {/* First section */}
        <GLSwitcher globalUnit={globalUnit} switchHandler={setGlobalUnit}/>

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
            }}>{displayWater !== "" ? numberWithCommas(displayWater) : timeToDecompose} {metricToDisplay}</Text>
          </View>
          <Text>{measurement}</Text>
        </View>

        {/* Second section */}
        {(rain !== "" || irrigation !== "" || cleaning !== "") && (
          <View>
            <Text style={itemDetailStyle.waterBreakdownText}>Water Breakdown</Text>
            <View style={itemDetailStyle.waterBreakdownContainer}>
              <Card
                containerStyle={itemDetailStyle.waterCardContainer("#70BF41")}
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
                containerStyle={itemDetailStyle.waterCardContainer("#00ADEF")}
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
                containerStyle={itemDetailStyle.waterCardContainer("#C2C2C2")}
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

        {/* Divider */}
        <View style={itemDetailStyle.divider} />

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
                <Text style={itemDetailStyle.itemPropertyTitle}>
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
            <View style={itemDetailStyle.divider} />
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
              <Text style={itemDetailStyle.itemPropertyTitle}>
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
          {decomposeTime !== "" && (
            <Text style={{ marginTop: 10, marginLeft: 5, marginBottom: 5 }}>
              {decomposeTime}
            </Text>
          )}
        </View>

        {/* Divider */}
        <View style={itemDetailStyle.divider} />

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
              <Text style={itemDetailStyle.itemPropertyTitle}>
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
        <View style={itemDetailStyle.divider} />

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
              <Text style={itemDetailStyle.itemPropertyTitle}>
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
      <View style={itemDetailStyle.divider} />

      {/* What Can I Do Button */}
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity
          style={itemDetailStyle.whatCanIDoButton}
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
                style={itemDetailStyle.whatCanIDoText}>
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
              <QuantityPicker
                itemName={itemName}
                globalUnit={globalUnit}
                pickerValue={quantityPickerValue}
                setQuantityPickerValue={setQuantityPickerValue}
                quantity={quantity}
                setQuantity={setQuantity}
                handleQuantityUpdate={handleQuantityUpdate}
                hasTitle={true}
                dynamicFontScaleFactor={0.33}
              />
              {/* Frequency Picker */}
              <FrequencyPicker
                frequency={frequency}
                setFrequency={setFrequency}
                hasTitle={true}
                hasPlaceholder={true}
              />
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
              <ImpactPicker
                impactUnit={impactUnit}
                setImpactUnit={setImpactUnit} />

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
