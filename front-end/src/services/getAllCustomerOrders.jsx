import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getAllCustomerOrders(id) {
  const URL = `${BASE_URL}/customer/orders/${id}`;
  const response = await axios.get(URL);

  return response;
}
