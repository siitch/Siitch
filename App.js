import Vs from './MeatComponents/Vs';
import Grass from './MeatComponents/Grass';
import Recycle from './MeatComponents/Recycle';
import Heart from './MeatComponents/Heart';
import Water from './MeatComponents/Water';
import Search from './Search';
import Compare from './Comparing/Compare';
import NormalSearch from './NormalSearchingComponents/NormalSearch';
// Jeans import
import JeansWater from './JeansComponents/JeansWater';
import JeansVs from './JeansComponents/JeansVs';
import JeansRecycle from './JeansComponents/JeansRecycle';
import JeansHeart from './JeansComponents/JeansHeart';
import JeansGrass from './JeansComponents/JeansGrass';
// Makeup import
import MakeupWater from './MakeupComponents/MakeupWater';
import MakeupVs from './MakeupComponents/MakeupVs';
import MakeupRecycle from './MakeupComponents/MakeupRecycle';
import MakeupHeart from './MakeupComponents/MakeupHeart';
import MakeupGrass from './MakeupComponents/MakeupGrass';
//
import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image, Dimensions, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './Ranking/Styles';
import {RankStackScreen} from './Ranking/Ranking';

import {images} from './ImageURL';
const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;

state = {
  search: '',
};

function HomeScreen() {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.center}>
        <Image style={styles.logo} source={images.logo} />
      </View>

      <Text style={styles.text}>Make Good Choices For Our Planet</Text>
      <View>
        <Image
          style={{width: 350, height: 350, marginLeft: '3%'}}
          source={images.landing_image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.bottomtext}>
        See the environmental cost of what you buy, so you can make a difference
        everyday
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

const App = () => {
  const [status, setStatus] = useState(true);
  const [getData, setGetData] = useState({});
  const [keyword, setKeyword] = useState('');
  const GoToSearch = ({navigation}) => {
    return <Search searchData={searchData} navigation={navigation} />;
  };
  const searchData = get => {
    console.log('searchData');
    setGetData(get);
  };
  const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Rank"
          component={RankStackScreen}
          options={{
            tabBarLabel: 'Rank',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="chart-bar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search2"
          component={GoToSearch}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Compare"
          component={Compare}
          options={{
            tabBarLabel: 'Compare',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  const WaterPage = ({nagivation}) => {
    if (keyword === 'Beef') {
      return <Water inputData={getData} />;
    } else if (keyword === 'Jeans') {
      return <JeansWater inputData={getData} />;
    } else {
      return <MakeupWater />;
    }
  };
  const HeartPage = ({navigation}) => {
    if (keyword === 'Beef') {
      return <Heart inputData={getData} />;
    } else if (keyword === 'Jeans') {
      return <JeansHeart inputData={getData} />;
    } else {
      return <MakeupHeart />;
    }
  };
  const VsPage = ({navigation}) => {
    if (keyword === 'Beef') {
      return <Vs inputData={getData} />;
    } else if (keyword === 'Jeans') {
      return <JeansVs inputData={getData} />;
    } else {
      return <MakeupVs />;
    }
  };
  const RecyclePage = ({navigation}) => {
    if (keyword === 'Beef') {
      return <Recycle inputData={getData} />;
    } else if (keyword === 'Jeans') {
      return <JeansRecycle inputData={getData} />;
    } else {
      return <MakeupRecycle />;
    }
  };
  const GrassPage = ({navigation}) => {
    if (keyword === 'Beef') {
      return <Grass inputData={getData} />;
    } else if (keyword === 'Jeans') {
      return <JeansGrass inputData={getData} />;
    } else {
      return <MakeupGrass />;
    }
  };
  const searchDetail = ({navigation, route}) => {
    setGetData(route.params.value);
    let detail = true;
    if (
      route.params.name !== 'Beef' &&
      route.params.name !== 'Jeans' &&
      route.params.name !== 'Makeup'
    ) {
      detail = false;
    }
    setKeyword(route.params.name);
    console.log(route.params.name);
    if (detail) {
      return (
        <Tab.Navigator
          tabBarOptions={{style: {height: DeviceHeight / 8}, showLabel: false}}>
          <Tab.Screen
            name="Water"
            component={WaterPage}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={images.water_drop_click}
                    style={{width: DeviceWidth / 8, height: DeviceHeight / 15}}
                  />
                ) : (
                  <Image
                    source={images.water_drop}
                    style={{width: DeviceWidth / 8, height: DeviceHeight / 15}}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Vs"
            component={VsPage}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={images.vs_select}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ) : (
                  <Image
                    source={images.vs}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Grass"
            component={GrassPage}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={images.grass_select}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ) : (
                  <Image
                    source={images.grass}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Heart"
            component={HeartPage}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={images.heart_select}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ) : (
                  <Image
                    source={images.heart}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Recycle"
            component={RecyclePage}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={images.recycle_select}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ) : (
                  <Image
                    source={images.recycle}
                    style={{width: DeviceWidth / 7, height: DeviceHeight / 15}}
                  />
                ),
            }}
          />
        </Tab.Navigator>
      );
    }
    return (
      <NormalSearch name={route.params.name} inputData={route.params.value} />
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={searchDetail}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Home')}
                title="Home"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
