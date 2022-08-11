import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import estilos from '../../styles/estilos';
import {getAuth} from "firebase/auth";
import { database } from '../../api/backend';
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const AddMaquinas = (props) => {
  const {email} = getAuth().currentUser;

  const [maquina, setMaquina] = useState('');
  
  function agregaMaq() {
    const washingtonRef = doc(database, "datoUser", email);
    // Atomically add a new region to the "regions" array field.
    updateDoc(washingtonRef, {
      maquinas: arrayUnion(maquina)
    }).then(() => {
      Alert.alert("Maquina agregada", "¡Se agrego maquina con exito!");
    }).catch((error) => {
      console.log("Oh no!, otra vez la regamos!!")
    });
  }
  return (
    <View>
      {/* Input Id maquina */}
      <View style={{...estilos.textInputIconContainer, marginTop: 24}}>
        <TextInput style={estilos.textInputIcon}
          value={maquina} 
          onChangeText={(maquina) => {setMaquina(maquina)}}
          name="idMaq"
          placeholder="Ingresar ID maquina"
          keyboardType="number-pad" 
        /> 
      </View>
      {/* Boton: agregar maquina */}
      <TouchableOpacity
        style={estilos.botonTouch}
        onPress={agregaMaq}
      >
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