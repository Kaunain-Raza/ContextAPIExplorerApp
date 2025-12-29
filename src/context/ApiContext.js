import React, { createContext, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (refresh = false) => {
    try {
      setLoading(true);
      //! yeh aik dummy api hai jo products ka data fetch krne ke liye integarte ki hai dummy products
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (e) {
      throw "Failed to load products";
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ products, fetchProducts, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
