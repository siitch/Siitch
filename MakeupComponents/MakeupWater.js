import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  Dimensions,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
import {ImageIcon} from '../ImageIcon';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const MakeupWater = ({inputData, navigation}) => {
  const [expand, setExpand] = useState(false);
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
    <ScrollView
      style={{marginTop: Height / 20}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View>
        <Text
          style={{
            width: Width / 1.2,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          How Green is Your Makeup: {'\n'}Ingredients & Packaging?
        </Text>
        <Image
          source={images.makeup}
          style={{width: Width / 1.2, height: Height / 3}}
        />
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderWidth: 1,
            borderRadius: 15,
            width: Width / 1.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            Each day, women use an average of {'\n'} 12 products that contain
            nearly 170 different types of chemicals.{' '}
            {expand ? (
              <Text>
                Men use an average of six products a day and 85 unique
                chemicals.{'\n'}
                <Text>
                  &emsp;&emsp;&emsp;&emsp;&emsp;- Environmental Working Group
                </Text>
              </Text>
            ) : null}
          </Text>
          {expand ? (
            <TouchableHighlight
              style={{marginLeft: Width / 1.5}}
              onPress={() => setExpand(false)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-up"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.5}}
              onPress={() => setExpand(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          70 - 80%{' '}
          <Image
            source={images.water}
            style={{width: Width / 20, height: Height / 30}}
          />
        </Text>
        <Text>
          On average, a standard cosmetic product (cream, lotion, etc.)
          comprises between{' '}
          <Text style={{fontWeight: 'bold'}}>70 and 80% </Text>of water.
        </Text>
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - Width / 5,
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,width:Width/1.1}}>Many companies make sustainable makeup. Here’s a few to get started, as recommended and rated by
          <Text onPress={() => Linking.openURL('https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-make-up/')} style={{color:'#00ADEF'}}> Sustainable Jungle. </Text>
        </Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.thereformation.com/')}}>
              <ImageIcon category='brand' image={images.axiology_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.outlanddenim.com/')}}>
              <ImageIcon category='brand' image={images.dab_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.axiology_rate}></Image>
            <Image source={images.dab_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.patagonia.com/home/')}}>
              <ImageIcon category='brand' image={images.fat_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.boyish.com/')}}>
              <ImageIcon category='brand' image={images.plant_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.fat_rate}></Image>
            <Image source={images.plant_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.outerknown.com/')}}>
              <ImageIcon category='brand' image={images.nudi_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://amourvert.com/')}}>
              <ImageIcon category='brand' image={images.elate_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.nudi_rate}></Image>
            <Image source={images.elate_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://citizensofhumanity.com/')}}>
              <ImageIcon category='brand' image={images.cleanfaced_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://triarchy.com/')}}>
              <ImageIcon category='brand' image={images.sea_witch_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.cleanfaced_rate}></Image>
            <Image source={images.sea_witch_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.dl1961.com/')}}>
              <ImageIcon category='brand' image={images.percent100_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.g-star.com/en_us')}}>
              <ImageIcon category='brand' image={images.phb_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.percent100_rate}></Image>
            <Image source={images.phb_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://citizensofhumanity.com/')}}>
              <ImageIcon category='brand' image={images.odylique_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://triarchy.com/')}}>
              <ImageIcon category='brand' image={images.vyana_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.odylique_rate}></Image>
            <Image source={images.vyana_rate}></Image>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.dl1961.com/')}}>
              <ImageIcon category='brand' image={images.dirty_logo}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.g-star.com/en_us')}}>
              <ImageIcon category='brand' image={images.neek_logo}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={images.dirty_rate}></Image>
            <Image source={images.neek_rate}></Image>
          </View>
        </View>
    </ScrollView>
    </View>
  );
};
export default MakeupWater;