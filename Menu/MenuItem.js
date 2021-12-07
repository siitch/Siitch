import {Image, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export const MenuItem = ({navigation, menuItemName}) => {
    function icon() {
        switch (menuItemName) {
            case "Tutorial":
                return require('./../images2/Tutorial2.png')
            case "Sources":
                return require('./../images2/Source_PNG.png')
            case "Mission":
                return require('./../images2/Mission_PNG.png')
            case "About":
                return require('./../images2/About_PNG.png')
            case "Virtual":
                return require('./../images2/Blue_Water_Drop_PNG.png')
            case "Feedback":
                return require('./../images2/Feedback_PNG.png')
            case "FAQ":
                return require('./../images2/FAQ_PNG.png')
        }
    }

    function name() {
        switch (menuItemName) {
            case "Tutorial":
                return "Tutorial"
            case "Sources":
                return "Sources & Resources"
            case "Mission":
                return "Mission"
            case "About":
                return "About"
            case "Virtual":
                return "Virtual Water"
            case "Feedback":
                return "Feedback"
            case "FAQ":
                return "FAQ"
        }
    }

    return(
        <View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 75,
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
                onPress={() => navigation.navigate(menuItemName)}
            >
                <View style={{
                    width: 45,
                    height: 45,
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={icon()}
                        style={{
                            width: 34,
                            height: 34,
                        }}
                    />
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{fontSize: 20, color: 'black'}}>
                            {name()}
                        </Text>
                        <View style={{marginRight: 5}}>
                            <MaterialCommunityIcons name = 'chevron-right' size = {35}/>
                        </View>
                    </View>
                    <View style={{borderBottomColor: 'gray', borderBottomWidth: 1}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
