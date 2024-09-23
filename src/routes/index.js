import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Inicial from '../pages/pgInicial';
import Perfil from '../pages/perfil';
import NewAd from '../pages/addAudios';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicial"
        component={Inicial}
        options={{
          headerShown: false,
          tabBarLabel: 'Áudios',
          tabBarIcon: () => <Icon name="home" color="#000" size={36} />,
        }}
      />

      <Tab.Screen
        name="Newad"
        component={NewAd}
        options={{headerShown: false, tabBarLabel: 'Add',
          tabBarIcon: () => <Icon name="upload" color="#000" size={36}/> 
        }}
      />

      <Tab.Screen
        name="Perfi"
        component={Perfil}
        options={{headerShown: false, tabBarLabel: 'Perfil',
          tabBarIcon: () => <Icon name="user" color="#000" size={36}/>
        }}
         
      />
    </Tab.Navigator>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Inicial"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
