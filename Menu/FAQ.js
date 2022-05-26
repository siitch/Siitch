import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView} from 'react-native';
import {FAQItem} from "./FAQItem";

export const FAQ = () => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}>
        <FAQItem question={"What can Siitch do for me?"}/>
        <FAQItem question={"What am I supposed to do with this information?"} color={'#2f97ef'}/>
        <FAQItem question={"Why don't you show what it takes to make single items, like one banana, or one strawberry?"}/>
        <FAQItem question={"Why did you build this app?"}/>
        <FAQItem question={"Are you going to break down the units in the future, so I can select 1/2 or 1/4 of a pound or kilo of an item, instead of a full pound or kilo?"}/>
        <FAQItem question={"Why does the camera tool not recognize items like Pop Tarts or mac & cheese? Why are they not in the Search tool?"}/>
        <FAQItem question={"Why should I care about water?"}/>
        <FAQItem question={"What is virtual water, and why should I care?"}/>
        <FAQItem question={"How much water does the average person use every day?"}/>
        <FAQItem question={"Is there a scale that shows me where I am compared to everyone else?"}/>
        <FAQItem question={"If the average American uses 1,802 gallons of water per day, what should we be aiming for?"}/>
        <FAQItem question={"These statistics are shocking. What are your sources?"}/>
        <FAQItem question={"So, should I stop eating avocados?"}/>
        <FAQItem question={"Are you going to show other statistics in the future?"}/>
        <FAQItem question={"What can I do to reduce my impact?"}/>
        <FAQItem question={"Why does my screen look misaligned/weird?"}/>
    </ScrollView>
  );
}
