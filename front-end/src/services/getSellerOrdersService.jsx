import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getSellerOrdersService(sellerId) {
  const URL = `${BASE_URL}/sales/${sellerId}`;
  const response = await axios.get(URL);
  return response;
}
