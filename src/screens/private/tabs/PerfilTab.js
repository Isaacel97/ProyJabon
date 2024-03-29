import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Alert, ScrollView } from "react-native";
import estilos from '../../../styles/estilos'
import {AntDesign} from '@expo/vector-icons';
import {getAuth} from "firebase/auth";
import { fireNombre, fireApellido } from '../../../utils/controlBD';

//tab = pestaña
const PerfilTab = (props) => {
  //const datos email
  const {email} = getAuth().currentUser;

  //muestra apellido
  const [apellido, setApellido] = useState (null);
  useEffect (() => { 
    getApellido();
  }, [])
  const getApellido = async() => {
    const n = await fireApellido(email);
    setApellido(n);
  }

  //muestra nombre
  const [nombre, setNombre] = useState (null);
  useEffect (() => { 
    getNombre();
  }, [])
  const getNombre = async() => {
    const n = await fireNombre(email);
    setNombre(n);
  }
  return(
    //Contendor principal
    <ScrollView style={{
      ...estilos.container,
      paddingTop: 8,
    }}>
      <View>
        {/* Input nombre */}
        <Text style={estilos.textDatos}>Nombre:</Text>
        <View style={estilos.textInputIconContainer}>
          <AntDesign
            name='user'
            size={24}
            color={'#5271FF'}/>
          <TextInput 
            style={estilos.textInputIcon}
            name='nombre'
            placeholder={nombre +" "+ apellido}
            keyboardType='default'
            editable={false}/>
        </View>
        {/* Input email */}
        <Text style={estilos.textDatos}>Email:</Text>
        <View style={estilos.textInputIconContainer}>
          <AntDesign
            name='mail'
            size={24}
            color={'#5271FF'}/>
          <TextInput 
            style={estilos.textInputIcon}
            name='email'
            placeholder={email}
            keyboardType='email-address'
            textContentType='emailAddress'
            editable={false}/>
        </View>
      </View>
    </ScrollView>
)}

export default PerfilTab;