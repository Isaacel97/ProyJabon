import React, { useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/app";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined)
  };

  const signup = (nombresyapellidos, email, password) => {
    return createUserWithEmailAndPassword(auth, nombresyapellidos, email, password);
  };

  const valueContext = {
    auth,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}