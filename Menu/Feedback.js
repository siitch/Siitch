import 'react-native-gesture-handler';
import React from 'react';
import { WebView } from 'react-native-webview';

export const Feedback = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSeqChRf7XP46G5Dm6fvXrRUS7ucKI140yyTp_CBBxkElXss5g/viewform?usp=sf_link' }}
    />
  );
}
