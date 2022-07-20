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

  // Mensajes de Validación del Formulario 
 export const loginValidationSchema = () => {
  return yup.object().shape({
    nombresyapellidos: yup
      .string("Ingresa tus Nombres y Apellidos")
      .required("*Campo requerido"),
  
    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
  
    password: yup
      .string()
      .required("*Campo requerido"),

    repeatPassword: yup
      .string()
      .required("La confirmación es obligatoria")
      .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
  });
};

// contenido valores
export const initialValues = () => {
  return { 
    nombresyapellidos: '', 
    email:'', 
    password: '', 
    repeatPassword: '' 
  }
}
