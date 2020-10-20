import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export const ImageIcon = ({category, image}) => {
    return(
        <View flex center style={{width: DeviceWidth*0.3, height: DeviceWidth*0.3, marginBottom:10, marginLeft:10}} >
            <Image
                style = {{width: 100, height: 100, marginTop: '10%',marginLeft: '10%'}}
                source={image}
                resizeMode="contain"
            />
        </View> 
    )
};