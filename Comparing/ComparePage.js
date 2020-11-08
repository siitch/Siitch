import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import { styles } from './Styles';
import firebase from 'firebase';
import { images } from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
import Profiles from '../ImageDB.js';
const DeviceWidth = Dimensions.get('window').width;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

let fetchedData = {};
let p1 = {};
let p2 = {};
let p3 = {};
let p4 = {};
let f1 = {};
let f2 = {};
let f3 = {};
let f4 = {};

export const comparePage = ({route}) => {
  const { prod1 } = route.params;
  const { prod2 } = route.params;
  const { prod3 } = route.params;
  const { prod4 } = route.params;

  const [fetched1, handleFetch1] = useState(false);
  const [fetched2, handleFetch2] = useState(false);
  const [fetched3, handleFetch3] = useState(false);
  const [fetched4, handleFetch4] = useState(false);

  const [currentprod1, changeprod1] = useState('');
  const [currentprod2, changeprod2] = useState('');
  const [currentprod3, changeprod3] = useState('');
  const [currentprod4, changeprod4] = useState('');

  const [isProduct3Pesent, setIsProduct3Present] = useState(false);
  const [isProduct4Pesent, setIsProduct4Present] = useState(false);

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

  // const fetchData = () => {
  //   if (!firebase.apps.length) {
  //       firebase.initializeApp(config);
  //   }

  //   firebase
  //   .database()
  //   .ref('/')
  //   .once('value', data => { 
  //       fetchedData = data.val();
  //       for (var item in fetchedData) {
  //         if(item === prod1) {
  //           handleFetch1(true);
  //           p1[item] = fetchedData[item];
  //           f1 = p1[prod1]
  //         } 
  //         else if(item === prod2){
  //           handleFetch2(true);
  //           p2[item] = fetchedData[item];
  //           f2 = p2[prod2]
  //         } 
  //         else if(item === prod3){
  //           handleFetch3(true);
  //           p3[item] = fetchedData[item];
  //           f3 = p3[prod3]
  //         } 
  //         else if(item === prod4){
  //           handleFetch4(true);
  //           p4[item] = fetchedData[item];
  //           f4 = p4[prod4]
  //         }
  //       }
  //   });
  // }

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

  const fetchData3 = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    firebase
    .database()
    .ref('/')
    .once('value', data => { 
        fetchedData = data.val();
        for (var item in fetchedData) {
            if(item === prod3) {
                p3[item] = fetchedData[item];
                f3 = p3[prod3]
            }  
        }
        handleFetch3(true);
    });
  }

  const fetchData4 = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    firebase
    .database()
    .ref('/')
    .once('value', data => { 
        fetchedData = data.val();
        for (var item in fetchedData) {
            if(item === prod4) {
                p4[item] = fetchedData[item];
                f4 = p4[prod4]
            }  
        }
        handleFetch4(true);
    });
  }

  if(!fetched1) {
      fetchData1();
  }

  if(prod1 !== currentprod1) {
    changeprod1(prod1);
    handleFetch1(false);
    p1 = {};
    f1 = {};
  }

  if(!fetched2) {
    fetchData2();
  }

  if(prod2 !== currentprod2) {
    changeprod2(prod2);
    handleFetch2(false);
    p2 = {};
    f2 = {};
  }

  if(prod3 && !fetched3) {
    fetchData3();
  }

  if(prod3 && prod3 !== currentprod3) {
    setIsProduct3Present(true)
    changeprod3(prod3);
    handleFetch3(false);
    p3 = {};
    f3 = {};
  }

  if(prod4 && !fetched4) {
    fetchData4();
  }

  if(prod4 && prod4 !== currentprod4) {
    setIsProduct4Present(true)
    changeprod4(prod4);
    handleFetch4(false);
    p4 = {};
    f4 = {};
  }

  const setMetric = (obj) => {
    if (obj) {
      if (obj['Single item   Gal'] != ""){
        return 'Single item   Gal'
      }
      else if (obj['Global Gallon p lb'] != ""){
        return 'Global Gallon p lb'
      }
      else{
        return "Time to decompose"
      }
    }
  }
  const selectedcategory1 = setMetric(f1)
  const selectedcategory2 = setMetric(f2)
  const selectedcategory3 = setMetric(f3)
  const selectedcategory4 = setMetric(f4)

  const getMinValue = () => {
    if(prod3 && !prod4) {
      return Math.min(parseInt(f1[selectedcategory1]), parseInt(f2[selectedcategory2]), parseInt(f3[selectedcategory3]));
    }
    else if (!prod3 && prod4){
      return Math.min(parseInt(f1[selectedcategory1]), parseInt(f2[selectedcategory2]), parseInt(f4[selectedcategory4]));
    }
    else if(prod3 && prod4) {
      return Math.min(parseInt(f1[selectedcategory1]), parseInt(f2[selectedcategory2]), parseInt(f3[selectedcategory3]), parseInt(f4[selectedcategory4]));
    }
    return Math.min(parseInt(f1[selectedcategory1]), parseInt(f2[selectedcategory2]));
  }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View>
        <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%', marginBottom: '5%'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}> {prod1} </Text>
          {/* <Text style={{fontSize:20,fontWeight:'bold'}}>{prod1} vs. {prod2}</Text> */}
          <Text style={{fontSize:20,fontWeight:'bold'}}> vs. {prod2}</Text>
          {
            isProduct3Pesent && 
            <Text style={{fontSize:20,fontWeight:'bold'}}> vs. {prod3}</Text>
          }
          {
            isProduct4Pesent && 
            <Text style={{fontSize:20,fontWeight:'bold'}}> vs. {prod4}</Text>
          }
          
        </View>
        <View style={{flex: 4,flexDirection:'column',alignItems:'center', marginBottom:0, padding: 0}}>
          <View style={{flex:2, flexDirection:'row',justifyContent:'space-between'}}>
            <View center style={getTextStyle(f1[selectedcategory1], getMinValue())}>
              <Image source = {Profiles[prod1]}
                style = {{width: 200, height: 200, alignItems:'center'}}
                resizeMode="contain"/>
                <Text style={styles.boldTextFormatCompare}>{f1[selectedcategory1]} {f1['Metric to display']}</Text>
                <Text style={styles.textFormatCompare}>{f1['Measurement1']}</Text>
                <Text style={styles.textFormatCompare}>{f1['Size']}</Text>
            </View>
            <View center style={getTextStyle(f2[selectedcategory2], getMinValue())}>
              <Image source = {Profiles[prod2]} 
                style = {{width: 200, height: 200, alignItems:'center'}}
                resizeMode="contain"/>
                <Text style={styles.boldTextFormatCompare}>{f2[selectedcategory2]} {f2['Metric to display']}</Text>
                <Text style={styles.textFormatCompare}>{f2['Measurement1']}</Text>
                <Text style={styles.textFormatCompare}>{f2['Size']}</Text>
            </View>
          </View>
          {
            (isProduct3Pesent || isProduct4Pesent) && 
            <View  style={{flex: 2, flexDirection:'row',justifyContent:'space-between'}}>
              {
                isProduct3Pesent &&
                <View center style={getTextStyle(f3[selectedcategory3], getMinValue())}>
                  <Image source = {Profiles[prod3]}
                    style = {{width: 200, height: 200, alignItems:'center'}}
                    resizeMode="contain"/>
                    <Text style={styles.boldTextFormatCompare}>{f3[selectedcategory3]} {f3['Metric to display']}</Text>
                    <Text style={styles.textFormatCompare}>{f3['Measurement1']}</Text>
                    <Text style={styles.textFormatCompare}>{f3['Size']}</Text>
                </View>
              }
              {
                isProduct4Pesent &&
                <View center style={getTextStyle(f4[selectedcategory4], getMinValue())}>
                  <Image source = {Profiles[prod4]} 
                    style = {{width: 200, height: 200, alignItems:'center'}}
                    resizeMode="contain"/>
                    <Text style={styles.boldTextFormatCompare}>{f4[selectedcategory4]} {f4['Metric to display']}</Text>
                    <Text style={styles.textFormatCompare}>{f4['Measurement1']}</Text>
                    <Text style={styles.textFormatCompare}>{f4['Size']}</Text>
                </View>
              }
            </View>
          }
        </View>
      </View>
      
        {(f1['Notes to appear'] != "" )&& 
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{fontSize:18, textAlign: 'left'}}>{f1['Notes to appear']}</Text>
          </View>
        }

        {(f2['Notes to appear'] != "" )&& 
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{fontSize: 18, textAlign: 'left'}}>{f2['Notes to appear']}</Text>
          </View>
        }

        {
          (isProduct3Pesent && f3['Notes to appear'] != "") &&
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{fontSize:18, textAlign: 'left'}}>{f3['Notes to appear']}</Text>
          </View>
        }
        {
          (isProduct4Pesent && f4['Notes to appear'] != "") &&
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{fontSize:18, textAlign: 'left'}}>{f4['Notes to appear']}</Text>
          </View>
        }
      
      

      <View style={{marginTop: 0, alignItems: 'center', marginBottom:'10%'}}>
        <Collapse style={{ marginTop: '5%', width: DeviceWidth/1.2}} isCollapsed='true'>
          <CollapseHeader style={{alignItems:'center',padding:10,backgroundColor:'#FFD359', width: DeviceWidth / 1.2,borderColor: '#FFD359', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontWeight:'bold', fontSize: 20}}>Breakdown</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={{padding: 10, borderColor: '#FFD359',borderWidth: 2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
            <View>
              <Text>The gallons of water it takes to make one pound of these items:</Text>
              
              <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between", marginTop:'5%'}}>
                <View style={{width:DeviceWidth/6}}><Text></Text></View>
                <View style={{width:DeviceWidth/6}}>
                <Image 
                  source = {Profiles['green water']}
                  style = {{width: 15, height: 15,alignItems:'center'}}
                  resizeMode="contain"/>
                </View>
                <View style={{width:DeviceWidth/6}}>
                <Image 
                  source = {Profiles['blue water']}
                  style = {{width: 15, height: 15,alignItems:'center'}}
                  resizeMode="contain"/>
                </View>
                <View style={{width:DeviceWidth/6}}>
                <Image 
                  source = {Profiles['gray water']}
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
              {
                isProduct3Pesent &&
                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
                  <View style={{width:DeviceWidth/6}}><Text>{prod3}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f3['Global Imperial Green Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f3['Global Imperial Blue Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f3['Global Imperial Gray Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text style={{fontWeight:'bold'}}>{f3['Global Gallon p lb']}</Text></View>
                </View>
              }
              {
                isProduct4Pesent &&
                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
                  <View style={{width:DeviceWidth/6}}><Text>{prod4}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f4['Global Imperial Green Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f4['Global Imperial Blue Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text>{f4['Global Imperial Gray Gal p lb']}</Text></View>
                  <View style={{width:DeviceWidth/6}}><Text style={{fontWeight:'bold'}}>{f4['Global Gallon p lb']}</Text></View>
                </View>
              }
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
  if(parseInt(val1) == val2) {
   return {
    flex: 1,
    borderColor: '#6dbd64', 
    borderRadius: 40,
    borderWidth: 5,
    width: DeviceWidth*0.3, 
    height: DeviceWidth*0.8, 
    alignItems:'center', 
    transform: [{scale: 0.9}],
   }
  } else {
    return {
      flex: 1,
      width: DeviceWidth*0.3, 
      height: DeviceWidth*0.8, 
      alignItems:'center', 
      transform: [{scale: 0.9}],
    }
  }
}


export default comparePage;
