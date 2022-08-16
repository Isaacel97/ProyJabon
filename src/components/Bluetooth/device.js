import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import estilos from '../../styles/estilos'

const Device = (props) => {
  return (
    <TouchableOpacity style={estilos.wrapper} onPress={props.onPress}>
        <View style={estilos.wrapperPosition}>
            <MaterialIcons name="devices" size={24} color="black" />
            <Text style={estilos.Nombre}>{props.name}</Text>
        </View>
        <View style={estilos.wrapperPosition}>
            <MaterialIcons name="pan-tool" size={24} color="black"/>
        </View>
    </TouchableOpacity>
  )
}

export default Device