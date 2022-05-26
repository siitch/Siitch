import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {images} from '../ImageURL';
import {JeansBrands} from "./JeansBrands/JeansBrands";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const JeansWater = () => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={{alignItems: 'center', marginTop: Height / 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>One pair Jeans</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '2%',
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
            2866
          </Text>
          <Text style={{fontSize: 15, marginLeft: '5%', lineHeight: 37}}>
            gal
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:'2%'}}>
        <Image
          source={images.jeans}
          style={{width: 150, height: 150}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '8%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#00ADEF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.truck}
            style={{width: 110, height: 110, marginTop: 2,marginLeft:-20}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 18, marginLeft: '5%', color: 'white'}}>
            Context {'\n'}<Text style={{fontWeight:'bold'}}>3,000</Text> gallon tank
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: '#D3D3D3',
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </View>
      <View>
        <ImageBackground
          source={images.waterBackground}
          style={{width: Width, height: Height / 2}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 15,
              marginRight: 15,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: 'white',
                  marginLeft: 15,
                }}>
                2,247 gal.
              </Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <Text style={{fontSize: 20, color: 'white',fontWeight:'bold'}}>
                to grow the cotton
              </Text>
              <Text style={{fontSize: 14, color: 'white'}}>
                - worldwide average
              </Text>
            </View>
            <Image
              source={images.rain}
              style={{
                resizeMode: 'cover',
                marginLeft: 5,
                marginTop: -10,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.blue_plus}
              style={{resizeMode: 'cover', marginLeft: 15, marginTop: -30}}
            />
            <Image
              source={images.cotton}
              style={{
                resizeMode: 'cover',
                width: 95,
                height: 95,
                marginTop: -30,
                marginLeft: '40%',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              165 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to dilute pesticides & fertilizers that go with cotton growing
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              97 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to treat chemicals that treat the raw cotton
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              95 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to treat bleach, dye, fabric print
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              238 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to thin out chemical streams
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              36 gal.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '5%',
              }}>
              to finish it
            </Text>
          </View>
          <View
            style={{
              width: Width / 4,
              height: 1,
              backgroundColor: 'white',
              marginTop: 15,
              marginLeft: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: Width / 4,
                textAlign: 'right',
              }}>
              2866 gal.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                width: Width / 1.5,
                marginLeft: '45%',
                marginTop: 30,
              }}>
              - Kostigen, 2010
            </Text>
          </View>
        </ImageBackground>
      </View>

      <JeansBrands currentTab={'Jeans - Water'}/>
      <View style={{height: Height / 10}} />
    </ScrollView>
  );
};
export default JeansWater;
