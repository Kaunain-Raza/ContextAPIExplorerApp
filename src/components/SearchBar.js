import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
