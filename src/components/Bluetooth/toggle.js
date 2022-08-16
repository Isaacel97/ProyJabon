import React from 'react'
import { View, Text, Switch } from 'react-native'
import estilos from '../../styles/estilos'

const Toggle = (props) => {
  return (
    <View style={estilos.containerToggle}>
        <Text style={{...estilos.titleBlue, flex:1}}>{props.value ? 'ON' : 'OFF'}</Text>
        <Switch style={estilos.switchBlue} value={props.value}
            onValueChange={props.onValueChange}/>
    </View>
  )
}

export default Toggle