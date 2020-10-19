import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Beef_Water from './Beef_Water';
import {Searchbar, Avatar} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  PanResponder,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {styles} from './App';

const Search = () => {
  const [index, setIndex] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState('');
  const catImage = [
    [
      {image: require('./images/Meat.png'), name: 'Beef'},
      {image: require('./images/jeans.png'), name: 'Jeans'},
      {image: require('./images/makeup.png'), name: 'Makeup'},
    ],
  ];
  const toDatabase = () => {
    setMessage(keyword);
    setSend(true);
    console.log('test');
  };
  const goBack = status => {
    setSend(status);
  };
  const pressImage = name => {
    setMessage(name);
    setSend(true);
  };
  return (
    <View style={styles.searchFrame}>
      {send ? (
        <Beef_Water input={message} goBack={goBack} />
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Search</Text>
          <Searchbar
            placeholder="Search"
            onChangeText={text => setKeyword(text)}
            onIconPress={toDatabase}
            style={{width: 250}}
          />
          {catImage.map(row => (
            <View key={row} style={styles.avatarView}>
              {row.map(url => (
                <TouchableHighlight
                  key={url.image}
                  onPress={() => pressImage(url.name)}
                  activeOpacity={1}
                  underlayColor="#ffffff">
                  <View style={styles.eachAvatar}>
                    <Avatar.Image source={url.image} />
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Search;
