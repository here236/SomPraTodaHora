import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function Inicial() {
  return (
    <View style={styles.container}>
      <Text>Inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
  },
});
