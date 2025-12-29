import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const { login, loading } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.replace("Products");
    } catch (error) {
      Alert.alert("Login Failed", error);
    }
  };

  return (
    <>
      <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
          }}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Button title="Login" onPress={handleLogin} />
        )}
      </View>
    </>
  );
};

export default LoginScreen;
