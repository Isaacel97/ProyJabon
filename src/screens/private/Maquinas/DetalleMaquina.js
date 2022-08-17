import React, {useState, useEffect} from 'react'
import { TouchableOpacity, Text, View, Alert, ScrollView, RefreshControl } from 'react-native'
import estilos from '../../../styles/estilos';
import { encender, depositos, idRealtime, getEncendido } from '../../../utils/controlBD';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import colores from '../../../styles/colores';

const DetalleMaquina = (props) => {
  //obtener datos id
  const route = useRoute();
  // Controlamos la visibilidad del loader
  const [flatCargando, setFlatCargando] = useState(false);
  //funcion depositos y id
  const [status, setStatus] = useState(null);
  const [obtEncendido, setObtEncendido] = useState(null);
  const [id, setId] = useState(null);
  const datoMaq = route.params.id;

  useEffect (() => { 
      getStatus();
  }, [])
  useFocusEffect(
    React.useCallback(() => {
			getStatus();
		}, [])
  );
  const getStatus = async() => {
    setFlatCargando(true);
    const m = await depositos(datoMaq);
    setStatus(m);
    const p = await getEncendido(datoMaq);
    setObtEncendido(p);
    const n = await idRealtime(datoMaq);
    setId(n);
    setFlatCargando(false);
  }
  return (
    <ScrollView style={{
      ...estilos.container,
      paddingTop: 8,
    }}
    refreshControl={
      <RefreshControl 
        refreshing={flatCargando}
        size='large'
        onRefresh={() => {getStatus()}}
        tintColor={colores.azulMic} //ios
        colors={[colores.azulMic]} // android, perimite varios colores a diferencia de tintcolor de ios
      />
      }>
      <View style={{
        ...estilos.container,
        justifyContent: 'center',
        }}>
        {/* Texto: estado id */}
        <Text style={estilos.textDatosTitle}>id: {id}</Text>
        {/* Texto: estado id */}
        <Text style={estilos.textDatosTitle}>Estado: {obtEncendido}</Text>    
        {/* Texto: estado depositos */}
        <Text style={estilos.textDatosTitle}>
          Depositos: {status}
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
              encender(id)
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
    </ScrollView>
)} //fin view

export default DetalleMaquina;