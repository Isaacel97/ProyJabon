/**
 * @format
 * @flow strict-local
 */
 
 import React, { useState } from 'react';
 import estilos from '../styles/estilos';
 import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
 import {
   Alert,
   ScrollView,
   View,
   Text,
   TextInput,
   Image,
   TouchableOpacity,
   Pressable
 } from 'react-native';
 import { useTogglePasswordVisibility, loginValidationSchema } from '../utils/validaciones'; 
import { Formik } from 'formik'; 
import { auth } from '../api/backend';
import { signInWithEmailAndPassword } from 'firebase/auth';

const MenuScreen = (props) => {
    //Constantes para ocultar/mostrar passwords
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    //const mensaje error email o password
    const [error, setError] = useState('');

    // inicio de sesion authentification firebase
    const onHandleLogin = (values) => {
      if (values.email !== "" && values.password !== "") {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log('Login success');
          // constante para obtener datos de login
          const user = userCredential.user;
          console.log(user);
          props.navigation.navigate('menu_tab');
        })
          .catch(() => Alert.alert("Login error", "Email y/o contraseña erroneo"));
      }
    };

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
              /*
              setError('')
              const {email, password} = values;            
              if (email !== values.email || password !== userDB.password) {
                setError('Email y/o contraseña incorrectos, vuelve a intertarlo')
              } else{
                login(userDB)
              */
                onHandleLogin(values)
                console.log(values)
                console.log(auth)
              //}
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
                <View style={{
                    ...estilos.container,
                    padding: 0,
                }}>
                     <Text style={estilos.errorText}>{error}</Text>                    
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
  
 export default MenuScreen;
 