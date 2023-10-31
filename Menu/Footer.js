import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Share, Text, TouchableOpacity, View } from "react-native";
import analytics from "@react-native-firebase/analytics";
import React from "react";

import qr_code from "../images/qr_code.png";
const {width} = Dimensions.get('screen');

export const Footer = () => {
  const navigation = useNavigation();
  const QRCode = Image.resolveAssetSource(qr_code).uri;

  return(
    <View>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          alignContent: 'flex-start',
          marginTop: 25,
          textAlign: 'center'
        }}>
        Have friends who love the planet?{'\n'}
        Feel free to share the app.
      </Text>
      <Image
        source={{uri: QRCode}}
        style={{
          height: 230,
          width: 230,
          alignSelf: 'center',
          marginVertical: 20
        }}/>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: '#70BF41',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          height: 49,
          width: 270
        }}
        onPress={()=>{
          global.occupied = true
          Share.share({
            url: "https://testflight.apple.com/join/0HGzm3Xo"
          }).then(r => {global.occupied = false})
          analytics().logEvent('Share_public_link')
        }}>
        <Text style={{fontSize: 26, fontWeight: '600', color: 'white'}}>SHARE</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          alignContent: 'flex-start',
          marginVertical: 30,
          textAlign: 'center'
        }}>
        STEALTH MODE{'\n'}
        DOWNLOAD INSTRUCTIONS
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          alignSelf: 'center'
        }}>
        <Text style={{fontWeight: 'bold'}}>
          1st - Scan the code to download TestFlight
        </Text>{'\n'}

        Testflight is Apple’s testing platform.{'\n'}

        <Text style={{fontWeight: 'bold'}}>
          2nd - Launch Testflight & set notifications
        </Text>{'\n'}

        If you see ‘Redeem Code’ - there is no code.{'\n'}
        Simply click the invitation link again.{'\n'}

        <Text style={{fontWeight: 'bold'}}>
          3rd - Install and open the Siitch App
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          alignContent: 'flex-start',
          margin: '5%',
          marginBottom: '7%',
          marginTop: '10%',
          textAlign: 'center'
        }}>
        The app only works on iPhones at this time. {'\n'}
        It does not work on iPads, iWatches, iPhone zoomed displays, or any Android devices.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: width * 0.9,
          borderRadius: 20,
          backgroundColor: '#F8E4A3',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
          marginHorizontal: '5%'
        }}>
        <Text style={{fontSize: 16, color: 'black', margin: '5%',}}>
          Hi! This is an early release. We'd love your
          thoughts on how to improve it. Share your ideas by clicking the <Text
          onPress={() => navigation.navigate('Feedback')}
          style={{
            color: 'black',
            textDecorationLine: 'underline',
            alignSelf: 'center',
          }}>
          Feedback
        </Text> link.
          {'\n'}{'\n'}
          Thank you!
        </Text>
      </View>
    </View>
  )
}
