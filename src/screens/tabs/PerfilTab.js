import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Alert, ScrollView } from "react-native";
import estilos from './../../styles/estilos'
import {AntDesign} from '@expo/vector-icons';

//tab = pestaña
const PerfilTab = (props) => {
    return(
//Contendor principal
<ScrollView style={{
    ...estilos.container,
    paddingTop: 8,
    }}>
<View >
{/* Input nombre */}
<Text style={estilos.textDatos}>
    Nombre:
</Text>
<View style={estilos.textInputIconContainer}>
  <AntDesign
    name='user'
    size={24}
    color={'#5271FF'}
  />
  <TextInput 
    style={estilos.textInputIcon}
    name='nombre'
    placeholder='Nombre completo'
    keyboardType='default'
    autoCapitalize='characters'
  />
</View>
{/* Input email */}
<Text style={estilos.textDatos}>
    Email:
</Text>
<View style={estilos.textInputIconContainer}>
  <AntDesign
    name='mail'
    size={24}
    color={'#5271FF'}
  />
  <TextInput 
    style={estilos.textInputIcon}
    name='email'
    placeholder='Email'
    keyboardType='email-address'
    autoComplete='email'
    autoCapitalize='none'
    autoCorrect={false}
    textContentType='emailAddress'
  />
</View>
{/* Input Password */}
<Text style={estilos.textDatos}>
    Password:
</Text>
<View style={estilos.textInputIconContainer}>
  <AntDesign
    name='edit'
    size={24}
    color={'#5271FF'}
  />
  <TextInput 
    style={estilos.textInputIcon}
    name="confirmaPassword"
    placeholder='Password'
    keyboardType='default' 
    autoCapitalize='none'
    autoCorrect={false}
    textContentType='password'
    secureTextEntry
  />
</View>
{/* Boton: registro */}
<TouchableOpacity 
  style={estilos.botonTouch}
  title='Alert' 
  onPress={() => {
    Alert.alert(
      'Confirma datos',
      'Nombre: {nombre}, Email: {email} ¿Los datos con correctos?' ,
      [
        {
          text: 'Sí',
          onPress: () => props.navigation.navigate('inicio'),
          style: 'default',
        },
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    }}>
  <Text style={{
    color: 'white',
    fontSize: 18,
  }}>
    Actualizar datos
  </Text>
</TouchableOpacity>
</View>
</ScrollView>
)
}

export default PerfilTab;