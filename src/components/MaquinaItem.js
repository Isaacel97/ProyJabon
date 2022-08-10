import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import estilos from '../styles/estilos';
import {AntDesign} from '@expo/vector-icons';

const MaquinaItem = (props) => {
  return (
    <TouchableOpacity
      style={estilos.itemContainer}
    >
        {/*Icono item*/}
        <View style={{flex:1}}>
            <ImageBackground
                source={require('./../../assets/images/IconMicAzul.png')}
                style={estilos.iconItem}
            />
        </View>
        {/*Numero de maquina*/}
        <View>
            <Text style={estilos.textItem}>{props.datosMaquina.id}</Text>
			<Text style={estilos.textItem}>{props.datosMaquina.nombre}</Text>
        </View>
        {/*Boton: detalle maquinas*/}
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
            <AntDesign
                name='select1'
                color={'blue'}
                size={32}
                onPress={() => 
                    props.navigation.navigate('det_maquina')
                }
            />
        </View>
    </TouchableOpacity>
  )
}

export default MaquinaItem;