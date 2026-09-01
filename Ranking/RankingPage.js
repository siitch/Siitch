import Profiles from '../ImageDB.js';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './Styles';
import { RankingItem } from './RankingItem';
import {FirebaseRealtimeDatabase, ref, get} from "../Firebase/firebase";
import analytics from '@react-native-firebase/analytics';
import itemDetailImages from "../MLTool/ItemDetailImages/itemDetailImages";
import {RankingInfoModal, RankingLearnMore} from "../components/Modals/Modals";
import { GLSwitcher } from "../components/GLSwitcher";

const DeviceWidth = Dimensions.get('window').width;

export const RankingPage = ({category, id}) => {
  const fetchedDataRef = useRef({});
  const itemsRef = useRef({});
  const sortableRef = useRef([]);
  const maxRef = useRef(0);

  const [fetched, handleFetch] = useState(false);
  const [currentCategory, changeCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  function closeLearnMoreModal() {
    setModalVisible(false)
  }
  const [infoVisible, setInfoVisible] = useState(false);
  function closeRankingInfoModal() {
    setInfoVisible(false)
  }
  const [unit, setUnit] = useState('G');
  const exceptionCategories = ['Everyday Foods', 'Everyday Items', 'All Drinks', 'Alcoholic', 'Non-Alcoholic'];
  const specialCategory = exceptionCategories.includes(category);

  useEffect(() => {
    async function logRanking (){
      await analytics().logEvent('View_ranking',{
        Ranking_category: category
      })
    }
    logRanking()
  },[])

  const waterParameter = () => {
    if(unit === 'L') {
      if (id === "EDI" || id === "Drinks - All" || id === "Drinks - Alc") {
        return "Single item   L";
      }
      else {
        return "Global Liters p kg";
      }
    }
    else if(unit === 'G') {
      if (id === "EDI" || id === "Drinks - All" || id === "Drinks - Alc") {
        return "Single item   Gal";
      }
      else {
        return "Global Gallon p lb";
      }
    }
  }

  const parameter = waterParameter();

  const processDatabaseValue = (value) => {
    if(typeof value === 'string') {
      return value.replace(',', '');
    }
    else {
      return value;
    }
  }

  const fetchData = () => {
    const getDataRef = ref(FirebaseRealtimeDatabase, '/');
    get(getDataRef).then((data) => {
      fetchedDataRef.current = data.val();
      const fetchedData = fetchedDataRef.current;
      for (let item in fetchedData) {
        if((fetchedData[item]["Category"] === id || fetchedData[item]["Category 2"] === id || fetchedData[item]["Category 3"] === id) && fetchedData[item][parameter]) {
          itemsRef.current[item] = fetchedData[item];
        }
      }

      const items = itemsRef.current;
      let sortable = [];

      if(Object.keys(items).length > 0) {
        for (let item in items) {
          sortable.push([item, processDatabaseValue(items[item][parameter]), (unit === 'G' ? items[item]["Display Unit Imperial"] : items[item]["Display Unit Metric"])]);
        }

        sortable.sort(function(a, b) {
          return parseInt(a[1]) - parseInt(b[1]);
        });

        const min = parseInt(sortable[0][1]);

        sortable.reverse();

        maxRef.current = parseInt(sortable[0][1]);
        sortableRef.current = sortable;

        handleFetch(true);
      }
    });
  }

  useEffect(() => {
    if (category !== currentCategory) {
      changeCategory(category);
      handleFetch(false);
      itemsRef.current = {};
      sortableRef.current = [];
      maxRef.current = 0;
    }
  }, [category, currentCategory]);

  useEffect(() => {
    if (!fetched) {
      fetchData();
    }
  }, [fetched]);

  const unitTitle = (category, unit) => {
    if(category === "Everyday Items" || category === "Everyday Foods" || category === "All Drinks" || category === "Alcoholic" || category === "Non-Alcoholic") {
      return <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}></View>;
    }
    else {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', marginBottom: '5%'}}>
          <Image
            style={{width: 20, height: 20}}
            source={Profiles.water}
          />
          <Text style={{fontSize: 15, marginLeft: 5}}>{ unit === 'L' ? 'Liters per Kilogram' : 'Gallons per Pound' }</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.meats}>
      <ScrollView>

        <GLSwitcher globalUnit={unit} switchHandler={setUnit}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25, paddingTop: 15, paddingLeft: 30, paddingBottom: 10}}>
            {category}
          </Text>
          <TouchableOpacity
            style={{paddingTop: 8}}
            onPress={()=>{
              setInfoVisible(true)
              analytics().logEvent('Info_button_pressed',{
                infoName: 'Virtual_Water'
              })
            }}>
            <Image source={itemDetailImages.info} style={{width: 30, height: 25}}/>
          </TouchableOpacity>
        </View>

        <View>
          {
            unitTitle(category, unit)
          }
          {
            sortableRef.current.map((item, index) => {
              return(
                <RankingItem key={index} max={maxRef.current} cost={parseInt(item[1])} item={item[0]} image={Profiles[item[0]] ? Profiles[item[0]] : Profiles.water_drops} unit={unit} category={id} displayUnit={item[2]}/>
              )
            })
          }

          <View style={{alignItems: 'center'}}>
            <View style={{width: DeviceWidth, marginLeft: 20, marginRight: 20, marginTop: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
            <Text style={{fontWeight: 'bold', color: '#002363' ,fontSize: 16, paddingTop: 10, marginTop: 10, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
              The average person in the US uses {('\n')}about 1,800 gallons (6,820 Liters) of water per day.
            </Text>
            <Text style={{fontSize: 16, paddingTop: 10, marginTop: 10, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
              Water awareness is key, but many factors determine the eco-cost of a product.&nbsp;
            </Text>

            <RankingLearnMore modalVisible={modalVisible} handler={closeLearnMoreModal}/>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                analytics().logEvent('Ranking_Learn_more')
              }
              }
            >
              <Text style= {{ color:'blue', marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20, width: DeviceWidth, textAlign: 'center' }}>Learn More</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16, marginLeft: 20, marginRight: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'}}>
              Don't see an item you're looking for? We only list quantifiable
              items from reputable studies. We'll add more as we find them.
            </Text>
            <View style={{width: DeviceWidth, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 40, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}></View>
          </View>
        </View>
      </ScrollView>

      {/* Info button modal */}
      <RankingInfoModal
        infoVisible={infoVisible}
        specialCategory={specialCategory}
        handler={closeRankingInfoModal}/>
    </View>
  );
}
