import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {images} from '../ImageURL';
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
  Image,
  Dimensions,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MakeupHeart = ({inputData, navigation}) => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  return (
    <ScrollView>
      <View style={{marginTop: Height / 20, alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>1400 V.S 30</Text>
        <Text style={{fontSize: 20}}>
          The European Union has banned {'\n'}or restriced 1400 ingredients.{' '}
          {'\n'}The U.S? Only 30.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 25}}>89%</Text>
          <Image source={images.exclamation} style={{width: 25, height: 25}} />
        </View>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width / 1.2,
          }}>
          <Text style={{marginLeft: 20}}>
            89% of U.S. cosmetics ingredients have not been tested publically
            for safety. Cosmetics products are not
          </Text>
          {expand1 ? (
            <View>
              <Text style={{marginLeft: 20}}>test</Text>
              <TouchableHighlight
                style={{marginLeft: Width / 1.4}}
                onPress={() => setExpand1(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.4}}
              onPress={() => setExpand1(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <Image
          source={images.perfume}
          style={{width: 50, height: 50, marginTop: 20}}
        />
        <Text>Great Resouces: </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          EWG
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          Think Dirty
        </Text>
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          SafeCosmetic.org
        </Text>
        <Text style={{fontSize: 25, marginTop: 20, fontWeight: 'bold'}}>
          1938
        </Text>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            width: Width / 1.2,
          }}>
          <Text style={{marginLeft: 20}}>
            The last time the FDA passed a bill regulating the safety of
            cosmetic products was 1938. Why?
          </Text>
          {expand1 ? (
            <View>
              <Text style={{marginLeft: 20}}>test</Text>
              <TouchableHighlight
                style={{marginLeft: Width / 1.4}}
                onPress={() => setExpand1(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.4}}
              onPress={() => setExpand1(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
        </View>
        <View
          style={{
            backgroundColor: '#EF7A6A',
            borderColor: '#EF7A6A',
            borderRadius: 10,
            marginTop: 10,
            width: Width / 1.2,
          }}>
          <Text style={{textAlign: 'center'}}>
            1938 Food, Drug, Cosmetic Art
          </Text>
          {expand1 ? (
            <View>
              <Text style={{marginLeft: 20}}>test</Text>
              <TouchableHighlight
                style={{marginLeft: Width / 1.4}}
                onPress={() => setExpand1(false)}
                underlayColor="transparent">
                <MaterialCommunityIcons
                  name="menu-up"
                  color="black"
                  style={{fontSize: 40}}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <TouchableHighlight
              style={{marginLeft: Width / 1.4}}
              onPress={() => setExpand1(true)}
              underlayColor="transparent">
              <MaterialCommunityIcons
                name="menu-down"
                color="black"
                style={{fontSize: 40}}
              />
            </TouchableHighlight>
          )}
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
      </View>
    </ScrollView>
  );
};
export default MakeupHeart;
