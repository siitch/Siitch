import 'react-native-gesture-handler';
import firebase from 'firebase';
import {useState, useEffect} from 'react';
import * as React from 'react';
import {Searchbar, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { styles } from './Styles';
import { createStackNavigator } from '@react-navigation/stack';
import { comparePage} from './ComparePage'
import {Dimensions} from 'react-native';
import {Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const {width, height} = Dimensions.get('screen');

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Button,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';

import RNPicker from "rn-modal-picker";
import { color } from 'react-native-reanimated';

function getdata() {
  itemsList = []
  config = {
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
  firebase
    .database()
    .ref('/')
    .once('value', data => { 
        fetchedData = data.val();
        for (var item in fetchedData) {
            this.itemsList.push({
              name: item
            })            
        }
        console.log(itemsList)
    });
  
  
 }

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolderText: "",
      selectedText: "",
      product1: "",
      product2: "",

    };
    getdata();
  }
  _setProduct1(item){
    this.setState({product1: item.name})
  }

  _setProduct2(item){
      this.setState({product2: item.name})
  }

  render() {
    
    return (
      <View style={styles.rankingPage}>
      <ScrollView>
      <View style={{alignItems: 'center', marginTop: '20%'}}>
        <Text style={styles.title}>Compare</Text>
        <Text style={{alignItems: 'center', marginTop: '20%', marginBottom: '5%', fontSize: 20}}>Select Item 1</Text>
        <View style={styles.container}>
          <View style={{width: 200, flexDirection:'row', alignItems:'center'}}>
          <RNPicker 
            dataSource={itemsList}
            dummyDataSource={itemsList}
            defaultValue={false}
            pickerTitle={"Search Items"}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={"none"}
            searchBarPlaceHolder={"Search....."}
            showPickerTitle={true}
            searchBarContainerStyle={styles.searchBarContainerStyle}
            pickerStyle={styles.pickerStyle}
            itemSeparatorStyle={styles.itemSeparatorStyle}
            pickerItemTextStyle={styles.listTextViewStyle}
            selectedLabel={this.state.product1}
            placeHolderLabel={this.state.placeHolderText}
            selectLabelTextStyle={styles.selectLabelTextStyle}
            placeHolderTextStyle={styles.placeHolderTextStyle}
            dropDownImageStyle={styles.dropDownImageStyle}
            //dropDownImage={}
            selectedValue={(index, item) => this._setProduct1(item)}
          />
          <MaterialCommunityIcons
                name="magnify"
                color={'gray'}
                size={40}
              />
          </View>
        </View>
        <Text style={{alignItems: 'center', marginTop: '20%', marginBottom: '5%', fontSize: 20}}>Select Item 2</Text>
        <View style={{width: 200, flexDirection:'row', alignItems:'center'}}>
        <RNPicker
            dataSource={itemsList}
            dummyDataSource={itemsList}
            defaultValue={false}
            pickerTitle={"Search Items"}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={"none"}
            searchBarPlaceHolder={"Search....."}
            showPickerTitle={true}
            searchBarContainerStyle={styles.searchBarContainerStyle}
            pickerStyle={styles.pickerStyle}
            itemSeparatorStyle={styles.itemSeparatorStyle}
            pickerItemTextStyle={styles.listTextViewStyle}
            selectedLabel={this.state.product2}
            placeHolderLabel={this.state.placeHolderText}
            selectLabelTextStyle={styles.selectLabelTextStyle}
            placeHolderTextStyle={styles.placeHolderTextStyle}
            dropDownImageStyle={styles.dropDownImageStyle}
            selectedValue={(index, item) => this._setProduct2(item)}
          />
          <MaterialCommunityIcons
                name="magnify"
                color={'gray'}
                size={40}
              />
        </View>
        <View
            style={{
              width: width / 2,
              height: 50,
              borderRadius: 20,
              backgroundColor: '#70BF41',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20%',
            }}>
            <TouchableOpacity
              onPress={() => { (this.state.product1 == "" || this.state.product2 == "") ?
                Alert.alert('Please select an item') : ((this.state.product1 == this.state.product2)?Alert.alert('Please select different items'):this.props.navigation.navigate('Compare Details', {prod1: this.state.product1,prod2: this.state.product2}))
              }
              }>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white', alignItems: 'center', fontWeight: 'bold'}}>Compare</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemSeparatorStyle:{
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});

const compareStack = createStackNavigator();

export const compareScreen = () => (
  
  <compareStack.Navigator>
    <compareStack.Screen
        name="Compare"
        component={Compare}
        options={{headerShown: false}}
      />
    <compareStack.Screen name="Compare Details" component={comparePage} />
  </compareStack.Navigator>
);
