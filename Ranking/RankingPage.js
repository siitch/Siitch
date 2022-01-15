import Profiles from '../ImageDB.js';
import React, {useEffect, useState} from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { styles } from './Styles';
import { RankingItem } from './RankingItem';
import firebase from 'firebase';
import * as Analytics from 'expo-firebase-analytics';
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";

let fetchedData = {};
let items = {};
let sortable = [];
let max = 0;

const DeviceWidth = Dimensions.get('window').width;

export const RankingPage = ({category, id, navigation}) => {

    const [fetched, handleFetch] = useState(false);
    const [currentCategory, changeCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [unit, setUnit] = useState('G');
    const exceptionCategories = ['Everyday Foods', 'Everyday Items', 'All Drinks', 'Alcoholic', 'Non-Alcoholic'];
    const specialCategory = exceptionCategories.includes(category);

    useEffect(() => {
        async function logRanking (){
            await Analytics.logEvent('View_ranking',{
                Ranking_category: category
            })
        }
        logRanking()
    },[])

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
                        sortable.push([item, processDatabaseValue(items[item][parameter]), (unit === 'G' ? items[item]["Display Unit Imperial"] : items[item]["Display Unit Metric"])]);
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

    const unitTitle = (category, unit) => {
        if(category === "Everyday Items" || category === "Everyday Foods" || category === "All Drinks" || category === "Alcoholic" || category === "Non-Alcoholic") {
            return <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}></View>;
        }
        else {
            return (
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', marginBottom: '5%'}}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={Profiles.water}
                    />
                    <Text style={{fontSize: 15, marginLeft: 5}}>{ unit === 'L' ? 'Liters per Kilogram' : 'Gallons per Pound' }</Text>
                </View>
            );
        }
    }

    return (
        <View style={styles.meats}>
            <ScrollView>

                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: '5%',
                        marginLeft: 20,
                        borderColor: '#00ADEF',
                        borderWidth: 2,
                        borderRadius: 10,
                        width: 65,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <TouchableOpacity onPress={() => { handleFetch(false); setUnit('G');
                            Analytics.logEvent('Use_GL_switch',{
                                switch_to: 'Gallons'
                            })
                        }} >
                            <Text style={{ color: unit === 'G' ? '#00ADEF' : 'black', paddingTop: 5, fontSize: 20, fontWeight: unit === 'G' ? 'bold' : 'normal' }}>G</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 5, fontSize: 20 }}> / </Text>
                        <TouchableOpacity onPress={() => { handleFetch(false); setUnit('L');
                            Analytics.logEvent('Use_GL_switch',{
                                switch_to: 'Liters'
                            })
                        }} >
                            <Text style={{ color: unit === 'L' ? '#00ADEF' : 'black', paddingTop: 5, fontSize: 20, fontWeight: unit === 'L' ? 'bold' : 'normal' }}>L</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, width: DeviceWidth*0.6}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25, paddingTop: 15, paddingLeft: 10, paddingRight: 0, paddingBottom: 10}}>
                            {category}
                        </Text>
                        <TouchableOpacity
                            style={{paddingTop: 8}}
                            onPress={()=>{
                                setInfoVisible(true)
                                Analytics.logEvent('Info_button_pressed',{
                                    infoName: 'Virtual_Water'
                                })
                            }}>
                            <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    {
                        unitTitle(category, unit)
                    }
                    {
                        sortable.map((item, index) => {
                            return(
                                <RankingItem key={index} max={max} cost={parseInt(item[1])} item={item[0]} image={Profiles[item[0]] ? Profiles[item[0]] : Profiles.water_drops} unit={unit} category={id} displayUnit={item[2]} navigation={navigation}/>
                            )
                        })
                    }

                    <View style={{alignItems: 'center'}}>
                        <View style={{width: DeviceWidth, marginLeft: 20, marginRight: 20, marginTop: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
                        <Text style={{fontWeight: 'bold', color: '#002363' ,fontSize: 16, paddingTop: 10, marginTop: 10, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
                            The average person in the US uses {('\n')}about 1,800 gallons (6,820 Liters) of water per day.
                        </Text>
                        <Text style={{fontSize: 16, paddingTop: 10, marginTop: 10, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
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
                                Analytics.logEvent('Ranking_Learn_more')
                            }
                            }
                        >
                            <Text style= {{ color:'blue', marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20, width: DeviceWidth, textAlign: 'center' }}>Learn More</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 16, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
                            Don't see an item you're looking for? We only list quantifiable
                            items from reputable studies. We'll add more as we find them.
                        </Text>
                        <View style={{width: DeviceWidth, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
                    </View>
                </View>
            </ScrollView>

            {/* Info button modal */}
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
                            marginHorizontal: 15,
                            marginBottom: 15,
                            marginTop: 20,
                            padding: 15
                        }}>
                            {specialCategory && (
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
                            )}
                            {!specialCategory && (
                                <Text>
                                    These numbers represent the Virtual Water totals. Virtual water is the total volume of
                                    water used in the production of a good or service. See our
                                    <Text
                                        onPress={() => {
                                            navigation.navigate('Virtual Water')
                                            setInfoVisible(false)
                                        }}
                                        style={{color: '#00ADEF'}}> Virtual Water</Text> page for more information.
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
