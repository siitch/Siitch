import React, {useRef}  from 'react';
import { Text } from "react-native";
// Firebase screen analytics
import analytics from '@react-native-firebase/analytics';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// Navigation
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Tool Screens
import { OnboardingScreen } from "./OnboardingScreen";
import { HomeStackScreen } from "./Homepage/Homepage";
import {RankStackScreen} from './Ranking/Ranking';
import Search from './Search/Search';
import {CalculateStackScreen} from './Calculate/Calculate';
import {CompareScreen} from './Comparing/Compare';
import {CameraScreen} from "./MLTool/CameraView";
// Extra screens for global use
import { Sources } from './Menu/Sources';
import { Virtual } from './Menu/Virtual';
import ItemDetail from "./MLTool/ItemDetail";
import ComparePage from "./Comparing/ComparePage";
import { SpecialItemTabs } from "./Search/SpecialItemTabs"; // Beef, Jeans, Makeup Tab Screen
import What from './MeatComponents/What'; // Beef import
import WhatJeans from './JeansComponents/WhatJeans'; // Jeans import
import WhatMakeUp from './MakeupComponents/WhatMakeUp'; // Makeup import
// Don't feel bad Global Modal
import {ReactNavigationOverlay} from './components/ReactNavigationOverlay'
import {Overlay} from './components/overlay'
import {GlobalModal} from "./components/GlobalModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LandingDetails = ({ initialRouteName }) => {
  const ToWhat = ({route}) => {
    const { itemName } = route.params;
    if (itemName === 'Beef') {
      return <What />;
    } else if (itemName === 'Jeans') {
      return <WhatJeans />;
    } else {
      return <WhatMakeUp />;
    }
  };
  // Hide tab bar when the current screen is CameraView
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
    if( routeName === "Confirm" || routeName === "Detail" ) {
      return 'flex';
    }
    return 'none';
  };
  const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
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
          name="Search Tool"
          component={Search}
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
          name="Calculate"
          component={CalculateStackScreen}
          options={{
            tabBarLabel: 'Calculate',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CompareTab"
          component={CompareScreen}
          options={{
            tabBarLabel: 'Compare',
            tabBarIcon: ({color, size}) =>
              <Text style={{
                fontFamily: 'Lato-Bold',
                color: color,
                fontSize: size*.88,
              }}>VS</Text>
          }}
        />

        <Tab.Screen
          name="MLTool"
          component={CameraScreen}
          options={({route})=>({
            tabBarLabel: 'Eco-Cam',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
            tabBarStyle: {
              display: getTabBarVisibility(route)
            }
          })}
        />
      </Tab.Navigator>
    );
  };

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  function startTimer() {
    // AsyncStorage variable for global modal display
    AsyncStorage.getItem('surprisedYet').then(value => {
      if(value == null){
        if(currentSurpriseModal !== null && !occupied) {
          console.log('open surprise modal')
          Overlay.show(GlobalModal)
        } else if (occupied) {
          // If there is a modal shown, try to open the global modal again when it's closed
          let retry = setInterval(()=>{
            console.log('retrying')
            if (!occupied) {
              setTimeout(()=>Overlay.show(GlobalModal), 1500)
              clearInterval(retry)
            }
          }, 1500)
        }
      }
    });
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_class: currentRouteName,
            screen_name: currentRouteName
          });
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;

        // Once the user starts to interact with any of the five tools, start
        // Don't be surprised modal timer
        if(currentRouteName === "Ranking" ||
          currentRouteName === "Search Tool" ||
          currentRouteName === "Calculator" ||
          currentRouteName === "Compare" ||
          currentRouteName === "CameraView") {
          setTimeout(startTimer, 1000 * 120)
        }
      }}
    >
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SpecialItemTabs"
          component={SpecialItemTabs}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            title: "Detail",
            headerRight: () => (
              <MaterialCommunityIcons
                name="home"
                size={25}
                color={'grey'}
                style={{
                  paddingRight: 15
                }}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Detail"
          component={ItemDetail}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerRight: () => (
              <MaterialCommunityIcons
                name="home"
                size={25}
                color={'grey'}
                style={{
                  paddingRight: 15
                }}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Compare Details"
          component={ComparePage}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerRight: () => (
              <MaterialCommunityIcons
                name="home"
                size={25}
                color={'grey'}
                style={{
                  paddingRight: 15
                }}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        {/* Virtual Water screen */}
        <Stack.Screen
          name="Virtual Water"
          component={Virtual}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerRight: () => (
              <MaterialCommunityIcons
                name="home"
                size={25}
                color={'grey'}
                style={{
                  paddingRight: 15
                }}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        {/* Sources & Resources screen */}
        <Stack.Screen
          name="Sources & Resources"
          component={Sources}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerRight: () => (
              <MaterialCommunityIcons
                name="home"
                size={25}
                color={'grey'}
                style={{
                  paddingRight: 15
                }}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="What"
          component={ToWhat}
          options={{
            headerBackTitleVisible: false,
            title: ''
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <ReactNavigationOverlay/>
    </NavigationContainer>
  );
};

export {
  LandingDetails
}
