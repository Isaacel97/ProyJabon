import React from 'react'
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import estilos from '../styles/estilos'

const DetalleMaquina = (props) => {
  let StatusDepositos = true;
  return (
    <View style={{
      ...estilos.container,
      justifyContent: 'center',
      }}>
      {/* Boton: status proceso */}
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
          if (StatusDepositos == true) {
            Alert.alert(
              'Inicio proceso',
              'Comienza la fabricación' ,
              [{
                text: 'Ok',
                onPress: () => {},
                style: 'default',
              }]);
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
        }}>
        <Text style={{
          color: 'white',
          fontSize: 18,
        }}>
          Actualizar datos
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetalleMaquina;