import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Database from './Database';
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

  return (
    <View style={styles.searchFrame}>
      <Text style={styles.title}>Search</Text>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <Database />
    </View>
  );
};

export default Search;
