import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView} from 'react-native';

import {MenuItem} from "./MenuItem";
import {Footer} from "./Footer";

export const MenuMain = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <MenuItem menuItemName={'Tutorial'}/>
      <MenuItem menuItemName={'Sources'}/>
      <MenuItem menuItemName={'Mission'}/>
      <MenuItem menuItemName={'About'}/>
      <MenuItem menuItemName={'Virtual'}/>
      <MenuItem menuItemName={'Feedback'}/>
      <MenuItem menuItemName={'FAQ'}/>
      <Footer/>
    </ScrollView>
  );
}
