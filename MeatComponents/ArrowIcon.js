import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ArrowIcon = ({widthArrow, w}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <View style={styles.wrapper}>
        <View
          style={{
            width: w,
            backgroundColor: 'black',
            margin: 0,
            height: 2,
            borderColor: 'black',
          }}
        />
        <View style={styles.triangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0.2,
    alignItems: 'center',
    paddingLeft: 9,
    paddingTop: 0,
    marginTop: 0,
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
    borderBottomColor: 'black',
    transform: [{rotate: '90deg'}],
    margin: 0,
    marginLeft: -6,
    borderWidth: 0,
    borderColor: 'black',
  },
});
export default ArrowIcon;
