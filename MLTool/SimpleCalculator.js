import React from 'react';
import {Text, Dimensions} from 'react-native';

const numberWithCommas = (x) => {
    if(x.toString() === 'NaN'){
        return '-'
    } else{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

const DeviceWidth = Dimensions.get('window').width;

export const SimpleCalculator = ({value, unit, id, type, individualUnit}) => {
  const stringUnit = (unit, id, type) => {
    if (unit === 'L') {
      //return type === 'individual' ? 'L. p/item' : 'L.';
      if (
        id === 'EDI' ||
        id === 'EDF' ||
        id === 'Drinks - All' ||
        id === 'Drinks - Alc'
      ) {
        return type === 'individual' ? individualUnit : 'L.';
      } else {
        //return 'L. p/kg';
          return type === 'individual' ? individualUnit : 'L.';
      }
    } else if (unit === 'G') {
      //return type === 'individual' ? 'gal. p/item' : 'gal.';
      if (
        id === 'EDI' ||
        id === 'EDF' ||
        id === 'Drinks - All' ||
        id === 'Drinks - Alc'
      ) {
        return type === 'individual' ? individualUnit : 'gal.';
      } else {
        //return 'gal. p/lb';
          return type === 'individual' ? individualUnit : 'gal.';
      }
    }
  };

  return (
    <>
      <Text
        style={{
          borderColor: '#80CAFF',
          marginTop: 10,
          height: 50,
          borderWidth: 2,
          borderRadius: 20,
          width: DeviceWidth * 0.9,
          textAlign: 'center',
          fontSize: 20,
          paddingTop: 10,
          fontWeight: 'bold',
        }}>
        {numberWithCommas(value)} {value.toString() !== 'NaN' && stringUnit(unit, id, type)}
      </Text>
    </>
  );
};
