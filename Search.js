import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Database from './Database';
import {Searchbar} from 'react-native-paper';
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
  const toDatabase = () => {
    setMessage(keyword);
    setSend(true);
  };

  return (
    <View style={styles.searchFrame}>
      <Text style={styles.title}>Search</Text>
      {/* <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={text => setKeyword(text)}
      /> */}
      <Searchbar
        placeholder="Search"
        onChangeText={text => setKeyword(text)}
        onIconPress={toDatabase}
      />
      {send ? <Database input={message} /> : null}
    </View>
  );
};

export default Search;
