import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const DeviceWidth = Dimensions.get('window').width;

export const RankingItem = ({ max, cost, item, image, unit }) => {

   const percentage = 1-(max-parseInt(cost))/max < 0.01 ? 0.01 : 1-(max-parseInt(cost))/max;

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{height: 45, width: 45, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 20}}
                    source={image}
                />
                <Progress.Bar
                    progress={percentage}
                    width={DeviceWidth*0.80}
                    height={10}
                    borderColor="white"
                    paddingTop={35}
                    color="#81CAFF"
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 13, marginLeft: 15, color: '#000000'}}>
                    {item}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: 'gray',
                        fontWeight: 'bold',
                        marginRight: 20
                    }}
                >
                    {numberWithCommas(cost)} {unit === 'L' ? 'Liters' : 'Gallons'}
                </Text>
            </View>
        </View>
    )
}