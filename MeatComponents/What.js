import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';
import {images} from '../ImageURL';
import * as WebBrowser from "expo-web-browser";
import * as Analytics from "expo-firebase-analytics";
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const What = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{width:Width,alignItems:'center',marginTop:'10%'}}>
        <Text style={{fontSize:24,alignContent:'center',fontWeight:'bold'}}>What Can I do?</Text>
      </View>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'10%',fontWeight:'bold'}}>Reduce Frequency</Text>
      <Text style={{fontSize:14,marginLeft:'10%',width: Width / 1.2}}>Try saving red meat for special occasions</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'10%',marginRight:'5%',width: Width / 1.2}}>Take it at your own pace. If you eat meat twice a day, try eating it once a day</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'10%',fontWeight:'bold',}}>Reduce Portion Size</Text>
      <View style={{widt:Width,alignItems:'center'}}>
      <Image source={images.portion} style={{marginTop:'5%'}} resizeMode='contain'/>
      </View>
      <Text style={{fontSize:14,marginLeft:'10%',width: Width / 1.2}}>Reducing portion size will save you money and help you lose weight</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'10%',fontWeight:'bold'}}>Replace</Text>
      <Text style={{fontSize:14,marginLeft:'10%',width: Width / 1.2}}>Try healthier meats, like fish or poultry</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'10%'}}>Try meat-alternative products</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'10%',fontWeight:'bold'}}>Explore</Text>
      <Text style={{fontSize:14,marginLeft:'10%'}}>Explore new plant-based recipes</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'10%',width: Width / 1.2}}>Find the vegetables that work for your pallete. Examples: marinated portobello mushrooms, grilled peppers, eggplant, sweet potato tacos, black bean burgers, pinto beans, chickpeas, lentils, edamame...</Text>
      <Text style={{fontSize:12,marginTop:'1%',marginLeft:'10%',fontWeight:'bold',width: Width / 1.2}}>(Talk to your doctor before changing diets)</Text>
      <View style={{width:Width,alignItems:'center',marginTop:'10%'}}>
        <Text style={{ color:'#8DC73F', fontSize:20,marginLeft:'25%',fontWeight:'bold', transform: [{ rotate: '-6.51deg' }]
          }}>
          Anyday</Text>
        <Text style={{fontSize:20,alignContent:'center',fontWeight:'bold',marginBottom:-30}}>
        <Text>Meatless </Text>
        <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Monday</Text>
        </Text>
        <Image source={images.suv} style={{width:200,height:200}} resizeMode='contain'/>
      </View>
      <View style={{
          height: Height / 7,
          backgroundColor: '#8DC73F',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width:Width,alignItems:'center'}}>
          <Text style={{fontSize:20,alignContent:'center',fontWeight:'bold',color:'white'}}>348 miles:</Text>
        </View>
        <View style={{width:'90%'}}>
          <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Emissions you’d save if you eat one less serving of beef every week for a year. A family of four? They’d save 1,300 miles.</Text>
        </View>
      </View>
      <View>
        <View style={{width:Width,alignItems:'center'}}>
        <Text style={{fontSize:20,marginTop:'5%',fontWeight:'bold'}}>Don’t Waste Meat</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',width:Width,marginTop:'5%'}}>
          <View style={{width:Width/2,alignItems:'center'}}><Image source={images.milk} resizeMode='contain' /></View>
          <View style={{width:Width/2,alignItems:'center'}}><Image source={images.steak_large} style={{marginLeft:'10%'}} resizeMode='contain' /></View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{width:Width/2,alignItems:'center'}}><Text style={{fontSize:14,marginTop:'5%',marginLeft:'10%',fontWeight:'bold'}}>One liter milk =</Text></View>
        <View style={{width:Width/2,alignItems:'center'}}><Text style={{fontSize:14,marginTop:'5%',fontWeight:'bold'}}>One 8 oz. steak =</Text></View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',width:Width}}>
        <View style={{width:Width/2,alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize:14,fontWeight:'bold',color:'#00ADEF'}}>232 gallons</Text>
          </View>
        </View>
        <View style={{width:Width/2,alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize:14,fontWeight:'bold',color:'#00ADEF'}}>850 gallons</Text>
          </View>
          </View>
      </View>
      </View>

      <Text style={{fontSize:14,marginTop:'5%',marginLeft:'10%', marginRight:'10%'}}>
      <Text onPress={() => {
          WebBrowser.openBrowserAsync('https://www.thekitchn.com/the-beginners-guide-to-meal-planning-what-to-know-how-to-succeed-and-what-to-skip-242413')
          Analytics.logEvent('Source_click',{
              source_name: 'The beginners guide to meal planning - What to know, how to succeed, and what to skip',
              source_url: 'https://www.thekitchn.com/the-beginners-guide-to-meal-planning-what-to-know-how-to-succeed-and-what-to-skip-242413'
          })
      }}
            style={{color:'#00ADEF'}}>Plan your meals, </Text>
         and plan for leftovers so you don’t waste meat, or any dairy product</Text>
      <View style={{
        height: Height / 7,
        backgroundColor: '#8DC73F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'5%'
        }}>
        <View style={{width:'90%'}}>
          <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Meat and dairy products have a high environmental footprint. Rotting meat also produces more greenhouse gases than rotting fruit.</Text>
        </View>
      </View>
      <View style={{height:Height/10}}/>
    </ScrollView>
  );
};
export default What;
