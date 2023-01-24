import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../constants/strings';

export default function useAllProductsService() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const URL = `${BASE_URL}/products`;
    const response = await axios.get(URL);

    setProducts(response.data);
  }

  getAllProducts();

  return products;
}
