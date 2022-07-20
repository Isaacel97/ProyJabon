import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Image, Pressable, Alert } from "react-native";
import estilos from './../styles/estilos';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { useTogglePasswordVisibility, loginValidationSchema, initialValues  } from './../utils/validaciones';
import { Formik } from 'formik'; 

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
      <Formik
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
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
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType='email-address'
          autoComplete='email'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
        />
      </View>
      <View>
        {(errors.email && touched.email) &&
          <Text style={estilos.errorText}>{errors.email}</Text>
        }
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
          value={values.password}
          enablesReturnKeyAutomatically
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#5271FF" />
        </Pressable>
      </View>
      <View>
        {(errors.password && touched.password) &&
          <Text style={estilos.errorText}>{errors.password}</Text>
        }
      </View>
      {/* Boton: login */}
      <TouchableOpacity 
        style={estilos.botonTouch}
        onPress={() => {
          if (values.email != null && values.password != null) {
            props.navigation.navigate('menu_tab');
          }else{
            Alert.alert(
              '¡Alerta!',
              'Email y/o contraseña incorrecto, vuelve a intentarlo' ,
              [
                {
                  text: 'Ok',
                  onPress: () => {},
                  style: 'default',
                },
              ]);
          }
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
      </>
            )}
      </Formik>
    </View>
  )
} //Fin de contenedor principal

export default MenuScreen;