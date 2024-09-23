import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function Perfi() {
  const picker = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
  };

  const handleImageUser = () => {
    Alert.alert('Selecione', 'Você que por/trocar a foto de perfil');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.foto}>
        <TouchableOpacity style={Styles.Perfi} onPress={this.handleImageUser}>
          <Image source={require('../../assets/perfil.jpg')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({});
