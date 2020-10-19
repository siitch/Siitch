import Vs from './MeatComponents/Vs';
import Grass from './MeatComponents/Grass';
import Recycle from './MeatComponents/Recycle';
import Heart from './MeatComponents/Heart';
import Water from './MeatComponents/Water';
import Search from './Search';
import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './Ranking/Styles';
import {RankStackScreen} from './Ranking/Ranking';

import {images} from './ImageURL';

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
      </Tab.Navigator>
    );
  };
  const WaterPage = ({nagivation, route}) => {
    console.log('WaterPage');
    console.log(getData);
    return <Water inputData={getData} />;
  };
  const searchDetail = ({navigation, route}) => {
    console.log('searchDetail');
    console.log(route.params);
    if (route.params === null) {
      return (
        <View>
          <Text>No Data</Text>
        </View>
      );
    }
    setGetData(route.params);
    return (
      <Tab.Navigator>
        <Tab.Screen name="Water" component={WaterPage} />
        <Tab.Screen name="Vs" component={Vs} />
        <Tab.Screen name="Grass" component={Grass} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="Recycle" component={Recycle} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={searchDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
