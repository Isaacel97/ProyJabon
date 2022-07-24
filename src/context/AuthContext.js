import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  inicio: undefined,
  login: () => {},
  logout: () => {},

});

export function AuthProvider(props) {
  const { children } = props;
  const [inicio, setInicio] = useState([]);

  const login = (userData) => {
    setInicio(userData);
  };

  const logout = () => {
    setInicio(undefined)
  };

  const valueContext = {
    inicio,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}