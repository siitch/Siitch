import 'react-native-gesture-handler';
import React from 'react';
import {Text, Linking, ScrollView} from 'react-native';

export const Sources = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
          marginLeft: '6%',
          marginTop: '10%',
          marginRight: '6%',
        }}>
          All attempts have been made to represent the most accurate information possible.
          Facts and statistics have been sourced from numerous publicly available scientific studies,
          white papers and news articles, and from conversations with the Supervisors of the Burbank Recycle Center
          and Burbank Landfill. The main sources listed below.
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/Report47-WaterFootprintCrops-Vol1.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginRight: '2%',
            marginTop: '12%'
            }
            }>
            Mekonnen and Hoekstra 2010 - Crops{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/Report-48-WaterFootprint-AnimalProducts-Vol1_1.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginRight: '2%',
            marginTop: 5
            }
            }>
            Mekonnen and Hoekstra 2010 - Animals
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/media/downloads/TheWaterFootprintAssessmentManual_2.pdf',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginRight: '2%',
            marginTop: 5
            }
            }>
            Water Footprint Assessment Manual, 2011
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://waterfootprint.org/en/resources/waterstat/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            Water Footprint Network{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.watercalculator.org/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            Water Calculator{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.amazon.com/Your-Water-Footprint-Shocking-Everyday/dp/1770852956',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            Your Water Footprint - Leahy{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://fdc.nal.usda.gov/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            USDA Food Data Central{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.fda.gov/home',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            USFDA{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'http://www.fao.org/home/en/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            United Nations F.A.O.{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.nrdc.org/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            National Resource Defence Council{' '}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.amazon.com/Green-Blue-Book-Water-Savings-Everything/dp/1605294713/ref=sr_1_2?dchild=1&keywords=Green+blue+book+kostigen&qid=1628817411&sr=8-2',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginRight: '2%',
            marginTop: 5
            }
            }>
            The Green Blue Book - Kostigen
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.nationalgeographic.com/',
              )
            }
            style={{
            color: '#00ADEF',
            fontSize: 20,
            marginLeft: '6%',
            marginTop: 5
            }
            }>
            National Geographic{' '}
          </Text>
            <Text
                onPress={() =>
                    Linking.openURL(
                        'https://www.nps.gov/index.htm',
                    )
                }
                style={{
                    color: '#00ADEF',
                    fontSize: 20,
                    marginLeft: '6%',
                    marginTop: 5
                }
                }>
                US National Park Service
            </Text>
            <Text
                onPress={() =>
                    Linking.openURL(
                        'https://www.burbankca.gov/web/public-works/recycle-center',
                    )
                }
                style={{
                    color: '#00ADEF',
                    fontSize: 20,
                    marginLeft: '6%',
                    marginTop: 5
                }
                }>
                Burbank Recycle Center
            </Text>
            <Text
                onPress={() =>
                    Linking.openURL(
                        'https://www.calrecycle.ca.gov',
                    )
                }
                style={{
                    color: '#00ADEF',
                    fontSize: 20,
                    marginLeft: '6%',
                    marginTop: 5
                }
                }>
                CalRecycle
            </Text>
            <Text
                onPress={() =>
                    Linking.openURL(
                        'https://www.epa.gov',
                    )
                }
                style={{
                    color: '#00ADEF',
                    fontSize: 20,
                    marginLeft: '6%',
                    marginTop: 5
                }
                }>
                USEPA
            </Text>
          <Text
        style={{
          fontSize: 18,
          alignContent: 'auto',
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
          alignContent: 'auto',
          marginLeft: '7%',
          marginTop: 30,
          marginRight: '7%',
        }}>
        Landing page people vector created by
      </Text>
      <Text
            onPress={() =>
              Linking.openURL(
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
