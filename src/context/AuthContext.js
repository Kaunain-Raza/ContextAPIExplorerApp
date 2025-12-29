import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setLoading(true);

      //! yahan mene wo api remove krdi hai kiun ke wo proxy block kr raha tha is waja se login krne mein issue a raha tha
      if (
        email.trim() === "eve.holt@reqres.in" &&
        password.trim() === "cityslicka"
      ) {
        const fakeToken = "FAKE_TOKEN_123";
        await AsyncStorage.setItem("token", fakeToken);
        setToken(fakeToken);
      } else {
        throw "Invalid credentials";
      }
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (navigation) => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    navigation.replace("Login");
  };

  const loadToken = async () => {
    const savedToken = await AsyncStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
