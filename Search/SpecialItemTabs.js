import { Dimensions, Image } from "react-native";
import { images } from "../ImageURL";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Water from "../MeatComponents/Water";
import JeansWater from "../JeansComponents/JeansWater";
import MakeupWater from "../MakeupComponents/MakeupWater";
import Heart from "../MeatComponents/Heart";
import JeansHeart from "../JeansComponents/JeansHeart";
import MakeupHeart from "../MakeupComponents/MakeupHeart";
import Vs from "../MeatComponents/Vs";
import JeansVs from "../JeansComponents/JeansVs";
import MakeupVs from "../MakeupComponents/MakeupVs";
import Recycle from "../MeatComponents/Recycle";
import JeansRecycle from "../JeansComponents/JeansRecycle";
import MakeupRecycle from "../MakeupComponents/MakeupRecycle";
import Grass from "../MeatComponents/Grass";
import JeansGrass from "../JeansComponents/JeansGrass";
import MakeupGrass from "../MakeupComponents/MakeupGrass";


const Tab = createBottomTabNavigator();

export const SpecialItemTabs = ({ route }) => {
  const DeviceHeight = Dimensions.get('window').height;
  const DeviceWidth = Dimensions.get('window').width;
  const { itemName } = route.params;
  const WaterPage = () => {
    if (itemName === 'Beef') {
      return <Water/>;
    } else if (itemName === 'Jeans') {
      return <JeansWater/>;
    } else {
      return <MakeupWater/>;
    }
  };
  const HeartPage = () => {
    if (itemName === 'Beef') {
      return <Heart/>;
    } else if (itemName === 'Jeans') {
      return <JeansHeart/>;
    } else {
      return <MakeupHeart/>;
    }
  };
  const VsPage = () => {
    if (itemName === 'Beef') {
      return <Vs/>;
    } else if (itemName === 'Jeans') {
      return <JeansVs/>;
    } else {
      return <MakeupVs/>;
    }
  };
  const RecyclePage = () => {
    if (itemName === 'Beef') {
      return <Recycle/>;
    } else if (itemName === 'Jeans') {
      return <JeansRecycle/>;
    } else {
      return <MakeupRecycle/>;
    }
  };
  const GrassPage = () => {
    if (itemName === 'Beef') {
      return <Grass/>;
    } else if (itemName === 'Jeans') {
      return <JeansGrass/>;
    } else {
      return <MakeupGrass/>;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: DeviceHeight / 10
        }
    }}
    >
      <Tab.Screen
        name="Water"
        component={WaterPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={images.water_drop_click}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={images.water_drop}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
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
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={images.vs}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Env"
        component={GrassPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={images.grass_select}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={images.grass}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={HeartPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={images.heart_select}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={images.heart}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
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
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={images.recycle}
                style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                resizeMode="contain"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
