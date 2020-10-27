import React, { Component } from 'react';
import { Text, View,StyleSheet, Dimensions } from "react-native";

export const ArrowIconCol = () => {
    return(
           <View style={{flexDirection:'column',alignItems:'flex-start'}}>
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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 9,
        paddingTop: 0,
        marginTop: 0

    },
    rectangle: {
        width:2,
        backgroundColor: "#EF7A6A",
        margin: 0,
        height: 60,
        borderColor:"#EF7A6A"

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
        borderBottomColor:"#EF7A6A",
        transform: [
            { rotate: '180deg' }
        ],
        margin: 0,
        marginTop: -6,
        borderWidth: 0,
        borderColor:"#EF7A6A"
    }
});
export default ArrowIconCol;