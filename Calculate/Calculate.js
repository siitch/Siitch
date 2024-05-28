import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Modal, SafeAreaView,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import React, {useEffect, useRef, useState} from "react";
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import {styles} from "../Comparing/Styles";
import RNPicker from "../components/RNModalPicker/RNModalPicker";
import analytics from '@react-native-firebase/analytics';
import RunningTotalItem from "./RunningTotalItem";
import {
  CalculatorInfoModal,
  CalculatorWelcomeModal,
  ContextAndChallengeModal,
} from "../components/Modals/Modals";
import ViewShot from "react-native-view-shot";
import header from "../images/header.png";
import watermark from "../images/watermark_running_total.png";
import * as FileSystem from "expo-file-system";
import {ReactNavigationOverlay} from "../components/ReactNavigationOverlay";
import {BlurView} from "expo-blur";
import {Button, FloatingButton} from "react-native-ui-lib";
import * as MediaLibrary from "expo-media-library";
import {showMessage} from "react-native-flash-message";
import Profiles from "../ImageDB";
import {FirebaseRealtimeDatabase, ref, onValue} from "../Firebase/firebase";
import {createStackNavigator} from "@react-navigation/stack";
import {NumberWithTextLabel, NumberWithThousandSeparation} from "./NumberFormatter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {calculatorStyle} from "../Styles/Style"
import { GLSwitcher } from "../components/GLSwitcher";
import { FrequencyPicker, QuantityPicker } from "./CustomPicker";
import { frequency_values } from "./CalculatorGeneral";
import { RunningTotalImpactArea } from "./RunningTotalImpactArea";

export default function Calculator ({route}) {
  const scrollViewRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(false);

  // Global unit setting
  const [globalUnit, setGlobalUnit] = useState('G');

  // Item values
  const [currentItem, setCurrentItem] = useState('');
  const [itemDetails, setItemDetails] = useState({
    itemName: '',
    itemCategory: '',
    itemDisplayedMetricInGallon: '',
    itemDisplayedMetricInLiter: '',
    itemDisplayedUnitLabelInGallon: '',
    itemDisplayedUnitLabelInLiter: '',
    itemWaterInGallon: '',
    itemWaterInLiter: ''
  });
  useEffect(() => {
    if (itemDetails.itemName !== ''){
      if (fetchAndAdd) {
        setFetchAndAdd(false);
        addNewItemToRunningTotal();
      } else {
        setComputeCompleted(true);
      }
    }
  }, [itemDetails]);

  // Two pickers of the main calculator
  const [quantityPickerValue, setQuantityPickerValue] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [frequency, setFrequency] = useState('');

  // Experimental Stuff
  function handleQuantityUpdate(newQuantity) {
    setQuantity(newQuantity);
    setQuantityPickerValue(newQuantity);
  }
  // End

  // General helper functions
  function noneEmptyCheck() {
    let check = true;
    if (!currentItem) {
      Alert.alert('Please select an item');
      check = false;
    } else if (!quantity) {
      Alert.alert('Please select a quantity');
      check = false;
    } else if (!frequency) {
      Alert.alert('Please select a frequency');
      check = false;
    }
    return check;
  }
  function getItemWaterParameterLabel(itemCategory, unit) {
    if (unit === 'G') {
      if (itemCategory === 'EDI') {
        return 'Single item   Gal';
      } else {
        return 'Global Gallon p lb';
      }
    }
    if (unit === 'L') {
      if (itemCategory === 'EDI') {
        return 'Single item   L';
      } else {
        return 'Global Liters p kg';
      }
    }
  }
  async function fetchItemFromDatabase() {
    const fetchItemRef = ref(FirebaseRealtimeDatabase, '/' + currentItem);
    return onValue(fetchItemRef, (data) => {
      let itemData = data.val();
      if (itemData === null) {
        Alert.alert('This item does not exist');
        setFetchAndAdd(false);
        return false;
      }
      if (itemData[getItemWaterParameterLabel(itemData['Category'], 'G')] === '') {
        Alert.alert('Water unit does not exist. Try the compare tool.');
        setFetchAndAdd(false);
        return false;
      } else {
        setItemDetails({
          itemName: currentItem,
          itemCategory: itemData['Category'],
          itemDisplayedMetricInGallon: itemData['Display Unit Imperial'],
          itemDisplayedMetricInLiter: itemData['Display Unit Metric'],
          itemDisplayedUnitLabelInGallon: itemData['Individiual Unit Gal'],
          itemDisplayedUnitLabelInLiter: itemData['Individiual Unit L'],
          itemWaterInGallon: itemData[getItemWaterParameterLabel(itemData['Category'], 'G')],
          itemWaterInLiter: itemData[getItemWaterParameterLabel(itemData['Category'], 'L')]
        });
        console.log('Item fetch succeed');
        return true;
      }
    });
  }
  useEffect(() => {
    if (route.params !== undefined) {
      const { outsideItem } = route.params;
      addOutsideItemToRunningTotal(outsideItem);
    }
  },[route.params]);
  function addNewItemToRunningTotal() {
    let runningItem = {
      itemName: currentItem,
      itemDisplayedMetricInGallon: itemDetails.itemDisplayedMetricInGallon,
      itemDisplayedMetricInLiter: itemDetails.itemDisplayedMetricInLiter,
      itemWaterInGallon: itemDetails.itemWaterInGallon,
      itemWaterInLiter: itemDetails.itemWaterInLiter,
      itemQuantity: quantity,
      itemFrequency: frequency,
    }
    setRunningTotalList(
      [
        ...runningTotalList,
        runningItem
      ]);
    resetMainCalculator();
  }
  function addOutsideItemToRunningTotal(outsideItem) {
    let runningItem = {
      itemName: outsideItem.itemName,
      itemDisplayedMetricInGallon: outsideItem.itemDisplayedMetricInGallon,
      itemDisplayedMetricInLiter: outsideItem.itemDisplayedMetricInLiter,
      itemWaterInGallon: outsideItem.itemWaterInGallon,
      itemWaterInLiter: outsideItem.itemWaterInLiter,
      itemQuantity: outsideItem.itemQuantity,
      itemFrequency: outsideItem.itemFrequency,
    }
    setRunningTotalList(
      [
        ...runningTotalList,
        runningItem
      ]);
  }

  function resetMainCalculator() {
    setComputeCompleted(false);
    setCurrentItem('');
    setQuantityPickerValue(null);
    setQuantity('');
    setFrequency('');
    setItemDetails({
      itemName: '',
      itemCategory: '',
      itemDisplayedMetricInGallon: '',
      itemDisplayedMetricInLiter: '',
      itemDisplayedUnitLabelInGallon: '',
      itemDisplayedUnitLabelInLiter: '',
      itemWaterInGallon: '',
      itemWaterInLiter: ''
    });
  }

  // Calculate Control
  const [directCalculate, setDirectCalculate] = useState(false);
  const [computeCompleted, setComputeCompleted] = useState(false);
  const [calculateEndPosition, setCalculateEndPosition] = useState(0);
  useEffect(() => {
    if (computeCompleted) {
      console.log('Start scroll')
      scrollViewRef.current.scrollToPosition(0, calculateEndPosition, true);
    }
  }, [calculateEndPosition, computeCompleted]);
  useEffect(() => {
    async function fetch() {
      if (directCalculate) {
        setDirectCalculate(false);
        if (await fetchItemFromDatabase()){
          console.log('Direct calculate complete' + '\n' + '++++++++++++++++++');
        }
      }
    }
    fetch();
  }, [directCalculate]);
  function calculate() {
    if (noneEmptyCheck()) {
      console.log('Start direct calculate')
      setDirectCalculate(true);
    }
  }

  // Running Total List Control
  const [runningTotalList, setRunningTotalList] = useState([]);
  const [lastRunningItemPosition, setLastRunningItemPosition] = useState(0);
  useEffect(() => {
    if (runningTotalList.length > 0) {
      scrollViewRef.current.scrollToPosition(0, lastRunningItemPosition + DeviceHeight / 3, true);
    }
  }, [lastRunningItemPosition]);

  const [fetchAndAdd, setFetchAndAdd] = useState(false);
  useEffect(() => {
    async function fetch() {
      if (fetchAndAdd) {
        if (await fetchItemFromDatabase()) {
          console.log('fetch and add complete' + '\n' + '++++++++++++++++++');
        }
      }
    }
    fetch();
  }, [fetchAndAdd]);
  function addToRunningTotalList() {
    if (noneEmptyCheck()) {
      addNewItemToRunningTotal();
    }
  }
  function fetchAndAddToRunningTotalList() {
    if (noneEmptyCheck()) {
      console.log('Start fetch and add');
      setFetchAndAdd(true);
    }
  }
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
  function removeItemFromRunningTotalList(index) {
    setRunningTotalList(
      runningTotalList.filter(
        (runningItem, i) => {
          return i !== index;
        })
    );
  }

  // Modal controls
  // Calculator info popup
  const [calculatorInfoVisible, setCalculatorInfoVisible] = useState(false);
  function closeCalculatorInfoModal() {
    setCalculatorInfoVisible(false);
  }
  // Welcome popup
  const [welcomed, setWelcomed] = useState(true);
  function startWelcome() {
    AsyncStorage.getItem('calculatorWelcomed').then(value => {
      if (value == null) {
        AsyncStorage.setItem('calculatorWelcomed', 'true');
        setWelcomed(false);
      }
    });
  }
  function closeWelcome() {
    setWelcomed(true);
  }
  // Context & Challenge popup
  const [context, setContext] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  function closeContextChallengeModal() {
    setModalVisible(false)
  }
  // Export a photo of the current running total list
  const [modalShareVisible, setModalShareVisible] = useState(false);
  const headerImage = Image.resolveAssetSource(header).uri;
  const watermarkImage = Image.resolveAssetSource(watermark).uri;
  const [listPhoto, setListPhoto] = useState('');
  const [sharePhoto, setSharePhoto] = useState('');
  const refCaptureRunningTotal = useRef(null);
  const refShareRunningTotal = useRef(null);
  const [listHeight, setListHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [watermarkHeight, setWatermarkHeight] = useState(0);
  useEffect(()=>{
    Image.getSize(headerImage,
      (width, height) => {
        setHeaderHeight(height * DeviceWidth * 0.9 / width)
      });
    Image.getSize(watermarkImage,
      (width, height) => {
        setWatermarkHeight(height * DeviceWidth * 0.3 / width)
      });
  })
  const captureAndShareScreenshot = () => {
    analytics().logEvent('Export_Running_Total_List');
    refCaptureRunningTotal.current.capture().then((uri) => {
      FileSystem.getInfoAsync(uri).then((FileInfo) => {
        Image.getSize(FileInfo.uri,
          (width, height) =>{
            setListHeight(height * DeviceWidth * 0.9 / width)
          });
        setListPhoto(FileInfo.uri);
        setModalShareVisible(true);
        setTimeout(() => {
          refShareRunningTotal.current.capture().then((uri) => {
            FileSystem.getInfoAsync(uri).then((FileInfo) => {
              setSharePhoto(FileInfo.uri);
            });
          });
        },350);
      });
    });
  };
  function saveSuccessful(){
    showMessage({
      message: "Running Total Screenshot Saved!",
      type: "success",
      icon: "success",
      duration: 2000,
      style: {
        backgroundColor: '#70BF41'
      }
    })
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        enableAutomaticScroll={autoScroll}
        contentContainerStyle={{flexGrow: 1}}>
        {/* G/L switch and Calculator title*/}
        <View style={calculatorStyle.switchAndTitleContainer}>
          {/* G/L switch*/}
          <GLSwitcher globalUnit={globalUnit} switchHandler={setGlobalUnit}/>
          {/* Calculator Title */}
          <View style={calculatorStyle.calculatorTitleContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>Calculator</Text>
            <TouchableOpacity
              onPress={()=>{
                setCalculatorInfoVisible(true);
                analytics().logEvent('Info_button_pressed',{
                  infoName: 'Calculator'
                });
              }}>
              <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* Calculator Image */}
        <View style={calculatorStyle.calculatorImageContainer}>
          <Image
            style={{
              width: 75,
              height: 75,
            }}
            source={
              Profiles[currentItem] ? Profiles[currentItem] : require('./../images/Calculator_two_leaves.png')
            }
            resizeMode="contain"
          />
        </View>

        {/* Calculator Area */}
        <View style={{alignItems: 'center', marginTop: 20, paddingHorizontal: '5%'}}>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Select Item
          </Text>

          {/* Item Picker */}
          <RNPicker
            dataSource={globalList}
            dummyDataSource={globalList}
            defaultValue={false}
            showPickerTitle={true}
            pickerTitle={'Search Items'}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={'fade'}
            searchBarPlaceHolder={'Search.....'}
            selectedLabel={currentItem}
            searchBarContainerStyle={styles.searchBarContainerStyle}
            pickerStyle={styles.calculatePickerStyle}
            itemSeparatorStyle={styles.itemSeparatorStyle}
            pickerItemTextStyle={styles.listTextViewStyle}
            selectLabelTextStyle={styles.calculateLabelTextStyle}
            placeHolderLabel={'Select'}
            placeHolderTextStyle={styles.placeHolderTextStyle}
            dropDownImageStyle={styles.dropDownImageStyle}
            selectedValue={(index, currentItem) => {
              if (computeCompleted) {
                setQuantity(null);
                setQuantityPickerValue(null);
                setFrequency(null);
                setComputeCompleted(false);
              }
              setCurrentItem(currentItem.name);
              setQuantity(1);
              setFrequency('single_use');
              startWelcome();
            }}
          />

          {/* Quantity and Frequency */}
          <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
            {/* Quantity Picker */}
            <QuantityPicker
              itemName={currentItem}
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

          {/* Buttons and Result Display Area*/}

          {/* Initial Calculate Button */}
          {!computeCompleted && runningTotalList.length < 1 && (
            <View style={{width: '100%', marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
              {/* Calculate button*/}
              <TouchableOpacity
                onPress={() => {
                  calculate();
                  analytics().logEvent('Calculate');
                }}
                style={calculatorStyle.calculateButton}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Calculate
                </Text>
              </TouchableOpacity>
              {/* Add to Running Total button*/}
              <TouchableOpacity
                onPress={() => fetchAndAddToRunningTotalList()}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: '#70BF41',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Add to Running Total
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Individual Total */}
          {computeCompleted && (
            <View style={{
              marginTop: 30,
              width: '100%',
              alignItems: 'center',
            }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Individual Total
              </Text>
              <View style={{
                borderColor: '#80CAFF',
                marginTop: 10,
                width: '100%',
                height: 50,
                borderWidth: 2,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                  {globalUnit === 'G' ?
                    NumberWithThousandSeparation(itemDetails.itemWaterInGallon) + ' ' + itemDetails.itemDisplayedUnitLabelInGallon :
                    NumberWithThousandSeparation(itemDetails.itemWaterInLiter) + ' ' + itemDetails.itemDisplayedUnitLabelInLiter}
                </Text>
              </View>
            </View>
          )}

          {/* Yearly Total */}
          {computeCompleted && (
            <View style={{
              marginTop: 30,
              width: '100%',
              alignItems: 'center',
            }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Yearly Total
              </Text>
              <View style={{
                borderColor: '#80CAFF',
                marginTop: 10,
                width: '100%',
                height: 50,
                borderWidth: 2,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    maxWidth: '95%'
                  }}>
                  {globalUnit === 'G' ?
                    NumberWithTextLabel(itemDetails.itemWaterInGallon * frequency_values[frequency] * quantity) + ' gal.' :
                    NumberWithTextLabel(itemDetails.itemWaterInLiter * frequency_values[frequency] * quantity) + ' L.'}
                </Text>
              </View>
            </View>
          )}
          {/* Button Area after Results shown */}
          <View style={{width: '100%', marginTop: 23}}>

            {/* Context, Add to Running Total buttons*/}
            {computeCompleted && (
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {/* Context button*/}
                <TouchableOpacity
                  onPress={() => {
                    setContext(true)
                    setModalVisible(true)
                    analytics().logEvent('Context_pressed')
                  }}
                  style={{
                    padding: 15,
                    borderRadius: 30,
                    backgroundColor: '#404040',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Context
                  </Text>
                </TouchableOpacity>
                {/* Add to Running Total button*/}
                <TouchableOpacity
                  onPress={() => addToRunningTotalList()}
                  style={{
                    padding: 15,
                    borderRadius: 30,
                    backgroundColor: '#70BF41',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Add to Running Total
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Clear, Challenge buttons*/}
            {computeCompleted && (
              <View
                onLayout={(event) => {
                  const currentLayout = event.nativeEvent.layout;
                  setCalculateEndPosition(currentLayout.y + 2 * currentLayout.height);
                }}
                style={{marginVertical: 20, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={() => resetMainCalculator()}
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 35,
                    marginRight: 5,
                    borderRadius: 30,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setContext(false)
                    setModalVisible(true)
                    analytics().logEvent('Challenge_pressed')
                  }}
                  style={{
                    padding: 15,
                    marginLeft: 5,
                    borderRadius: 30,
                    backgroundColor: '#29A3FE',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Challenge
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Calculate, Add to Running Total buttons when list is shown*/}
            {runningTotalList.length > 0 && !computeCompleted && (
              <View style={{marginBottom: 20, flexDirection: 'row', justifyContent: 'center'}}>
                {/* Calculate button*/}
                <TouchableOpacity
                  onPress={() => {
                    calculate();
                    analytics().logEvent('Calculate');
                  }}
                  style={{
                    padding: 15,
                    marginRight: 5,
                    borderRadius: 30,
                    backgroundColor:'#70BF41',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Calculate
                  </Text>
                </TouchableOpacity>
                {/* Add to Running Total button*/}
                <TouchableOpacity
                  onPress={() => fetchAndAddToRunningTotalList()}
                  style={{
                    padding: 15,
                    borderRadius: 30,
                    backgroundColor: '#70BF41',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    Add to Running Total
                  </Text>
                </TouchableOpacity>
              </View>
            )}

          </View>
        </View>

        {/* Running Total List Area*/}
        {runningTotalList.length > 0 && (
          <View>
            <ViewShot
              ref={refCaptureRunningTotal}
              options={{
                format: "jpg",
                quality: 1
              }}>
              {/* Running Total bar */}
              <View style={calculatorStyle.runningTotalBarContainer}>
                <Text style={{
                  fontSize: 23,
                  fontWeight: '500',
                  marginLeft: 20,
                }}>
                  Running Total
                </Text>
                <Image
                  source={require('./../images/water_drop_150px_wide2.png')}
                  style={calculatorStyle.waterDropIcon}/>
              </View>

              {/* Running Items */}
              {runningTotalList.length > 0 && runningTotalList.map((runningItem, index) => (
                <View
                  key={index}
                  onLayout={(event) => {
                    const currentLayout = event.nativeEvent.layout;
                    setLastRunningItemPosition(currentLayout.y);
                  }}
                >
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
                    updateRunningTotalList={updateRunningTotalList}
                    removeItemFromRunningTotalList={removeItemFromRunningTotalList}
                    scrollViewRef={scrollViewRef}
                    itemPosition={lastRunningItemPosition}
                  />
                </View>
              ))}

              <RunningTotalImpactArea
                globalUnit={globalUnit}
                runningTotalList={runningTotalList}
                GLSwitchHandler={setGlobalUnit}
              />

            </ViewShot>

            {/* Clear and Export buttons */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              paddingBottom: 30,
            }}>

              {/* Clear Button */}
              <TouchableOpacity
                onPress={() => {
                  setRunningTotalList([]);
                }}
                style={{
                  width: 200,
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Clear Total
                </Text>
              </TouchableOpacity>

              {/* Export Button */}
              <TouchableOpacity
                onPress={captureAndShareScreenshot}
                style={{
                  width: 130,
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: '#00ADEF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Export
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        )}

      </KeyboardAwareScrollView>
      {/* Modals */}
      {/* Info button modal */}
      <CalculatorInfoModal infoVisible={calculatorInfoVisible} handler={closeCalculatorInfoModal}/>
      {/* Welcome modal */}
      <CalculatorWelcomeModal welcomeVisible={!welcomed} handler={closeWelcome}/>
      {/* Pop up window of 'Context' and 'Challenge' */}
      <ContextAndChallengeModal
        modalVisible={modalVisible}
        showContext={context}
        handler={closeContextChallengeModal}/>
      {/*Running total list Export modal*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShareVisible}>
        {modalShareVisible && <ReactNavigationOverlay/>}
        <BlurView
          intensity={90}
          tint="light"
          style={{
            flex: 1
          }}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                marginTop: '8%',
                marginBottom: '8%',
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5
              }}>
              <ViewShot
                ref={refShareRunningTotal}
                options={{
                  format: "jpg",
                  quality: 1
                }}>
                <ImageBackground
                  style={{
                    height: headerHeight + listHeight,
                    width: DeviceWidth * 0.9,
                  }}
                  imageStyle={{
                    position: 'absolute',
                    top: headerHeight + 32,
                    left: '62%',
                    height: watermarkHeight,
                    width: DeviceWidth * 0.3,
                    zIndex: 1
                  }}
                  source={watermark}>
                  <Image
                    source={{uri: headerImage}}
                    style={{
                      height: headerHeight,
                      width: DeviceWidth * 0.9,
                    }}/>
                  <Image
                    source={{uri: listPhoto}}
                    style={{
                      height: listHeight,
                      width: DeviceWidth * 0.9,
                    }}/>
                </ImageBackground>
              </ViewShot>
            </View>
          </ScrollView>
          <FloatingButton
            visible={true}
            button={{
              disabled: true,
              disabledBackgroundColor: 'transparent'
            }}
            secondaryButton={{
              label: 'Cancel',
              onPress: () => setModalShareVisible(!modalShareVisible),
              color: 'black'
            }}
            bottomMargin={40}/>
          <View style={{
            width: DeviceWidth * 0.8,
            position: 'absolute',
            bottom: 80,
            alignSelf: 'center',
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
              <Button
                label={"Share"}
                backgroundColor={"#00ADEF"}
                enableShadow={true}
                onPress={()=>{
                  Share.share(
                    {
                      url: sharePhoto
                    }
                  );
                  analytics().logEvent('Share_Running_Total_List');
                }}/>
              <Button
                label={"Save to Photo"}
                backgroundColor={"#70BF41"}
                enableShadow={true}
                onPress={()=>{
                  MediaLibrary.saveToLibraryAsync(sharePhoto).then(() => {
                    setModalShareVisible(!modalShareVisible);
                    saveSuccessful();
                    analytics().logEvent('Save_Running_Total_List');
                  })
                }}/>
            </View>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  )
}

const CalculateStack = createStackNavigator();

export const CalculateStackScreen = () => (
  <CalculateStack.Navigator>
    <CalculateStack.Screen
      name="Calculator"
      component={Calculator}
      options={{headerShown: false}}
    />
  </CalculateStack.Navigator>
);

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
