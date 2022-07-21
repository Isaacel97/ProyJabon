import { useState } from 'react';

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