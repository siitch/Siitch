import {ReactNavigationOverlay} from "../ReactNavigationOverlay";
import {Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import itemDetailImages from "../../MLTool/ItemDetailImages/itemDetailImages";
import {openSourceLink} from "../../util/common";
import React from "react";
import {styles} from "../../Comparing/Styles";
import Profiles from "../../ImageDB";

const CloseModalCross = ({handler}) => {
  return (
    <TouchableOpacity
      onPress={() => handler()}
      style={{
        zIndex: 10,
        alignSelf: 'flex-end',
        position: 'absolute'
      }}>
      <Image
        source={itemDetailImages.closeInfoModal}
        style={{
          width: 50,
          height: 50
        }}/>
    </TouchableOpacity>
  )
}

// General Modals
export const VirtualWaterInfoModal = ({infoVisible, handler, navigation}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={infoVisible}>
      {infoVisible && <ReactNavigationOverlay/>}
      <View
        style={modalStyle.virtualWaterInfoModalContainer}>
        <View style={modalStyle.virtualWaterInfoModalContent}>
          <CloseModalCross handler={handler}/>
          <View style={{
            marginTop: 20,
            marginHorizontal: 15,
            marginBottom: 15,
            padding: 15
          }}>
            <Text>
              Virtual Water is the total volume of water used in the production of a good or service.
              See our
              <Text
                onPress={() => {
                  navigation.navigate('Virtual Water')
                  handler()
                }}
                style={{color: '#00ADEF'}}> Virtual Water</Text> page for more information. Most
              numbers shown represent the Virtual Water totals. Where Virtual water amounts are
              unknown, we’ve sourced statistics found on our
              <Text
                onPress={() => {
                  navigation.navigate('Sources & Resources')
                  handler()
                }}
                style={{color: '#00ADEF'}}> Sources & Resources</Text> page.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

// Modals of Ranking Tool
export const RankingInfoModal = ({infoVisible, specialCategory, handler, navigation}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={infoVisible}>
      {infoVisible && <ReactNavigationOverlay/>}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <View style={{
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: 'white',
          borderColor: '#00ADEF',
          borderWidth: 1.5,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <TouchableOpacity
            onPress={() => handler()}
            style={{
              zIndex: 10,
              alignSelf: 'flex-end',
              position: 'absolute'
            }}>
            <Image
              source={itemDetailImages.closeInfoModal}
              style={{
                width: 50,
                height: 50
              }}/>
          </TouchableOpacity>
          <View style={{
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: 20,
            padding: 15
          }}>
            {specialCategory && (
              <Text>
                Virtual Water is the total volume of water used in the production of a good or service.
                See our
                <Text
                  onPress={() => {
                    navigation.navigate('Virtual Water')
                    handler()
                  }}
                  style={{color: '#00ADEF'}}> Virtual Water</Text> page for more information. Most
                numbers shown represent the Virtual Water totals. Where Virtual water amounts are
                unknown, we’ve sourced statistics found on our
                <Text
                  onPress={() => {
                    navigation.navigate('Sources & Resources')
                    handler()
                  }}
                  style={{color: '#00ADEF'}}> Sources & Resources</Text> page.
              </Text>
            )}
            {!specialCategory && (
              <Text>
                These numbers represent the Virtual Water totals. Virtual water is the total volume of
                water used in the production of a good or service. See our
                <Text
                  onPress={() => {
                    navigation.navigate('Virtual Water')
                    handler()
                  }}
                  style={{color: '#00ADEF'}}> Virtual Water</Text> page for more information.
              </Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

export const RankingLearnMore = ({modalVisible, handler}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      {modalVisible && <ReactNavigationOverlay/>}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.modalView}>
          <Image style={{ width: 300 }} source={Profiles.learn_more} resizeMode='contain' />
          <Text style={{ marginBottom: 15, textAlign: "left" }}>
            Farming methods, energy sources, transportation costs and numerous elements all contribute to a product’s eco-cost.
          </Text>
          <Text style={{ marginBottom: 15, textAlign: "left" }}>
            The water cost is just one benchmark, but we hope it provides some context to help you make more informed decisions.
          </Text>
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#70BF41" }}
            onPress={() => handler()}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

// Modals of Detail View
export const DetailPageWaterCardModal = ({waterCardModalVisible, waterType, navigation, handler}) => {
  const CloseModalButton = () => {
    return (
      <TouchableOpacity
        style={{...styles.openButton, backgroundColor: '#70BF41'}}
        onPress={() => handler()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Close
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={waterCardModalVisible}>
      {waterCardModalVisible && <ReactNavigationOverlay/>}
      {/* Container */}
      <View style={modalStyle.waterCardModalContainer}>
        {waterType === 'Rain' && (
          <View style={styles.modalView}>
            <Text
              style={modalStyle.waterCardModalTitle}>
              Rain
            </Text>
            <Text
              style={modalStyle.waterCardModalContent}>
              Rain water (Green water): The amount of rainwater required
              to make this item
              {"\n\n"}
              These Green, Blue and Gray water statistics reflect the globally averaged, Virtual Water
              required to make each item. Virtual Water is the total volume of water required to
              produce an item. Click
              <Text
                onPress={() => {
                  navigation.navigate('Virtual Water')
                  handler()
                }}
                style={{color: '#00ADEF'}}> Virtual Water</Text> for details.
            </Text>
            <CloseModalButton/>
          </View>
        )}
        {waterType === 'Irrigation' && (
          <View style={styles.modalView}>
            <Text
              style={modalStyle.waterCardModalTitle}>
              Irrigation
            </Text>
            <Text
              style={modalStyle.waterCardModalContent}>
              Irrigated water (Blue water): The amount of surface water
              and groundwater required to produce this item.
            </Text>
            <CloseModalButton/>
          </View>
        )}
        {waterType === 'Cleaning' && (
          <View style={styles.modalView}>
            <Text
              style={modalStyle.waterCardModalTitle}>
              Cleaning
            </Text>
            <Text
              style={modalStyle.waterCardModalContent}>
              Cleaning water (Gray water): The amount of freshwater
              required to dilute the wastewater generated in
              manufacturing, in order to maintain water quality, as
              determined by state and local standards. Definitions:
              <Text onPress={() => {
                openSourceLink(
                  'https://www.watercalculator.org',
                  {
                    name: 'Water Calculator',
                    url: 'https://www.watercalculator.org'
                  })
              }}
                    style={{color: '#00ADEF'}}>www.watercalculator.org</Text>
            </Text>
            <CloseModalButton/>
          </View>
        )}
      </View>
    </Modal>
  )
}

export const DetailPageInfoModal = ({infoVisible, infoShown, handler}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={infoVisible}>
      {infoVisible && <ReactNavigationOverlay/>}
      <View
        style={modalStyle.infoModalContainer}>
        {infoShown === 'Decompose' && (
          <View style={modalStyle.infoModalStyle}>
            <CloseModalCross handler={handler}/>
            <View style={modalStyle.infoModalContentContainer}>
              <Text style={{fontWeight: '500'}}>
                Time to Decompose:
              </Text>
              <Text>
                The time frames listed reflect the average time to decompose in a landfill.
                {"\n\n"}
                Rates of decomposition will vary widely based on the item, your climate,
                moisture levels, and landfill conditions, such as how much dirt, air, and
                sun exposure the landfill receives. Most landfills are anaerobic (without
                oxygen) as they are compacted so tightly, which slows decomposition.
              </Text>
            </View>
          </View>
        )}
        {infoShown === 'Compostable' && (
          <View style={modalStyle.infoModalStyle}>
            <CloseModalCross handler={handler}/>
            <View style={modalStyle.infoModalContentContainer}>
              <Text style={{fontWeight: '500'}}>
                Compost Times:
              </Text>
              <Text>
                Compost times will vary based on many factors including the temperature of the
                pile, the moisture content of the pile, how often you turn it and how much
                air the pile gets (aeration), the surface area of the pile, the concentration of
                carbon and nitrogen in the organic material, and the volume of material being
                composted.
                {'\n\n'}
                Composting reduces methane emissions from landfills and lowers your carbon
                footprint. Here's
                <Text onPress={() =>
                  openSourceLink(
                    'https://growensemble.com/benefits-of-composting/',
                    {
                      name: '15 Benefits of Composting',
                      url: 'https://growensemble.com/benefits-of-composting/'
                    })
                }
                      style={{color: '#00ADEF'}}> 15 Benefits of Composting</Text>
              </Text>
            </View>
          </View>
        )}
        {infoShown === 'Recyclable' && (
          <View style={modalStyle.infoModalStyle}>
            <CloseModalCross handler={handler}/>
            <View style={modalStyle.infoModalContentContainer}>
              <Text style={{fontWeight: '500'}}>
                Recycle Information:
              </Text>
              <Text>
                Always check what your local Recycle Center accepts. What one Center accepts
                can be completely different from another, even in the same city.
                {"\n\n"}
                There’s more to recycling than just plastics, but get to know what types of
                plastic (numbered 1-7) your Recycle Center accepts.
                {"\n\n"}
                Know that the technical capabilities of your Recycle Center and the ever-changing
                marketplace that renders items recyclable from one day to the next, are driving
                forces that determine what can and cannot be recycled.
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  )
}

export const ContextAndChallengeModal = ({modalVisible, showContext, handler}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      {modalVisible && (<ReactNavigationOverlay/>)}
      <View
        style={modalStyle.contextAndChallengeModalContainer}>
        {!showContext && (
          <View style={styles.modalView}>
            <Text style={{textAlign: 'center', marginTop: 30}}>
              Challenges specific to the item
            </Text>
            <Text style={{marginBottom: 15, textAlign: 'center'}}>
              to appear in the future.
            </Text>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#70BF41'}}
              onPress={() => {
                handler()
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
        {showContext && (
          <ScrollView style={{backgroundColor: 'white'}}>
            <View style={modalStyle.contextAndChallengeModalContentContainer}>
              <Text style={{textAlign: 'center', marginTop: 30}}>
                Each person on average in the US{'\n'}
                uses about 1,800 gallons (6,820 Liters) of virtual water per day.
              </Text>
              <Text style={{marginBottom: 15, textAlign: 'center'}}>
                Or over 657,000 gallons (2.48M Liters) per year.
              </Text>
              <View style={{alignItems: 'center'}}>
                <View
                  style={modalStyle.contextItem}>
                  <Text style={{fontSize: 20, marginRight: '12%', color: 'black',}}>
                    {' '}80 gal.{'\n'}(302 L.)
                  </Text>
                  <Image
                    source={require('./../../images2/80Gal.jpeg')}
                    style={{width: 150, height: 150, marginTop: 2}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={modalStyle.contextItem}>
                  <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
                    2,000 gal.{'\n'}(7,570 L.)
                  </Text>
                  <Image
                    source={require('./../../images2/2000Gal.jpeg')}
                    style={{width: 160, height: 160, marginTop: 2}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={modalStyle.contextItem}>
                  <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
                    12,000 gal.{'\n'}(45,425 L.)
                  </Text>
                  <Image
                    source={require('./../../images2/12000Gal.jpeg')}
                    style={{width: 180, height: 180, marginTop: 2}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={modalStyle.contextItem}>
                  <Text style={{fontSize: 20, marginRight: '10%', color: 'black',}}>
                    100,000 gal.{'\n'}(378,541 L.)
                  </Text>
                  <Image
                    source={require('./../../images2/100000Gal.jpeg')}
                    style={{width: 175, height: 175, marginTop: 2}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={modalStyle.contextItem}>
                  <Text style={{fontSize: 20, marginRight: '10%', marginLeft: '-2%', color: 'black',}}>
                    660,000 gal.{'\n'}{'  '}(2.5 mil L.){'\n'}Olympic Pool
                  </Text>
                  <Image
                    source={require('./../../images2/660000Gal.jpeg')}
                    style={{width: 160, height: 160, marginTop: 2}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#70BF41'}}
                onPress={() => {
                  handler()
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </Modal>
  )
}

const modalStyle = StyleSheet.create({
  virtualWaterInfoModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  virtualWaterInfoModalContent: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderColor: '#00ADEF',
    borderWidth: 1.5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  infoModalStyle: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderColor: '#00ADEF',
    borderWidth: 1.5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  infoModalContentContainer: {
    margin: 15,
    padding: 15
  },

  waterCardModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterCardModalTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  waterCardModalContent: {
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'left',
  },

  contextAndChallengeModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  contextAndChallengeModalContentContainer: {
    margin: '3%',
    paddingHorizontal: '3%',
    marginTop: '8%',
    paddingBottom: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contextItem: {
  flexDirection: 'row',
    width: 300,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
}
})