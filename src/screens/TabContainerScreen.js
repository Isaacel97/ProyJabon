import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaquinaTab from './tabs/MaquinaTab';
import PerfilTab from './tabs/PerfilTab';
import {MaterialIcons} from '@expo/vector-icons';
import colores from '../styles/colores';
import { TouchableOpacity, Alert } from 'react-native';
import {Icon} from "react-native-elements";
import { auth } from '../api/backend';

//Screen = contenedor de pantallas
const Tab = createBottomTabNavigator();
  const TabContainerScreen = (props) => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: colores.azulMic},
          headerTintColor: 'white',
          headerLeft: () => {
            return(
              <TouchableOpacity
                style={{paddingStart: 16}}
                title='Alert' 
                onPress={() => {props.navigation.navigate('add_maquina')}}>
                <MaterialIcons 
                  name='add-box'
                  color={'white'}
                  size={24}/>
              </TouchableOpacity>
          )},
          headerRight: () => {
            return(
              <TouchableOpacity
                style={{paddingEnd: 16}}
                title='Alert' 
                onPress={() => {
                  Alert.alert(
                    'Cerrar sesión',
                    '¿Desea cerrar sesión?' ,
                    [{
                      text: 'Sí',
                      onPress: () => {  
                        try {
                          auth.signOut();
                          props.navigation.navigate('inicio')
                        } catch (error) {
                          Alert.alert("¡ERROR!", error);
                        }    
                      },
                      style: 'default',
                      },
                      {
                        text: 'No',
                        onPress: () => {},
                        style: 'cancel',
                      },
                  ]);
                }}>
                <MaterialIcons 
                  name='logout'
                  color={'white'}
                  size={24}/>
              </TouchableOpacity>
          )},
          tabBarActiveTintColor: colores.azulMic,
          tabBarInactiveTintColor: "#7c7c7c",
          showIcon: true,
          tabBarIcon: ({color, size}) => screenOptions(route, color, size)})}>
          <Tab.Screen 
            name='tab_maquina'
            component={MaquinaTab}
            options={{title: 'Mis maquinas'}}/>
          <Tab.Screen 
            name='tab_perfil'
            component={PerfilTab}
            options={{title: 'Mi perfil'}}/>
      </Tab.Navigator>
)}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === 'tab_maquina') iconName = "state-machine";
  if (route.name === 'tab_perfil') iconName = "account";
  return(
    <Icon type="material-community" name={iconName} color={color} size={size} />
)}

export default TabContainerScreen;