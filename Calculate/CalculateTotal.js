import React from 'react';
import { Text, Dimensions } from 'react-native';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const DeviceWidth = Dimensions.get('window').width;

export const CalculateTotal = ({value, unit, id, type}) => {

  const stringUnit = (unit, id, type) => {
    if(unit === "L") {
      if(id === "EDI") {
        return type === "individual" ? "L. p/item" : "L.";
      }
      else {
        return "L. p/kg";
      }
    }
    else if(unit === "G") {
      if(id === "EDI") {
        return type === "individual" ? "gal. p/item" : "gal.";
      }
      else {
        return "gal. p/lb";
      }
    }
  }

  return (
      <>
          <Text 
            style={{ 
              borderColor: '#80CAFF',
              marginTop: 10,
              height: 50,
              borderWidth: 2,
              borderRadius: 20, 
              width: DeviceWidth*0.9,
              textAlign: 'center',
              fontSize: 20,
              paddingTop: 10,
              fontWeight: 'bold'
            }} 
          >
            {numberWithCommas(value)} {stringUnit(unit, id, type)}
          </Text>
      </>
  )
}