import React, { createContext, useState } from 'react';
import { authenticate, register } from '../Utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  
  const login = async (credentials) => {
    const token = await authenticate(credentials);
    setAuthToken(token);
  };

  const signup = async (credentials) => {
    const token = await register(credentials);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };
  console.log(authToken)

  return (
    <AuthContext.Provider value={{ authToken, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };