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
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const What = () => {
  return (
    <ScrollView style={{}}>
      <View style={{width:Width,alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:24,alignContent:'center'}}>What Can I do?</Text>
      </View>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>Reduce Frequency</Text>
      <Text style={{fontSize:14,marginLeft:'5%'}}>Try saving red meat for special occasions</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'5%',marginRight:'5%'}}>Take it at your own pace. If you eat meat twice a day, try eating it once a day</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>Reduce Portion Size</Text>
      <Image source={images.portion} style={{marginLeft:'10%',marginTop:'5%'}} resizeMode='contain'/>
      <Text style={{fontSize:14,marginLeft:'5%'}}>Reducing portion size will save you money and help you lose weight</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>Replace</Text>
      <Text style={{fontSize:14,marginLeft:'5%'}}>Try healthier meats, like fish or poultry</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'5%'}}>Try meat-alternative products</Text>
      <Text style={{fontSize:20,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>Explore</Text>
      <Text style={{fontSize:14,marginLeft:'5%'}}>Explore new plant-based recipes</Text>
      <Text style={{fontSize:14,marginTop:'3%',marginLeft:'5%'}}>Find the vegetables that work for your pallete. Examples: marinated portobello mushrooms, grilled peppers, eggplant, sweet potato tacos, black bean burgers, pinto beans, chickpeas, lentils, edamame...</Text>
      <Text style={{fontSize:12,marginTop:'1%',marginLeft:'5%',fontWeight:'bold'}}>(Talk to your doctor before changing diets)</Text>
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
        <Text style={{fontSize:20,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>Don’t Waste Meat</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:'5%'}}>
        <Image source={images.milk} resizeMode='contain' />
        <Image source={images.steak_large} style={{marginLeft:'10%'}} resizeMode='contain' />
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{fontSize:14,marginTop:'5%',marginLeft:'5%',fontWeight:'bold'}}>One liter milk =</Text>
        <Text style={{fontSize:14,marginTop:'5%',marginLeft:'25%',fontWeight:'bold'}}>One 8 oz. steak =</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{flexDirection:'row', alignItems: 'center',marginLeft:'5%'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize:14,fontWeight:'bold',color:'#00ADEF'}}>232 gallons</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center',marginLeft:'25%'}}>
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize:14,fontWeight:'bold',color:'#00ADEF'}}>850 gallons</Text>
          </View>
      </View>
      </View>
      
      <Text style={{fontSize:14,marginTop:'5%',marginLeft:'5%'}}>
      <Text onPress={() => Linking.openURL('https://www.figma.com/exit?url=https%3A%2F%2Fwww.thekitchn.com%2Fthe-beginners-guide-to-meal-planning-what-to-know-how-to-succeed-and-what-to-skip-242413')} style={{color:'#00ADEF'}}>Plan your meals, </Text>
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
    </ScrollView>
  );
};
export default What;
