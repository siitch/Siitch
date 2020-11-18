import React from 'react';
import { Text, Dimensions } from 'react-native';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const DeviceWidth = Dimensions.get('window').width;

export const CalculateTotal = ({value, unit}) => {

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
              {numberWithCommas(value)} {unit === "L" ? "L. p/kg" : "gal. p/lb"}
            </Text>
        </>
    )
}