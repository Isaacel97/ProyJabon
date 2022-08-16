import React from 'react'
import { View, Text } from 'react-native'
import estilos from '../../styles/estilos'

const BluetoothLayout = (props) => {
  return (
    <View style={estilos.containerBlue}>
        <Text style={estilos.titleBlue}>{props.title}</Text>
        {props.children}
    </View>
  )
}

export default BluetoothLayout