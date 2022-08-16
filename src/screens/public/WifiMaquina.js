import React from 'react';
import { View, Text, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native';
import estilos from '../../styles/estilos';
import colores from '../../styles/colores';
import {MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../utils/validaciones';

const WifiMaquina = (props) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  return (
    <ScrollView style={{
        ...estilos.container,
        paddingTop: 8,
      }}>
        <View>
          {/* Input wifi */}
          <Text style={estilos.textDatos}>Nombre Red:</Text>
          <View style={estilos.textInputIconContainer}>
            <FontAwesome5
              name='wifi'
              size={24}
              color={colores.azulMic}/>
            <TextInput 
              style={estilos.textInputIcon}
              name='wifi'
              placeholder={"Escribe el nombre de la red"}
              keyboardType='default'
              autoCapitalize='none'/>
          </View>
          {/* Input password */}
          <Text style={estilos.textDatos}>Password:</Text>
          <View style={estilos.textInputIconContainer}>
            <TextInput 
              style={estilos.textInputIcon}
              name='email'
              placeholder={"Escribe password de red"}
              keyboardType='default'
              textContentType='password'
              secureTextEntry={passwordVisibility}
            />
            <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={24} color={colores.azulMic} />
            </Pressable>
          </View>
          <TouchableOpacity
            style={estilos.botonTouch}
            onPress={() => {props.navigation.navigate('list_blue')}}>
            <MaterialCommunityIcons
                name='speaker-bluetooth'
                size={24}
                color="white"/>
            <Text style={estilos.textBtn}> Seleccionar Maquina</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botonTouch}
            onPress={() => {props.navigation.navigate('inicio')}}>
            <MaterialCommunityIcons
                name='wifi-sync'
                size={24}
                color="white"/>
            <Text style={estilos.textBtn}> Conectar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  )
}

export default WifiMaquina