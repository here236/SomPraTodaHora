import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo-som.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUp" style={styles.containerPalavras}>
        <Text style={styles.titulo}>
          Som Para Toda Obra. O toque perfeito para cada criação!
        </Text>
        <Text style={styles.texto}>Faça login para começar</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.buttonText}>acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C46132',
  },
  containerLogo: {
    backgroundColor: '#C46132',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPalavras: {
    backgroundColor: '#F6F4F3',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '7%',
    marginBottom: '2%',
    color: '#020',
  },
  texto: {
    color: '#a1a1a1',
  },
  button: {
    backgroundColor: '#C46132',
    position: 'absolute',
    borderRadius: 16,
    paddingRight: 40,
    paddingBottom: 14,
    paddingLeft: 40,
    paddingTop: 10,
    bottom: '35%',
    marginLeft: '5%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#020',
    textTransform: 'capitalize',
    fontSize: 15,
  },
});
