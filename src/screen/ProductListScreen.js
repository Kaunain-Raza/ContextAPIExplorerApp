import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { ApiContext } from "../context/ApiContext";

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts, loading } = useContext(ApiContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchProducts} />
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate("Details", { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  search: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});
