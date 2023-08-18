import axios from "axios";

import { Product } from "src/modules/IProducts";

axios.defaults.baseURL = "https://dummyjson.com/products";

interface ApiResponse {
  data: {
    products: Product[];
  };
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response: ApiResponse = await axios.get("/");

  console.log("response", response);

  return response.data.products;
};
