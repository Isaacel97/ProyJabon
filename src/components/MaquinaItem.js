import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import estilos from '../styles/estilos';
import {AntDesign} from '@expo/vector-icons';

const MaquinaItem = (props) => {
  return (
    <TouchableOpacity style={estilos.itemContainer}
        onPress={() => 
            props.navigation.navigate('det_maquina')
        }>
        {/*Icono item*/}
        <View style={{flex:1}}>
            <ImageBackground
                source={require('./../../assets/images/IconMicAzul.png')}
                style={estilos.iconItem}/>
        </View>
        {/*Numero de maquina*/}
        <View>
            <Text style={estilos.textItem}>{props.datosMaquina.id}</Text>
			<Text style={estilos.textItem}>{props.datosMaquina.nombre}</Text>
        </View>
        {/*Boton: detalle maquinas*/}
        <View
            style={estilos.iconMaq}>
            <AntDesign
                name='select1'
                color={'black'}
                size={32}/>
        </View>
    </TouchableOpacity>
)}

export default MaquinaItem;