import React from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes2 from './src/routes';
import Routes1 from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Routes1 />
    </NavigationContainer>
  );
}
