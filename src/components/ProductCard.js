import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product, onPress }) => {  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{product.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: { fontSize: 16 },
});

export default ProductCard;
