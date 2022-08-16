import React from 'react'
import { View, Text, FlatList } from 'react-native';
import estilos from '../../../styles/estilos';
import Layout from '../../../components/Bluetooth/BluetoothLayout';
import SinDisp from '../../../components/Bluetooth/sinDisp';
import Toggle from '../../../components/Bluetooth/toggle';
import DeviceOne from '../../../components/Bluetooth/device';
import {BleManager, Device} from 'react-native-ble-plx'

function ListBluetooth(props) {
  const listaBlue = [
    {
        name: 'MacBook Pro',
        key: '1',
    },
    {
        name: 'Xiomio Redmi9',
        key: '2'
    },
    {
      name: 'Maquina Mic #234',
      key: '3'
  }
  ];

  const renderVacio = () => <SinDisp text='No hay dispositivos'/>
  const renderItem = ({item}) => {
    return <DeviceOne {...item}/>
  }
  return (
    <Layout title='Bluetooth'>
      <Toggle value={true}/>
      <Text style={estilos.subtituloBluetooth}>Lista Dispositivos</Text>
      <FlatList
        data={listaBlue}
        ListEmptyComponent={renderVacio}
        renderItem={renderItem}/>
    </Layout>
  )
}

export default ListBluetooth