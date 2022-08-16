import React, {useState, useEffect} from 'react'
import { Text, View, Button, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import estilos from '../../../styles/estilos';
import colores from '../../../styles/colores';
import {getAuth} from "firebase/auth";
import { agregaMaq } from '../../../utils/controlBD';

const CamaraQR = (props) => {
  //arrastra datos de sesion
  const {email} = getAuth().currentUser;
  //funcion agregar maquina
  const [maquina, setMaquina] = useState(null);
  useEffect (() => {
    if (maquina !== null) {
      addMaq();
    } 
  }, []);
  const addMaq = async() => {
    const m = await agregaMaq(email, maquina);
    setMaquina(m);
  };
  //obtener permiso de camara
  const [permiso, setPermiso] = useState(null);
  const [scanner, setScanner] = useState(false);
  const permisoCamara = () => {(
    async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setPermiso(status == 'granted')
    }
  )()};

  //request permisoCamara
  useEffect(() => {
    permisoCamara();
  }, []);

  //despues de escanear
  const valorScan = ({data}) => {
    setScanner(true);
    setMaquina(data);
  };

  //validar permiso y retornar screen
  if (permiso === null){
    return (
      <View style={{...estilos.container, alignItems: 'center', justifyContent: 'center',}}>
        <Text>Dame permisos para espiar -_-</Text>
      </View>
    )
  };
  if (permiso === false) {
    return (
        <View style={{...estilos.container, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{ margin: 10 }}>No has dado permisos de camara para escanear QR</Text>
        </View>
      )
  };
  if (maquina == null) {
    return (
      <View style={{...estilos.container, alignItems: 'center', padding: 16}}>
      <View style={estilos.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanner ? undefined : valorScan}
          style={{ height: 400, width: 300 }} />
      </View>
      <Text style={estilos.linkTouch}>¡Escanea el QR¡</Text>
      {scanner && <Button 
        title={'Agregar maquina'} onPress={addMaq} color={colores.azulMic} />}
    </View>
      )
  }

  //vista normal
  return (
    <View style={{...estilos.container, alignItems: 'center', justifyContent: 'center',}}>
      <View style={estilos.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanner ? undefined : valorScan}
          style={{ height: 400, width: 300 }}  />
      </View>
      <Text style={estilos.linkTouch}>`id: {maquina}`</Text>
      {scanner && <TouchableOpacity
        style={estilos.botonTouch}
        onPress={addMaq}>
        <Ionicons
          name='add'
          size={24}
          color="white"/>
        <Text style={estilos.textBtn}> Agregar ID</Text>
      </TouchableOpacity>}
    </View>
  )
}

export default CamaraQR