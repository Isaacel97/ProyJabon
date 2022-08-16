import React from 'react'
import { View, Text } from 'react-native'
import estilos from '../../styles/estilos'

const SinDisp = (props) => {
  return (
    <View><Text style={{...estilos.textBluetooth, color: 'red'}}>{props.text}</Text></View>
  )
}

export default SinDisp