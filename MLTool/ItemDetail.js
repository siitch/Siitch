import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Hyperlink from 'react-native-hyperlink';
import { Card } from 'react-native-ui-lib';
import firebase from "firebase";
import React, {useEffect, useState} from "react";
import ResultImage from "./ResultImage";
import Profiles from '../ImageDB.js';
import itemDetailImages from "./ItemDetailImages/itemDetailImages";
import DropDownPicker from "react-native-dropdown-picker";
import {SimpleCalculator} from "./SimpleCalculator";
import analytics from '@react-native-firebase/analytics';
import SpecialItem from "./SpecialItem";
import {openSourceLink} from "../util/common";
import {ContextAndChallengeModal, DetailPageInfoModal, DetailPageWaterCardModal} from "../components/Modals/Modals";

export default function ItemDetail({ route, navigation }) {
  // Get item name passed from other screen
  const { itemName } = route.params;
  const { localQuantity } = route.params;
  // Item data fetched from the database, only used to show the raw data for debug and UI design, can be removed later
  const [ item, setItem ] = useState({});

  // Global info
  // Item category
  const [category, setCategory] = useState('');
  // Global unit, G or L
  const [globalUnit, setGlobalUnit] = useState('G');
  // Gallons
  const [gallons, setGallons] = useState('');
  // Liters
  const [liters, setLiters] = useState('');
  // The water number displayed, Gallons or Liters
  const [displayWater, setDisplayWater] = useState(gallons);
  // Challenge Modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  function closeContextChallengeModal() {
    setModalVisible(false)
  }
  // Rain/Irrigation/Cleaning context Modal visibility
  const [waterCardModalVisible, setWaterCardModalVisible] = useState(false);
  const [waterType, setWaterType] = useState('');
  function closeWaterCardModal() {
    setWaterCardModalVisible(false)
  }
  // Info button Modal visibility
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoShown, setInfoShown] = useState('');
  function closeInfoModal() {
    setInfoVisible(false)
  }
  // Number formatting util function
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // First section - G/L button, item image, item name, a number, a unit
  const [metricToDisplay, setMetricToDisplay] = useState(metricToDisplay)
  const [metricToDisplayG, setMetricToDisplayG] = useState(null)
  const [metricToDisplayL, setMetricToDisplayL] = useState(null)
  const [measurementG, setMeasurementG] = useState(null)
  const [measurementL, setMeasurementL] = useState(null)
  const [measurement, setMeasurement] = useState(measurementG);
  const [color, setColor] = useState()

  // Second section - Rain / Irrigation / Cleaning
  // Gallons
  const [rain, setRain] = useState('');
  const [irrigation, setIrrigation] = useState('');
  const [cleaning, setCleaning] = useState('');
  // Liters
  const [rainKg, setRainKg] = useState('');
  const [irrigationKg, setIrrigationKg] = useState('');
  const [cleaningKg, setCleaningKg] = useState('');

  // Third section - To make 1 [unit]:
  const [individualUnitG, setIndividualUnitG] = useState('')
  const [individualUnitL, setIndividualUnitL] = useState('')
  const [individualUnit, setIndividualUnit] = useState(individualUnitG)

  // Fourth section - Time to decompose:
  const [timetodecompose, setTimetodecompose] = useState('')
  const [decomposetime, setDecomposetime] = useState('')

  // Fifth section - Compostable?
  const [compostable, setCompostable] = useState('')
  const [compostableCheck, setCompostableCheck] = useState(false);
  const [compostableCross, setCompostableCross] = useState(false);

  // Sixth section - Recyclable?
  const [recyclable, setRecyclable] = useState('');
  const [recyclableCheck, setRecyclableCheck] = useState(false);
  const [recyclableCross, setRecyclableCross] = useState(false);

  // Seventh section - Simple calculator leveraged from Lingchen's code
  const DeviceWidth = Dimensions.get('window').width;
  let itemQuantity;
  let itemFrequency;
  const [quantity, setQuantity] = useState(localQuantity === undefined ? null: localQuantity.toString());
  const [frequency, setFrequency] = useState(null);
  const [selectOpened, setSelect] = useState(false);
  const [computed, setComputed] = useState(false);
  const [error, setError] = useState({status: false, message: ''});
  const [individual_total, setIndividualTotal] = useState(null);
  const [showContext, setShowContext] = useState(false);
  const [calculatorHeight, setCalculatorHeight] = useState(510);
  const waterParameter = (category) => {
    if (globalUnit === 'L') {
      if (category === 'EDI') {
        return 'Single item   L';
      } else {
        return 'Global Liters p kg';
      }
    } else if (globalUnit === 'G') {
      if (category === 'EDI') {
        return 'Single item   Gal';
      } else {
        return 'Global Gallon p lb';
      }
    }
  };
  const frequency_values = {
    per_day: 365,
    per_week: 52,
    per_month: 12,
    per_year: 1,
  };
  const quantity_values ={
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

  // Need config again because user can visit this screen without visiting Catalogue.js
  // However, when we finish our development, we can remove all the scattered connection init and only do it once
  // when user opens the app
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
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  useEffect(() => {
    readData(itemName)
    compute()
    changeMetric()
    checkCompostable()
    checkRecyclable()
    changeColor()
  }, [globalUnit, gallons, individualUnitG, metricToDisplay, timetodecompose, recyclable, quantity, frequency]);

  useEffect(() => {
    async function logItemName(){
      await analytics().logEvent('ViewItem', {
        ItemName: itemName
      });
    }
    // Log the current item name to firebase
    logItemName()
  },[]);

  // When the global metric changes, do corresponding changes
  const changeMetric = ()=>{
    if (globalUnit === 'G'){
      setDisplayWater(gallons)
      if(metricToDisplay !== 'years'){
        setMetricToDisplay('gallons')
      }
      setMeasurement(measurementG)
      setIndividualUnit(individualUnitG)
      setMetricToDisplay(metricToDisplayG)
    } else {
      setDisplayWater(liters)
      if(metricToDisplay !== 'years'){
        setMetricToDisplay('liters')
      }
      setMeasurement(measurementL)
      setIndividualUnit(individualUnitL)
      setMetricToDisplay(metricToDisplayL)
    }
  }

  // Used to change the color of the text to RED when the metric is years
  const changeColor = ()=>{
    if(metricToDisplay !== 'gallons' && metricToDisplay !== 'liters'){
      setColor('#f32133')
    } else {
      setColor('#00ADEF')
    }
  }

  // Check compostable
  const checkCompostable = ()=>{
    if(compostable !== ''){
      const firstWord = compostable.split(' ')[0]
      if(firstWord === 'No' || firstWord === 'No.'){
        setCompostableCross(true)
      } else if (firstWord === 'Yes' || firstWord === 'Yes.') {
        setCompostableCheck(true)
      }
    }
  }

  // Check recyclable
  const checkRecyclable = ()=>{
    if(recyclable !== ''){
      const firstWord = recyclable.split(' ')[0]
      if (firstWord === 'No' || firstWord === 'No.'){
        setRecyclableCross(true)
      } else if (firstWord === 'Yes' || firstWord === 'Yes.'){
        setRecyclableCheck(true)
      }
    }
  }

  // Used to change the dimension of the calculator area, as well as show the results and buttons
  const compute = ()=>{
    if(quantity && frequency){
      setComputed(true)
    }
  }

  const readData = itemName => {
    firebase
      .database()
      .ref(itemName)
      .on('value', function(get) {
          if(get.val() === null && itemName !== 'Makeup'){
            alert('No info for ' + itemName + ' now')
            console.log('No info for this item');
          } else {
            const itemObj = get.val()
            // Global
            setItem(itemObj)
            setCategory(itemObj['Category'])
            setGallons(itemObj[category === 'EDI' ? 'Single item   Gal' : 'Global Gallon p lb'])
            setLiters(itemObj[category === 'EDI' ? 'Single item   L' : 'Global Liters p kg'])

            // First section
            setMetricToDisplayG(itemObj['Metric to display'])
            setMetricToDisplayL(itemObj['Metric to display L'])
            setMeasurementG(itemObj['Measurement1'])
            setMeasurementL(itemObj['Measurement L'])

            // Second section
            setRain(itemObj['Global Imperial Green Gal p lb'])
            setIrrigation(itemObj['Global Imperial Blue Gal p lb'])
            setCleaning(itemObj['Global Imperial Gray Gal p lb'])

            setRainKg(itemObj['Global Green L p kg'])
            setIrrigationKg(itemObj['Global Blue L p kg'])
            setCleaningKg(itemObj['Global Gray L p kg'])

            // Third section
            setIndividualUnitG(itemObj['Individiual Unit Gal'])
            setIndividualUnitL(itemObj['Individiual Unit L'])

            // Fourth section
            setTimetodecompose(itemObj['Time to decompose'])
            setDecomposetime(itemObj['Decomposition Time'])

            // Fifth section
            setCompostable(itemObj['Compostable'])

            // Sixth section
            setRecyclable(itemObj['Recycle'])

            // Seventh section
            setIndividualTotal(itemObj[waterParameter(itemObj['Category'])]);

          }
        }
      );
  };

  return(
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        {/* First section */}
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            flexDirection: 'row',
            marginTop: '5%',
            marginLeft: 20,
            borderColor: '#00ADEF',
            borderWidth: 2,
            borderRadius: 10,
            width: 65,
            height: 26,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setGlobalUnit('G');
              analytics().logEvent('Use_GL_switch',{
                switch_to: 'Gallons'
              })
            }}>
            <Text
              style={{
                color: globalUnit === 'G' ? '#00ADEF' : 'black',
                paddingTop: 5,
                fontSize: 20,
                fontWeight: globalUnit === 'G' ? 'bold' : 'normal',
              }}>
              G
            </Text>
          </TouchableOpacity>
          <Text style={{paddingTop: 5, fontSize: 20}}> / </Text>
          <TouchableOpacity
            onPress={() => {
              setGlobalUnit('L');
              analytics().logEvent('Use_GL_switch',{
                switch_to: 'Liters'
              })
            }}>
            <Text
              style={{
                color: globalUnit === 'L' ? '#00ADEF' : 'black',
                paddingTop: 5,
                fontSize: 20,
                fontWeight: globalUnit === 'L' ? 'bold' : 'normal',
              }}>
              L
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center',marginTop: 25 , marginBottom: 12}}>
          <Image source={ResultImage[itemName]} style={{width: 220, height: 220}} />
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{itemName}</Text>
          <View style={{
            flexDirection: 'row',
          }}>
            {(metricToDisplay === 'gallons' || metricToDisplay === 'liters') && (
              <Image source={Profiles.water} style={{width: 28, height: 28}}/>
            )}
            {!(metricToDisplay === 'gallons' || metricToDisplay === 'liters') && (
              <Image source={Profiles.clock} style={{width: 28, height: 28}}/>
            )}
            <Text style={{
              textAlign: 'center',
              fontSize:25,
              fontWeight:'bold',
              color: color
            }}>{displayWater !== ''?numberWithCommas(displayWater):timetodecompose} {metricToDisplay}</Text>
          </View>
          <Text>{measurement}</Text>
        </View>

        {/* Second section */}
        {(rain !== '' || irrigation !== '' || cleaning !== '') && (
          <View>
            <Text style={{
              alignSelf: 'center',
              marginTop: 5,
              fontSize: 17,
              fontWeight: '500'
            }}>Water Breakdown</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 4,
              marginLeft: 7,
              marginRight: 7,
              marginBottom: 7,
              padding: 5,
              height: 90
            }}>
              <Card
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 6,
                  backgroundColor: '#70BF41',
                  shadowColor: 'black',
                  flex: 1
                }}
                borderRadius={17}
                flex
                onPress={()=>{
                  console.log('rain pressed')
                  analytics().logEvent('Water_Card_pressed',{
                    cardName: 'Rain'
                  })
                  setWaterCardModalVisible(true)
                  setWaterType('Rain')}}
              >
                <Text style={{color:'white'}}>Rain</Text>
                <Text style={{color:'white'}}>{globalUnit === 'G' ? numberWithCommas(rain) : numberWithCommas(rainKg)} {globalUnit === 'G' ?
                  individualUnitG.split(' ')[0] : individualUnitL.split(' ')[0]}</Text>
              </Card>

              <Card
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 6,
                  backgroundColor: '#00ADEF',
                  shadowColor: 'black',
                  flex: 1
                }}
                borderRadius={17}
                flex
                onPress={()=>{
                  console.log('irrigation pressed')
                  analytics().logEvent('Water_Card_pressed',{
                    cardName: 'Irrigation'
                  })
                  setWaterCardModalVisible(true)
                  setWaterType('Irrigation')}}
              >
                <Text style={{color:'white'}}>Irrigation</Text>
                <Text style={{color:'white'}}>{globalUnit === 'G' ? numberWithCommas(irrigation) : numberWithCommas(irrigationKg)} {globalUnit === 'G' ?
                  individualUnitG.split(' ')[0] : individualUnitL.split(' ')[0]}</Text>
              </Card>

              <Card
                containerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 6,
                  backgroundColor: '#C2C2C2',
                  shadowColor: 'black',
                  flex: 1
                }}
                borderRadius={17}
                flex
                onPress={()=>{
                  console.log('card pressed')
                  analytics().logEvent('Water_Card_pressed',{
                    cardName: 'Cleaning'
                  })
                  setWaterCardModalVisible(true)
                  setWaterType('Cleaning')}}
              >
                <Text style={{color:'white'}}>Cleaning</Text>
                { cleaning !== '' && (
                  <Text style={{color:'white'}}>{globalUnit === 'G' ? numberWithCommas(cleaning) : numberWithCommas(cleaningKg)} {globalUnit === 'G' ?
                    individualUnitG.split(' ')[0] : individualUnitL.split(' ')[0]}</Text>)}
              </Card>
            </View>

          </View>
        )}

        {/* Divider attached to three cards*/}
        <View
          style={{
            borderBottomColor: 'rgba(0,0,0,0.25)',
            borderBottomWidth: 1,
          }}
        />

        {/* To make 1 */}
        {individualUnit !== '' && (
          <View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source={itemDetailImages.earth} style={{width: 28, height: 28}}/>
                <Text style={{
                  fontSize: 17,
                  fontWeight: '500',
                  marginLeft: 5}}>
                  To make 1 {individualUnit !== '' ? individualUnit.split('/')[1] : itemName}{/* {itemName}*/}
                </Text>
                <Text>

                </Text>
              </View>

              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source={Profiles.water} style={{width: 20, height: 20}}/>
                <Text style={{
                  textAlign: 'center',
                  fontSize:20,
                  fontWeight:'bold',
                  color: '#00ADEF'
                }}>{displayWater !== null ?
                  numberWithCommas(displayWater) : null} {globalUnit === 'G' ?
                  individualUnitG.split(' ')[0] : individualUnitL.split(' ')[0]}
                </Text>
              </View>
            </View>
            {/* Divider */}
            <View
              style={{
                borderBottomColor: 'rgba(0,0,0,0.25)',
                borderBottomWidth: 1,
              }}
            />
          </View>
        )}

        {/* Time to decompose*/}
        <View style={{margin: 10}}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Image source={itemDetailImages.decompose} style={{width: 28, height: 28}}/>
              <Text style={{
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 5}}>
                Time to Decompose
              </Text>
              <TouchableOpacity
                onPress={()=>{
                  setInfoVisible(true)
                  setInfoShown('Decompose')
                  analytics().logEvent('Info_button_pressed',{
                    infoName: 'Time to Decompose'
                  })
                }}>
                <Image source={itemDetailImages.info} style={{width: 25, height: 25}}/>
              </TouchableOpacity>
            </View>
          </View>
          {/*{timetodecompose !== '' && (
                            <Text style={{marginLeft: 15, marginBottom: 15}}>
                                {timetodecompose}
                            </Text>
                        )}*/}
          {decomposetime !== '' && (
            <Text style={{marginTop: 10, marginLeft: 5, marginBottom: 5}}>
              {decomposetime}
            </Text>
          )}
        </View>


        {/* Divider */}
        <View
          style={{
            borderBottomColor: 'rgba(0,0,0,0.25)',
            borderBottomWidth: 1,
          }}
        />

        {/* Compostable? */}
        <View style={{margin: 10}}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Image source={itemDetailImages.compostable} style={{width: 28, height: 28}}/>
              <Text style={{
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 5}}>
                Compostable?
              </Text>
              <TouchableOpacity
                onPress={()=>{
                  setInfoVisible(true)
                  setInfoShown('Compostable')
                  analytics().logEvent('Info_button_pressed',{
                    infoName: 'Compostable?'
                  })
                }}>
                <Image source={itemDetailImages.info} style={{width: 25, height: 25}}/>
              </TouchableOpacity>
            </View>
            {compostableCheck && (
              <Image source={itemDetailImages.greenCheck} style={{width: 33, height: 33}}/>
            )}
            {compostableCross && (
              <Image source={itemDetailImages.redCross} style={{width: 30, height: 30}}/>
            )}
          </View>
          {!(compostable === 'Yes' || compostable === 'No') && compostable !== '' && (
            <Hyperlink
              linkStyle={ { color: '#00ADEF' } }
              onPress={(url =>
                  openSourceLink(url, {name: url, url: url})
              )}>
              <Text style={{marginTop: 10, marginLeft: 5, marginBottom: 5}}>
                {compostable}
              </Text>
            </Hyperlink>
          )}
        </View>

        {/* Divider */}
        <View
          style={{
            borderBottomColor: 'rgba(0,0,0,0.25)',
            borderBottomWidth: 1,
          }}
        />

        {/* Recyclable? */}
        <View style={{margin: 10}}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Image source={itemDetailImages.recyclable} style={{width: 28, height: 28}}/>
              <Text style={{
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 5}}>
                Recyclable?
              </Text>
              <TouchableOpacity
                onPress={()=>{
                  setInfoVisible(true)
                  setInfoShown('Recyclable')
                  analytics().logEvent('Info_button_pressed',{
                    infoName: 'Recyclable?'
                  })
                }}>
                <Image source={itemDetailImages.info} style={{width: 25, height: 25}}/>
              </TouchableOpacity>
            </View>
            {recyclableCheck && (
              <Image source={itemDetailImages.greenCheck} style={{width: 33, height: 33}}/>
            )}
            {recyclableCross && (
              <Image source={itemDetailImages.redCross} style={{width: 30, height: 30}}/>
            )}
          </View>
          {!(recyclable === 'Yes' || recyclable === 'No') && recyclable !== '' && (
            <Hyperlink
              linkStyle={ { color: '#00ADEF' } }
              onPress={(url =>
                  openSourceLink(url, {name: url, url: url})
              )}
            >
              <Text style={{marginTop: 10, marginLeft: 5, marginBottom: 5}}>
                {recyclable}
              </Text>
            </Hyperlink>
          )}

        </View>


      </View>

      {/* Divider */}
      <View
        style={{
          borderBottomColor: 'rgba(0,0,0,0.25)',
          borderBottomWidth: 1,
        }}
      />

      {itemName === 'Oranges' && (
        <SpecialItem navigation={navigation} globalUnit={globalUnit}/>
      )}

      {/* Simple calculator */}
      {metricToDisplay !== null && (metricToDisplay === 'gallons' || metricToDisplay === 'liters') && (
        <View style={{
          height: calculatorHeight,
          marginBottom: 20
        }}>
          <View style={{
            alignItems: 'center',
            zIndex: 10
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: DeviceWidth * 0.9,
            }}>
              <View style={{
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 25,
                  marginTop: 30,
                  fontWeight: '500',
                }}>
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
                    height: 180,
                    marginTop: 10,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: '#80CAFF',
                  }}
                  dropDownMaxHeight={250}
                  onChangeItem={(currentQuantity) => {
                    //setComputed(false);
                    itemQuantity=currentQuantity.label;
                    setQuantity(currentQuantity.value);
                  }}
                  onOpen={() => {
                    //setComputed(false);
                    setSelect(true);
                    setError({status: false, message: ''});
                  }}
                  onClose={() => {
                    setSelect(false);
                  }}
                />
              </View>
              <View style={{
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 25,
                  marginTop: 30,
                  fontWeight: '500',
                }}>
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
                    width: DeviceWidth * 0.45,
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
                    width: DeviceWidth * 0.45,
                    height: 180,
                    marginTop: 10,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: '#80CAFF',
                  }}
                  dropDownMaxHeight={250}
                  onChangeItem={(currentFrequency) => {
                    //setComputed(false);
                    itemFrequency=currentFrequency.value;
                    setFrequency(currentFrequency.value);
                  }}
                  onOpen={() => {
                    //setComputed(false);
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
          {/* Computation result and buttons */}
          <View style={{
            backgroundColor: 'white',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'black',
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
                fontWeight: '500',
                color: 'black',
                marginTop: 30,
              }}>
              Yearly Total
            </Text>
            {individual_total !== null && (
              <SimpleCalculator
                value={individual_total * frequency_values[frequency] * quantity_values[quantity]}
                unit={globalUnit}
                id={category}
                individualUnit={individualUnit}
                type="yearly"
              />
            )}
          </View>
          {computed && (
            <View style={{
              alignItems: 'center',
              alignSelf: 'center',
            }}>
              <TouchableOpacity
                onPress={() => {
                  setComputed(false)
                  setQuantity(null)
                  setFrequency(null)
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  width: DeviceWidth * 0.4,
                  backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      width: DeviceWidth * 0.4,
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'white',
                      alignItems: 'center',
                    }}>
                    Clear
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setShowContext(true)
                      setModalVisible(true)
                      analytics().logEvent('Context_pressed')
                    }}
                    style={{
                      padding: 15,
                      borderRadius: 30,
                      width: DeviceWidth * 0.4,
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
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setShowContext(false)
                      setModalVisible(true)
                      analytics().logEvent('Challenge_pressed')
                    }}
                    style={{
                      padding: 15,
                      borderRadius: 30,
                      width: DeviceWidth * 0.4,
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
              </View>
            </View>
          )}
        </View>
      )}

      {/* Pop up window of 'Context' and 'Challenge' */}
      <ContextAndChallengeModal
        modalVisible={modalVisible}
        showContext={showContext}
        handler={closeContextChallengeModal}/>

      {/* Rain/Irrigation/Cleaning context modal */}
      <DetailPageWaterCardModal
        waterCardModalVisible={waterCardModalVisible}
        waterType={waterType}
        handler={closeWaterCardModal}
        navigation={navigation}/>

      {/* Info button modal */}
      <DetailPageInfoModal
        infoVisible={infoVisible}
        infoShown={infoShown}
        handler={closeInfoModal}/>

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
  )
}
