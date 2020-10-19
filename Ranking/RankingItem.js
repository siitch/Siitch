import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Progress from 'react-native-progress';

export const RankingItem = ({cost, item, image}) => {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                style={{height: 60, width: 60}}
                source={image}
                />
                <Progress.Bar
                    progress={0.27}
                    width={300}
                    height={20}
                    borderColor="white"
                    paddingTop={25}
                    color="#00adef"
                />
                <Text
                    style={{
                        fontSize: 12,
                        color: '#00adef',
                        fontWeight: 'bold',
                        paddingTop: 25,
                    }}
                >
                    {cost} Gal
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13, marginLeft: 60, color: '#000000'}}>
                    {item}
                </Text>
            </View>
        </View>
    )
}