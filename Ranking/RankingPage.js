import { images } from '../ImageURL';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './Styles';
import { RankingItem } from './RankingItem';
import firebase from 'firebase';

let fetchedData = {};
let items = {};
let sortable = [];

export const RankingPage = ({category, id}) => {

    const [fetched, handleFetch] = useState(false);
    const [currentCategory, changeCategory] = useState('');

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
                if(fetchedData[item]["Category"] === id) {
                    items[item] = fetchedData[item];
                }
            }

            for (let item in items) {
                sortable.push([item, items[item]["Liters per kg"]]);
            }

            sortable.sort(function(a, b) {
                return parseInt(a[1]) - parseInt(b[1]);
            });

            sortable.reverse();

            handleFetch(true);
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
    }

    return (
        <View style={styles.meats}>
            <ScrollView>
            <View style={{alignItems: 'center', marginTop: '10%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    {category}
                </Text>
    
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', marginBottom: '5%'}}>
                <Image
                    style={{width: 40, height: 40}}
                    source={images.water_drops}
                />
                <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
                </View>

                {
                    sortable.map((item, index) => {
                        return(
                        <RankingItem key={index} cost={item[1]} item={item[0]} image={images.water_drops} /> 
                        )
                    })
                }

                <View>
                    <Text style={{fontSize: 16, marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
                    Water awareness is key, but many factors determine the eco-cost of a
                    product.
                    <Text
                        style={{color: 'blue', fontSize: 16}}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Learn More
                    </Text>
                    </Text>
                </View>
                <View>
                <Text style={{fontSize: 16, marginTop: '5%', marginLeft: '5%', marginRight: '5%', marginBottom: '5%'}}>
                    Don't see an item you're looking for? We only list quantifiable
                    items from reputable studies. We'll add more as we find them.
                </Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}