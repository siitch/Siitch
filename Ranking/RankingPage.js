import Profiles from '../ImageDB.js';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { styles } from './Styles';
import { RankingItem } from './RankingItem';
import firebase from 'firebase';

let fetchedData = {};
let items = {};
let sortable = [];
let max = 0;

const DeviceWidth = Dimensions.get('window').width;

export const RankingPage = ({category, id}) => {

    const [fetched, handleFetch] = useState(false);
    const [currentCategory, changeCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [unit, setUnit] = useState('G');

    const waterParameter = () => {
        if(unit === 'L') {
            if (id === "EDI" || id === "Drinks - All" || id === "Drinks - Alc") {
                return "Single item   L";
            }
            else {
                return "Global Liters p kg";
            }
        }
        else if(unit === 'G') {
            if (id === "EDI" || id === "Drinks - All" || id === "Drinks - Alc") {
                return "Single item   Gal";
            }
            else {
                return "Global Gallon p lb";
            }
        }
    }

    const parameter = waterParameter();

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

    const processDatabaseValue = (value) => {
        if(typeof value === 'string') {
            return value.replace(',', '');
        }
        else {
            return value;
        }
    }

    const fetchData = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        firebase
        .database()
        .ref('/')
        .once('value', data => { 
            fetchedData = data.val();
            for (var item in fetchedData) {
                if((fetchedData[item]["Category"] === id || fetchedData[item]["Category 2"] === id || fetchedData[item]["Category 3"] === id) && fetchedData[item][parameter]) {
                    items[item] = fetchedData[item];
                }
            }

            sortable = [];

            if(Object.keys(items).length > 0) {
                for (let item in items) {
                    sortable.push([item, processDatabaseValue(items[item][parameter])]);
                }
    
                sortable.sort(function(a, b) {
                    return parseInt(a[1]) - parseInt(b[1]);
                });
    
                min = parseInt(sortable[0][1]);
    
                sortable.reverse();
    
                max = parseInt(sortable[0][1]);
    
                handleFetch(true);
            }
        });
    }

    if(!fetched) {
        fetchData();
    }

    if(category !== currentCategory) {
        changeCategory(category);
        handleFetch(false);
        items = {};
        sortable = [];
        max = 0;
    }

    return (
        <View style={styles.meats}>
            <ScrollView>

                <View style={{ 
                    flexDirection: 'row', 
                    marginTop: '3%', 
                    marginLeft: 20, 
                    borderColor: '#80CAFF',
                    borderWidth: 2,
                    borderRadius: 20, 
                    width: 65,
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20
                }}>
                    <TouchableOpacity onPress={() => { handleFetch(false); setUnit('G'); }} >
                        <Text style={{ paddingTop: 5, fontSize: 20, fontWeight: unit === 'G' ? 'bold' : 'normal' }}>G</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 5, fontSize: 20 }}> / </Text>
                    <TouchableOpacity onPress={() => { handleFetch(false); setUnit('L'); }} >
                        <Text style={{ paddingTop: 5, fontSize: 20, fontWeight: unit === 'L' ? 'bold' : 'normal' }}>L</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center'}}>

                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 10 }}>
                        {category}
                    </Text>

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', marginBottom: '5%'}}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={Profiles.water}
                    />
                    <Text style={{fontSize: 15, marginLeft: 5}}>{ unit === 'L' ? 'Liters per Kilogram' : 'Gallons per Pound' }</Text>
                    </View>

                    {
                        sortable.map((item, index) => {
                            return(
                                <RankingItem key={index} max={max} cost={parseInt(item[1])} item={item[0]} image={Profiles[item[0]] ? Profiles[item[0]] : Profiles.water_drops} unit={unit} /> 
                            )
                        })
                    }

                    <View>
                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
                        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10, marginRight: 10}}>
                            Water awareness is key, but many factors determine the eco-cost of a product.&nbsp;
                        </Text>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.modalView}>
                                <Image style={{ width: 300 }} source={Profiles.learn_more} resizeMode='contain' />
                                <Text style={{ marginBottom: 15, textAlign: "left" }}>
                                    Farming methods, energy sources, transportaton costs and numerous elements all contribute to a product’s eco-cost.
                                </Text>
                                <Text style={{ marginBottom: 15, textAlign: "left" }}>
                                    The water cost is just one benchmark, but we hope it provides some context to help you make more informed decisions.
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
                
                        <TouchableOpacity
                            onPress={() => {
                                    setModalVisible(true);
                                }
                            }
                        >
                            <Text style= {{ color:'blue', marginTop: 20, marginBottom: 20, marginLeft: 10, paddingLeft: DeviceWidth*0.37 }}>Learn More</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10}}>
                        Don't see an item you're looking for? We only list quantifiable
                        items from reputable studies. We'll add more as we find them.
                    </Text>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
            </ScrollView>
        </View>
    );
}