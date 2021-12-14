import 'react-native-gesture-handler';
import React from 'react';
import {Text, Linking, ScrollView, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Analytics from 'expo-firebase-analytics';

export const Sources = ({ navigation }) => {
    const sourcesList = [
        {name: 'Mekonnen and Hoekstra 2010 - Crops', url: 'https://waterfootprint.org/media/downloads/Report47-WaterFootprintCrops-Vol1.pdf'},
        {name: 'Mekonnen and Hoekstra 2010 - Animals', url: 'https://waterfootprint.org/media/downloads/Report-48-WaterFootprint-AnimalProducts-Vol1_1.pdf'},
        {name: 'Water Footprint Assessment Manual, 2011', url: 'https://waterfootprint.org/media/downloads/TheWaterFootprintAssessmentManual_2.pdf'},
        {name: 'Water Footprint Network', url: 'https://waterfootprint.org/en/resources/waterstat/'},
        {name: 'Water Calculator', url: 'https://www.watercalculator.org/'},
        {name: 'Your Water Footprint - Leahy', url: 'https://www.amazon.com/Your-Water-Footprint-Shocking-Everyday/dp/1770852956'},
        {name: 'USDA Food Data Central', url: 'https://fdc.nal.usda.gov/'},
        {name: 'USFDA', url: 'https://www.fda.gov/home'},
        {name: 'United Nations F.A.O.', url: 'http://www.fao.org/home/en/'},
        {name: 'National Resource Defence Council', url: 'https://www.nrdc.org/'},
        {name: 'The Green Blue Book - Kostigen', url: 'https://www.amazon.com/Green-Blue-Book-Water-Savings-Everything/dp/1605294713/ref=sr_1_2?dchild=1&keywords=Green+blue+book+kostigen&qid=1628817411&sr=8-2'},
        {name: 'National Geographic', url: 'https://www.nationalgeographic.com/'},
        {name: 'US National Park Service', url: 'https://www.nps.gov/index.htm'},
        {name: 'Burbank Recycle Center', url: 'https://www.burbankca.gov/web/public-works/recycle-center'},
        {name: 'CalRecycle', url: 'https://www.calrecycle.ca.gov'},
        {name: 'USEPA', url: 'https://www.epa.gov'}
    ]

    const handleSource = (source) => {
        WebBrowser.openBrowserAsync(source.url)
        Analytics.logEvent('Source_click',{
            source_name: source.name,
            source_url: source.url
        })
    }

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <Text
                style={{
                    fontSize: 18,
                    alignContent: 'flex-start',
                    marginLeft: '6%',
                    marginTop: '10%',
                    marginRight: '6%',
                }}>
                All attempts have been made to represent the most accurate information possible.
                Facts and statistics have been sourced from numerous publicly available scientific studies,
                white papers and news articles, and from conversations with the Supervisors of the Burbank Recycle Center
                and Burbank Landfill. The main sources listed below.
            </Text>

            <View style={{marginTop: '12%'}}>
                {sourcesList.map((s, index) =>{
                    return(
                        <Text
                            key={index}
                            onPress={() => handleSource(s)}
                            style={{
                                color: '#00ADEF',
                                fontSize: 20,
                                marginLeft: '6%',
                                marginRight: '2%',
                                marginTop: 5
                            }}>
                            {s.name}
                        </Text>
                    )
                })}
            </View>

            <Text
                style={{
                    fontSize: 18,
                    alignContent: 'flex-start',
                    marginLeft: '7%',
                    marginTop: 30,
                    marginRight: '7%',
                }}>
                We are in deep gratitude to the Professors, Scientists and Journalists
                working to shed light on the true costs of what we consume.
                We encourage everyone to explore these sources.
            </Text>

            <Text
                style={{
                    fontSize: 18,
                    alignContent: 'flex-start',
                    marginLeft: '7%',
                    marginTop: 30,
                    marginRight: '7%',
                }}>
                Landing page people vector created by
            </Text>

            <Text
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        'https://www.freepik.com/vectors/people',
                    )
                }
                style={{
                    fontSize: 18,
                    marginLeft: '6%',
                    marginBottom: '4%',
                    textDecorationLine: 'underline',
                }
                }>
                {' '}
                rawpixel.com{' '}
            </Text>
        </ScrollView>
      );
}
