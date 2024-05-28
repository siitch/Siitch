import { homepageStyle } from "../Styles/Style";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { styles } from "../Ranking/Styles";
import Profiles from "../ImageDB";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const DemoSearch = () => {
  const navigation = useNavigation();
  const searchItems = [
    ['Salad', 'Toast', 'Chocolate'],
    ['Soy sauce', 'Car', 'Leather shoes'],
    ['Suede shoes', 'Cotton T shirt', 'Socks']
  ];
  return (
    <View style={homepageStyle.searchSectionContainer}>
      <Text style={homepageStyle.searchSectionTitleText}>
        Search for Items
      </Text>
      <View>
        {searchItems.map((itemRow, i) => (
          <View key={i} style={styles.avatarView}>
            {itemRow.map(itemName => (
              <TouchableHighlight
                key={itemName}
                onPress={() =>
                  navigation.navigate('Detail', {itemName: itemName})}
                activeOpacity={1}
                underlayColor="transparent"
                style={{marginLeft: 10}}>
                <View style={styles.eachAvatar}>
                  <Image
                    source={Profiles[itemName]}
                    style={homepageStyle.searchItemImage}
                    resizeMode="contain"
                  />
                  <Text style={{width: 90, textAlign: 'center'}}>
                    {itemName}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}
