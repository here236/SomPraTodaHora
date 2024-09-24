import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    // Carrega os dados armazenados no AsyncStorage
    const loadStoredData = async () => {
      const storedEmail = await AsyncStorage.getItem('@login_email');
      const storedSenha = await AsyncStorage.getItem('@login_senha');
      if (storedEmail) setEmail(storedEmail);
      if (storedSenha) setSenha(storedSenha);
    };

    loadStoredData();
  }, []);

  const handleLogin = async () => {
    if (email && senha) {
      try {
        await AsyncStorage.setItem('@login_email', email);
        await AsyncStorage.setItem('@login_senha', senha);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Inicial');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar seus dados.');
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.mensagem}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.form}>
        <Text style={styles.ttl}>Email</Text>
        <TextInput
          placeholder="Digite um Email..."
          placeholderTextColor="#020"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.ttl}>Senha</Text>
        <TextInput
          placeholder="Sua Senha"
          placeholderTextColor="#020"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
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
  header: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  mensagem: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F6F4F3',
  },
  form: {
    backgroundColor: '#F6F4F3',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  ttl: {
    color: '#020',
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color:'#000'
  },
  button: {
    backgroundColor: '#C46132',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F6F4F3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
});
