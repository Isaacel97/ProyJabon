import { useState } from 'react';
import * as yup from 'yup';

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };

  export const useToggleRepeatPasswordVisibility = () => {
    const [repeatPasswordVisibility, setRepeatPasswordVisibility] = useState(true);
    const [rightIcon2, setRightIcon2] = useState('eye');
  
    const handleRepeatPasswordVisibility = () => {
      if (rightIcon2 === 'eye') {
        setRightIcon2('eye-off');
        setRepeatPasswordVisibility(!repeatPasswordVisibility);
      } else if (rightIcon2 === 'eye-off') {
        setRightIcon2('eye');
        setRepeatPasswordVisibility(!repeatPasswordVisibility);
      }
    };
  
    return {
      repeatPasswordVisibility,
      rightIcon2,
      handleRepeatPasswordVisibility
    };
  };

  export const registroValidationSchema = yup.object().shape({
    nombresyapellidos: yup
      .string("Ingresa tus Nombres y Apellidos")
      .required("*Campo requerido"),
   
    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
   
    password: yup
      .string("Ingresa tu contraseña")
      .required("*Campo requerido")
      .min(8, 'Minimo 8 caracteres'),

    repitePawword: yup
      .string("Ingresa de nuevo tu contraseña")
      .required("*La confirmación es obligatoria")
      .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
   
    /*
    accepted: yup
      .bool()
      .isTrue(true),
    */
  });

  export const loginValidationSchema = yup.object().shape({
    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
   
    password: yup
      .string("Ingresa tu contraseña")
      .required("*Campo requerido")
      .min(8, 'Minimo 8 caracteres')
      
  });