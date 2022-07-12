import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screens/MenuScreen';
import RegistroScreen from "./src/screens/RegistroScreen";
import DetalleMaquina from "./src/screens/DetalleMaquina";
import TabContainerScreen from "./src/screens/TabContainerScreen";
import estilos from "./src/styles/estilos";
import {initFirebase} from './src/api/backend';

import colores from "./src/styles/colores";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar
      backgroundColor={colores.azulMic}
    />
    <Stack.Navigator>
      <Stack.Screen
        name="inicio"
        component={MenuScreen}
        options={{
          title:'Iniciar sesión',
          ...estilos.headerEstilo,
        }}
      />

      <Stack.Screen
        name="registro"
        component={RegistroScreen}
        options={{
          title:'Registrate',
          ...estilos.headerEstilo,
        }}
      />

      <Stack.Screen
        name="menu_tab"
        component={TabContainerScreen}
        options={{
          title:'Maquinas',
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="det_maquina"
        component={DetalleMaquina}
        options={{
          title:'Control maquina',
          ...estilos.headerEstilo,
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>

);

export default App;