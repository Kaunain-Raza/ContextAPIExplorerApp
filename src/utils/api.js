import axios from "axios";

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", { email, password });
    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const fetchProductsApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
