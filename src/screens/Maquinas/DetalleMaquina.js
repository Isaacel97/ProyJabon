import React, {useState, useEffect} from 'react'
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import estilos from '../../styles/estilos';
import { encender, depositos } from '../../utils/controlBD';

const DetalleMaquina = () => {
  //funcion depositos
  const [status, setStatus] = useState(null);
  useEffect (() => { 
    getStatus();
  }, [])
  const getStatus = async() => {
  const m = await depositos();
    setStatus(m);
  }
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
        Estado depositos: {status}
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
          getStatus();        
          if (status == 'Llenos') {
            encender()
          }else{
            Alert.alert(
              '¡ERROR!',
              'No es posible iniciar, favor de revisar los depositos.' ,
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
          Encender maquina
        </Text>
      </TouchableOpacity>
    </View>
)} //fin view

export default DetalleMaquina;