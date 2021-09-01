import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from '../Comparing/Styles';
import Profiles from '../ImageDB.js';
import firebase from 'firebase';
import {CalculateTotal} from './CalculateTotal';
import RNPicker from 'rn-modal-picker';

const DeviceWidth = Dimensions.get('window').width;

const frequency_values = {
  once_day: 365,
  once_week: 52,
  two_week: 2 * 52,
  three_week: 3 * 52,
  four_week: 4 * 52,
  five_week: 5 * 52,
  once_month: 1 * 12,
};

let fetchedData = {};

function CalculateScreen() {
  let itemsList = [];

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

  const [frequency, setFrequency] = useState('');
  const [item, setItem] = useState('');
  const [computed, setComputed] = useState(false);
  const [context, setContext] = useState(false);
  const [selectOpened, setSelect] = useState(false);
  const [individual_total, setIndividualTotal] = useState();
  const [error, setError] = useState({status: false, message: ''});
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [unit, setUnit] = useState('G');

  const waterParameter = (id) => {
    if (unit === 'L') {
      if (id === 'EDI') {
        return 'Single item   L';
      } else {
        return 'Global Liters p kg';
      }
    } else if (unit === 'G') {
      if (id === 'EDI') {
        return 'Single item   Gal';
      } else {
        return 'Global Gallon p lb';
      }
    }
  };

  const fetchList = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase
      .database()
      .ref('/')
      .once('value', (data) => {
        fetchedData = data.val();

        for (let item in fetchedData) {
          itemsList.push({
            name: item,
          });
        }
      });
  };

  fetchList();

  const fetchData = (item) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase
      .database()
      .ref('/')
      .once('value', (data) => {
        fetchedData = data.val();

        for (let item in fetchedData) {
          itemsList.push({
            name: item,
          });
        }

        if (item in fetchedData) {
          id = fetchedData[item]['Category'];
        }

        if (!(item in fetchedData)) {
          setError({status: true, message: 'This item does not exist'});
        } else if (!fetchedData[item][waterParameter(id)]) {
          setError({
            status: true,
            message: 'Water unit does not exist. Try the compare tool.',
          });
        } else if (
          item in fetchedData &&
          fetchedData[item][waterParameter(id)]
        ) {
          setIndividualTotal(fetchedData[item][waterParameter(id)]);
          setError({status: false, message: ''});
          setComputed(true);
        }
      });
  };

  const calculate = (item, frequency) => {
    if (!item) {
      setError({status: true, message: 'Please select an item'});
    } else if (!frequency) {
      setError({status: true, message: 'Please select a frequency'});
    } else {
      fetchData(item, frequency);
    }
  };

  const clearElements = () => {
    setComputed(false);
    setInputValue('');
    setItem('');
    setIndividualTotal(null);
    DropDownPicker.value = null;
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
              setUnit('G');
              if (individual_total) {
                setIndividualTotal(
                  fetchedData[item][
                    id === 'EDI' ? 'Single item   Gal' : 'Global Gallon p lb'
                  ],
                );
              } else {
                calculate(item, frequency);
              }
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
              if (individual_total) {
                setIndividualTotal(
                  fetchedData[item][
                    id === 'EDI' ? 'Single item   L' : 'Global Liters p kg'
                  ],
                );
              } else {
                calculate(item, frequency);
              }
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
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: '21%',
              paddingTop: 30,
              paddingLeft: 50,
              paddingRight: 10,
              paddingBottom: 10,
            }}>
            Calculator
          </Text>
        </View>
      </View>
      <View style={styles.rankingPage}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginLeft: DeviceWidth * 0.38,
            marginTop: 20,
            marginBottom: 30,
          }}
          source={
            computed && Profiles[item] ? Profiles[item] : Profiles.calculator
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
                dataSource={itemsList}
                dummyDataSource={itemsList}
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
          <Text style={{fontSize: 25, marginTop: 30, fontWeight: '500'}}>
            Buy / Use / Eat
          </Text>
          <DropDownPicker
            items={[
              {label: 'Once a Day', value: 'once_day'},
              {label: 'Once a week', value: 'once_week'},
              {label: '2 x a week', value: 'two_week'},
              {label: '3 x a week', value: 'three_week'},
              {label: '4 x a week', value: 'four_week'},
              {label: '5 x a week', value: 'five_week'},
              {label: 'Once a Month', value: 'once_month'},
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
              height: 60,
              borderRadius: 20,
            }}
            style={{
              backgroundColor: 'white',
              width: DeviceWidth * 0.9,
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
              width: DeviceWidth * 0.9,
              marginTop: 10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderWidth: 2,
              borderColor: '#80CAFF',
            }}
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

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
              {!context && (
            <View style={styles.modalView}>
              <Text style={{textAlign: 'center', marginTop: 30}}>
                Challenges specific to the item
              </Text>
              <Text style={{marginBottom: 15, textAlign: 'center'}}>
                to appear in the future.
              </Text>
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#70BF41'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
              </TouchableHighlight>
            </View>
            )}
            {context && (
              <ScrollView style={{backgroundColor: 'white'}}>
              <View style={{
                margin: '3%',
                paddingHorizontal: '3%',
                marginTop: '8%',
                paddingBottom: '5%',
                backgroundColor: 'white',
                borderRadius: 20,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
              <Text style={{textAlign: 'center', marginTop: 30}}>
                Each person on average in the US{'\n'}
                uses about 1,800 gallons (6,820 Liters) of virtual water per day.
              </Text>
              <Text style={{marginBottom: 15, textAlign: 'center'}}>
                Or over 657,000 gallons (2.48M Liters) per year.
              </Text>
          <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
              <Text style={{fontSize: 20, marginRight: '12%', color: 'black',}}>
              {' '}80 gal.{'\n'}(302 L.)
            </Text>
            <Image
              source={require('./../images2/80Gal.jpeg')}
              style={{width: 150, height: 150, marginTop: 2}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
              <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
              2,000 gal.{'\n'}(7,570 L.)
            </Text>
            <Image
              source={require('./../images2/2000Gal.jpeg')}
              style={{width: 160, height: 160, marginTop: 2}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
              <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
              12,000 gal.{'\n'}(45,425 L.)
            </Text>
            <Image
              source={require('./../images2/12000Gal.jpeg')}
              style={{width: 180, height: 180, marginTop: 2}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
             <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
              100,000 gal.{'\n'}(378,541 L.)
            </Text>
            <Image
              source={require('./../images2/100000Gal.jpeg')}
              style={{width: 175, height: 175, marginTop: 2}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
              <Text style={{fontSize: 20, marginRight: '10%', marginLeft: '-2%', color: 'black',}}>
              660,000 gal.{'\n'}{'  '}(2.5 mil L.){'\n'}Olympic Pool
            </Text>
            <Image
              source={require('./../images2/660000Gal.jpeg')}
              style={{width: 160, height: 160, marginTop: 2}}
              resizeMode="contain"
            />
          </View>
        </View>
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#70BF41'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
              </TouchableHighlight>
            </View>
            </ScrollView>
            )}
          </View>
        </Modal>

        {computed && (
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
            <CalculateTotal
              value={individual_total}
              unit={unit}
              id={id}
              type="individual"
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'black',
                marginTop: 30,
              }}>
              Yearly Total
            </Text>
            <CalculateTotal
              value={individual_total * frequency_values[frequency]}
              unit={unit}
              id={id}
              type="yearly"
            />
          </View>
        )}

        {error.status && Alert.alert(error.message)}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: selectOpened ? 160 : 20,
            marginBottom: 20,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                computed ? clearElements() : calculate(item, frequency);
              }}
              style={{
                padding: 15,
                borderRadius: 30,
                backgroundColor: computed ? 'orange' : '#70BF41',
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
                  {computed ? 'Clear' : 'Calculate'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {computed && (
            <View>
              <TouchableOpacity
                onPress={() => {setContext(false), 
                  setModalVisible(true);
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
        </View>
        {computed && (
            <View>
              <TouchableOpacity
                onPress={() => {setContext(true), 
                  setModalVisible(true);
                }}
                style={{
                  padding: 15,
                  borderRadius: 30,
                  marginLeft: '19%',
                  marginRight: '19%',
                  marginBottom: '10%',
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
                    Context
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        )}
      </View>
    </ScrollView>
  );
}

const CalculateStack = createStackNavigator();

export const CalculateStackScreen = () => (
  <CalculateStack.Navigator>
    <CalculateStack.Screen
      name="Ranking"
      component={CalculateScreen}
      options={{headerShown: false}}
    />
  </CalculateStack.Navigator>
);
