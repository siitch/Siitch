import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const DeviceWidth = Dimensions.get('window').width;

export const RankingItem = ({ max, cost, item, image, unit }) => {

   const percentage = 1-(max-parseInt(cost))/max;

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{height: 45, width: 45, margin: 10}}
                    source={image}
                />
                <Progress.Bar
                    progress={percentage}
                    width={DeviceWidth*0.80}
                    height={10}
                    borderColor="white"
                    paddingTop={25}
                    color="#00adef"
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13, marginLeft: 15, maxWidth: 200, color: '#000000'}}>
                    {item}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: 'gray',
                        fontWeight: 'bold',
                        marginLeft: 20
                    }}
                >
                    {numberWithCommas(cost)} {unit === 'L' ? 'Liters' : 'Gallons'}
                </Text>
            </View>
        </View>
    )
}