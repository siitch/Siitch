import React, {useEffect, useRef, useState} from 'react';
import firebase from "firebase";
import {
  Dimensions,
  Image,
  ImageBackground, Modal,
  ScrollView,
  Share,
  StyleSheet,
  Text, TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import CompareItem from "./CompareItem";
import analytics from '@react-native-firebase/analytics';
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import Profiles from "../ImageDB";
import FlipCard from "react-native-flip-card";
import * as WebBrowser from "expo-web-browser";
import * as FileSystem from "expo-file-system";
import {showMessage} from "react-native-flash-message";
import header from "../images/header.png";
import watermark from "../images/watermark_compare.png";
import ViewShot from "react-native-view-shot";
import {BlurView} from "expo-blur";
import {Button, FloatingButton} from "react-native-ui-lib";
import * as MediaLibrary from "expo-media-library";
import {styles} from "./Styles";

let parentList = []
export default function ComparePage ({navigation, route}) {
  const { itemsArray } = route.params;
  let items = []
  let counter = 0
  let [breakdownInfo, setBreakdownInfo] = useState([])
  const [renderedList, setRenderedList] = useState([])
  useEffect(() => {
    parentList = []
    for (let item in itemsArray) {
      firebase
        .database()
        .ref('/' + itemsArray[item])
        .once('value', data => {
          let info = data.val()
          items.push({
            name: itemsArray[item],
            info: info
          })
          parentList.push({
            name: itemsArray[item],
            currentTotal: 0,
            metric: setMetric(info),
            'Single item   Gal': setMetric(info) === 'Time to decompose' ? '-': info['Single item   Gal'],
            'Global Gallon p lb': setMetric(info) === 'Time to decompose' ? '-': info['Global Gallon p lb'],
            'Single item   L': setMetric(info) === 'Time to decompose' ? '-': info['Single item   L'],
            'Global Liters p kg': setMetric(info) === 'Time to decompose' ? '-': info['Global Liters p kg'],
            'Global Imperial Blue Gal p lb': setMetric(info) === 'Time to decompose' ? '-': info['Global Imperial Blue Gal p lb'],
            'Global Imperial Green Gal p lb': setMetric(info) === 'Time to decompose' ? '-': info['Global Imperial Green Gal p lb'],
            'Global Imperial Gray Gal p lb': setMetric(info) === 'Time to decompose' ? '-': info['Global Imperial Gray Gal p lb'],
            'Global Blue L p kg': setMetric(info) === 'Time to decompose' ? '-': info['Global Blue L p kg'],
            'Global Green L p kg': setMetric(info) === 'Time to decompose' ? '-': info['Global Green L p kg'],
            'Global Gray L p kg': setMetric(info) === 'Time to decompose' ? '-': info['Global Gray L p kg'],
            'Notes to appear': info['Notes to appear']
          })
        }).then((r) => {
        counter++
        if (counter === itemsArray.length){
          initList()
          setBreakdownInfo(parentList)
        }
      })
    }
  },[])
  function initList() {
    let tempArray = []
    let formatArray = []
    for (let i = 0; i < items.length; i++) {
      if (i !== 0 && i % 2 === 0) {
        formatArray.push(tempArray)
        tempArray = []
      }
      tempArray.push(items[i])
    }
    if (tempArray.length !== 0) {
      formatArray.push(tempArray)
    }
    setRenderedList(formatArray)
  }
  let [total, setTotal] = useState(0)
  function updateTotal(itemName, itemTotal) {
    for (let item in parentList) {
      if (parentList[item].name === itemName) {
        parentList[item].currentTotal = itemTotal
      }
    }
    let tempTotal = 0
    for (let item in parentList) {
      tempTotal += parentList[item].currentTotal
    }
    setTotal(tempTotal)
  }
  let [minItems, setMinItems] = useState([])
  useEffect(()=>{
    getMin()
  },[breakdownInfo, total])
  function getMin() {
    let tempList = breakdownInfo.slice()
    for (let item in tempList) {
      if (tempList[item].metric === 'Time to decompose') {
        tempList.splice(item, 1)
      }
    }
    if (tempList.length !== 0) {
      let tempArr = []
      let min = Infinity
      for (let item in tempList) {
        if (tempList[item].currentTotal === min) {
          tempArr.push(item)
        }
        if (tempList[item].currentTotal < min) {
          tempArr = []
          min = tempList[item].currentTotal
          tempArr.push(item)
        }
      }
      let result = []
      for (let i in tempArr) {
        result.push(tempList[tempArr[i]].name)
      }
      setMinItems(result)
    }
  }
  let [notes, setNotes] = useState([])
  useEffect(()=>{
    getNotes()
  },[breakdownInfo])
  function getNotes() {
    let tempNotes = []
    for (let item in breakdownInfo) {
      if (breakdownInfo[item]['Notes to appear'] !== ''){
        tempNotes.push(breakdownInfo[item]['Notes to appear'])
      }
    }
    setNotes(tempNotes)
  }

  let [unit, setUnit] = useState('G')
  let selectedCategoryBlue = setMetricBlue()
  let selectedCategoryGreen = setMetricGreen()
  let selectedCategoryGray = setMetricGray()
  let selectedMetricToDisplay= setMetricDisplay()
  let selectedMeasurement = setMetricMeasurement()
  let selectedSize = setMetricSize()
  let selectedText = setMetricText()
  function setMetric(currentItem) {
    if (currentItem){
      if (unit === 'G') {
        if (currentItem['Single item   Gal'] !== "") {
          return 'Single item   Gal'
        } else if (currentItem['Global Gallon p lb'] !== "") {
          return 'Global Gallon p lb'
        } else {
          return 'Time to decompose'
        }
      } else if (unit === 'L') {
        if (currentItem['Single item   L'] !== ""){
          return 'Single item   L'
        } else if (currentItem['Global Liters p kg'] !== ""){
          return 'Global Liters p kg'
        } else {
          return 'Time to decompose'
        }
      }
    }
  }
  function setMetricBlue() {
    return unit === 'G' ? 'Global Imperial Blue Gal p lb' : 'Global Blue L p kg'
  }
  function setMetricGreen() {
    return unit === 'G' ? 'Global Imperial Green Gal p lb' : 'Global Green L p kg'
  }
  function setMetricGray() {
    return unit === 'G' ? 'Global Imperial Gray Gal p lb' : 'Global Gray L p kg'
  }
  function setMetricDisplay() {
    return unit === 'G' ? 'Metric to display' : 'Metric to display L'
  }
  function setMetricMeasurement() {
    return unit === 'G' ? 'Measurement1' : 'Measurement L'
  }
  function setMetricSize() {
    return unit === 'G' ? 'Size' : 'Size L'
  }
  function setMetricText() {
    return unit === 'G' ?
      'The gallons of water used to make the items above, or (if applicable) the years it takes to decompose.' :
      'The liters of water used to make the items above, or (if applicable) the years it takes to decompose.'
  }
  function numberWithCommas(x) {
    if( isNaN(x) ) return " -"
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  let [infoVisible, setInfoVisible] = useState(false)
  let [waterVisible, setWaterVisible] = useState(false)
  let [waterCategory, setWaterCategory] = useState('')
  function getContent(waterCategory) {
    switch (waterCategory) {
      case 'Rain':
        return (
          <View style={{marginTop: 10}}>
            <Text>
              Rain water (Green water): The amount of rainwater required to make an item
            </Text>
          </View>
        )
      case 'Irrigation':
        return (
          <View style={{marginTop: 10}}>
            <Text>
              Irrigated water (Blue water): The amount of surface water and groundwater required to produce an item
            </Text>
          </View>
        )
      case 'Cleaning':
        return (
          <View style={{marginTop: 10}}>
            <Text>
              Cleaning water (Gray water): The amount of freshwater required to dilute the wastewater
              generated in manufacturing, in order to maintain water quality, as determined by state and local standards
            </Text>
            <Text style={{textAlign: 'left', marginTop: '3%'}}>
              Definitions: <Text onPress={() => WebBrowser.openBrowserAsync('https://www.watercalculator.org')} style={{color: '#00ADEF'}}>www.watercalculator.org</Text>
            </Text>
          </View>
        )
    }
  }

  // Export function
  const [modalShareVisible, setModalShareVisible] = useState(false)
  const headerImage = Image.resolveAssetSource(header).uri
  const watermarkImage = Image.resolveAssetSource(watermark).uri
  const [comparePhoto, setComparePhoto] = useState('')
  useEffect(()=>{},[comparePhoto])
  const [sharePhoto, setSharePhoto] = useState('')
  const refCaptureCompare = useRef(null)
  const refShareCompare = useRef(null)
  const [listHeight, setListHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [watermarkHeight, setWatermarkHeight] = useState(0)
  useEffect(()=>{
    Image.getSize(headerImage,
      (width, height) => {
        setHeaderHeight(height * Dimensions.get('screen').width * 0.9 / width)
      })
    Image.getSize(watermarkImage,
      (width, height) => {
        setWatermarkHeight(height * Dimensions.get('screen').width * 0.3 / width)
      })
  })
  function captureAndShareScreenshot() {
    analytics().logEvent('Export_Compare')
    refCaptureCompare.current.capture().then((uri) => {
      FileSystem.getInfoAsync(uri).then((FileInfo) => {
        Image.getSize(FileInfo.uri,
          (width, height) =>{
            setListHeight(height * DeviceWidth * 0.9 / width)
          })
        setComparePhoto(FileInfo.uri)
        setModalShareVisible(true)
      })
    });
  }
  function onImageLoad() {
    setTimeout(() => {
      refShareCompare.current.capture().then((uri) => {
        FileSystem.getInfoAsync(uri).then((FileInfo) => {
          setSharePhoto(FileInfo.uri)
        })
      })
    },350)
  }

  function saveSuccessful() {
    showMessage({
      message: "Compare Detail Screenshot Saved!",
      type: "success",
      icon: "success",
      duration: 2000,
      style: {
        backgroundColor: '#70BF41'
      }
    })
  }

  return (
    (renderedList.length !== 0 && (
      <ScrollView style={{backgroundColor:'white'}}>
        <ViewShot
          children={View}
          ref={refCaptureCompare}
          options={{
            format: "jpg",
            quality: 0.9
          }}>
          <View>
            {/* Header */}
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flexDirection: 'row', width: DeviceWidth*.9, marginTop: '3%'}}>
                <View style={comparePageStyle.metricSwitch}>
                  <TouchableOpacity onPress={() => {
                    setUnit('G');
                    analytics().logEvent('Use_GL_switch',{
                      switch_to: 'Gallons'
                    })
                  }}>
                    <Text style={{ color: unit === 'G' ? '#00ADEF' : 'black', paddingTop: 5, fontSize: 20, fontWeight: unit === 'G' ? 'bold' : 'normal' }}>G</Text>
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 5, fontSize: 20 }}> / </Text>
                  <TouchableOpacity onPress={() => {
                    setUnit('L');
                    analytics().logEvent('Use_GL_switch',{
                      switch_to: 'Liters'
                    })
                  }}>
                    <Text style={{ color: unit === 'L' ? '#00ADEF' : 'black', paddingTop: 5, fontSize: 20, fontWeight: unit === 'L' ? 'bold' : 'normal' }}>L</Text>
                  </TouchableOpacity>
                </View>
                {/* Total Water Component */}
                <View style = {{
                  flexDirection: 'row',
                  marginTop: '5%',
                  justifyContent: 'flex-end',
                  width: DeviceWidth*.9-65
                }}>
                  <TouchableOpacity
                    style={{paddingTop: 8}}
                    onPress={()=>{
                      setInfoVisible(true)
                      analytics().logEvent('Info_button_pressed',{
                        infoName: 'Virtual_Water'
                      })
                    }}>
                    <Image source={itemDetailImages.info} style={{width: 30, height: 22}}/>
                  </TouchableOpacity>
                  <Image style={{width: 20, height: 20, marginTop: '3%'}} source={Profiles.water}/>
                  <Text style={{fontSize: 25, marginTop: '1%'}}> Total: {numberWithCommas(total)}{unit === 'G' ? ' G.' : ' L.'}</Text>
                </View>
              </View>
            </View>

            {/* Items Go Here */}
            {renderedList.map((row, index) => (
              <View key={index} style={comparePageStyle.rowStyle}>
                {row.map((item, i) => (
                  <CompareItem
                    key={i}
                    navigation={navigation}
                    name={item.name}
                    itemInfo={item.info}
                    metric={setMetric(item.info)}
                    minItems={minItems}
                    selectedSize={selectedSize}
                    selectedMeasurement={selectedMeasurement}
                    selectedMetricToDisplay={selectedMetricToDisplay}
                    updateParent={updateTotal}
                  />
                ))}
              </View>
            ))}

            {/* Notes to Appear */}
            <View style={{marginTop: 0, alignItems: 'center', marginBottom:'7%'}}>
              {notes !== [] && notes.map((note, index) => (
                <View key={index} style={{width: DeviceWidth/1.2}}>
                  <Text style={{fontSize:18, textAlign: 'left'}}>{note}</Text>
                </View>
              ))}
            </View>
          </View>
        </ViewShot>

        <View style={{marginTop: 0, alignItems: 'center', marginBottom:'5%'}}>
          {/* Export Button */}
          <TouchableOpacity
            onPress={captureAndShareScreenshot}
            style={comparePageStyle.exportButton}>
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

        {/* New Three Kinds of Water */}
        <View style={{marginVertical: 0 ,marginHorizontal: '3%', flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={[comparePageStyle.waterCard, {backgroundColor: '#8DC73F'}]}
            onPress={()=>{
              setWaterCategory('Rain')
              setWaterVisible(true)
            }}>
            <Text style={comparePageStyle.waterTitle}>Rain</Text>
            <Image source={Profiles['white water']} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[comparePageStyle.waterCard, {backgroundColor: '#00ADEF'}]}
            onPress={()=>{
              setWaterCategory('Irrigation')
              setWaterVisible(true)
            }}>
            <Text style={comparePageStyle.waterTitle}>Irrigation</Text>
            <Image source={Profiles['white water']} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[comparePageStyle.waterCard, {backgroundColor: '#C2C2C2'}]}
            onPress={()=>{
              setWaterCategory('Cleaning')
              setWaterVisible(true)
            }}>
            <Text style={comparePageStyle.waterTitle}>Cleaning</Text>
            <Image source={Profiles['white water']} style={{height: 25, width: 25}} />
          </TouchableOpacity>
        </View>

        {/* Breakdown Section */}
        <FlipCard
          style={comparePageStyle.flipCard}
          flipVertical={false}
          flipHorizontal={true}
        >
          <View>
            <Text style={{fontWeight:'bold', fontSize: 20, alignSelf: 'center'}}>Breakdown</Text>
            <Text style={{marginTop: 5}}>{selectedText}</Text>
            <View style={comparePageStyle.breakdownTableHeader}>
              <View style={comparePageStyle.breakDown}/>
              <View style={comparePageStyle.breakDown}>
                <Image
                  source = {Profiles['green water']}
                  style = {{width: 15, height: 15,alignItems:'center'}}
                  resizeMode="contain"/>
              </View>
              <View style={comparePageStyle.breakDown}>
                <Image
                  source = {Profiles['blue water']}
                  style = {{width: 15, height: 15,alignItems:'center'}}
                  resizeMode="contain"/>
              </View>
              <View style={comparePageStyle.breakDown}>
                <Image
                  source = {Profiles['gray water']}
                  style = {{width: 15, height: 15,alignItems:'center'}}
                  resizeMode="contain"/>
              </View>
              <View style={comparePageStyle.breakDown}><Text style={{fontWeight:'bold'}}>Total</Text></View>
            </View>
            {breakdownInfo !== [] && breakdownInfo.map((item, index) => (
              <View key={index} style={comparePageStyle.row}>
                <View style={{
                  flex: 1
                }}><Text>{item.name}</Text></View>
                <View style={comparePageStyle.breakDown}><Text>{numberWithCommas(parseInt(item[selectedCategoryGreen]))}</Text></View>
                <View style={comparePageStyle.breakDown}><Text>{numberWithCommas(parseInt(item[selectedCategoryBlue]))}</Text></View>
                <View style={comparePageStyle.breakDown}><Text>{numberWithCommas(parseInt(item[selectedCategoryGray]))}</Text></View>
                <View style={comparePageStyle.breakDown}><Text style={{fontWeight:'bold'}}>{numberWithCommas(parseInt(item[setMetric(item)]))}</Text></View>
              </View>
            ))}
            <View style={{marginVertical: 10}}>
              <Text>
                <Text style={{color: '#70BF41', fontWeight: 'bold'}}>TAP</Text> this card to <Text style={{color: '#00ADEF'}}>learn more.</Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontWeight:'bold', fontSize: 20, alignSelf: 'center'}}>Virtual Water</Text>
            <Text style={{fontWeight:'600', fontSize: 16, alignSelf: 'center'}}>We Show Global Averages</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
              <Image source={Profiles["Globe"]} style = {{width: DeviceWidth*.3*(432/388), height: DeviceWidth*.3}}/>
              <Image source={Profiles["Chart"]} style = {{width: DeviceWidth*.3*(520/416), height: DeviceWidth*.3}}/>
            </View>
            <Text>
              In places where virtual water amounts are known,
              we show the <Text style={{fontWeight:'bold'}}>globally averaged </Text>amount that it takes to
              produce an item. {'\n'}
            </Text>
            <Text>
              The water footprint of a product (also known as the Virtual Water content) is the volume of freshwater
              used to produce the product, measured in the place it was actually made.{'\n'}
              - <Text
              onPress={() => WebBrowser.openBrowserAsync('https://www.watercalculator.org')}
              style={{color: '#00ADEF'}}>Waterfootprint.org</Text>
              {'\n'}
            </Text>
            <Text>
              See our
              <Text
                onPress={() => {
                  navigation.navigate('Virtual Water')
                  setInfoVisible(false)
                }}
                style={{color: '#00ADEF', fontWeight: 'bold'}}> Virtual Water</Text> page for more info.
            </Text>
          </View>
        </FlipCard>

        {/* Info Modal */}
        <Modal animationType="slide" transparent={true} visible={infoVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <View style={{
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: 'white',
              borderColor: '#00ADEF',
              borderWidth: 1.5,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <TouchableOpacity
                onPress={() => {
                  setInfoVisible(false);
                }}
                style={{
                  zIndex: 10,
                  alignSelf: 'flex-end',
                  position: 'absolute'
                }}>
                <Image
                  source={itemDetailImages.closeInfoModal}
                  style={{
                    width: 50,
                    height: 50
                  }}/>
              </TouchableOpacity>
              <View style={{
                marginTop: 20,
                marginHorizontal: 15,
                marginBottom: 15,
                padding: 15
              }}>
                <Text>
                  Virtual Water is the total volume of water used in the production of a good or service.
                  See our
                  <Text
                    onPress={() => {
                      navigation.navigate('Virtual Water')
                      setInfoVisible(false)
                    }}
                    style={{color: '#00ADEF'}}> Virtual Water</Text> page for more information. Most
                  numbers shown represent the Virtual Water totals. Where Virtual water amounts are
                  unknown, we’ve sourced statistics found on our
                  <Text
                    onPress={() => {
                      navigation.navigate('Sources & Resources')
                      setInfoVisible(false)
                    }}
                    style={{color: '#00ADEF'}}> Sources & Resources</Text> page.
                </Text>
              </View>
            </View>
          </View>
        </Modal>

        {/* Export Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalShareVisible}>
          <BlurView
            intensity={90}
            tint="light"
            style={{flex: 1}}>
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
                  ref={refShareCompare}
                  options={{
                    format: "jpg",
                    quality: 0.9
                  }}>
                  {comparePhoto !== '' && (
                    <ImageBackground
                      style={{
                        height: headerHeight + listHeight + watermarkHeight / 2,
                        width: DeviceWidth * 0.9,
                        backgroundColor: 'white'
                      }}
                      imageStyle={{
                        position: 'absolute',
                        top: headerHeight + listHeight - watermarkHeight / 1.5,
                        left: (DeviceWidth * (0.9 - 0.3)) / 2,
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
                        source={{uri: comparePhoto}}
                        onLoad={onImageLoad}
                        style={{
                          height: listHeight,
                          width: DeviceWidth * 0.9,
                        }}/>
                    </ImageBackground>
                  )}

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
                  setComparePhoto('')
                  setSharePhoto('')
                },
                color: 'black'
              }}
              bottomMargin={40}
            />
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
                    Share.share({url: sharePhoto})
                    analytics().logEvent('Share_Compare')
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
                      analytics().logEvent('Save_Compare')
                    })
                  }}
                />
              </View>
            </View>
          </BlurView>
        </Modal>

        {/* Water Card modal */}
        <Modal animationType="slide" transparent={true} visible={waterVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.modalView}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 22,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {waterCategory}
              </Text>
              {getContent(waterCategory)}
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#70BF41'}}
                onPress={() => {
                  setWaterVisible(!waterVisible);
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Close
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </ScrollView>
    ))
  )
}

let DeviceWidth = Dimensions.get("screen").width;
const comparePageStyle = StyleSheet.create({
  metricSwitch: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: 20,
    borderColor: '#00ADEF',
    borderWidth: 2,
    borderRadius: 10,
    width: 65,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40
  },
  rowStyle: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 5,
  },

  flipCard: {
    alignSelf: 'center',
    width: DeviceWidth*.9,
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  breakdownTableHeader: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:'5%',
    marginBottom: 10
  },
  breakDown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: 'gray'
  },
  water: {
    marginVertical: 5
  },
  exportButton: {
    width: 130,
    marginTop: 10,
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#00ADEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  waterTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 7
  }
})
