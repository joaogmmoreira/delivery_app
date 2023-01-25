import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getSaleProducts(id) {
  const URL = `${BASE_URL}/sales/products/${id}`;
  const response = await axios.get(URL);
  return response;
}
