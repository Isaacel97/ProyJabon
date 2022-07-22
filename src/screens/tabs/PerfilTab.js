import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Alert, ScrollView } from "react-native";
import estilos from './../../styles/estilos'
import {AntDesign} from '@expo/vector-icons';
import useAuth from '../../hooks/useAuth';

//tab = pestaña
const PerfilTab = (props) => {
  const {auth} = useAuth();
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
    placeholder={`${auth.nombresyapellidos}`}
    keyboardType='default'
    editable={false}
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
    placeholder={`${auth.email}`}
    keyboardType='email-address'
    textContentType='emailAddress'
    editable={false}
  />
</View>

</View>
</ScrollView>
)
}

export default PerfilTab;