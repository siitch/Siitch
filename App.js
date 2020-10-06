/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Search from './Search';
// org import
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  PanResponder,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import {SearchBar} from 'react-native-elements';
import {Platform, Image, Icon} from 'react-native';
import {ActivityIndicator} from 'react-native';
//import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//import SearchBar from 'react-native-search-bar';

state = {
  search: '',
};

function Meats() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Meats
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Fruits() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Fruits
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.883}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Chilli Peppers
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.401}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Figs
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.361}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Olives
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.273}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Dates
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.261}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Plums
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.216}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Guavas
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.216}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Mangoes
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.192}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                192 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Cherries
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.154}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                154 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Apricots
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.151}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                151 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Coconuts
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.141}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                141 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Avacadoes
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.11}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                110 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Pears
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.109}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                109 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Nectarines
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.109}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                109 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Peaches
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.098}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                98 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Apples
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.095}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                95 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Bananas
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.095}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                95 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Plantains
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.09}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                90 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Mandarins
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.077}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                77 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Lemons
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.073}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                73 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Grapes
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.071}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                71 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Peas
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.069}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                69 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Okra
              </Text>
            </View>
          </View>

          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Vegetables() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Vegetables
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function EverydayFoods() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Everyday Foods
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function EverydayItems() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Everyday Items
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function NutsBeans() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Nuts, Beans
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Oils() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Oils
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function DrinksAll() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Drinks - All
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function DrinksAlcoholic() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Drinks - Alcoholic
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function DrinksNonAlcoholic() {
  return (
    <View style={styles.meats}>
      <ScrollView>
        <View style={styles.meatsImage}>
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
          <Image
            style={{width: 80, height: 80}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.meatsText}>
          <Text style={{fontSize: 16, marginLeft: 10}}>
            Water awareness is key, but many factors determine the eco-cost of a
            product.
            <Text
              style={{color: 'blue', fontSize: 14}}
              onPress={() => Linking.openURL('http://google.com')}>
              Learn More
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Drinks - Non-Alcoholic
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./images/water_drops.png')}
            />
            <Text style={{fontSize: 13, paddingTop: 9}}>Gallons per Pound</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.8}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                883 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.4}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                401 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.36}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                361 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.27}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                273 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.26}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                261 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.21}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                216 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60}}
                source={require('./images/water_drops.png')}
              />
              <Progress.Bar
                progress={0.9}
                width={300}
                height={20}
                borderColor="white"
                paddingTop={25}
                color="#00adef"
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#00adef',
                  fontWeight: 'bold',
                  paddingTop: 25,
                }}>
                900 Gal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                Text
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14, margin: 15}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.center}>
        <Image style={styles.logo} source={require('./images/logo.png')} />
      </View>

      <Text style={styles.text}>Make Good Choices For Our Planet</Text>
      <View style={styles.colflex}>
        <View style={styles.centerwaterdrops}>
          <Image
            style={{width: 130, height: 130}}
            source={require('./images/water_drops.png')}
          />
        </View>
        <View style={styles.centerpanda}>
          <Image
            style={{width: 130, height: 130}}
            source={require('./images/panda.png')}
          />
        </View>
        <View style={styles.centerearth}>
          <Image
            style={{width: 130, height: 130}}
            source={require('./images/earth.png')}
          />
        </View>
      </View>
      <Text style={styles.bottomtext}>
        See the environmental cost of what you buy, so you can make a difference
        everyday
      </Text>
    </View>
  );
}

function RankScreen({navigation}) {
  return (
    <View style={styles.rankingPage}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            Select a Category
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Meats')}>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Meats</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Fruits</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Vegetables')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Vegetables</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Everyday Foods')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Everyday Foods</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Everyday Items')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Everyday Items</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Nuts, Beans')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>
              Nuts, Beans, Seeds, Grains
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Oils')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Oils</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Drinks-All')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Drinks - All</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Drinks-Alcoholic')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Drinks - Alcoholic</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Drinks-NonAlcoholic')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.rankingPageImage}
              source={require('./images/water_drops.png')}
            />
            <Text style={styles.rankingPageText}>Drinks - Non-Alcoholic</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RankStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

const RankStackScreen = () => (
  <RankStack.Navigator>
    <RankStack.Screen
      name="Ranking"
      component={RankScreen}
      options={{headerShown: false}}
    />
    <RankStack.Screen name="Meats" component={Meats} />
    <RankStack.Screen name="Fruits" component={Fruits} />
    <RankStack.Screen name="Vegetables" component={Vegetables} />
    <RankStack.Screen name="Everyday Foods" component={EverydayFoods} />
    <RankStack.Screen name="Everyday Items" component={EverydayItems} />
    <RankStack.Screen name="Nuts, Beans" component={NutsBeans} />
    <RankStack.Screen name="Oils" component={Oils} />
    <RankStack.Screen name="Drinks-All" component={DrinksAll} />
    <RankStack.Screen name="Drinks-Alcoholic" component={DrinksAlcoholic} />
    <RankStack.Screen
      name="Drinks-NonAlcoholic"
      component={DrinksNonAlcoholic}
    />
  </RankStack.Navigator>
);

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Rank" component={RankScreen}/>
//     </Tab.Navigator>
//   );
// }
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
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
          <Tab.Screen name="Rank" component={RankStackScreen} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  searchTab: {
    width: 100,
    height: 70,
  },
  searchInput: {
    borderColor: 'black',
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchFrame: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#00adef',
    fontWeight: 'bold',
    fontSize: 50,
  },

  MainContainer: {
    flex: 1,
    backgroundColor: '#00adef',

    paddingTop: 50,
  },
  text: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomtext: {
    paddingTop: 95,
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  colflex: {
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    position: 'relative',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerpanda: {},
  centerearth: {
    right: 190,
    top: 70,
  },
  centerwaterdrops: {
    top: 70,
    left: 190,
  },
  logo: {
    width: 250,
    height: 100,
  },
  panda: {
    width: 100,
    height: 100,
  },
  rankingPage: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  rankingPageImage: {
    width: 65,
    height: 65,
    marginLeft: 40,
  },
  rankingPageText: {
    fontSize: 20,
    marginLeft: 30,
    paddingTop: 25,
  },
  meats: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  meatsImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  meatsText: {
    flexDirection: 'row',
  },
});
export {styles};
