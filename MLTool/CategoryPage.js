import { FirebaseRealtimeDatabase, ref, onValue } from "../Firebase/firebase";
import {useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import * as React from "react";
import Profiles from "./ResultImage";
import {Image, ScrollView, Text, TouchableHighlight, View} from "react-native";
import {styles} from "../Search/Style";

// Leveraged from Ranking
export const CategoryPage = ( {category} ) => {
    // Variable to hold data fetched from database
    let fetchedData = {};
    // List to hold item names
    const itemsList = [];
    // Temp item array, can hold 0 or more rows of up to three items each
    const itemArr = [];
    // The final 3 * x dimension search result list to render and display, will be equal to itemArr
    const [item, setItem] = useState([]);
    // Used to navigate to Item Detail
    const navigation = useNavigation();

    useEffect(() => {
        fetchData();
    }, []);

    // Firebase is already connected in Catalogue.js, no need to initialize again
    const fetchData = async () => {
        const fetchDataRef = ref(FirebaseRealtimeDatabase, '/');
        await onValue(fetchDataRef, (data) => {
            fetchedData = data.val();
            for (const item in fetchedData) {
                if ((fetchedData[item]["Category"] === category ||
                  fetchedData[item]["Category 2"] === category ||
                  fetchedData[item]["Category 3"] === category)) {
                    itemsList.push(item);
                }
            }
        });
        let index = 0;
        let arr;
        for (let i = index; i < itemsList.length; i++) {
            if (index % 3 === 0) {
                arr = [];
                itemArr.push(arr);
            }
            let dict = {};
            dict['name'] = itemsList[i];
            // Used for debug
            //console.log(itemsList[i])
            arr.push(dict);
            index++;
        }
        setItem(itemArr);
    }

    return(
        <ScrollView
            style={{backgroundColor: '#FFFFFF'}}
            scrollIndicatorInsets={{ right: 1 }}
            contentContainerStyle={{alignItems: 'center'}}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 40,
                marginBottom: 20,
            }}>Select Item</Text>
            {item.map((row, i) => (
                <View key={i} style={styles.avatarView}>
                    {row.map(url => (
                        <TouchableHighlight
                            key={url.name}
                            onPress={() => navigation.navigate('Detail', {itemName: url.name})}
                            activeOpacity={1}
                            underlayColor="transparent"
                            style={{marginLeft: 10}}>
                            <View style={styles.eachAvatar}>
                                <Image
                                    source={Profiles[url.name]}
                                    style={{
                                        backgroundColor: 'white',
                                        width: 60,
                                        height: 60,
                                        marginBottom: 10,
                                        marginTop: 10,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{width: 90, textAlign: 'center'}}>
                                    {url.name}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>
            ))}
        </ScrollView>
    )
}
