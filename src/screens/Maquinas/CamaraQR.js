import React, {useState, useEffect} from 'react'
import { Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { BarCodeScanner } from 'expo-barcode-scanner'
import estilos from '../../styles/estilos';

const CamaraQR = (props) => {
  //obtener permiso de camara
  const [permiso, setPermiso] = useState(null);
  const [scanner, setScanner] = useState(false);
  const [texto, setTexto] = useState('No se ha escaneado');

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
  const valorScan = ({type, data}) => {
    setScanner(true);
    setTexto(data);
    console.log('Tipo:', type, 'Id maq:', data);
  };

  //validar permiso y retornar screen
  if (permiso === null){
    return (
      <View style={estilos.container}>
        <Text>Dame permisos para espiar -_-</Text>
      </View>
    )
  };
  if (permiso === false) {
    return (
        <View style={estilos.container}>
          <Text style={{ margin: 10 }}>has denegado lo permisos, mendig@</Text>
          <Button title={'Dar permisos'} onPress={() => permisoCamara()}/>
        </View>
      )
  }

  //vista normal
  return (
    <View style={estilos.container}>
      <View style={estilos.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanner ? undefined : valorScan}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={estilos.linkTouch}>{texto}</Text>
      {scanner && <Button title={'Escanear otra vez?'} onPress={() => setScanner(false)} color='tomato' />}
    </View>
  )
}

export default CamaraQR