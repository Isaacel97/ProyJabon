import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, Pressable } from "react-native";
import estilos from './../styles/estilos';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './../utils/useTogglePasswordVisibility';

//Screen login
const MenuScreen = (props) => {
  //const para show/hidden password
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
    //Contenedor principal
    <View style={estilos.container}>
      {/* Logo */}
      <Image source={require('./../../assets/images/logo2.png')} resizeMode="cover" style={estilos.logo}></Image>
      {/* Input email */}
      <View style={estilos.textInputIconContainer}>
        <AntDesign
          name='mail'
          size={24}
          color={'#5271FF'}
        />
        <TextInput 
          style={estilos.textInputIcon}
          name='email'
          placeholder='Email'
          keyboardType='email-address'
          autoComplete='email'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
        />
      </View>
      {/* Input Password */}
      <View style={estilos.textInputIconContainer}>
        <TextInput 
          style={estilos.textInputIcon}
          name="password"
          placeholder='Password'
          keyboardType='default' 
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#5271FF" />
        </Pressable>
      </View>
      {/* Boton: login */}
      <TouchableOpacity 
        style={estilos.botonTouch}
        onPress={() => {
          props.navigation.navigate('menu_tab');
        }}
      >
        <Text style={{
          color: 'white',
          fontSize: 18,
        }}>
          Entrar
        </Text>
      </TouchableOpacity>
      {/* Link: registro */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('registro');
        }}
      >
        <Text style={estilos.linkTouch}>
          ¿No tienes cuenta? ¡Registrate!
        </Text>
      </TouchableOpacity>
    </View>
  )
} //Fin de contenedor principal

export default MenuScreen;