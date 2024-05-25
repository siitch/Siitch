import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { homepageStyle } from "../Styles/Style";
import Profiles from "../ImageDB";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

export const DemoCompare = () => {
  return (
    <View style={homepageStyle.compareSectionContainer}>
      <Text style={homepageStyle.compareSectionTitleText}>Compare Items</Text>
      <View style={{ height: 200 }}>
        <Swiper
          showsPagination={false}
          scrollEnabled={true}
          showsButtons
          buttonWrapperStyle={{
            paddingHorizontal: 1
          }}
          prevButton={
            <Entypo
              name={'chevron-thin-left'}
              color={'white'}
              size={30}
            />
          }
          nextButton={
            <Entypo
              name={'chevron-thin-right'}
              color={'white'}
              size={30}
            />
          }
        >

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={[homepageStyle.greenBorderBox, {marginRight: 20}]}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Pizza']}/>
              <Text style={homepageStyle.compareItemName}>Pizza</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>332 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>1 pizza</Text>
            </View>

            <View style={homepageStyle.greyBorderBox}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Hamburger']}/>
              <Text style={homepageStyle.compareItemName}>Hamburger</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>660 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>1 hamburger</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={[homepageStyle.greenBorderBox, {marginRight: 20}]}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Tea 1 cup']}/>
              <Text style={homepageStyle.compareItemName}>Tea 1 cup</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>7 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/cup{'\n'}(250 mL cup)</Text>
            </View>

            <View style={homepageStyle.greyBorderBox}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Coffee 1 cup']}/>
              <Text style={homepageStyle.compareItemName}>Coffee 1 cup</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>37 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/cup{'\n'}(125 mL cup)</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={[homepageStyle.greyBorderBox, {marginRight: 20}]}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Apples']}/>
              <Text style={homepageStyle.compareItemName}>Apples</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>98 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/pound</Text>
            </View>

            <View style={homepageStyle.greenBorderBox}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Oranges']}/>
              <Text style={homepageStyle.compareItemName}>Orange</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>67 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/pound</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={[homepageStyle.greenBorderBox, {marginRight: 20}]}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Suede shoes']}/>
              <Text style={homepageStyle.compareItemName}>Suede shoes</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>760 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/pair</Text>
            </View>

            <View style={homepageStyle.greyBorderBox}>
              <Image style={homepageStyle.compareItemImage} source={Profiles['Leather shoes']}/>
              <Text style={homepageStyle.compareItemName}>Leather shoes</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Profiles.water} style={{ width: 14, height: 14 }} />
                <Text style={homepageStyle.compareItemWaterText}>2,113 gallons</Text>
              </View>
              <Text style={homepageStyle.compareItemMetric}>p/pair</Text>
            </View>
          </View>

        </Swiper>
      </View>
    </View>
  )
}
