import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import { styles } from './Styles';
import firebase from 'firebase';
import { images } from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import Profiles from './ImageDB.js';
const DeviceWidth = Dimensions.get('window').width;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';



let fetchedData = {};
let p1 = {};
let p2 = {};
let f1 = {};
let f2 = {};
let sortable = [];

export const comparePage = ({route, navigation}) => {
  const { prod1 } = route.params;
  const { prod2 } = route.params;
  if (prod1 === ""){
      alert("No ")
  }

  const [fetched1, handleFetch1] = useState(false);
  const [fetched2, handleFetch2] = useState(false);


  const [currentprod1, changeprod1] = useState('');
  const [currentprod2, changeprod2] = useState('');

  const [expand1, setExpand1] = useState(false);

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
  selectedcategory1 = "Time to decompose"
}

let selectedcategory2 = ""

if (f2['Single item   Gal'] != ""){
  selectedcategory2 = 'Single item   Gal'
}
else if (f2['Global Gallon p lb'] != ""){
  selectedcategory2 = 'Global Gallon p lb'
}
else{
  selectedcategory2 = "Time to decompose"
}



  return (
      <ScrollView style={{backgroundColor:'white'}}>
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
          <Text style={{fontSize:20,fontWeight:'bold'}}> {prod1} vs. {prod2}</Text>
        </View>
        <View  style={{flexDirection:'row',alignItems:'center', marginTop:1}}>
          <View flex center style={getTextStyle(f1[selectedcategory1], f2[selectedcategory2])}>
            <Image source = {Profiles[prod1]}
              style = {{width: 200, height: 200, marginTop: '2%',alignItems:'center'}}
              resizeMode="contain"/>
              <Text style={{textAlign: 'center',fontSize:30,fontWeight:'bold'}}>{f1[selectedcategory1]} {f1['Metric to display']}</Text>
              <Text style={{textAlign: 'center',fontSize:20}}>{f1['Measurement1']}</Text>
              <Text style={{textAlign: 'center',fontSize:20}}>{f1['Size']}</Text>
              
          </View>
          <View flex center style={getTextStyle(f2[selectedcategory2], f1[selectedcategory1])}>
            <Image source = {Profiles[prod2]} 
              style = {{width: 200, height: 200, marginTop: '2%',alignItems:'center'}}
              resizeMode="contain"/>
              <Text style={{textAlign: 'center',fontSize:30,fontWeight:'bold'}}>{f2[selectedcategory2]} {f2['Metric to display']}</Text>
              <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f2['Measurement1']}</Text>
              <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f2['Size']}</Text>
          </View>
          
        </View>
        <View style={{marginTop: 0, alignItems: 'center', marginBottom:'10%'}}>
          <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f1['Notes to appear']}</Text>
          <Text style={{textAlign: 'center',fontSize:20, alignItems:'center'}}>{f2['Notes to appear']}</Text>


          <Collapse style={{ marginTop: '5%', width: DeviceWidth/1.2}} isCollapsed='true'>
            <CollapseHeader style={{alignItems:'center',padding:10,backgroundColor:'#FFD359', width: DeviceWidth / 1.2,borderColor: '#FFD359', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Breakdown</Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{padding: 10, borderColor: '#FFD359',borderWidth: 2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
              <View style={{}}>
                <Text>The gallons of water it takes to make one pound of these items:</Text>
                
                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between", marginTop:'5%'}}>
                  <View style={{width:DeviceWidth/6}}><Text></Text></View>
                  <View style={{width:DeviceWidth/6}}>
                  <Image source = {Profiles['green water']}
              style = {{width: 15, height: 15,alignItems:'center'}}
              resizeMode="contain"/>
                  </View>
                  <View style={{width:DeviceWidth/6}}>
                  <Image source = {Profiles['blue water']}
              style = {{width: 15, height: 15,alignItems:'center'}}
              resizeMode="contain"/>
                  </View>
                  <View style={{width:DeviceWidth/6}}>
                  <Image source = {Profiles['gray water']}
              style = {{width: 15, height: 15,alignItems:'center'}}
              resizeMode="contain"/>
                  </View>
                  <View style={{width:DeviceWidth/6}}><Text style={{fontWeight:'bold'}}>Total</Text></View>
                </View>
                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
                  <View style={{width:DeviceWidth/6}}><Text>{prod1}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f1['Global Imperial Green Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f1['Global Imperial Blue Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f1['Global Imperial Gray Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text style={{fontWeight:'bold'}}>{f1['Global Gallon p lb']}</Text></View>
                </View>
                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
                <View style={{width:DeviceWidth/6}}><Text>{prod2}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f2['Global Imperial Green Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f2['Global Imperial Blue Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f2['Global Imperial Gray Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text style={{fontWeight:'bold'}}>{f2['Global Gallon p lb']}</Text></View>
                </View>








              </View>
            </CollapseBody>
          </Collapse>

          <Collapse style={{ borderColor:'#70BF41', marginTop: '2%',width: DeviceWidth/1.2}} isCollapsed='true'>
            <CollapseHeader style={{alignItems:'center',padding:10,backgroundColor:'#70BF41', width: DeviceWidth / 1.2,borderColor: '#70BF41', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Rain</Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{padding: 10, borderColor: '#70BF41',borderWidth: 2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
              <View>
                <Text style={{fontWeight:'bold'}}>Rain water (Green water): </Text>
                <Text>The amount of rainwater required to make an item</Text>
              </View>
            </CollapseBody>
          </Collapse>

          <Collapse style={{ borderColor:'#00ADEF', marginTop: '2%', width: DeviceWidth/1.2}} isCollapsed='true'>
            <CollapseHeader style={{alignItems:'center',padding:10,backgroundColor:'#00ADEF', width: DeviceWidth / 1.2,borderColor: '#00ADEF', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Irrigation</Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{padding: 10, borderColor: '#00ADEF',borderWidth: 2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
              <View>
                <Text style={{fontWeight:'bold'}}>Irrigated water (Blue water): </Text>
                <Text>The amount of surface water and groundwater required to produce an item</Text>
              </View>
            </CollapseBody>
          </Collapse>

          <Collapse style={{ borderColor:'#C2C2C2', marginTop: '2%', width: DeviceWidth/1.2}} isCollapsed='true'>
            <CollapseHeader style={{alignItems:'center',padding:10,backgroundColor:'#C2C2C2', width: DeviceWidth / 1.2,borderColor: '#C2C2C2', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Cleaning</Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{padding: 10, borderColor: '#C2C2C2',borderWidth: 2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
              <View>
                <Text style={{fontWeight:'bold'}}>Cleaning water (Gray water): </Text>
                <Text>The amount of freshwater required to dilute the wastewater generated in manufacturing, in order to maintain water quality, as determined by state and local standards </Text>
                <Text style={{textAlign: 'left', marginTop: '3%'}}>Definitions: www.watercalculator.org</Text>
              </View>
            </CollapseBody>
          </Collapse>
        </View>
      </ScrollView>

      );
}


function getTextStyle(val1, val2) {
  if(parseInt(val1) <= parseInt(val2)) {
   return {
    borderColor: '#6dbd64', borderRadius: 40 ,borderWidth: 5,width: DeviceWidth*0.3, height: DeviceWidth*0.9, marginBottom:2, justifyContent:'center', alignItems:'center', marginTop:5, transform: [{scale: 0.8}]

   }
  } else {
    return {
      width: DeviceWidth*0.3, height: DeviceWidth*0.9, marginBottom:2, justifyContent:'center', alignItems:'center', marginTop:5, transform: [{scale: 0.8}]

    }
  }
 }


export default comparePage;
