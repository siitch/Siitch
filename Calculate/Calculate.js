
import React, {useState,setState} from 'react';
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
import { cos } from 'react-native-reanimated';
import { screensEnabled } from 'react-native-screens';
import * as Analytics from "expo-firebase-analytics";

// var pages=[];
var itemNameList=[];
var itemQuantityList=[];
var itemFrequencyList=[];
var itemCostList=[];
var itemCostLList=[];
var itemYearlyCostList=[];
var itemYearlyLCostList=[];
var itemMeasurementListL = [];
var itemMeasurementListG = [];
var itemIndividualUnitListL = [];
var itemIndividualUnitListG = [];

var itemName;
var itemCost;
var itemCostL;
var itemYearlyCost;
var itemYearlyLCost;
var itemMeasurementL = [];
var itemMeasurementG = [];
var itemIndividualUnitL =[];
var itemIndividualUnitG =[];
var loading = false;

const DeviceWidth = Dimensions.get('window').width;

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
    let itemsList = [];
    var selectedItem = [];

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

    var individual_sum = 0;

    const [focusHeight,setFocusHeight] = useState(0);
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
    const [inputValue, setInputValue] = useState('');
    const [unit, setUnit] = useState('G');
    const [unitG,setUnitG] = useState(true);
    const [reallyOutputs,setReallyOutput] = useState(0);
    const [reallyLOutputs,setReallyLOutput] = useState(0);
    const [showAnotherRunningtotal,setShowAnotherRunningtotal] = useState(false);

    var [yearlyCostTotal, setYearlyCostTotal] = useState(0);
    var [mixCostTotal, setMixCostTotal] = useState(0);
    var [mixCostLTotal, setMixCostLTotal] = useState(0);
    var [yearlyCostLTotal, setYearlyCostLTotal] = useState(0);

    var [itemOpenList,setItemOpenList] = useState([]);



    const updateReallyOutput = (currentUnit) =>{
        if(currentUnit=="yearly")
        {
            setReallyOutput(yearlyCostTotal);
            setReallyLOutput(yearlyCostLTotal);
        }
        else if(currentUnit=="monthly")
        {
            setReallyOutput(~~(yearlyCostTotal/12));
            setReallyLOutput(~~(yearlyCostLTotal/12));
        }
        else if(currentUnit=="weekly")
        {
            setReallyOutput(~~(yearlyCostTotal/365)*7);
            setReallyLOutput(~~(yearlyCostLTotal/365)*7);
        }
        else
        {
            setReallyOutput(~~(yearlyCostTotal/365));
            setReallyLOutput(~~(yearlyCostLTotal/365));
        }
    }

    const updateYearlyCostTotal = () =>{
        var sum=0;
        var sumL=0;
        for(var i=0;i<itemYearlyCostList.length;i++)
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
        var sum=0;
        var sumL=0;
        for(var i=0;i<itemCostList.length;i++)
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

    const fetchData = () => {
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
                    itemMeasurementL = fetchedData[item]['Display Unit Metric'];
                    itemMeasurementG = fetchedData[item]['Display Unit Imperial'];
                    itemIndividualUnitG = fetchedData[item]['Individiual Unit Gal'];
                    itemIndividualUnitL = fetchedData[item]['Individiual Unit L'];
                }
                itemName=item;

                if (!(item in fetchedData)) {
                    setError({status: true, message: 'This item does not exist'});
                } else if (!fetchedData[item][waterParameter(id,'G')]) {
                    setError({
                        status: true,
                        message: 'Water unit does not exist. Try the compare tool.',
                    });
                } else if (
                    item in fetchedData &&
                    fetchedData[item][waterParameter(id,'G')]
                ) {
                    itemCost=fetchedData[item][waterParameter(id,'G')];
                    itemCostL=fetchedData[item][waterParameter(id,'L')];
                    addtoList(fetchedData[item][waterParameter(id,'G')]);
                    setError({status: false, message: ''});
                    setComputed(true);
                }
            })
            .then(()=>{
                console.log(loading)

                if(loading)
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
                }
            })
    };

    const calculate = () => {
        if (!item) {
            setError({status: true, message: 'Please select an item'});
        } else if (!frequency) {
            setError({status: true, message: 'Please select a frequency'});
        } else if(!quantity) {
            setError({status: true, message: 'Please select a quantity'});
        }
        else {
            fetchData();
        }
    };

    const upgradePages =() =>{
        // pages=[]
        // setPages([]);
        var temppages=[];
        for(var i=0;i<itemFrequencyList.length;i++)
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

    clickToScroll =() =>
    {
        this._scrollView.scrollTo({y:600,animated: true});
    }

    const clearElements = () => {
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

    return (
        <ScrollView ref={view => this._scrollView = view} style={{backgroundColor: 'white'}}>
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
                            Analytics.logEvent('Use_GL_switch',{
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
                            Analytics.logEvent('Use_GL_switch',{
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
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            marginTop: '21%',
                            paddingTop: 30,
                            paddingLeft: '12%',
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
                        width: 150,
                        height: 150,
                        marginLeft: DeviceWidth * 0.3,
                        marginTop: 20,
                        marginBottom: 30,
                    }}
                    source={require('./../images/Calculator_two_leaves.png')}
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
                                    itemQuantity=currentQuantity.label;
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
                                    itemFrequency=currentFrequency.value;
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

                {error.status && Alert.alert(error.message)}

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
                                    Analytics.logEvent('Calculate')
                                }}
                                style={{
                                    padding: 15,
                                    borderRadius: 30,
                                    backgroundColor: 'orange',
                                    margintop:10,
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
                                    computed ? clearElements() : calculate();
                                    // calculate(item,frequency);
                                }}
                                style={{
                                    padding: 15,
                                    borderRadius: 30,
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
                                    Analytics.logEvent('Challenge_pressed')
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
                                    setContext(true)
                                    setModalVisible(true)
                                    Analytics.logEvent('Context_pressed')
                                }}
                                style={{
                                    padding: 15,
                                    borderRadius: 30,
                                    marginLeft: 10,
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
                                onPress={() => {setShowlist(true);

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
                                    if(itemNameList.length !==0)
                                        setShowAnotherRunningtotal(true);
                                    Analytics.logEvent('Add_to_running_total')
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
                    <View style={{flexDirection: 'row',
                        marginLeft:10,
                        marginRight:10,}}>

                        {showAnotherRunningtotal && (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {calculate();
                                        setShowAnotherRunningtotal(false);
                                        Analytics.logEvent('Calculate')
                                    }}
                                    style={{
                                        padding: 15,
                                        borderRadius: 30,
                                        backgroundColor: 'orange',
                                        margintop:10,
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
                                        console.log(loading)
                                        loading=true;
                                        console.log(loading)
                                        calculate();
                                        console.log(loading)
                                        Analytics.logEvent('Add_to_running_total')
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

                {showlist && (

                    <View style={{flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(198, 198, 198, 0.2)',
                        height:40
                    }}>
                        <Text style={{fontSize: 23, fontWeight: '500',marginLeft:20,marginTop:7}}>Running Total</Text>
                        <Image
                            style={{width: 30, height: 30,marginRight:65,marginTop:5}}
                            source={require('./../images/water_drop_150px_wide2.png')}
                        />
                    </View>
                )}

                <View>
                    { pages.map((elem,index)=>{
                        var i =index
                        return (<View>
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

                                {unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginLeft:15,marginTop:10}}>{itemNameList[index]} {itemMeasurementListG[index]}</Text>)}
                                {!unitG && (<Text style={{fontSize: 20, fontWeight: '400',marginLeft:15,marginTop:10}}>{itemNameList[index]} {itemMeasurementListL[index]}</Text>)}
                            </View>

                            <View style={{flexDirection: 'row',
                                marginBottom: 5,
                                marginLeft:20,
                                marginRight:10}}>
                                {/* <Text style={{fontSize: 20, fontWeight: '400',marginLeft:10}}>{itemQuantityList[i]}</Text> */}
                                <DropDownPicker defaultValue={itemQuantityList[index]}
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
                                <DropDownPicker defaultValue={itemFrequencyList[index]}
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

                                {unitG && (<Text style={{fontSize: 20, fontWeight: '400',width:100,textAlign:'right',marginLeft:50,marginTop:10}}>{numberWithCommas(itemCostList[i]*itemQuantityList[i])}</Text>)}
                                {!unitG && (<Text style={{fontSize: 20, fontWeight: '400',width:100,textAlign:'right',marginLeft:50,marginTop:10}}>{numberWithCommas(itemCostLList[i]*itemQuantityList[i])}</Text>)}

                                <TouchableHighlight  onPress={(i) => deleteItemFromList(index)}>
                                    <Image
                                        style={{
                                            width: 25,
                                            height: 25,
                                            marginLeft:15,
                                            marginTop:10
                                        }}
                                        source={require('./../images/red_x.png')}/>
                                </TouchableHighlight>
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
                                    Analytics.logEvent('Use_GL_switch',{
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
                                    Analytics.logEvent('Use_GL_switch',{
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

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Image
                                style={{width: 30, height: 30, marginLeft:'40%',marginTop:15,marginBottom:20}}
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
                            <Text style={{fontSize: 30, fontWeight: '600'}}>Impact</Text>
                        </View>

                        <DropDownPicker defaultValue='yearly'
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
                                            updateReallyOutput(currentUnit.value)
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

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Image
                                style={{width: 30, height: 30, marginTop:25}}
                                source={require('./../images/water_drop_150px_wide2.png')}
                            />
                            {unitG && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20,marginRight:20}}>{(reallyOutputs!=0)?numberWithCommas(reallyOutputs):numberWithCommas(yearlyCostTotal)} Gal</Text>)}
                            {!unitG && (<Text style={{fontSize: 30, fontWeight: '500',marginTop: sOutputOpened ? 200 : 20,marginRight:20}}>{(reallyLOutputs!=0)?numberWithCommas(reallyLOutputs):numberWithCommas(yearlyCostLTotal)} L</Text>)}
                        </View>

                    </View>
                )}

                {showlist &&(
                    <View>
                        <TouchableOpacity
                            onPress={() => {setShowlist(false);
                                clearElements();
                            }}
                            style={{
                                padding: 15,
                                borderRadius: 30,
                                backgroundColor: 'orange',
                                marginLeft: '19%',
                                marginRight: '19%',
                                marginBottom: '10%',
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
            name="Calculator"
            component={CalculateScreen}
            options={{headerShown: false}}
        />
    </CalculateStack.Navigator>
);
