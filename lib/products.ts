import productCatalog from "../data/products.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  images?: string[];
  badge?: string;
  description: string;
  specs: string[];
  datasheet?: string;
};

export const products = productCatalog as Product[];

export const getProduct = (id: string) => products.find((product) => product.id === id) ?? products[0];
