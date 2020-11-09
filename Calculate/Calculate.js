import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, ScrollView, Image, Dimensions, TextInput, TouchableHighlight, Modal, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../Ranking/Styles';
import Profiles from '../ImageDB.js';
import firebase from 'firebase';

const DeviceWidth = Dimensions.get('window').width;

const frequency_values = {
  once_day: 7,
  once_week: 1,
  two_week: 2,
  three_week: 3,
  four_week: 4,
  five_week: 5,
  once_month: 0.25
}

function CalculateScreen() {

  const waterParameter = "Global Gallon p lb";

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
  const [selectOpened, setSelect] = useState(false);
  const [individual_total, setIndividualTotal] = useState();
  const [error, setError] = useState({ status: false, message: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("")

  const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const fetchData = (item) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    firebase
    .database()
    .ref('/')
    .once('value', data => { 
        fetchedData = data.val();

        if(item in fetchedData && fetchedData[item][waterParameter]) {
          setIndividualTotal(fetchedData[item][waterParameter]); 
          setError({ status: false, message: '' });
          setComputed(true);
        }
        else {
          setError({ status: true, message: 'This item does not exist' });
        }
    });
  }

  const calculate = (item, frequency) => {
    if(!item) {
      setError({ status: true, message: 'Please select an item' })
    }
    else if(!frequency) {
      setError({ status: true, message: 'Please select a frequency' })
    }
    else {
      fetchData(item, frequency);
    }
  }

  const clearElements = () => {
    setComputed(false);
    setInputValue("");
    setItem("");
    DropDownPicker.value = null;
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
    <View style={styles.rankingPage}>
      <View style={{alignItems: 'center', marginTop: '15%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
              Calculator
          </Text>
      </View>
      <Image
        style={{width: 100, height: 100 , marginLeft: DeviceWidth*0.38, marginTop: 20, marginBottom: 30}}
        source={ computed && Profiles[item] ? Profiles[item] : Profiles.calculator }
        resizeMode= 'contain'
      />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: '500'}}>
          Select Item
        </Text>
        <TextInput 
          style={{ 
            borderColor: '#80CAFF',
            marginTop: 10,
            height: 50,
            borderWidth: 2,
            borderRadius: 20, 
            width: DeviceWidth*0.9,
            textAlign: 'center',
            fontSize: 20
          }} 
          value={inputValue}
          placeholder="Search"
          onChangeText={currentItem => { setInputValue(currentItem); setComputed(false); setItem(currentItem); setError({ status: false, message: '' }); }}
        />
        <Text style={{fontSize: 25, marginTop: 30, fontWeight: '500'}}>
          Buy / Use / Eat
        </Text> 
        <DropDownPicker
          items={[
              {label: "Once a Day", value: "once_day"},
              {label: "Once a week", value: "once_week"},
              {label: "2 x a week", value: "two_week"},
              {label: "3 x a week", value: "three_week"},
              {label: "4 x a week", value: "four_week"},
              {label: "5 x a week", value: "five_week"},
              {label: "Once a Month", value: "once_month"}
          ]}
          placeholder="Select"
          placeholderStyle={{
            textAlign: 'center',
            fontSize: 20,
            color: 'lightgray'
          }}
          itemStyle={{
            textAlign: 'center',
            fontSize: 20
          }}
          labelStyle={{
            textAlign: 'center',
            fontSize: 20
          }}
          defaultNull
          containerStyle={{
            height: 60,
            borderRadius: 20
          }}
          style={{
            backgroundColor: 'white', 
            width: DeviceWidth*0.9,
            marginTop: 10,
            borderWidth: 2,
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20, 
            borderBottomRightRadius: 20,
            borderColor: '#80CAFF'
          }}
          dropDownStyle={{
            backgroundColor: 'white', 
            width: DeviceWidth*0.9,
            marginTop: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderWidth: 2, 
            borderColor: '#80CAFF'
          }}
          onChangeItem={currentFrequency => {setComputed(false); setFrequency(currentFrequency.value); }}
          onOpen={() => { setComputed(false); setSelect(true); setError({ status: false, message: '' }); }}
          onClose={() => { setSelect(false); }}
        />
      </View>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
      >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 }}>
          <View style={styles.modalView}>
              <Text style={{ marginBottom: 15, textAlign: "center", marginTop: 30 }}>
                  Challenges specific to the item to appear in the future.
              </Text>
              <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#70BF41" }}
              onPress={() => {
                  setModalVisible(!modalVisible);
              }}
              >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
              </TouchableHighlight>
          </View>
          </View>
      </Modal>

      {
        computed && 
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 25, fontWeight: '500', color: 'black', marginTop: 30}}>
              Individual Total
            </Text>
            <Text 
              style={{ 
                borderColor: '#80CAFF',
                marginTop: 10,
                height: 50,
                borderWidth: 2,
                borderRadius: 20, 
                width: DeviceWidth*0.9,
                textAlign: 'center',
                fontSize: 20,
                paddingTop: 10,
                fontWeight: 'bold'
              }} 
            >
              {numberWithCommas(individual_total)} gal. p/lb
            </Text>
            <Text style={{fontSize: 25, fontWeight: '500', color: 'black', marginTop: 30}}>
              Yearly Total
            </Text>
            <Text 
              style={{ 
                borderColor: '#80CAFF',
                marginTop: 10,
                height: 50,
                borderWidth: 2,
                borderRadius: 20, 
                width: DeviceWidth*0.9,
                textAlign: 'center',
                fontSize: 20,
                paddingTop: 10,
                fontWeight: 'bold'
              }} 
            >
              {numberWithCommas(individual_total*frequency_values[frequency]*52)} gal.
            </Text>
        </View> 
      }

      {
        error.status && 
          Alert.alert(error.message)
      }

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: selectOpened ? 160 : 20, marginBottom: 20}}>
        <View>
          <TouchableOpacity onPress={() => {computed ? clearElements() : calculate(item, frequency)}} style={{padding: 15, borderRadius: 30, backgroundColor: '#70BF41', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'white', alignItems: 'center'}}>{computed ? "Clear" : "Calculate"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          computed && 
          <View>
            <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{padding: 15, borderRadius: 30, marginLeft: 10, backgroundColor: '#29A3FE', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white', alignItems: 'center'}}>Challenge</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
  </View>
  </ScrollView>
  )
}

const CalculateStack = createStackNavigator()

export const CalculateStackScreen = () => (
    <CalculateStack.Navigator>
      <CalculateStack.Screen
        name="Ranking"
        component={CalculateScreen}
        options={{headerShown: false}}
      />
    </CalculateStack.Navigator>
);