import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getAllProductsService() {
  const URL = `${BASE_URL}/products`;
  const response = await axios.get(URL);

  return response;
}
