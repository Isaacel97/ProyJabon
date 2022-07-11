import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, Pressable, Alert, ScrollView, Switch } from "react-native";
import estilos from './../styles/estilos';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './../utils/useTogglePasswordVisibility';

const RegistroScreen = (props) => {
  //const para show/hidden password
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  let valorSwitch = false;

  return (
    //Contenedor principal
    <ScrollView style={estilos.container}>
    <View>
      {/* Logo */}
      <Image source={require('./../../assets/images/logo2.png')} resizeMode="cover" style={estilos.logo}></Image>
      {/* Input nombre */}
      <View style={estilos.textInputIconContainer}>
        <AntDesign
          name='user'
          size={24}
          color={'#5271FF'}
        />
        <TextInput 
          style={estilos.textInputIcon}
          name='nombre'
          placeholder='Nombre completo'
          keyboardType='default'
          autoCapitalize='characters'
        />
      </View>
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
      {/* Input Confirma Password */}
      <View style={estilos.textInputIconContainer}>
        <TextInput 
          style={estilos.textInputIcon}
          name="confirmaPassword"
          placeholder='Repite password'
          keyboardType='default' 
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          secureTextEntry
        />
      </View>
      {/* Switch: Terminos */}
      <View style={estilos.switchContainer}>
          <Text style={estilos.switchText}
            onPress={() => {
            Alert.alert(
              'Terminos y condiciones',
              'Esta aplicación ha sido diseñada y administrada por la Agencia Digital de Innovación Pública de la Ciudad de México. Así mismo, los módulos que integran está aplicación han sido diseñados para integrar información de utilidad que pueda ser consultada desde un dispositivo móvil, como lo es información relativa a movilidad, conectividad, medio ambiente, participación ciudadana, clima y seguridad de la Ciudad de México. Así mismo, los usuarios de “APP CDMX” podrán emitir reportes y quejas a través del' ,
              [
                {
                  text: 'Sí',
                  onPress: () => valorSwitch=true,
                  style: 'default',
                },
                {
                  text: 'No',
                  onPress: () => {},
                  style: 'cancel',
                },
              ]);
            }}>
            Acepto terminos y condiciones
          </Text>

        <Switch
          value={valorSwitch}
        />
        </View> 
      {/* Boton: registro */}
      <TouchableOpacity 
        style={estilos.botonTouch}
        title='Alert' 
        onPress={() => {
          Alert.alert(
            'Confirma datos',
            'Nombre: {nombre}, Email: {email} ¿Los datos con correctos?' ,
            [
              {
                text: 'Sí',
                onPress: () => props.navigation.navigate('inicio'),
                style: 'default',
              },
              {
                text: 'No',
                onPress: () => {},
                style: 'cancel',
              },
            ]);
          }}>
        <Text style={{
          color: 'white',
          fontSize: 18,
        }}>
          Registrarme
        </Text>
      </TouchableOpacity>
      {/* Link: registro */}
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('inicio');
        }}
      >
        <Text style={estilos.linkTouch}>
          ¿Ya tienes cuenta? ¡Inicia sesión!
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )//Fin de contenedor principal
} 

export default RegistroScreen;