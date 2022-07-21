/**
 * @format
 * @flow strict-local
 */
 
 import React, { useState } from 'react';
 import estilos from '../styles/estilos';
 import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
 import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   Image,
   TouchableOpacity,
   Switch,
   Alert,
   Pressable
 } from 'react-native';
 import { useTogglePasswordVisibility, useToggleRepeatPasswordVisibility } from '../utils/validaciones';
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen'; 
 
// Importamos Formik y Yup 
import { Formik } from 'formik'; 
import * as yup from 'yup';

const RegistroScreen = (props) => {
    //Constantes para ocultar/mostrar passwords
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    const { repeatPasswordVisibility, rightIcon2, handleRepeatPasswordVisibility } =
    useToggleRepeatPasswordVisibility();

    let valorSwitch = false;
// Mensajes de Validación del Formulario 
const loginValidationSchema = yup.object().shape({
    nombresyapellidos: yup
      .string("Ingresa tus Nombres y Apellidos")
      .required("*Campo requerido"),
   
    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
   
    password: yup
      .string("Ingresa tu contraseña")
      .required("*Campo requerido"), 
   
    repitePawword: yup
      .string("Ingresa de nuevo tu contraseña")
      .required("*La confirmación es obligatoria")
      .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
   
  });
    return (
     <>
     {/*Contenedor general*/}
     <ScrollView style={estilos.container}>  
         <View>
           {/* Logo */}
            <Image source={require('./../../assets/images/logo2.png')} resizeMode="cover" style={estilos.logo}></Image>
            {/* Validacion datos */}
           <Formik
             validateOnMount={true}
             validationSchema={loginValidationSchema}
             initialValues={{ nombresyapellidos: '', email:'', password: '', repitePawword: '' }}
             onSubmit={(values) => {
                console.log(values)
                props.navigation.navigate('inicio');
            }}
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
               {/* Input nombre */}
                <View style={estilos.textInputIconContainer}>
                <AntDesign
                name='user'
                size={24}
                color={'#5271FF'}
                />
                 <TextInput style={estilos.textInputIcon} 
                   placeholder="Nombres y Apellidos"
                   onChangeText={handleChange('nombresyapellidos')}
                   onBlur={handleBlur('nombresyapellidos')}
                   value={values.nombresyapellidos}
                   keyboardType="default" 
                   autoCapitalize='characters'
                /> 
                </View>
                <View style={{
                    ...estilos.container,
                    padding: 0,
                   }}>
                   {(errors.nombresyapellidos && touched.nombresyapellidos) &&
                     <Text style={estilos.errorText}>{errors.nombresyapellidos}</Text>
                   }
                </View>
                {/* Input email */}
                <View style={estilos.textInputIconContainer}>
                <AntDesign
                name='mail'
                size={24}
                color={'#5271FF'}
                />
                 <TextInput style={estilos.textInputIcon} 
                   placeholder="micorreo@micorreo.com"
                   onChangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   value={values.email}
                   keyboardType="email-address" 
                   autoComplete='email'
                   autoCapitalize='none'
                   autoCorrect={false}
                   textContentType='emailAddress'
                /> 
                </View>
                <View style={{
                    ...estilos.container,
                    padding: 0,
                }}>
                    {(errors.email && touched.email) &&
                     <Text style={estilos.errorText}>{errors.email}</Text>
                    }
                </View>
                {/* Input Password */}
                <View style={estilos.textInputIconContainer}>
                 <TextInput style={estilos.textInputIcon} 
                   placeholder="Password"
                   onChangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   value={values.password}
                   secureTextEntry={passwordVisibility}
                   keyboardType="default"
                   autoCapitalize='none'
                   autoCorrect={false}
                   textContentType='password'
                   enablesReturnKeyAutomatically  
                 />
                 <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#5271FF" />
                 </Pressable>
                </View>
                <View style={{
                    ...estilos.container,
                    padding: 0,
                }}>
                    {(errors.password && touched.password) &&
                     <Text style={estilos.errorText}>{errors.password}</Text>
                    }
                </View>
                {/* Input repitePassword */}
                <View style={estilos.textInputIconContainer}>
                 <TextInput style={estilos.textInputIcon} 
                   placeholder="Repite password"
                   onChangeText={handleChange('repitePawword')}
                   onBlur={handleBlur('repitePawword')}
                   value={values.repitePawword}
                   secureTextEntry={repeatPasswordVisibility}
                   keyboardType="default"
                   autoCapitalize='none'
                   autoCorrect={false}
                   textContentType='password'
                   enablesReturnKeyAutomatically
                />
                <Pressable onPress={handleRepeatPasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon2} size={22} color="#5271FF" />
                </Pressable> 
                </View>
                <View style={{
                    ...estilos.container,
                    padding: 0,
                }}>
                    {(errors.repitePawword && touched.repitePawword) &&
                     <Text style={estilos.errorText}>{errors.repitePawword}</Text>
                    }
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
                   onPress={
                    handleSubmit   
                    }
                 >
                   <Text style={estilos.textBtn}>Registrarme</Text>
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
               </>
             )}
           </Formik>
         </View>
     </ScrollView>    
     </>
   )
 };
  
 export default RegistroScreen;
 