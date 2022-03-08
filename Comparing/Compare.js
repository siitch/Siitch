import 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import * as React from 'react';
import {styles} from './Styles';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Alert,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPicker from 'rn-modal-picker';
import ComparePage from "./ComparePage";
import analytics from '@react-native-firebase/analytics';

const {width} = Dimensions.get('screen');
let itemsToBeCompared = [];
let availableSlots = [0, 1]

export default function Compare ({navigation}) {
  const slotsNum = 18
  let [refresh, setRefresh] = useState(false)

  useEffect(()=>{
    //console.log(itemsToBeCompared)
  }, [refresh, availableSlots])

  function addSlot () {
    const slotCount = availableSlots.length
    const lastSlot = availableSlots.indexOf(slotCount - 1)
    if (lastSlot <= slotsNum - 2) {
      availableSlots.push(lastSlot + 1)
      setRefresh(!refresh)
    }
  }

  function closeSlot (slotNumber) {
    const slotCount = availableSlots.length
    if (slotCount > 2) {
      itemsToBeCompared.splice(slotNumber, 1)
      availableSlots.pop()
      setRefresh(!refresh)
    }
  }

  function checkEmpty () {
    return (itemsToBeCompared.length < availableSlots.length) || itemsToBeCompared.includes(undefined)
  }

  function checkDuplicates () {
    return new Set(itemsToBeCompared).size !== itemsToBeCompared.length
  }

  return (
    <View style={styles.rankingPage}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginTop: '25%',
            marginBottom: '15%',
          }}>
          <Text style={styles.title}>Compare</Text>
          {availableSlots.map((slotNumber, index)=>{
            return (
              <CompareItemPicker key={index} slotNumber={slotNumber} closeSelf={()=>{closeSlot(slotNumber)}}/>
            )
          })}

          {(availableSlots.length < slotsNum) && (
            <View>
              <TouchableOpacity
                style={{
                  width: width / 6,
                  height: 60,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: 'gray',
                }}
                onPress={() => {
                  addSlot()
                }}>
                <View style={styles.center}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: 'gray',
                      textAlignVertical: 'center',
                      fontWeight: 'bold',
                    }}>
                    +
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          <View>
            <TouchableOpacity
              style={{
                width: width / 2,
                height: 50,
                borderRadius: 30,
                backgroundColor: '#70BF41',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}
              onPress={() => {
                checkEmpty()
                  ? Alert.alert('Please select an item')
                  : checkDuplicates()
                    ? Alert.alert('You have entered an item twice')
                    : navigation.navigate('Compare Details', {
                      itemsArray : itemsToBeCompared
                    });
                analytics().logEvent('Compare',{
                  quantity: itemsToBeCompared.length
                })
                // console.log(itemsToBeCompared)
              }}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}>
                  Compare
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: width / 2,
                height: 50,
                borderRadius: 30,
                backgroundColor: '#EAAD28',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}
              onPress={() => {
                itemsToBeCompared = []
                availableSlots = [0, 1]
                setRefresh(!refresh)
              }}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}>
                  Clear
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

function CompareItemPicker ({slotNumber, closeSelf}) {
  const [updateSelf, setUpdateSelf] = useState(true)
  useEffect(()=>{
    if (itemsToBeCompared[slotNumber] === undefined) {
      console.log(slotNumber + 'is null')
    }
  })
  useEffect(()=>{
    //console.log('refresh item'+ slotNumber)
  }, [updateSelf, slotNumber, itemsToBeCompared])
  const placeHolderText = ''
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={styles.selectItemText}>
        Select Item {slotNumber + 1}
      </Text>
      <View style={styles.container}>
        <View
          style={{
            width: 200,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <RNPicker
            dataSource={globalList}
            dummyDataSource={globalList}
            defaultValue={true}
            pickerTitle={'Search Items'}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={'fade'}
            searchBarPlaceHolder={'Search.....'}
            showPickerTitle={true}
            searchBarContainerStyle={styles.searchBarContainerStyle}
            pickerStyle={styles.pickerStyle}
            itemSeparatorStyle={styles.itemSeparatorStyle}
            pickerItemTextStyle={styles.listTextViewStyle}
            selectedLabel={itemsToBeCompared[slotNumber]}
            placeHolderLabel={placeHolderText}
            selectLabelTextStyle={styles.selectLabelTextStyle}
            placeHolderTextStyle={styles.placeHolderTextStyle}
            dropDownImageStyle={styles.dropDownImageStyle}
            selectedValue={(index, item) => {
              itemsToBeCompared[slotNumber] = item.name
              setUpdateSelf(!updateSelf)
            }}
          />
          {slotNumber > 1 && (
            <MaterialCommunityIcons
              name="close"
              color={'gray'}
              size={40}
              style={{marginLeft: -18}}
              onPress={() => {
                closeSelf()
                setUpdateSelf(!updateSelf)
              }}
            />
          )}
        </View>
      </View>
    </View>
  )
}

const compareStack = createStackNavigator();

export const CompareScreen = () => (
    <compareStack.Navigator>
        <compareStack.Screen
            name="Compare"
            component={Compare}
            options={{headerShown: false}}
        />
        <compareStack.Screen name="Compare Details" component={ComparePage} />
    </compareStack.Navigator>
);
