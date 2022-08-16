import React from "react";
// style barra superior
import { StatusBar } from 'expo-status-bar';
// navegacion
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//publico
import MenuScreen from './src/screens/public/MenuScreen';
import RegistroScreen from "./src/screens/public/RegistroScreen";
import WifiMaquina from "./src/screens/public/WifiMaquina";
import ListBluetooth from "./src/screens/public/bluetooth/ListBluetooth";
//privado
import TabContainerScreen from "./src/screens/private/TabContainerScreen";
//maquina
import DetalleMaquina from "./src/screens/private/Maquinas/DetalleMaquina";
import AddMaquinas from "./src/screens/private/Maquinas/AddMaquinas";
import CamaraQR from "./src/screens/private/Maquinas/CamaraQR";
//estilos
import estilos from "./src/styles/estilos";
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
        name="wifi"
        component={WifiMaquina}
        options={{
          title:'Conectar maquina',
          ...estilos.headerEstilo,
        }}
      />

      <Stack.Screen
        name="list_blue"
        component={ListBluetooth}
        options={{
          title:'Dispositivos',
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
          title:'Agregar maquina',
          ...estilos.headerEstilo,
        }}
      />

      <Stack.Screen
        name="camara"
        component={CamaraQR}
        options={{
          title:'Escanear camara',
          ...estilos.headerEstilo,
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