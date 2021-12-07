import 'react-native-gesture-handler';
import React from 'react';
import { WebView } from 'react-native-webview';

export const Feedback = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfXTM0QORW9VGi7KE6bgNpNM8SGZgzsYu3YS1wZdi0oL6S-4A/viewform?vc=0&c=0&w=1&flr=0' }}
    />
  );
}
