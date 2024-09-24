import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function Perfi() {
  const navigation = useNavigation();

  // Função para exibir uma notificação
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: 4,
    });
    await notifee.displayNotification({
      title: 'Nova notificação',
      body: 'Texto de teste',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  // Função para escolher imagem (em manutenção)
  const picker = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
  };

  const handleImageUser = () => {
    Alert.alert('Selecione', 'Você quer por/trocar a foto de perfil');
  };

  // Função de logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@login_email');
      await AsyncStorage.removeItem('@login_senha');
      Alert.alert('Logout', 'Você saiu da sua conta.');
      navigation.navigate('Login'); // Redireciona para a tela de login
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair da conta.');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.foto}>
        <TouchableOpacity style={Styles.Perfi} onPress={this.handleImageUser}>
          <Image source={require('../../assets/perfil.jpg')} />
        </TouchableOpacity>
      </View>

      <View>
        <Button title="Notificação" onPress={() => onDisplayNotification()} />
      </View>

      {/* Botão de Logout */}
      <View style={Styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#C46132" />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4F3',
    padding: 20,
  },
  foto: {
    alignItems: 'center',
    marginVertical: 20,
  },
  Perfi: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  logoutButtonContainer: {
    marginTop: 20,
  },
});

export default Perfi;
