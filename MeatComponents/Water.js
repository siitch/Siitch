import React, {useState} from 'react';
import {Image} from 'react-native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import {ImageIcon} from '../ImageIcon';
import {styles} from '../Ranking/Styles';

import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {images} from '../ImageURL';
import * as Analytics from "expo-firebase-analytics";
import * as WebBrowser from 'expo-web-browser';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Water = ({inputData, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblec, setModalVisiblec] = useState(false);
  const [modalVisiblei, setModalVisiblei] = useState(false);
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: Height / 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>One Pound Beef</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginTop: '2%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./../images/WaterDrop_BLUE.png')}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#0091FE',
                lineHeight: 30,
              }}>
              {inputData['Global Gallon p lb']}
            </Text>
            <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
              gal
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('./../images/Beef/BeefPage/beef_steak.png')}
            style={{width: 200, height: 200, marginTop: '-10%'}}
            resizeMode="contain"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: 300,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#00ADEF',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-5%',
            }}>
            <Image
              source={require('./../images/Beef/BeefPage/beef_truck_white_bg_1x.png')}
              style={{width: 110, height: 110, marginTop: 2}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 20, marginLeft: '5%', color: 'white'}}>
              Context {'\n'} <Text style={{fontWeight: 'bold'}}>2,000</Text>{' '}
              gallon tank
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            WHY SO MUCH
            <Image
              source={require('./../images/WaterDrop_BLUE.png')}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
            ?
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <View style={{width: 250}}>
            <Text style={{fontSize: 16}}>
              The food cattle eats accounts for 98% of beef's water footprint.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
          <View style={{width: width / 2, alignItems: 'center'}}>
            <Image
              source={require('./../images/Beef/Beef_Water/rain_wheat.png')}
              style={{width: 150, height: 200}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: width / 2, alignItems: 'center'}}>
            <Image
              source={require('./../images/Beef/Beef_Water/cows_hose.png')}
              style={{width: 150, height: 200}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            width: width,
            marginTop: '3%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              width: width / 2,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>98%</Text>
            <Text style={{fontSize: 16}}>
              Rain & irrigation{'\n'} to grow crops
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              width: width / 2,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>2%</Text>
            <Text style={{fontSize: 16}}>
              Drinking Water{'\n'} & Cleaning needs
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: '7%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#6dbd64',
              alignItems: 'center',
            }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 22,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Rain
                  </Text>
                  <Text
                    style={{
                      marginBottom: 15,
                      marginTop: 15,
                      textAlign: 'left',
                    }}>
                    Rain water (Green water): The amount of rainwater required
                    to make an item
                  </Text>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#70BF41'}}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Close
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white'}}>{'\n'}Rain</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    1,727
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#3AADFA',
              alignItems: 'center',
            }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisiblei}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 22,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Irrigation
                  </Text>
                  <Text
                    style={{
                      marginBottom: 15,
                      marginTop: 15,
                      textAlign: 'left',
                    }}>
                    Irrigated water (Blue water): The amount of surface water
                    and groundwater required to produce an item.
                  </Text>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#70BF41'}}
                    onPress={() => {
                      setModalVisiblei(!modalVisiblei);
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Close
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => {
                setModalVisiblei(true);
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>
                {'\n'}Irrigation
              </Text>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    66
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width / 4,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#bfbfbf',
              alignItems: 'center',
            }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisiblec}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 22,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Cleaning
                  </Text>
                  <Text
                    style={{
                      marginBottom: 15,
                      marginTop: 15,
                      textAlign: 'left',
                    }}>
                    Cleaning water (Gray water): The amount of freshwater
                    required to dilute the wastewater generated in
                    manufacturing, in order to maintain water quality, as
                    determined by state and local standards. Definitions:
                    www.watercalculator.org
                  </Text>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#70BF41'}}
                    onPress={() => {
                      setModalVisiblec(!modalVisiblec);
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Close
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => {
                setModalVisiblec(true);
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>{'\n'}Cleaning</Text>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: 'white',
                      lineHeight: 30,
                    }}>
                    54
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', lineHeight: 37}}>
                    gal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            onPress={() => {
                navigation.navigate('What')
                Analytics.logEvent('What_can_I_do',{
                    item: 'Beef - Water'
                })
            }}
            activeOpacity={1}
            underlayColor="#8DC73F"
            style={{
              backgroundColor: '#8DC73F',
              height: 50,
              borderWidth: 2,
              borderColor: '#8DC73F',
              borderRadius: 30,
              width: Width * 0.9,
              textAlign: 'center',
              fontSize: 20,
              marginTop: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>What Can I Do?</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Doing good</Text>
          <Text style={{fontSize: 16, marginTop: 5, textAlign: 'center'}}>
            Ranked in no particular order.{'\n'}
            Click on these companies to see{'\n'}
            how they're making a difference.
          </Text>
          <Image source={images.down_arrow} style={{width: 60, height: 60}} />
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://impossiblefoods.com/grocery/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'IMPOSSIBLE foods'
                  })
              }}>
              <ImageIcon category="brand" image={images.impossible} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.beyondmeat.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'BEYOND MEAT'
                  })
              }}>
              <Image
                source={images.beyond_meat}
                style={{width: 130, height: 130}}
              />
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://lightlife.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'Lightlife'
                  })
              }}>
              <ImageIcon category="brand" image={images.lightlife} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.hungryplanetfoods.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'HUNGRY PLANET foods'
                  })
              }}>
              <ImageIcon category="brand" image={images.hungry_planet} />
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.nextlevelburger.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'Next Level Burger'
                  })
              }}>
              <ImageIcon category="brand" image={images.nextlevel} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.quorn.us/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'Quorn'
                  })
              }}>
              <ImageIcon category="brand" image={images.quorn} />
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.bocaburger.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'BOCA burger'
                  })
              }}>
              <ImageIcon category="brand" image={images.boca} />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transperant"
              style={{width: Width / 2, alignItems: 'center'}}
              onPress={() => {
                WebBrowser.openBrowserAsync('https://www.gardein.com/');
                  Analytics.logEvent('Doing_good',{
                      brandName: 'gardein'
                  })
              }}>
              <ImageIcon category="brand" image={images.gardein} />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{height: Height / 10}} />
      </ScrollView>
    </View>
  );
};
export default Water;
