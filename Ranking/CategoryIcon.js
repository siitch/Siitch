import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export const CategoryIcon = ({category, image}) => {
    return(
        <View flex center style={{width: DeviceWidth*0.25, height: DeviceWidth*0.3, marginBottom:10, marginLeft:5, marginRight:5, alignItems: 'center'}} >
            <Image
                style = {{width: 40, height: 40, marginTop: '15%'}}
                source={image}
                resizeMode="contain"
            />
            <Text style={{fontSize:16, minWidth: 100, textAlign: 'center', marginTop: '15%'}}>{category}</Text>
        </View> 
    )
}