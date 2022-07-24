/**
 * @format
 * @flow strict-local
 */
 
 import React, { useState } from 'react';
 import estilos from '../styles/estilos';
 import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
 import {
   ScrollView,
   View,
   Text,
   TextInput,
   Image,
   TouchableOpacity,
   Switch,
   Alert,
   Pressable,
   SafeAreaView
 } from 'react-native';
 import { useTogglePasswordVisibility, useToggleRepeatPasswordVisibility, registroValidationSchema } from '../utils/validaciones';
import { Formik } from 'formik'; 
import colores from '../styles/colores';
import { database, auth } from '../api/backend';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const RegistroScreen = (props) => {
    //Constantes para ocultar/mostrar passwords
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    const { repeatPasswordVisibility, rightIcon2, handleRepeatPasswordVisibility } =
    useToggleRepeatPasswordVisibility();

    //const switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    //const datos a firebase
    const enviaDatos = async(varNombre, varEmail) =>{
      await addDoc(collection(database, 'datoUser'), {
        nombre: varNombre,
        email: varEmail,
    })}
    //const datos a firebase authentification
    const onHandleSignup = (values) => {
      if (values.email !== '' && values.password !== '') {
    createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            const user = userCredential.user;
            console.log('Signup success');
            console.log(user);
            props.navigation.navigate('inicio');
          })
          .catch((err) => Alert.alert("Login error", err.message));
      } else {
        console.log('no capta los values :( ')
      }
    };

    return (
     <>
     {/*Contenedor general*/}
     <ScrollView style={estilos.container}>  
         <SafeAreaView>
           {/* Logo */}
            <Image source={require('./../../assets/images/logo2.png')} resizeMode="cover" style={estilos.logo}></Image>
            {/* Validacion datos */}
           <Formik
             validateOnMount={true}
             validationSchema={registroValidationSchema}
             initialValues={{ nombresyapellidos: '', email:'', password: '', repitePawword: '', accepted: false }}
             onSubmit={(values) => {
                enviaDatos(values.nombresyapellidos, values.email)
                console.log('datos en firebase, exitoso');
                onHandleSignup(values);
                console.log('cuenta creada con auth');
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
                   name="nombreCompleto"
                   placeholder="Nombres y Apellidos"
                   onChangeText={handleChange('nombresyapellidos')}
                   onBlur={handleBlur('nombresyapellidos')}
                   value={values.nombresyapellidos}
                   keyboardType="default" 
                   autoCapitalize='words'
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
                  name="email"
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
                   name="password"
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
                   name="repitePassword" 
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
                                        text: 'Ok',
                                        onPress: () => {},
                                        style: 'default',
                                    },
                                ]);
                        }}>
                            Acepto terminos y condiciones
                    </Text>
                    <Switch
                            trackColor={{ false: "#767577", true: colores.azulMic }}
                            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
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
         </SafeAreaView>
     </ScrollView>    
     </>
   )
 };
  
 export default RegistroScreen;
 