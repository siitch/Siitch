import React, { Component } from 'react';
import { Text, View,StyleSheet } from "react-native";

export const ArrowIcon = ({widthArrow}) => {
    return(
           <View style={{flexDirection:'row',marginTop:'10%',alignItems:'flex-start'}}>
             <View
                style={styles.wrapper}>
                <View style={styles.rectangle}></View>
                <View style={styles.rectangle}></View>
                <View style={styles.triangle}></View>
            </View>
           </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flex: 0.2,
        alignItems: "center",
        paddingLeft: 9,
        paddingTop: 0,
        marginTop: 0

    },
    rectangle: {
        width:60,
        backgroundColor: "black",
        margin: 0,
        height: 2,
        borderColor:"black"

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 13,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor:"black",
        transform: [
            { rotate: '90deg' }
        ],
        margin: 0,
        marginLeft: -6,
        borderWidth: 0,
        borderColor:"black"
    }
});
export default ArrowIcon;