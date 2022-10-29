import React, {useEffect, useRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  Alert, ImageBackground, Share
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from '../Comparing/Styles';
import Profiles from '../ImageDB.js';
import firebase from 'firebase';
import RNPicker from "../components/RNModalPicker/RNModalPicker";
import analytics from '@react-native-firebase/analytics';
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";

// New imports for Export
import ViewShot from "react-native-view-shot";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import {showMessage} from "react-native-flash-message";
import header from '../images/header.png'
import watermark from '../images/watermark_running_total.png'
import {BlurView} from "expo-blur";
import {FloatingButton, Button} from "react-native-ui-lib";
import CalculateContainer from "../components/CalculateContainer";
import {ReactNavigationOverlay} from "../components/ReactNavigationOverlay";
import { CalculatorInfoModal, ContextAndChallengeModal, VirtualWaterInfoModal } from "../components/Modals/Modals";

// var pages=[];
let itemNameList = [];
let itemQuantityList = [];
let itemFrequencyList = [];
let itemCostList = [];
let itemCostLList=[];
let itemYearlyCostList=[];
let itemYearlyLCostList=[];
let itemMeasurementListL = [];
let itemMeasurementListG = [];
let itemIndividualUnitListL = [];
let itemIndividualUnitListG = [];

let nonWater = false
let itemName;
let itemCost;
let itemCostL;
let itemYearlyCost;
let itemYearlyLCost;
let itemMeasurementL = [];
let itemMeasurementG = [];
let itemIndividualUnitL =[];
let itemIndividualUnitG =[];
let loading = false;

let DeviceWidth = Dimensions.get('window').width;

const frequency_values = {
  per_day: 365,
  per_week: 52,
  per_month: 12,
  per_year: 1,
};

const Quantity_values ={
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  10:10,
  20:20,
  30:30,
  40:40,
  50:50,
}

let fetchedData = {};

function CalculateScreen() {
  let selectedItem = [];

  const config = {
    apiKey: 'AIzaSyA0mAVUu-4GHPXCdBlqqVaky7ZloyfRARk',
    authDomain: 'siitch-6b176.firebaseapp.com',
    databaseURL: 'https://siitch-6b176.firebaseio.com',
    projectId: 'siitch-6b176',
    storageBucket: 'siitch-6b176.appspot.com',
    messagingSenderId: '282599031511',
    appId: '1:282599031511:web:bb4f5ca5c385550d8ee692',
    measurementId: 'G-13MVLQ6ZPF',
  };

  let individual_sum = 0;

  const [pages,setPages] = useState([]);
  const [frequency, setFrequency] = useState('');
  const [quantity, setQuantity] = useState('');
  const [item, setItem] = useState('');
  const [computed, setComputed] = useState(false);
  const [showlist, setShowlist] = useState(false);
  const [context, setContext] = useState(false);
  const [selectOpened, setSelect] = useState(false);
  const [sOpened,setSelectopen] = useState(false);
  const [sOutputOpened,setOutputOpened] = useState(false);
  const [error, setError] = useState({status: false, message: ''});
  const [modalVisible, setModalVisible] = useState(false);
  function closeContextChallengeModal() {
    setModalVisible(false)
  }
  const [inputValue, setInputValue] = useState('');
  const [unit, setUnit] = useState('G');
  const [unitG,setUnitG] = useState(true);
  const [reallyOutputs,setReallyOutput] = useState(0);
  const [reallyLOutputs,setReallyLOutput] = useState(0);
  const [showAnotherRunningtotal,setShowAnotherRunningtotal] = useState(false);

  const [impactUnit, setImpactUnit] = useState('yearly');
  const [yearlyCostTotal, setYearlyCostTotal] = useState(0);
  const [mixCostTotal, setMixCostTotal] = useState(0);
  const [mixCostLTotal, setMixCostLTotal] = useState(0);
  const [yearlyCostLTotal, setYearlyCostLTotal] = useState(0);

  const [itemOpenList, setItemOpenList] = useState([]);

  const [calculatorInfoVisible, setCalculatorInfoVisible] = useState(false);
  function closeCalculatorInfoModal() {
    setCalculatorInfoVisible(false)
  }
  const [infoVisible, setInfoVisible] = useState(false);
  function closeInfoModal() {
    setInfoVisible(false)
  }

  // Export a photo of the current running total list
  const [modalShareVisible, setModalShareVisible] = useState(false)
  const headerImage = Image.resolveAssetSource(header).uri
  const watermarkImage = Image.resolveAssetSource(watermark).uri
  const [listPhoto, setListPhoto] = useState('')
  const [sharePhoto, setSharePhoto] = useState('')
  const refCaptureRunningTotal = useRef(null);
  const refShareRunningTotal = useRef(null);
  const [listHeight, setListHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [watermarkHeight, setWatermarkHeight] = useState(0)
  useEffect(()=>{
    Image.getSize(headerImage,
      (width, height) => {
        setHeaderHeight(height * DeviceWidth * 0.9 / width)
      })
    Image.getSize(watermarkImage,
      (width, height) => {
        setWatermarkHeight(height * DeviceWidth * 0.3 / width)
      })
  })
  const captureAndShareScreenshot = () => {
    analytics().logEvent('Export_Running_Total_List')
    refCaptureRunningTotal.current.capture().then((uri) => {
      FileSystem.getInfoAsync(uri).then((FileInfo) => {
        Image.getSize(FileInfo.uri,
          (width, height) =>{
            setListHeight(height * DeviceWidth * 0.9 / width)
          })
        setListPhoto(FileInfo.uri)
        setModalShareVisible(true)
        setTimeout(() => {
          refShareRunningTotal.current.capture().then((uri) => {
            FileSystem.getInfoAsync(uri).then((FileInfo) => {
              setSharePhoto(FileInfo.uri)
            })
          })
        },350)
      })
    });
  };

  function saveSuccessful() {
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

  const updateReallyOutput = (currentUnit) =>{
    if(currentUnit==="yearly")
    {
      setReallyOutput(yearlyCostTotal);
      setReallyLOutput(yearlyCostLTotal);
    }
    else if(currentUnit==="monthly")
    {
      setReallyOutput(~~(yearlyCostTotal/12));
      setReallyLOutput(~~(yearlyCostLTotal/12));
    }
    else if(currentUnit==="weekly")
    {
      setReallyOutput(~~(yearlyCostTotal/365)*7);
      setReallyLOutput(~~(yearlyCostLTotal/365)*7);
    }
    else if(currentUnit==="daily")
    {
      setReallyOutput(~~(yearlyCostTotal/365));
      setReallyLOutput(~~(yearlyCostLTotal/365));
    }
  }

  const updateYearlyCostTotal = () =>{
    let sum = 0;
    let sumL = 0;
    for(let i=0; i<itemYearlyCostList.length; i++)
    {
      sum+=itemYearlyCostList[i];
      // console.log("itemQuantity",itemQuantityList[i])
      // console.log("itemFrequency",itemFrequencyList[i])
      // console.log("itemYearlyCost",itemYearlyCostList[i]);
      sumL+=itemYearlyLCostList[i];
      // console.log("sum",sum);
    }
    setYearlyCostTotal(sum);
    setYearlyCostLTotal(sumL);
  }

  const updateMixCostTotal =()=>{
    let sum = 0;
    let sumL = 0;
    for(let i=0; i<itemCostList.length; i++)
    {
      sum+=itemCostList[i]*itemQuantityList[i];
      sumL+=itemCostLList[i]*itemQuantityList[i];
    }
    setMixCostTotal(sum);
    setMixCostLTotal(sumL);
  }

  const waterParameter = (id,unitG) => {
    if (unitG === 'L') {
      if (id === 'EDI') {
        return 'Single item   L';
      } else {
        return 'Global Liters p kg';
      }
    } else if (unitG === 'G') {
      if (id === 'EDI') {
        return 'Single item   Gal';
      } else {
        return 'Global Gallon p lb';
      }
    }
  };

  const deleteItemFromList = (index) => {
    console.log(index)
    setMixCostTotal(mixCostTotal-itemCostList[index]*itemQuantityList[index])
    setMixCostLTotal(mixCostLTotal-itemCostLList[index]*itemQuantityList[index])
    setYearlyCostTotal(yearlyCostTotal-itemYearlyCostList[index])
    setYearlyCostLTotal(yearlyCostLTotal-itemYearlyLCostList[index])

    itemNameList.splice(index,1);
    itemMeasurementListG.splice(index,1);
    itemMeasurementListL.splice(index,1);
    itemIndividualUnitListG.splice(index,1);
    itemIndividualUnitListL.splice(index,1);
    itemCostList.splice(index,1);
    itemCostLList.splice(index,1);
    itemFrequencyList.splice(index,1);
    itemQuantityList.splice(index,1);
    itemYearlyCostList.splice(index,1);
    itemYearlyLCostList.splice(index,1);

    if(itemNameList.length ===0)
      setShowlist(false);

    if(itemNameList.length ===0)
      clearElements();

    if(itemNameList.length ===0)
      setShowAnotherRunningtotal(false);

    updateYearlyCostTotal();
    updateMixCostTotal();
    upgradePages();
  }

  const fetchData = () => {
    nonWater = false
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let id;

    firebase
      .database()
      .ref('/' + item)
      .once('value', (data) => {
        fetchedData = data.val();
        if (fetchedData !== null) {
          id = fetchedData['Category'];
          itemMeasurementL = fetchedData['Display Unit Metric'];
          itemMeasurementG = fetchedData['Display Unit Imperial'];
          itemIndividualUnitG = fetchedData['Individiual Unit Gal'];
          itemIndividualUnitL = fetchedData['Individiual Unit L'];
        }
        itemName=item;

        if (fetchedData === null) {
          Alert.alert('This item does not exist')
        } else if (fetchedData[waterParameter(id,'G')] === '') {
          nonWater = true
          Alert.alert('Water unit does not exist. Try the compare tool.')
        } else {
          itemCost=fetchedData[waterParameter(id,'G')];
          itemCostL=fetchedData[waterParameter(id,'L')];
          addtoList(fetchedData[waterParameter(id,'G')]);
          setComputed(true);
        }
      })
      .then(()=>{
        if(loading && !nonWater)
        {
          setComputed(false);
          selectedItem.push(item);
          //Add those
          itemNameList.push(item);
          itemMeasurementListG.push(itemMeasurementG);
          itemMeasurementListL.push(itemMeasurementL);
          itemIndividualUnitListL.push(itemIndividualUnitL);
          itemIndividualUnitListG.push(itemIndividualUnitG);
          itemFrequencyList.push(frequency);
          itemQuantityList.push(quantity);
          itemCostList.push(itemCost);
          itemCostLList.push(itemCostL);

          itemYearlyCost = itemCost * frequency_values[frequency]*Quantity_values[quantity];
          itemYearlyLCost = itemCostL * frequency_values[frequency]*Quantity_values[quantity];
          itemYearlyCostList.push(itemYearlyCost);
          itemYearlyLCostList.push(itemYearlyLCost);
          itemOpenList.push(false);
          setYearlyCostTotal(yearlyCostTotal+itemYearlyCost);
          setYearlyCostLTotal(yearlyCostLTotal+itemYearlyLCost);
          setMixCostTotal(mixCostTotal+itemCost*Quantity_values[quantity]);
          setMixCostLTotal(mixCostLTotal+itemCostL*Quantity_values[quantity]);
          setItem('');
          setFrequency(null)
          setQuantity(null)
          clickToScroll();
          upgradePages();
          loading=false;
          nonWater = false
        } else if(loading) {
          loading=false;
          nonWater = false
        }
      })
  };

  const calculate = () => {
    if (!item) {
      Alert.alert('Please select an item')
      setError({status: true, message: 'Please select an item'});
    } else if (!frequency) {
      Alert.alert('Please select a frequency')
      setError({status: true, message: 'Please select a frequency'});
    } else if(!quantity) {
      Alert.alert('Please select a quantity')
      setError({status: true, message: 'Please select a quantity'});
    }
    else {
      fetchData();
    }
  };

  const upgradePages =() =>{
    // pages=[]
    // setPages([]);
    let temppages = [];
    for(let i=0; i<itemFrequencyList.length; i++)
    {
      temppages.push(
        <Text>abc</Text>
      );
    }

    setPages(temppages);
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const addtoList = (cost) => {
    individual_sum = individual_sum + cost;
  }

  const clickToScroll = () => {
    this.scrollView.scrollTo({y:600,animated: true});
  }

  const clearElements = () => {
    setImpactUnit('yearly')
    setShowAnotherRunningtotal(false);
    setReallyOutput(0);
    setReallyLOutput(0);
    setComputed(false);
    setInputValue('');
    setItem('');
    setShowlist(false);
    setFrequency(null);
    setQuantity(null);
    itemNameList=[];
    itemMeasurementListG = [];
    itemMeasurementListL = [];
    itemIndividualUnitListG=[];
    itemIndividualUnitListL=[];
    itemQuantityList=[];
    itemFrequencyList=[];
    itemCostList=[];
    itemCostLList=[];
    itemYearlyCostList=[];
    itemYearlyLCostList=[];
    setYearlyCostLTotal(0);
    setYearlyCostTotal(0);
    setMixCostLTotal(0);
    setMixCostTotal(0);

    upgradePages();
    console.log("------------")

    DropDownPicker.value = null;
  };

  const clearElement = () => {
    setComputed(false);
    setInputValue('');
    setItem('');
    setFrequency(null);
    setQuantity(null);

    DropDownPicker.value = null;
  };

  return (
    <ScrollView ref={view => this.scrollView = view} style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '21%',
            marginLeft: 20,
            borderColor: '#00ADEF',
            borderWidth: 2,
            borderRadius: 10,
            width: 65,
            height: 44,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setUnitG(true);
              setUnit('G');
              analytics().logEvent('Use_GL_switch',{
                switch_to: 'Gallons'
              })
            }}>
            <Text
              style={{
                color: unit === 'G' ? '#00ADEF' : 'black',
                paddingTop: 5,
                fontSize: 20,
                fontWeight: unit === 'G' ? 'bold' : 'normal',
              }}>
              G
            </Text>
          </TouchableOpacity>
          <Text style={{paddingTop: 5, fontSize: 20}}> / </Text>
          <TouchableOpacity
            onPress={() => {
              setUnit('L');
              setUnitG(false);
              analytics().logEvent('Use_GL_switch',{
                switch_to: 'Liters'
              })
            }}>
            <Text
              style={{
                color: unit === 'L' ? '#00ADEF' : 'black',
                paddingTop: 5,
                fontSize: 20,
                fontWeight: unit === 'L' ? 'bold' : 'normal',
              }}>
              L
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: '21%',
              paddingTop: 30,
              paddingLeft: '12%',
              // paddingRight: 10,
              paddingBottom: 10,
            }}>
            Calculator
          </Text>
          <TouchableOpacity
            style={{marginTop: '21%', paddingTop: 22}}
            onPress={()=>{
              setCalculatorInfoVisible(true)
              analytics().logEvent('Info_button_pressed',{
                infoName: 'Calculator'
              })
            }}>
            <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rankingPage}>
        <Image
          style={{
            width: 150,
            height: 150,
            marginLeft: DeviceWidth * 0.3,
            marginTop: 20,
            marginBottom: 30,
          }}
          source={
            Profiles[item] ? Profiles[item] : require('./../images/Calculator_two_leaves.png')
          }
          resizeMode="contain"
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: '500'}}>Select Item</Text>
          <View style={styles.container}>
            <View
              style={{
                width: DeviceWidth * 0.9,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <RNPicker
                dataSource={globalList}
                dummyDataSource={globalList}
                defaultValue={false}
                pickerTitle={'Search Items'}
                showSearchBar={true}
                disablePicker={false}
                changeAnimation={'fade'}
                searchBarPlaceHolder={'Search.....'}
                showPickerTitle={true}
                selectedLabel={item}
                searchBarContainerStyle={styles.searchBarContainerStyle}
                pickerStyle={styles.calculatePickerStyle}
                itemSeparatorStyle={styles.itemSeparatorStyle}
                pickerItemTextStyle={styles.listTextViewStyle}
                selectLabelTextStyle={styles.calculateLabelTextStyle}
                placeHolderLabel={'Select'}
                placeHolderTextStyle={styles.placeHolderTextStyle}
                dropDownImageStyle={styles.dropDownImageStyle}
                selectedValue={(index, currentItem) => {
                  setInputValue(currentItem.name);
                  setComputed(false);
                  setItem(currentItem.name);
                  setError({status: false, message: ''});
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft:20,
            marginRight:20}}>
            <View style={{marginRight:50}}>
              <Text style={{fontSize: 25, marginTop: 30, fontWeight: '500',marginLeft:15}}>
                Quantity
              </Text>
              <DropDownPicker
                items={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                  {label: '5', value: '5'},
                  {label: '6', value: '6'},
                  {label: '7', value: '7'},
                  {label: '8', value: '8'},
                  {label: '9', value: '9'},
                  {label: '10', value: '10'},
                  {label: '20', value: '20'},
                  {label: '30', value: '30'},
                  {label: '40', value: '40'},
                  {label: '50', value: '50'},
                ]}
                placeholder="Select"
                placeholderStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'lightgray',
                }}
                itemStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                labelStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                defaultValue={quantity}
                containerStyle={{
                  height: 60,
                  borderRadius: 20,
                }}
                style={{
                  backgroundColor: 'white',
                  width: DeviceWidth * 0.35,
                  marginTop: 10,
                  borderWidth: 2,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderColor: '#80CAFF',
                }}
                dropDownStyle={{
                  backgroundColor: 'white',
                  width: DeviceWidth * 0.35,
                  height:180,
                  marginTop: 10,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderWidth: 2,
                  borderColor: '#80CAFF',
                }}
                dropDownMaxHeight={250}
                onChangeItem={(currentQuantity) => {
                  setComputed(false);
                  setQuantity(currentQuantity.value);
                }}
                onOpen={() => {
                  setComputed(false);
                  setSelect(true);
                  setError({status: false, message: ''});
                }}
                onClose={() => {
                  setSelect(false);
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 25, marginTop: 30, fontWeight: '500',marginLeft:20}}>
                Frequency
              </Text>
              <DropDownPicker
                items={[
                  {label: 'a day', value: 'per_day'},
                  {label: 'a week', value: 'per_week'},
                  {label: 'a month', value: 'per_month'},
                  {label: 'a year', value: 'per_year'},
                ]}
                placeholder="Select"
                placeholderStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'lightgray',
                }}
                itemStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                labelStyle={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                defaultValue={frequency}
                containerStyle={{
                  height: 60,
                  borderRadius: 20,
                }}
                style={{
                  backgroundColor: 'white',
                  width: DeviceWidth * 0.35,
                  marginTop: 10,
                  borderWidth: 2,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderColor: '#80CAFF',
                }}
                dropDownStyle={{
                  backgroundColor: 'white',
                  width: DeviceWidth * 0.35,
                  marginTop: 10,
                  height:180,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderWidth: 2,
                  borderColor: '#80CAFF',
                }}
                dropDownMaxHeight={250}
                onChangeItem={(currentFrequency) => {
                  setComputed(false);
                  setFrequency(currentFrequency.value);
                }}
                onOpen={() => {
                  setComputed(false);
                  setSelect(true);
                  setError({status: false, message: ''});
                }}
                onClose={() => {
                  setSelect(false);
                }}
              />
            </View>
          </View>
        </View>

        {/* Pop up window of 'Context' and 'Challenge' */}
        <ContextAndChallengeModal
          modalVisible={modalVisible}
          showContext={context}
          handler={closeContextChallengeModal}/>

        {computed && !showAnotherRunningtotal && (
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'black',
                marginTop: 30,
              }}>
              Individual Total
            </Text>

            {unitG && (<Text style={{
              borderColor: '#80CAFF',
              marginTop: 10,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              width: DeviceWidth * 0.9,
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold',
            }}>
              {numberWithCommas(itemCost)} {itemIndividualUnitG}
            </Text>)}

            {!unitG && (<Text style={{
              borderColor: '#80CAFF',
              marginTop: 10,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              width: DeviceWidth * 0.9,
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold',
            }}>{numberWithCommas(itemCostL)} {itemIndividualUnitL}</Text>)}
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'black',
                marginTop: 30,
              }}>
              Yearly Total
            </Text>
            {unitG && (<Text style={{
              borderColor: '#80CAFF',
              marginTop: 10,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              width: DeviceWidth * 0.9,
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold',
            }}>
              {numberWithCommas(itemCost* frequency_values[frequency]*Quantity_values[quantity])} gal.
            </Text>)}

            {!unitG && (<Text style={{
              borderColor: '#80CAFF',
              marginTop: 10,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              width: DeviceWidth * 0.9,
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold',
            }}>{numberWithCommas(itemCostL* frequency_values[frequency]*Quantity_values[quantity])} L.</Text>)}

          </View>
        )}

        {/*{error.status && Alert.alert(error.message)}*/}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: selectOpened ? 200 : 0,
          }}>

          { !computed && !showAnotherRunningtotal && (
            <View style={{marginTop:30}}>
              <TouchableOpacity
                onPress={() => {
                  calculate();
                  analytics().logEvent('Calculate')
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  marginLeft: '19%',
                  marginRight: '19%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:'#70BF41',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Calculate
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {computed && !showAnotherRunningtotal && (
            <View>
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
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Context
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {computed && !showAnotherRunningtotal && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  if(!nonWater){
                    setShowlist(true);

                    setComputed(false);
                    selectedItem.push(item);

                    //Add those
                    itemNameList.push(itemName);
                    itemMeasurementListG.push(itemMeasurementG);
                    itemMeasurementListL.push(itemMeasurementL);
                    itemIndividualUnitListL.push(itemIndividualUnitL);
                    itemIndividualUnitListG.push(itemIndividualUnitG);
                    itemFrequencyList.push(frequency);
                    itemQuantityList.push(quantity);
                    itemCostList.push(itemCost);
                    itemCostLList.push(itemCostL);

                    itemYearlyCost = itemCost * frequency_values[frequency]*quantity;
                    itemYearlyLCost = itemCostL * frequency_values[frequency]*quantity;
                    itemYearlyCostList.push(itemYearlyCost);
                    itemYearlyLCostList.push(itemYearlyLCost);
                    itemOpenList.push(false);
                    setYearlyCostTotal(yearlyCostTotal+itemYearlyCost);
                    setYearlyCostLTotal(yearlyCostLTotal+itemYearlyLCost);
                    setMixCostTotal(mixCostTotal+itemCost*quantity);
                    setMixCostLTotal(mixCostLTotal+itemCostL*quantity);
                    setItem('');
                    setFrequency(null)
                    setQuantity(null)
                    clickToScroll();
                    // console.log("---------")
                    // console.log("itemCost",itemCost)
                    // console.log("itemQuantity",quantity)
                    // console.log("itemFrequency",frequency)
                    // console.log("itemNameList",itemNameList)
                    // console.log("itemQuantityList",itemQuantityList)
                    // console.log("itemFrequencyList",itemFrequencyList)
                    // console.log("itemCostList",itemCostList)
                    // console.log("itemYearlyCostList",itemYearlyCostList)
                    // console.log("itemYearlyCost",itemYearlyCost)
                    // console.log("yearlyCostTotal",yearlyCostTotal)
                    // console.log("mixCostTotal",mixCostTotal)
                    upgradePages();
                  } else {
                    setItem('');
                    setFrequency(null)
                    setQuantity(null)
                    nonWater = false
                  }

                  if(itemNameList.length !==0)
                    setShowAnotherRunningtotal(true);
                  analytics().logEvent('Add_to_running_total')
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  marginLeft: 10,
                  backgroundColor: '#70BF41',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Add to Running Total
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: selectOpened ? 20 : 20,
            marginBottom: 20,
          }}>
          {computed && !showAnotherRunningtotal && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  computed ? clearElement() : calculate();
                  // calculate(item,frequency);
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  marginLeft: 12,
                  backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      width: computed ? 90 : DeviceWidth * 0.4,
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Clear
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {computed && !showAnotherRunningtotal && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setContext(false)
                  setModalVisible(true)
                  analytics().logEvent('Challenge_pressed')
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  marginLeft: 10,
                  backgroundColor: '#29A3FE',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Challenge
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View style={{flexDirection: 'row',
            marginLeft:10,
            marginRight:10,}}>

            {showAnotherRunningtotal && (
              <View>
                <TouchableOpacity
                  onPress={() => {calculate();
                    setShowAnotherRunningtotal(false);
                    analytics().logEvent('Calculate')
                  }}
                  style={{
                    padding: 15,
                    borderRadius: 30,
                    marginLeft: '3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'#70BF41',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        alignItems: 'center',
                      }}>
                      Calculate
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            {showAnotherRunningtotal && (
              <View>
                <TouchableOpacity
                  onPress={() => {setShowlist(true);
                    loading=true;
                    calculate();
                    analytics().logEvent('Add_to_running_total')
                  }}

                  style={{
                    padding: 15,
                    borderRadius: 30,
                    marginLeft: 10,
                    backgroundColor: '#70BF41',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                        alignItems: 'center',
                      }}>
                      Add to Running Total
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}

          </View>

        </View>

        <ViewShot
          ref={refCaptureRunningTotal}
          options={{
            format: "jpg",
            quality: 1
        }}>
        {showlist && (

          <View style={{flexDirection: 'row',
            backgroundColor: 'rgba(198, 198, 198, 0.2)',
            height:40
          }}>
            <Text style={{fontSize: 23, fontWeight: '500',marginLeft:20,marginTop:7}}>Running Total</Text>
            <Image
              style={{width: 30, height: 30, position:'absolute',right:45, marginTop:5}}
              source={require('./../images/water_drop_150px_wide2.png')}
            />
          </View>
        )}

        <View>
          { pages.map((elem,index)=>{
            let i = index;
            return (
              <View key={index}>
              <View style={{flexDirection: 'row',
                marginTop: 5,
                marginBottom: 5,
                marginLeft:20,
                marginRight:10,}}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={
                    Profiles[itemNameList[index]]
                  }
                />

                {unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginLeft:7,marginTop:10}}>{itemNameList[index]} {itemMeasurementListG[index]}</Text>)}
                {!unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginLeft:7,marginTop:10}}>{itemNameList[index]} {itemMeasurementListL[index]}</Text>)}
              </View>

              <View style={{flexDirection: 'row',
                marginBottom: 5,
                marginLeft:20,
                marginRight:10}}>
                {/* <Text style={{fontSize: 20, fontWeight: '400',marginLeft:10}}>{itemQuantityList[i]}</Text> */}
                <DropDownPicker
                  defaultValue={itemQuantityList[index]}
                  items={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                    {label: '4', value: '4'},
                    {label: '5', value: '5'},
                    {label: '6', value: '6'},
                    {label: '7', value: '7'},
                    {label: '8', value: '8'},
                    {label: '9', value: '9'},
                    {label: '10', value: '10'},
                    {label: '20', value: '20'},
                    {label: '30', value: '30'},
                    {label: '40', value: '40'},
                    {label: '50', value: '50'},
                  ]}
                  placeholder="Select"
                  placeholderStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'lightgray',
                  }}
                  itemStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                  labelStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                  defaultNull
                  containerStyle={{
                    height: 50,
                    borderRadius: 20,
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: DeviceWidth * 0.2,
                    marginTop: 0,
                    borderWidth: 2,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderColor: '#80CAFF',
                  }}
                  dropDownStyle={{
                    backgroundColor: 'white',
                    opacity: 1,
                    width: DeviceWidth * 0.2,
                    height:180,
                    marginTop: 0,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: '#80CAFF',
                  }}
                  dropDownMaxHeight={250}
                  setValue={itemQuantityList[i]}

                  onChangeItem={(currentQuantity) => {
                    itemQuantityList[index] = currentQuantity.label;
                    itemYearlyCostList[index]= itemCostList[index] * frequency_values[itemFrequencyList[index]]*Quantity_values[itemQuantityList[index]]
                    itemYearlyLCostList[index] = itemCostLList[index] * frequency_values[itemFrequencyList[index]]*Quantity_values[itemQuantityList[index]]
                    updateYearlyCostTotal();
                    updateMixCostTotal();
                  }}
                  onOpen={() => {
                    // setComputed(false);
                    setSelectopen(true);
                    itemOpenList[index]=true;
                    setError({status: false, message: ''});
                  }}
                  onClose={() => {
                    setSelectopen(false);
                    itemOpenList[index]=false;
                  }}
                />

                {/* <Text style={{fontSize: 20, fontWeight: '400',marginLeft:10}}>{itemFrequencyList[i]}</Text> */}
                <DropDownPicker
                  defaultValue={itemFrequencyList[index]}
                  items={[
                    {label: 'D', value: 'per_day'},
                    {label: 'W', value: 'per_week'},
                    {label: 'M', value: 'per_month'},
                    {label: 'Y', value: 'per_year'},
                  ]}
                  placeholder="Select"
                  placeholderStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'lightgray',
                  }}
                  itemStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                  labelStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                  defaultNull
                  containerStyle={{
                    height: 50,
                    borderRadius: 20,
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: DeviceWidth * 0.2,
                    marginTop: 0,
                    marginLeft:10,
                    borderWidth: 2,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderColor: '#80CAFF',
                  }}
                  dropDownStyle={{
                    backgroundColor: 'white',
                    width: DeviceWidth * 0.2,
                    height: 180,
                    marginLeft:10,
                    marginTop: 0,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: '#80CAFF',
                  }}
                  dropDownMaxHeight={250}
                  onChangeItem={(currentFrequency) => {
                    itemFrequencyList[index]=currentFrequency.value;
                    itemYearlyCostList[index]= itemCostList[index] * frequency_values[itemFrequencyList[index]]*Quantity_values[itemQuantityList[index]]
                    itemYearlyLCostList[index] = itemCostLList[index] * frequency_values[itemFrequencyList[index]]*Quantity_values[itemQuantityList[index]]
                    updateYearlyCostTotal();
                  }}
                  onOpen={() => {
                    // setComputed(false);
                    setSelectopen(true);
                    setError({status: false, message: ''});
                    itemOpenList[index]=true;
                  }}
                  onClose={() => {
                    setSelectopen(false);
                    itemOpenList[index]=false;
                  }}
                />
                <View style={{flexDirection: 'row',position: 'absolute', right:0 }}>
                  {unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginTop:10}}>{numberWithCommas(itemCostList[i]*itemQuantityList[i])}</Text>)}
                  {!unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginTop:10}}>{numberWithCommas(itemCostLList[i]*itemQuantityList[i])}</Text>)}

                    <TouchableOpacity  onPress={() => deleteItemFromList(index)}>
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        marginLeft:15,
                        marginTop:10
                      }}
                      source={require('./../images/red_x.png')}/>
                    </TouchableOpacity>
                </View>

              </View>
              <View
                style={{
                  borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                  borderBottomWidth: 1,
                  marginTop: (sOpened&&itemOpenList[index]) ? 200 : 1,
                }}
              />
            </View>);
          })}
        </View>

        {showlist && (
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: '500',marginLeft:20, marginTop: 20, marginBottom: 20}}>Total</Text>
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#80CAFF',
                marginLeft:'3%',
                borderWidth: 2,
                marginTop: 10,
                marginBottom: 20,
                borderRadius: 10,
                width: 65,
                height: 44,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setUnit('G');
                  setUnitG(true);
                  analytics().logEvent('Use_GL_switch',{
                    switch_to: 'Gallons'
                  })
                }}>
                <Text
                  style={{
                    color: unit === 'G' ? '#00ADEF' : 'black',
                    paddingTop: 5,
                    fontSize: 20,
                    fontWeight: unit === 'G' ? 'bold' : 'normal',
                  }}>
                  G
                </Text>
              </TouchableOpacity>
              <Text style={{paddingTop: 5, fontSize: 20}}> / </Text>
              <TouchableOpacity
                onPress={() => {
                  setUnit('L');
                  setUnitG(false);
                  analytics().logEvent('Use_GL_switch',{
                    switch_to: 'Liters'
                  })
                }}>
                <Text
                  style={{
                    color: unit === 'L' ? '#00ADEF' : 'black',
                    paddingTop: 5,
                    fontSize: 20,
                    fontWeight: unit === 'L' ? 'bold' : 'normal',
                  }}>
                  L
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', position: 'absolute', right:0 }}>
              <Image
                style={{width: 30, height: 30, marginTop:15,marginBottom:20}}
                source={require('./../images/water_drop_150px_wide2.png')}
              />
              {unitG &&(<Text style={{fontSize: 20, fontWeight: '500', marginRight:20, marginTop:20,marginBottom:20}}>{numberWithCommas(mixCostTotal)} G</Text>)}
              {!unitG &&(<Text style={{fontSize: 20, fontWeight: '500', marginRight:20, marginTop:20,marginBottom:20}}>{numberWithCommas(mixCostLTotal)} L</Text>)}
            </View>
          </View>
        )}

        {showlist && (
          <View style={{
            marginLeft: '19%',
            marginRight: '19%',
            marginBottom: '10%',
            alignItems: 'center',
            justifyContent: 'center',}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: '600', alignItems: 'center'}}>Impact
                <TouchableOpacity
                  onPress={()=>{
                    setInfoVisible(true)
                    analytics().logEvent('Info_button_pressed',{
                      infoName: 'Virtual_Water'
                    })
                  }}>
                  <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
                </TouchableOpacity>
              </Text>
            </View>

            <DropDownPicker
              defaultValue='yearly'
              items={[
                {label: 'Daily', value: 'daily'},
                {label: 'Weekly', value: 'weekly'},
                {label: 'Monthly', value: 'monthly'},
                {label: 'Yearly', value: 'yearly'},
              ]}
              placeholder="Select"
              placeholderStyle={{
                textAlign: 'center',
                fontSize: 20,
                color: 'lightgray',
              }}
              itemStyle={{
                textAlign: 'center',
                fontSize: 20,
              }}
              labelStyle={{
                textAlign: 'center',
                fontSize: 20,
              }}
              defaultNull
              containerStyle={{
                height: 50,
                borderRadius: 20,
              }}
              style={{
                backgroundColor: 'white',
                width: DeviceWidth * 0.8,
                marginTop: 5,
                borderWidth: 2,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderColor: '#80CAFF',
              }}
              dropDownStyle={{
                backgroundColor: 'white',
                width: DeviceWidth * 0.8,
                height: 180,
                marginTop: 5,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderWidth: 2,
                borderColor: '#80CAFF',
              }}
              dropDownMaxHeight={250}
              onChangeItem={(currentUnit) => {
                setImpactUnit(currentUnit.value)
              }}
              onOpen={() => {
                // setComputed(false);
                setError({status: false, message: ''});
                setOutputOpened(true)
              }}
              onClose={() => {
                setOutputOpened(false)
              }}
            />

              <View style={{flexDirection: 'row', justifyContent: 'center', width: DeviceWidth}}>
              <Image
                  style={{width: 30, height: 30, marginTop: sOutputOpened ? 205 : 25}}
                source={require('./../images/water_drop_150px_wide2.png')}
              />
                {unitG && (impactUnit==='daily') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas((~~(yearlyCostTotal/365)))} Gal</Text>)}
                {unitG && (impactUnit==='weekly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(~~(yearlyCostTotal/365)*7)} Gal</Text>)}
                {unitG && (impactUnit==='monthly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(~~(yearlyCostTotal/12))} Gal</Text>)}
                {unitG && (impactUnit==='yearly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(yearlyCostTotal)} Gal</Text>)}
                {!unitG && (impactUnit==='daily') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas((~~(yearlyCostLTotal/365)))} L</Text>)}
                {!unitG && (impactUnit==='weekly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(~~(yearlyCostLTotal/365)*7)} L</Text>)}
                {!unitG && (impactUnit==='monthly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(~~(yearlyCostLTotal/12))} L</Text>)}
                {!unitG && (impactUnit==='yearly') && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20}}>{numberWithCommas(yearlyCostLTotal)} L</Text>)}
            </View>
              <CalculateContainer impactUnit={impactUnit} yearlyCostTotal={yearlyCostTotal}/>

          </View>
        )}

        </ViewShot>

        {showlist &&(
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '10%',
            marginHorizontal: '4%',
          }}>
            <TouchableOpacity
              onPress={() => {setShowlist(false);
                clearElements();
              }}
              style={{
                width: 200,
                padding: 15,
                borderRadius: 30,
                backgroundColor: 'orange',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                    alignItems: 'center',
                  }}>
                  Clear Total
                </Text>
              </View>
            </TouchableOpacity>
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
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                    alignItems: 'center',
                  }}>
                  Export
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}{/*{showlist &&(
          <TouchableOpacity
            onPress={() => {
              setContext(true)
              setModalVisible(true)
              Analytics.logEvent('Context_pressed')
            }}
            style={{
              width: 150,
              padding: 15,
              marginTop: '-5%',
              marginBottom: '5%',
              borderRadius: 30,
              backgroundColor: '#404040',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                  alignItems: 'center',
                }}>
                Context
              </Text>
            </View>
          </TouchableOpacity>
        )}*/}


      </View>

      {/* Info button modal */}
      <CalculatorInfoModal infoVisible={calculatorInfoVisible} handler={closeCalculatorInfoModal}/>
      <VirtualWaterInfoModal infoVisible={infoVisible} handler={closeInfoModal}/>

      {/*Running total list Export modal*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShareVisible}
      >
        {modalShareVisible && <ReactNavigationOverlay/>}
        <BlurView
          intensity={90}
          tint="light"
          style={{
            flex: 1
          }}
        >
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
                    width: Dimensions.get('screen').width * 0.9,
                  }}
                  imageStyle={{
                    position: 'absolute',
                    top: headerHeight + 50,
                    left: '47%',
                    height: watermarkHeight,
                    width: Dimensions.get('screen').width * 0.3,
                    zIndex: 1
                  }}
                  source={watermark}>
                  <Image
                    source={{uri: headerImage}}
                    style={{
                      height: headerHeight,
                      width: Dimensions.get('screen').width * 0.9,
                    }}/>
                  <Image
                    source={{uri: listPhoto}}
                    style={{
                      height: listHeight,
                      width: Dimensions.get('screen').width * 0.9,
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
              onPress: ()=>{
                setModalShareVisible(!modalShareVisible)
              },
              color: 'black'
            }}
            bottomMargin={40}
            // hideBackgroundOverlay
            // withoutAnimation
          />
          <View style={{
            width: Dimensions.get('screen').width * 0.8,
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
                  )
                  analytics().logEvent('Share_Running_Total_List')
                }}
              />
              <Button
                label={"Save to Photo"}
                backgroundColor={"#70BF41"}
                enableShadow={true}
                onPress={()=>{
                  MediaLibrary.saveToLibraryAsync(sharePhoto).then(() => {
                    setModalShareVisible(!modalShareVisible)
                    saveSuccessful()
                    analytics().logEvent('Save_Running_Total_List')
                  })
                }}
              />
            </View>
          </View>
        </BlurView>
      </Modal>

    </ScrollView>
  );
}

const CalculateStack = createStackNavigator();

export const CalculateStackScreen = () => (
  <CalculateStack.Navigator>
    <CalculateStack.Screen
      name="Calculator"
      component={CalculateScreen}
      options={{headerShown: false}}
    />
  </CalculateStack.Navigator>
);
