import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screens/MenuScreen';
import RegistroScreen from "./src/screens/RegistroScreen";
import DetalleMaquina from "./src/screens/Maquinas/DetalleMaquina";
import TabContainerScreen from "./src/screens/TabContainerScreen";
import AddMaquinas from "./src/screens/Maquinas/AddMaquinas";
import Pruebas from "./src/screens/Pruebas";
import estilos from "./src/styles/estilos";
import CamaraQR from "./src/screens/Maquinas/CamaraQR";
import {AuthProvider} from "./src/context/AuthContext"

import colores from "./src/styles/colores";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <AuthProvider>
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
        name="add_maquina"
        component={AddMaquinas}
        options={{
          title:'Agregar maquina'
        }}
      />

      <Stack.Screen
        name="camara"
        component={CamaraQR}
        options={{
          title:'Escanear camara'
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

      <Stack.Screen
        name="pruebas"
        component={Pruebas}
        options={{
          title:'pruebas',
          ...estilos.headerEstilo,
        }}
      />

    </Stack.Navigator>
    </AuthProvider>
  </NavigationContainer>

);

export default App;