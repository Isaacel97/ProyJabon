import React, { useState, useEffect } from 'react'
import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import estilos from '../../styles/estilos';
import {getAuth} from "firebase/auth";
import { agregaMaq } from '../../utils/controlBD';

const AddMaquinas = (props) => {
  //arrastra datos de sesion
  const {email} = getAuth().currentUser;

  //funcion agregar maquina
  const [maquina, setMaquina] = useState(null);
  useEffect (() => { 
    addMaq();
  }, []);
  const addMaq = async() => {
    const m = await agregaMaq(email, maquina);
    setMaquina(m);
  }
  //comienza la vista
  return (
    <View>
      {/* Input Id maquina */}
      <View style={{...estilos.textInputIconContainer, marginTop: 24}}>
        <TextInput style={estilos.textInputIcon}
          value={maquina} 
          onChangeText={(maquina) => {setMaquina(maquina)}}
          name="idMaq"
          placeholder="Ingresar ID maquina"
          keyboardType="default"
          autoCapitalize='none' 
        /> 
      </View>
      {/* Boton: agregar maquina */}
      <TouchableOpacity
        style={estilos.botonTouch}
        onPress={addMaq}>
        <Text style={estilos.textBtn}>Agregar maquina</Text>
      </TouchableOpacity>
      {/* Boton: camara maquina */}
      <TouchableOpacity
        style={estilos.botonTouch}
        onPress={() => {
          props.navigation.navigate('camara');
        }}
      >
        <Text style={estilos.textBtn}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddMaquinas;