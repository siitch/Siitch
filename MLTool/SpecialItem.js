import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
    Animated
} from "react-native";
import React, {useCallback, useEffect, useRef, useState} from "react";

import {Button as NewButton} from "react-native-ui-lib";
import * as Analytics from "expo-firebase-analytics";
import * as WebBrowser from "expo-web-browser";
import LottieView from 'lottie-react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Audio } from 'expo-av';

import itemDetailImages from "./ItemDetailImages/itemDetailImages";
import ResultImage from "./ResultImage";
import Profiles from "../ImageDB";

const SpecialItem = ({navigation, globalUnit}) => {
    // Set info for the popup modal
    const [infoVisible, setInfoVisible] = useState(false);
    const [infoShown, setInfoShown] = useState('');

    // Content to be displayed
    const whyBuyInSeason = [
        'Cheaper',
        'Fresher',
        'Tastes better',
        'More nutritious',
        'Avoids overseas contaminates from foreign countries which may have less stringent soil and pesticide regulations',
        'Avoids chemicals sprayed on produce required for long-haul transportation and quarantine periods. (Always wash your fruits and vegetables!)',
        'Supports local farmers which supports local economies',
        'Reduces carbon emissions: transporting produce across oceans and state lines requires energy, trucks and cargo vessels fueled by oil & gas',
    ]
    const goodSiitch = [
        'Boosts your immune system and your body\'s defense against germs',
        'Helps your body make collagen, a protein that heals wounds and gives you smoother skin',
        'Makes it easier to absorb iron to fight anemia',
        'Slows the advance of age-related macular degeneration (AMD), a leading cause of vision loss',
        'Helps fight cancer-causing free radicals',
        'Helps fight inflammation',
    ]
    const funSiitch = [
        'There are over 600 varieties of oranges',
        'Orange Trees were first grown in China',
        'Early Spanish explorers (most likely Ponce de Leon) planted the first orange trees near St. Augustine, Florida in the 1500s',
        'Florida is the top orange producer in the United States',
        'Spain has over 35 million orange trees',
        'Brazil is the world leader in orange production, producing about half of the world’s orange juice',
        'In order to get the same amount of fiber as you would from a medium orange, you’ll need to eat 7 cups of corn flakes',
    ]

    // BAD BUT ALSO INTERESTING SIITCH BUTTON
    const [confetti, setConfetti] = useState(false);
    const [badSiitchColor, setBadSiitchColor] = useState('#ef0000')
    const [badSiitch, setBadSiitch] = useState('Bad Siitch')
    let DeviceWidth = Dimensions.get('window').width

    // Button shaking
    const shakeAnimation = useRef(new Animated.Value(0)).current;
    const startShake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
    }
    // Play sound
    const [sound, setSound] = useState()
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('./ItemDetailImages/Orange-win.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }
    useEffect(()=>{
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    },[sound])

    // WebView YouTube video related
    const [reduceVideoPlayed, setReduceVideoPlayed] = useState(false)
    const [recipeVideoPlayed, setRecipeVideoPlayed] = useState(false)
    const onReduceStateChange = useCallback((state) => {
        if (state === "playing") {
            if (!reduceVideoPlayed){
                Analytics.logEvent('Reduce_Waste_Ideas_Video_Played')
                setReduceVideoPlayed(true)
            }
        }
    }, [reduceVideoPlayed]);
    const onRecipeStateChange = useCallback((state) => {
        if (state === "playing") {
            if (!recipeVideoPlayed){
                Analytics.logEvent('Easy_Recipe_Video_Played')
                setRecipeVideoPlayed(true)
            }
        }
    }, [recipeVideoPlayed]);

    return(
        <View>
            {/* In Season? */}
            <View style={{margin: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.inSeason} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            In Season?
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 10, marginLeft: 5}}>
                    There are over 600 varieties or oranges grown worldwide. Seasons vary.
                    Check the
                    <Text onPress={() => {
                        WebBrowser.openBrowserAsync('https://www.seasonalfoodguide.org')
                        Analytics.logEvent('Source_click',{
                            source_name: 'Seasonal Food Guide',
                            source_url: 'https://www.seasonalfoodguide.org'
                        })
                    }}
                          style={{color: '#00ADEF'}}> Seasonal Food Guide </Text>
                    to see what’s in season near you.
                </Text>
                <View style={{
                    marginTop: '4%',
                    marginBottom: '1%'
                }}>
                    <NewButton
                        style={{
                            backgroundColor: '#8DC73F',
                            height: 52,
                            marginHorizontal: '6%',
                            marginTop: '3%',
                            marginBottom: '3%',
                            shadowColor: 'rgba(0,0,0,0.4)',
                            shadowOffset: { height: 1, width: 1 },
                            shadowOpacity: 0.5,
                        }}
                        outline={false}
                        onPress={() => {
                            Analytics.logEvent('Why_Buy_In_Season')
                            setInfoVisible(true)
                            setInfoShown('Why Buy In Season')
                        }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'white'
                        }}>Why Buy In Season</Text>
                    </NewButton>
                </View>
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            {/* Alternatives */}
            <View style={{margin: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.Alternatives} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            Off-Season Alternatives
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 10, marginLeft: 5}}>
                    N/A. Due to the many varieties of oranges, you can always find some variety on sale throughout the year.
                    {'\n\n'}
                    If you want to reduce your environmental impact, and oranges are not in season near you, consider
                    what other in-season produce you could swap as an alternative.
                </Text>
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            {/* Good Source */}
            <View style={{margin: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.goodResource} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            Good Source:
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize:20,
                            fontWeight:'bold',
                            color: '#00ADEF'
                        }}>
                            Vit. C
                        </Text>
                    </View>
                </View>
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            <View style={{margin: 10}}>
                {confetti && (
                    <LottieView
                        source={require('./ItemDetailImages/confetti-partyyy.json')}
                        autoPlay={true}
                        loop={false}
                        speed={1.5}
                        style={{
                            zIndex: 1,
                        }}
                        onAnimationFinish={()=>setConfetti(false)}
                    />
                )}
                <NewButton
                    style={{
                        backgroundColor: '#8DC73F',
                        height: 52,
                        marginHorizontal: '6%',
                        marginTop: '3%',
                        marginBottom: '3%',
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowOffset: { height: 1, width: 1 },
                        shadowOpacity: 0.5,
                    }}
                    outline={false}
                    onPress={() => {
                        Analytics.logEvent('Nutrition_Info')
                        setInfoVisible(true)
                        setInfoShown('Nutrition Info')
                    }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color:'white'
                    }}>Nutrition Info</Text>
                </NewButton>

                <NewButton
                    style={{
                        backgroundColor: '#8DC73F',
                        height: 52,
                        marginHorizontal: '6%',
                        marginTop: '3%',
                        marginBottom: '3%',
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowOffset: { height: 1, width: 1 },
                        shadowOpacity: 0.5,
                    }}
                    outline={false}
                    onPress={() => {
                        Analytics.logEvent('Good_Siitch')
                        setInfoVisible(true)
                        setInfoShown('Good Siitch')
                    }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color:'white'
                    }}>Good Siitch</Text>
                </NewButton>

                <Animated.View style={{
                    transform: [{translateX: shakeAnimation}]
                }}>
                    <NewButton
                        style={{
                            backgroundColor: badSiitchColor,
                            height: 52,
                            marginHorizontal: '6%',
                            marginTop: '3%',
                            marginBottom: '3%',
                            shadowColor: 'rgba(0,0,0,0.4)',
                            shadowOffset: { height: 1, width: 1 },
                            shadowOpacity: 0.5,
                        }}
                        outline={false}
                        onPress={() => {
                            Analytics.logEvent('Bad_Siitch')
                            setConfetti(true)
                            setBadSiitch('🎉No Bad Siitch!')
                            setBadSiitchColor('#8DC73F')
                            playSound()
                            startShake()
                        }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'white'
                        }}>{badSiitch}</Text>
                    </NewButton>
                </Animated.View>

                <NewButton
                    style={{
                        backgroundColor: '#00ADEF',
                        height: 52,
                        marginHorizontal: '6%',
                        marginTop: '3%',
                        marginBottom: '3%',
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowOffset: { height: 1, width: 1 },
                        shadowOpacity: 0.5,
                    }}
                    outline={false}
                    onPress={() => {
                        Analytics.logEvent('Fun_Siitch')
                        setInfoVisible(true)
                        setInfoShown('Fun Siitch')
                    }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color:'white'
                    }}>Fun Siitch</Text>
                </NewButton>
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            {/* Videos */}
            <View style={{margin: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.reduceWasteIdeas} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            Reduce Waste Ideas
                        </Text>
                    </View>
                </View>
                <YoutubePlayer
                    height={DeviceWidth * (9/16)}
                    webViewStyle={{
                        marginTop: 10,
                        marginHorizontal: 5,
                        marginBottom: 5
                    }}
                    onChangeState={onReduceStateChange}
                    videoId={"-BwiYvggMII"}
                />
            </View>

            <View style={{marginHorizontal: 10, marginBottom: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.easyRecipe} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            Easy Recipe
                        </Text>
                    </View>
                </View>
                <YoutubePlayer
                    height={DeviceWidth * (9/16)}
                    webViewStyle={{
                        marginTop: 10,
                        marginHorizontal: 5,
                        marginBottom: 5
                    }}
                    onChangeState={onRecipeStateChange}
                    videoId={"SJ9ZwFZAwJo"}
                />
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            {/* Compare */}
            <View style={{margin: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={itemDetailImages.VS} style={{width: 28, height: 28}}/>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            marginLeft: 5}}>
                            Compare
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 9,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Compare Details', {
                              itemsArray: ['Oranges', 'Grapefruit']
                            })
                        }}
                        style={{
                            flex: 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={ResultImage['Grapefruit']}
                            style={{
                                height: 87,
                                width: 87
                            }}
                        />
                        <Text>Grapefruit</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={Profiles.water} style={{width: 15, height: 15}}/>
                            {globalUnit === 'G' && (
                                <Text>61 G p/lb</Text>
                            )}
                            {globalUnit === 'L' && (
                                <Text>506 L p/kg</Text>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Compare Details', {
                              itemsArray: ['Oranges', 'Lemons']
                            })
                        }}
                        style={{
                            flex: 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={ResultImage['Lemons']}
                            style={{
                                height: 87,
                                width: 87
                            }}
                        />
                        <Text>Lemon</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={Profiles.water} style={{width: 15, height: 15}}/>
                            {globalUnit === 'G' && (
                                <Text>77 G p/lb</Text>
                            )}
                            {globalUnit === 'L' && (
                                <Text>642 L p/kg</Text>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Compare Details', {
                              itemsArray : ['Oranges', 'Mandarins']
                            })
                        }}
                        style={{
                            flex: 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={ResultImage['Mandarins']}
                            style={{
                                height: 87,
                                width: 87
                            }}
                        />
                        <Text>Mandarin</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={Profiles.water} style={{width: 15, height: 15}}/>
                            {globalUnit === 'G' && (
                                <Text>90 G p/lb</Text>
                            )}
                            {globalUnit === 'L' && (
                                <Text>749 L p/kg</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Divider */}
            <View
                style={{
                    borderBottomColor: 'rgba(0,0,0,0.25)',
                    borderBottomWidth: 1,
                }}
            />

            {/* Modal */}
            <Modal animationType="slide" transparent={true} visible={infoVisible}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                    {infoShown === 'Why Buy In Season' && (
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: DeviceWidth*0.9,
                            backgroundColor: 'white',
                            borderColor: '#00ADEF',
                            borderWidth: 1.5,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setInfoVisible(false);
                                }}
                                style={{
                                    zIndex: 10,
                                    alignSelf: 'flex-end',
                                    position: 'absolute'
                                }}>
                                <Image
                                    source={itemDetailImages.closeInfoModal}
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}/>
                            </TouchableOpacity>
                            <View style={{
                                marginHorizontal: 15,
                                marginBottom: 15,
                                marginTop: 25,
                                padding: 15
                            }}>
                                <Text>
                                    The many sustainable benefits of buying local and in-season:{'\n'}
                                </Text>
                                {whyBuyInSeason.map((why) => {
                                    return(
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{marginRight: 5}}>
                                                <Text style={{fontSize: 8, marginTop: 4}}>●</Text>
                                            </View>
                                            <View>
                                                <Text>{why}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )}

                    {infoShown === 'Nutrition Info' && (
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: DeviceWidth*0.9,
                            backgroundColor: 'white',
                            borderColor: '#00ADEF',
                            borderWidth: 1.5,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setInfoVisible(false);
                                }}
                                style={{
                                    zIndex: 10,
                                    alignSelf: 'flex-end',
                                    position: 'absolute'
                                }}>
                                <Image
                                    source={itemDetailImages.closeInfoModal}
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}/>
                            </TouchableOpacity>
                            <View style={{
                                margin: 15,
                                padding: 15
                            }}>
                                <Text>
                                    Nutrition Information:{'\n'}
                                    One Navel Orange (140 g){'\n'}
                                    Source:
                                    <Text onPress={() => {
                                        WebBrowser.openBrowserAsync('https://fdc.nal.usda.gov')
                                        Analytics.logEvent('Source_click',{
                                            source_name: 'USDA',
                                            source_url: 'https://fdc.nal.usda.gov'
                                        })
                                    }}
                                          style={{color: '#00ADEF'}}> USDA</Text>
                                    {'\n'}
                                </Text>
                                <View style={{
                                    flexDirection: 'row'}}>
                                    <Text style={{flex: 1}}>
                                        Calories{'\n'}
                                        Carbs{'\n'}
                                        Protein{'\n'}
                                        Fat{'\n'}
                                        Sugar{'\n'}
                                        Fiber{'\n'}
                                        Cholesterol{'\n'}
                                        Vitamin C{'\n'}
                                        Sodium{'\n'}
                                        Potassium{'\n'}
                                        Calcium
                                    </Text>
                                    <Text style={{flex: 1}}>
                                        73 g{'\n'}
                                        16.5 g{'\n'}
                                        1.3 g{'\n'}
                                        0.2 g{'\n'}
                                        12 g{'\n'}
                                        2.8 g{'\n'}
                                        0 mg{'\n'}
                                        82.7 mg - 92% DV{'\n'}
                                        13 mg{'\n'}
                                        232 mg{'\n'}
                                        60.2 mg
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {infoShown === 'Good Siitch' && (
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: DeviceWidth*0.9,
                            backgroundColor: 'white',
                            borderColor: '#00ADEF',
                            borderWidth: 1.5,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setInfoVisible(false);
                                }}
                                style={{
                                    zIndex: 10,
                                    alignSelf: 'flex-end',
                                    position: 'absolute'
                                }}>
                                <Image
                                    source={itemDetailImages.closeInfoModal}
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}/>
                            </TouchableOpacity>
                            <View style={{
                                margin: 15,
                                padding: 15
                            }}>
                                <Text>
                                    Good Siitch:{'\n'}
                                    Source:
                                    <Text onPress={() => {
                                        WebBrowser.openBrowserAsync('https://www.webmd.com/food-recipes/health-benefits-oranges')
                                        Analytics.logEvent('Source_click',{
                                            source_name: 'WebMD',
                                            source_url: 'https://www.webmd.com/food-recipes/health-benefits-oranges'
                                        })
                                    }}
                                          style={{color: '#00ADEF'}}> WebMD{'\n'}</Text>
                                </Text>
                                {goodSiitch.map((good) => {
                                    return(
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{marginRight: 5}}>
                                                <Text style={{fontSize: 8, marginTop: 4}}>●</Text>
                                            </View>
                                            <View>
                                                <Text>{good}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )}

                    {infoShown === 'Fun Siitch' && (
                        <View style={{
                            marginLeft: 20,
                            marginRight: 20,
                            width: DeviceWidth*0.9,
                            backgroundColor: 'white',
                            borderColor: '#00ADEF',
                            borderWidth: 1.5,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setInfoVisible(false);
                                }}
                                style={{
                                    zIndex: 10,
                                    alignSelf: 'flex-end',
                                    position: 'absolute'
                                }}>
                                <Image
                                    source={itemDetailImages.closeInfoModal}
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}/>
                            </TouchableOpacity>
                            <View style={{
                                margin: 15,
                                padding: 15
                            }}>
                                <Text>
                                    Fun Siitch (fun facts!):{'\n'}
                                    Source:
                                    <Text onPress={() => {
                                        WebBrowser.openBrowserAsync('https://www.abetterchoice.com.au/seasonal-choice/10-fun-facts-you-didnt-know-about-oranges/')
                                        Analytics.logEvent('Source_click',{
                                            source_name: 'A Better Choice',
                                            source_url: 'https://www.abetterchoice.com.au/seasonal-choice/10-fun-facts-you-didnt-know-about-oranges/'
                                        })
                                    }}
                                          style={{color: '#00ADEF'}}> A Better Choice</Text>
                                    ,
                                    <Text onPress={() => {
                                        WebBrowser.openBrowserAsync('https://www.floridacitrus.org')
                                        Analytics.logEvent('Source_click',{
                                            source_name: 'Florida Citrus',
                                            source_url: 'https://www.floridacitrus.org'
                                        })
                                    }}
                                          style={{color: '#00ADEF'}}> Florida Citrus{'\n'}</Text>
                                </Text>
                                {funSiitch.map((fun) => {
                                    return(
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{marginRight: 5}}>
                                                <Text style={{fontSize: 8, marginTop: 4}}>●</Text>
                                            </View>
                                            <View>
                                                <Text>{fun}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )}
                </View>
            </Modal>

        </View>
    )
}

export default SpecialItem;
