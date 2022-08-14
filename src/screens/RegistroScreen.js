/**
 * @format
 * @flow strict-local
 */
 
import React, { useState } from 'react';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {ScrollView, View, Text, TextInput, Image, TouchableOpacity, Switch, Alert, Pressable, SafeAreaView, RefreshControl} from 'react-native';
import { useTogglePasswordVisibility, useToggleRepeatPasswordVisibility, registroValidationSchema } from '../utils/validaciones';
import { Formik } from 'formik'; 
import estilos from '../styles/estilos';
import colores from '../styles/colores';
import { database, auth } from '../api/backend';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const RegistroScreen = (props) => {
  //Constantes para ocultar/mostrar passwords
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const { repeatPasswordVisibility, rightIcon2, handleRepeatPasswordVisibility } = useToggleRepeatPasswordVisibility();

  //const switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Controlamos la visibilidad del loader
  const [flatCargando, setFlatCargando] = useState(false);

  //const datos a firebase
  const enviaDatos = async(varNombre, varApellido, varEmail) =>{
    setFlatCargando(true);
    await setDoc(doc(database, 'datoUser', varEmail), {
      nombre: varNombre,
      apellido: varApellido,
      email: varEmail,
      tipo: 'usuario',
      maquinas: []
    });
    setFlatCargando(false);
  }
  //const datos a firebase authentification
  const onHandleSignup = (values) => {
    if (values.email !== '' && values.password !== '') {
      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        Alert.alert("Cuenta creada", "Registro exitoso, inicia sesion");
        props.navigation.navigate('inicio');
      })
      .catch((err) => Alert.alert("Login error", err.message));
    } else {
      Alert.alert("¡ERROR!", "Nose pudo crear la cuenta, intentalo nuevamente");
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
            initialValues={{ nombres: '', apellidos: '',email:'', password: '', repitePawword: '', accepted: false }}
            onSubmit={(values) => {
              enviaDatos(values.nombres, values.apellidos, values.email)
              onHandleSignup(values);
              <RefreshControl 
              refreshing={flatCargando}
              size='large'
              onRefresh={() => {}}
              tintColor={colores.azulMic} //ios
              colors={[colores.azulMic]} // android, perimite varios colores a diferencia de tintcolor de ios
            />
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid}) => (
              <>
               {/* Input nombre */}
                <View style={estilos.textInputIconContainer}>
                  <AntDesign
                    name='user'
                    size={24}
                    color={'#5271FF'}/>
                  <TextInput style={estilos.textInputIcon} 
                   name="nombre"
                   placeholder="Nombre(s)"
                   onChangeText={handleChange('nombres')}
                   onBlur={handleBlur('nombres')}
                   value={values.nombres}
                   keyboardType="default" 
                   autoCapitalize='words'/> 
                </View>
                <View style={{...estilos.container, padding: 0}}>
                  {(errors.nombres && touched.nombres) &&
                    <Text style={estilos.errorText}>{errors.nombres}</Text>
                  }
                </View>
                {/* Input nombre */}
                <View style={estilos.textInputIconContainer}>
                  <AntDesign
                    name='user'
                    size={24}
                    color={'#5271FF'}/>
                  <TextInput style={estilos.textInputIcon} 
                   name="apellidos"
                   placeholder="Apellidos"
                   onChangeText={handleChange('apellidos')}
                   onBlur={handleBlur('apellidos')}
                   value={values.apellidos}
                   keyboardType="default" 
                   autoCapitalize='words'/> 
                </View>
                <View style={{...estilos.container, padding: 0}}>
                  {(errors.apellidos && touched.apellidos) &&
                    <Text style={estilos.errorText}>{errors.apellidos}</Text>
                  }
                </View>
                {/* Input email */}
                <View style={estilos.textInputIconContainer}>
                  <AntDesign
                    name='mail'
                    size={24}
                    color={'#5271FF'}/>
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
                    textContentType='emailAddress'/> 
                </View>
                <View style={{...estilos.container, padding: 0}}>
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
                   enablesReturnKeyAutomatically  />
                 <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#5271FF"/>
                 </Pressable>
                </View>
                <View style={{...estilos.container, padding: 0}}>
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
                   enablesReturnKeyAutomatically/>
                <Pressable onPress={handleRepeatPasswordVisibility}>
                  <MaterialCommunityIcons name={rightIcon2} size={22} color="#5271FF" />
                </Pressable> 
                </View>
                <View style={{...estilos.container, padding: 0}}>
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
                          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Vestibulum pellentesque turpis vitae lectus ornare maximus. 
                          Fusce pretium odio porta augue efficitur, eu consequat ex hendrerit. 
                          Donec ornare malesuada sagittis. Maecenas pharetra augue sapien, sed aliquam velit egestas et. Nam vel dui ut tortor vestibulum pretium at quis metus.`,
                          [{
                            text: 'Ok',
                            onPress: () => {},
                            style: 'default',
                        }]);
                    }}>
                      Acepto terminos y condiciones
                  </Text>
                  <Switch
                    trackColor={{ false: "#767577", true: colores.azulMic }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}/>
                </View> 
                {/* Boton: registro */}
                <TouchableOpacity
                  style={estilos.botonTouch}
                  onPress={handleSubmit}>
                  <Text style={estilos.textBtn}>Registrarme</Text>
                </TouchableOpacity>
                {/* Link: registro */}
                <TouchableOpacity
                  onPress={() => {props.navigation.navigate('inicio');}}>
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
)};
  
export default RegistroScreen; 