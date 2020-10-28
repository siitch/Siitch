import React, { Component } from 'react';
import { Text, View,StyleSheet, Dimensions } from "react-native";

export const ArrowIconCol = () => {
    return(
           <View style={{flexDirection:'column',alignItems:'flex-start'}}>
             <View
                style={styles.wrapper}>
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
    },
    rectangle: {
        width:2,
        backgroundColor: "#EF7A6A",
        height: 90,
        borderColor:"#EF7A6A"
    },

    triangle: {
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
        marginTop: -6,
        borderColor:"#EF7A6A"
    }
});
export default ArrowIconCol;