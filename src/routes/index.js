import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Inicial from '../pages/pgInicial';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Perfil from '../pages/perfil'
import NewAd from '../pages/addAudios'

const Stack = createNativeStackNavigator();

export default function Routes1() {
  return (
    <Stack.Navigator>
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
        component={Inicial}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function Routes2(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Newad"
            component={NewAd}
            options={{headerShown: false}}
            />

            <Tab.Screen
            name="Perfi"
            component={Perfil}
            options={{headerShown: false}}
            />

            <Tab.Screen
            name="Inicial"
            component={Inicial}
            options={{headerShown: false}}
            />
        </Tab.Navigator>
    )

}

