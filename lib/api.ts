import { Product } from "./models";

const baseURL = "https://dummyjson.com";

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const getProducts = async () => {
  const res = await fetch(`${baseURL}/products`);
  const data = await res.json();
  return data as ProductResponse;
};
