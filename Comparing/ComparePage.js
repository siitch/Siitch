import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { styles } from './Styles';
import firebase from 'firebase';
import { images } from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import Profiles from './ImageDB.js';
const DeviceWidth = Dimensions.get('window').width;



let fetchedData = {};
let p1 = {};
let p2 = {};
let f1 = {};
let f2 = {};
let sortable = [];

export const comparePage = ({route, navigation}) => {
  const { prod1 } = route.params;
  const { prod2 } = route.params;

  const [fetched1, handleFetch1] = useState(false);
  const [fetched2, handleFetch2] = useState(false);

  const [currentprod1, changeprod1] = useState('');
  const [currentprod2, changeprod2] = useState('');

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

  const fetchData1 = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    firebase
    .database()
    .ref('/')
    .once('value', data => { 
        fetchedData = data.val();
        for (var item in fetchedData) {
            if(item === prod1) {
                p1[item] = fetchedData[item];
                f1 = p1[prod1]
            }
            
        }

        handleFetch1(true);
    });
}

const fetchData2 = () => {
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  firebase
  .database()
  .ref('/')
  .once('value', data => { 
      fetchedData = data.val();
      for (var item in fetchedData) {
          if(item === prod2) {
              p2[item] = fetchedData[item];
              f2 = p2[prod2]
          }
      }

      handleFetch2(true);
  });
}

if(!fetched1) {
    fetchData1();
}

if(prod1 !== currentprod1) {
  changeprod1(prod1);
  handleFetch1(false);
  p1 = {};
}

if(!fetched2) {
  fetchData2();
}

if(prod2 !== currentprod2) {
  changeprod2(prod2);
  handleFetch2(false);
  p2 = {};
}


let selectedcategory1 = ""

if (f1['Single item   Gal'] != ""){
  selectedcategory1 = 'Single item   Gal'
}
else if (f1['Global Gallon p lb'] != ""){
  selectedcategory1 = 'Global Gallon p lb'
}
else{
  selectedcategory1 = "Carbon"
}

let selectedcategory2 = ""

if (f2['Single item   Gal'] != ""){
  selectedcategory2 = 'Single item   Gal'
}
else if (f2['Global Gallon p lb'] != ""){
  selectedcategory2 = 'Global Gallon p lb'
}
else{
  selectedcategory2 = "Carbon"
}




var path1 = '../images/Drinks_NonAlcoholic/Drinks_NonAlcoholic/tea.png'
var path2 = '../images/Drinks_NonAlcoholic/Drinks_NonAlcoholic/coffee_small.png'


  return (
      <ScrollView>
        {/* <View>
          <Text>This is the compare details page.</Text>
          <Text>itemId: {JSON.stringify(prod1)}</Text>
          <Text>otherParam: {JSON.stringify(prod2)}</Text>
          <Text>otherParam: {JSON.stringify(f1['Global Gallon p lb'])}</Text>
          <Text>otherParam: {JSON.stringify(f2)}</Text>
          <Text>otherParam: {f2[selectedcategory]}</Text>
          <Text>otherParam: {selectedcategory}</Text>

        </View> */}
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}> {JSON.stringify(prod1)} vs. {JSON.stringify(prod2)}</Text>
        </View>
        <View  style={{flexDirection:'row',alignItems:'center'}}>
          <View flex center style={getTextStyle(f1[selectedcategory1], f2[selectedcategory2])}>
            <Image source = {Profiles[prod1]}
              style = {{width: 200, height: 200, marginTop: '10%',alignItems:'center'}}
              resizeMode="contain"/>
              <Text style={{textAlign: 'center',fontSize:30,fontWeight:'bold'}}>{f1[selectedcategory1]} gallons</Text>
              <Text style={{textAlign: 'center',fontSize:20}}>{f1['Measurement1']}</Text>
              <Text style={{textAlign: 'center',fontSize:20}}>{f1['Size']}</Text>
              
          </View>
          <View flex center style={getTextStyle(f2[selectedcategory2], f1[selectedcategory1])}>
            <Image source = {Profiles[prod2]} 
              style = {{width: 200, height: 200, marginTop: '10%',alignItems:'center'}}
              resizeMode="contain"/>
              <Text style={{textAlign: 'center',fontSize:30,fontWeight:'bold'}}>{f2[selectedcategory2]} gallons</Text>
              <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f2['Measurement1']}</Text>
              <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f2['Size']}</Text>
          </View>
        </View>
      </ScrollView>

      );
}


function getTextStyle(val1, val2) {
  if(parseInt(val1) <= parseInt(val2)) {
   return {
    borderColor: '#6dbd64', borderRadius: 40 ,borderWidth: 5,width: DeviceWidth*0.3, height: DeviceWidth*0.9, marginBottom:10, justifyContent:'center', alignItems:'center', marginTop:50, transform: [{scale: 0.8}]

   }
  } else {
    return {
      width: DeviceWidth*0.3, height: DeviceWidth*0.9, marginBottom:10, justifyContent:'center', alignItems:'center', marginTop:50, transform: [{scale: 0.8}]

    }
  }
 }


export default comparePage;
