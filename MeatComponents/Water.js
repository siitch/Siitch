import React, {useState} from 'react';
import {Image} from 'react-native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import {styles} from '../Ranking/Styles';

import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {MeatBrands} from "./MeatBrands/MeatBrands";
import {ReactNavigationOverlay} from "../components/ReactNavigationOverlay";
const Height = Dimensions.get('window').height;

const Water = ({inputData}) => {
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
              {1847}
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
              {modalVisible && <ReactNavigationOverlay/>}
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
              {modalVisiblei && <ReactNavigationOverlay/>}
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
              {modalVisiblec && <ReactNavigationOverlay/>}
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

        <MeatBrands currentTab={'Beef - Water'}/>
        <View style={{height: Height / 10}} />
      </ScrollView>
    </View>
  );
};
export default Water;
