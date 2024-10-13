import { ScrollView, Text, View } from "react-native";
import { openLink } from "../util/common";
import React from "react";

export const PrivacyToU = () => {

  const privacyToUList = [
    "The Siitch app is currently in BETA and accessible by invite-only at this time.",
    "There is no account to create to use the app.",
    "No names, emails or passwords required.",
    "Given we don’t have defined ‘users’ in the app, the app does not collect or track any personal information.",
    "No information is stored in the app.",
    "The app allows anyone to take a picture of, for example, an apple, to see its environmental cost, but we cannot see the photos you take, nor are the pictures stored in the app, or on your phone.",
    "We use Google Analytics to track and gather aggregate usage data - for example - what features are used the most, and equally, the least, so we can improve our services.",
    "Google Analytics will show us what state or country users are in, but that information is not linkable to any identified individual.",
    "No information will be used for marketing purposes.",
    "Each build is available to test for up to 90 days, starting from the day we upload each build. You can see how many days you have left for testing under the app name in TestFlight. TestFlight will notify you each time a new build is available and will include instructions on the recent updates.",
    "Your use of this app means you agree to the above and the full Privacy policy and Terms of use. If you do not agree with the above or anything in the full policies linked below, please do not use the app."
  ];

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* Title */}
      <Text style={{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 30,
      }}>
        Privacy Policy & Terms of Use
      </Text>
      {/* Content */}
      <View style={{
        marginHorizontal: '8%',
      }}>
        {privacyToUList.map((item) => {
          return(
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 5}}>
                <Text style={{fontSize: 7, marginTop: 6.5}}>●</Text>
              </View>
              <View>
                <Text style={{
                  fontFamily: 'Lato-Regular',
                  fontSize: 16
                }}>{item}</Text>
              </View>
            </View>
          )
        })}
      </View>
      {/* Link */}
      <View style={{
        marginTop: 50,
        marginBottom: 30
      }}>
        <Text style={{
          textAlign: 'center',
          fontFamily: 'Lato-Regular',
          fontSize: 16,
          color: '#202020',
        }}>
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => {
              openLink('https://www.siitch.com/Privacy')
            }}>
            Privacy Policy
          </Text>
          {'\n'}
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => {
              openLink('https://www.siitch.com/Terms')
            }}>
            Terms of Use
          </Text>
        </Text>
      </View>


    </ScrollView>
  );
}
