import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { CategoryIcon } from './CategoryIcon';
import { styles } from './Styles';
import Profiles from '../ImageDB';
import { RankingPage } from './RankingPage';

function RankScreen({navigation}) {
    return (
      <View style={styles.rankingPage}>
        <ScrollView>
            <View style={{alignItems: 'center', marginTop: '25%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    Select a Category
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginTop: '15%',justifyContent: 'center', alignItems: 'center',}}>
                <View className="column1">
                    <TouchableOpacity onPress={() => navigation.navigate('Meats')} >
                        <CategoryIcon category='Meats' image={Profiles.meats} />
                    </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Everyday Foods')} >
                        <CategoryIcon category='Everyday Foods' image={Profiles.everyday_food} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Seeds')} >
                        <CategoryIcon category='Seeds' image={Profiles.seeds} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Drinks-All')} >
                        <CategoryIcon category='Drinks-All' image={Profiles.drinks_all} />
                    </TouchableOpacity>
                </View>
                <View className="column2">
                    <TouchableOpacity onPress={() => navigation.navigate('Fruits')} >
                        <CategoryIcon category='Fruits' image={Profiles.Apples} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Everyday Items')} >
                        <CategoryIcon category='Everyday items' image={Profiles.everyday_items} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Grains')} >
                        <CategoryIcon category='Grains' image={Profiles.grains}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Drinks-Alcoholic')} >
                        <CategoryIcon category='Drinks-Alcoholic' image={Profiles.alcoholic_drinks} />
                    </TouchableOpacity>
                </View>
                <View className="column3">
                    <TouchableOpacity onPress={() => navigation.navigate('Vegetables')} >
                        <CategoryIcon category='Vegetables' image={Profiles.vegetables} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Nuts, Beans')} >
                        <CategoryIcon category='Nuts, Beans' image={Profiles.Peanuts} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Oils')} >
                        <CategoryIcon category='Oils' image={Profiles['Olive oil']} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Drinks-NonAlcoholic')} >
                        <CategoryIcon category='Drinks-NonAlcoholic' image={Profiles.non_alcoholic_drinks} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </View>
    );
}

const RankStack = createStackNavigator();

const Meats = ({navigation}) => {
    return (
      <RankingPage category='Meats' id='Meat' navigation={navigation}/>
    )
}
const Fruits = ({navigation}) => {
    return (
      <RankingPage category='Fruits' id='Fruit' navigation={navigation}/>
    )
}
const Vegetables = ({navigation}) => {
    return (
      <RankingPage category='Vegetables' id='Vegetables' navigation={navigation}/>
    )
}
const EverydayFoods = ({navigation}) => {
    return (
      <RankingPage category='Everyday Foods' id='EDF' navigation={navigation}/>
    )
}
const EverydayItems = ({navigation}) => {
    return (
      <RankingPage category='Everyday Items' id='EDI' navigation={navigation}/>
    )
}
const NutsBeans = ({navigation}) => {
    return (
      <RankingPage category='Nuts and Beans' id='Nuts & Beans' navigation={navigation}/>
    )
}
const Grains = ({navigation}) => {
    return (
      <RankingPage category='Grains' id='Grains' navigation={navigation}/>
    )
}
const Seeds = ({navigation}) => {
    return (
      <RankingPage category='Seeds' id='Seeds' navigation={navigation}/>
    )
}
const Oils = ({navigation}) => {
    return (
      <RankingPage category='Oils' id='Oils' navigation={navigation}/>
    )
}
const DrinksAll = ({navigation}) => {
    return (
      <RankingPage category='All Drinks' id='Drinks - All' navigation={navigation}/>
    )
}
const DrinksAlcoholic = ({navigation}) => {
    return (
      <RankingPage category='Alcoholic' id='Drinks - Alc' navigation={navigation}/>
    )
}
const DrinksNonAlcoholic = ({navigation}) => {
    return (
      <RankingPage category='Non-Alcoholic' id='Drinks - NA' navigation={navigation}/>
    )
}

export const RankStackScreen = () => (
    <RankStack.Navigator>
      <RankStack.Screen
        name="Ranking"
        component={RankScreen}
        options={{headerShown: false}}
      />
      <RankStack.Screen name="Meats" component={Meats} />
      <RankStack.Screen name="Fruits" component={Fruits} />
      <RankStack.Screen name="Vegetables" component={Vegetables} />
      <RankStack.Screen name="Everyday Foods" component={EverydayFoods} />
      <RankStack.Screen name="Everyday Items" component={EverydayItems} />
      <RankStack.Screen name="Nuts, Beans" component={NutsBeans} />
      <RankStack.Screen name="Grains" component={Grains} />
      <RankStack.Screen name="Seeds" component={Seeds} />
      <RankStack.Screen name="Oils" component={Oils} />
      <RankStack.Screen name="Drinks-All" component={DrinksAll} />
      <RankStack.Screen name="Drinks-Alcoholic" component={DrinksAlcoholic} />
      <RankStack.Screen name="Drinks-NonAlcoholic" component={DrinksNonAlcoholic} />
    </RankStack.Navigator>
);
