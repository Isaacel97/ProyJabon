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
   Pressable
 } from 'react-native';
 import { useTogglePasswordVisibility } from '../utils/validaciones';
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

const Pruebas = (props) => {
    //Constantes para ocultar/mostrar passwords
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

// Mensajes de Validación del Formulario 
const loginValidationSchema = yup.object().shape({
    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
   
    password: yup
      .string("Ingresa tu contraseña")
      .required("*Campo requerido"),
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
             initialValues={{ email:'', password: '' }}
             onSubmit={(values) => {
                console.log(values)
                props.navigation.navigate('menu_tab');
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
                {/* Boton: Login */}
                 <TouchableOpacity
                   style={estilos.botonTouch}
                   onPress={
                    handleSubmit   
                    }
                 >
                   <Text style={estilos.textBtn}>Entrar</Text>
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
     </ScrollView>    
     </>
   )
 };
  
 const styles = StyleSheet.create({
  
   formulario: {
     color: Colors.black,
     fontSize: 18,
     marginTop: 20,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'center',
   },
  
   nombresyapellidos: {
     color: Colors.dark,
     fontSize: 18,
     marginTop: 20,
     marginLeft: 20,
     marginRight: 20, 
     fontWeight: '600',
     paddingLeft: 20,
     borderWidth: 1,
     borderRadius: 7,
     borderColor: Colors.black,
     paddingRight: 12,
   }, 
 
   email: {
     color: Colors.dark,
     fontSize: 18,
     marginTop: 20,
     marginLeft: 20,
     marginRight: 20, 
     fontWeight: '600',
     paddingLeft: 20,
     borderWidth: 1,
     borderRadius: 7,
     borderColor: Colors.black,
     paddingRight: 12,
   }, 
  
   telefono: {
     color: Colors.dark,
     fontSize: 18,
     marginTop: 20,
     marginLeft: 20,
     marginRight: 20, 
     fontWeight: '600',
     paddingLeft: 20,
     borderWidth: 1,
     borderRadius: 7,
     borderColor: Colors.black,
     paddingRight: 12,
   },
   
   mensaje: {
     color: Colors.dark,
     fontSize: 18,
     marginTop: 20,
     marginBottom: 20,
     marginLeft: 20,
     marginRight: 20, 
     fontWeight: '600',
     paddingLeft: 20,
     borderWidth: 1,
     borderRadius: 7,
     borderColor: Colors.black,
     paddingRight: 12,
   },
  
   colorBtn: {
     borderWidth: 1,
     borderColor: '#007BFF',
     backgroundColor: '#007BFF',
     padding: 15,
     marginLeft: 20,
     marginRight: 20,
     borderRadius: 7,
   },
  
   colorTxtBtn: {
     color: '#FFFFFF',
     fontSize: 20,
     textAlign: 'center'
   },
 
   errorText: {
     fontSize: 14,
     color: 'red',
     marginBottom: 20,
     marginLeft: 20
   },
   icon:{
    color:"#c1c1c1",
    },
 });
  
 export default Pruebas;
 