import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = async (category?: string) => {
  const url = category
    ? `${BASE_URL}/products/?categorySlug=${category}`
    : `${BASE_URL}/products`;

  const response = await axios.get(url);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const singleProduct = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};