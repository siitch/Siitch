import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView} from 'react-native';
import {FAQItem} from "./FAQItem";

export const FAQ = ({ navigation }) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}>
      <FAQItem question={"What can Siitch do for me?"} navigation={navigation}/>
      <FAQItem question={"What am I supposed to do with this information?"} navigation={navigation} color={'#2f97ef'}/>
      <FAQItem question={"Why did you build this app?"} navigation={navigation}/>
      <FAQItem question={"Are you going to break down the units in the future, so I can select 1/2 or 1/4 of a pound (or kilo) of an item vs a full pound or kilo?"} navigation={navigation}/>
      <FAQItem question={"Why should I care about water?"} navigation={navigation}/>
      <FAQItem question={"What is virtual water, and why should I care?"} navigation={navigation}/>
      <FAQItem question={"How much water does the average person use every day?"} navigation={navigation}/>
      <FAQItem question={"Is there a scale that shows me where I am compared to everyone else?"} navigation={navigation}/>
      <FAQItem question={"If the average American uses 1,802 gallons of water per day, what should we be aiming for?"} navigation={navigation}/>
      <FAQItem question={"These statistics are shocking. What are your sources?"} navigation={navigation}/>
      <FAQItem question={"So, should I stop eating avocados?"} navigation={navigation}/>
      <FAQItem question={"Why can't I find information for items like Pop Tarts and mac & cheese?"} navigation={navigation}/>
      <FAQItem question={"Are you going to show other statistics in the future?"} navigation={navigation}/>
      <FAQItem question={"What can I do to reduce my impact?"} navigation={navigation}/>
      <FAQItem question={"Why does my screen look misaligned/weird?"} navigation={navigation}/>
    </ScrollView>
  );
}
