import {Image, Text, View} from "react-native";
import Swiper from "react-native-swiper";
import Animated, {
  FadeInDown,
  FadeOutDown, LinearTransition,
  useAnimatedStyle,
  useSharedValue, withDelay,
  withSequence, withSpring
} from "react-native-reanimated";
import Profiles from "../ImageDB";
import NumberTicker from "../components/NumberTicker";
import React, {useState} from "react";
import {homepageStyle} from "../Styles/Style";

export const DemoEcoCam = () => {
  const ecoCamItems = [
    { itemName: 'Jeans', mainNumber: '2,866', mainUnitText: 'gallons', mainMetricText: 'p/pair', subNumber: '10,850', subUnitText: 'liters' },
    { itemName: 'Plastic cup', mainNumber: '450', mainUnitText: 'years', mainMetricText: 'to decompose' },
    { itemName: 'Cheese', mainNumber: '606', mainUnitText: 'gallons', mainMetricText: 'p/lb',  subNumber: '5,060', subUnitText: 'liters p/kg' },
    { itemName: 'Chicken', mainNumber: '518', mainUnitText: 'gallons', mainMetricText: 'p/lb',  subNumber: '4,325', subUnitText: 'liters p/kg' },
  ];
  const [currentEcoCamItemIndex, setCurrentEcoCamItemIndex] = useState(0);
  const snapAnimation = useSharedValue(1);
  const snapAnimationStyle = useAnimatedStyle(() => ({
    height: 105,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {scale: snapAnimation.value}
    ]
  }));
  function snapIt(itemIndex) {
    setCurrentEcoCamItemIndex(itemIndex);
    snapAnimation.value = withSequence(
      withSpring(0.85),
      withDelay(200, withSpring(1))
    );
  }
  const ecoCamInfoLayoutTransition = LinearTransition;
  return (
    <View style={homepageStyle.ecoCamSectionContainer}>
      <View style={homepageStyle.takeAPicSectionContainer}>
        <Text style={homepageStyle.takeAPicText}>Take a pic</Text>
        <View style={homepageStyle.takeAPicOuterBox}>
          <View style={homepageStyle.takeAPicHorizontalRectangle}/>
          <View style={homepageStyle.takeAPicVerticalRectangle}/>
          <View style={homepageStyle.ecoCamItemSwiperContainer}>

            {/* Swiper */}
            <View style={{ height: 105, width: 105 }}>
              <Swiper
                autoplay
                autoplayTimeout={3}
                loadMinimal
                showsPagination={false}
                scrollEnabled={false}
                onIndexChanged={(itemIndex) => {snapIt(itemIndex)}}
              >
                <Animated.View style={snapAnimationStyle}>
                  <Image style={homepageStyle.ecoCamItems[ecoCamItems[0].itemName]} source={Profiles[ecoCamItems[0].itemName]}/>
                </Animated.View>
                <Animated.View style={snapAnimationStyle}>
                  <Image style={homepageStyle.ecoCamItems[ecoCamItems[1].itemName]} source={Profiles[ecoCamItems[1].itemName]}/>
                </Animated.View>
                <Animated.View style={snapAnimationStyle}>
                  <Image style={homepageStyle.ecoCamItems[ecoCamItems[2].itemName]} source={Profiles[ecoCamItems[2].itemName]}/>
                </Animated.View>
                <Animated.View style={snapAnimationStyle}>
                  <Image style={homepageStyle.ecoCamItems[ecoCamItems[3].itemName]} source={Profiles[ecoCamItems[3].itemName]}/>
                </Animated.View>
              </Swiper>
            </View>

          </View>
        </View>
      </View>

      <View style={homepageStyle.ecoCamItemInfoContainer}>
        <Animated.View layout={ecoCamInfoLayoutTransition} >
          <Text style={{
            fontFamily: 'Lato-Bold',
            fontSize: 22
          }}>
            {ecoCamItems[currentEcoCamItemIndex].itemName}
          </Text>
        </Animated.View>

        <Animated.View layout={ecoCamInfoLayoutTransition} style={{ flexDirection: "row", }}>
          {currentEcoCamItemIndex === 1 ? (
            <Image source={Profiles.clock} style={{ width: 28, height: 28 }} />
          ) : (
            <Image source={Profiles.water} style={{ width: 26, height: 26 }} />
          )}

          <NumberTicker
            number={ecoCamItems[currentEcoCamItemIndex].mainNumber}
            textSize={22}
            duration={1000}
            style={{
              marginBottom: currentEcoCamItemIndex === 0 ? 0 : 4
            }}
            textStyle={{fontFamily: 'Lato-Bold', color: currentEcoCamItemIndex === 1 ? 'red' : '#00ADEF'}}
          />
          <Text style={{
            fontFamily: 'Lato-Bold',
            fontSize: 22,
            color: currentEcoCamItemIndex === 1 ? 'red' : '#00ADEF',
          }}> {ecoCamItems[currentEcoCamItemIndex].mainUnitText}
          </Text>
        </Animated.View>

        <Animated.View layout={ecoCamInfoLayoutTransition} >
          <Text style={{
            fontFamily: 'Lato-Regular',
            fontSize: 16,
            marginTop: 2,
            marginBottom: 3,
          }}>
            {ecoCamItems[currentEcoCamItemIndex].mainMetricText}
          </Text>
        </Animated.View>

        {currentEcoCamItemIndex !== 1 && (
          <Animated.View layout={ecoCamInfoLayoutTransition} entering={FadeInDown} exiting={FadeOutDown} >
            <Text style={{
              fontFamily: 'Lato-Bold',
              fontSize: 16,
              color: '#00ADEF',
            }}>
              (<NumberTicker
              number={ecoCamItems[currentEcoCamItemIndex].subNumber}
              textSize={16}
              duration={1000}
              style={{marginTop: -3}}
              textStyle={{fontFamily: 'Lato-Bold', color: '#00ADEF'}}
            />
              <Text> {ecoCamItems[currentEcoCamItemIndex].subUnitText}</Text>)
            </Text>
          </Animated.View>
        )}

      </View>

    </View>
  )
}
