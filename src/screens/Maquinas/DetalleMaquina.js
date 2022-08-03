import React, {useState} from 'react'
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import estilos from '../../styles/estilos';
import { db } from '../../api/backend';
import { ref, set, get, child, update } from "firebase/database";

const DetalleMaquina = () => {
  const prendido = 'ON'

  function encender () {
    update(ref(db, 'Maquina/'), {
      encendido: prendido
    }).then(() => {
      console.log("ya se subio wii");
    }).catch((error) => {
      console.log(error);
      console.log('cagada 5#');
    })
  };

  function depositos () {
    const dbRef = ref(db);
    get(child(dbRef, `Maquina/Depositos`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val()
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }); 
  };


  let StatusDepositos = "llenos";
  return (
    <View style={{
      ...estilos.container,
      justifyContent: 'center',
      }}>      
      {/* Texto: estado depositos */}
      <Text style={{
        ...estilos.textDatos,
        marginTop: 24,
        marginBottom: 8,
        textAlign: 'center'
      }}>
        ´Estado depositos: ${depositos()}´
      </Text>
      {/* Texto: status proceso */}
      <Text style={{
        ...estilos.textDatos,
        marginTop: 24,
        marginBottom: 8,
        textAlign: 'center'
      }}>
        Fase i: proceso
      </Text>
      {/* Boton: inicio proceso */}
      <TouchableOpacity 
        style={{
          ...estilos.botonTouch,
          margin: 0,
          marginHorizontal: 24,
        }}
        title='Alert' 
        onPress={() => {
          encender()
          /*
          if (StatusDepositos == true) {
            Alert.alert(
              'Inicio proceso',
              'Comienza la fabricación' ,
              [{
                text: 'Ok',
                onPress: () => {},
                style: 'default',
              }]);
            {encender}
          }else{
            Alert.alert(
              '¡ERROR!',
              'No es posible iniciar con el proceso, favor de revisar los depositos.' ,
              [{
                text: 'Ok',
                onPress: () => {},
                style: 'default',
              }]);
          }
          */
        }}>
        <Text style={{
          color: 'white',
          fontSize: 18,
        }}>
          Encender maquina
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetalleMaquina;