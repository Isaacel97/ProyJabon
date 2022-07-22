import React, { useState, createContext, useEffect } from "react";
import { collection, doc, onSnapshot, query, querySnapshot } from 'firebase/firestore';
import { database } from "../api/backend";

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