import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function updateOrderStatus(id, status) {
  const URL = `${BASE_URL}/sales/${id}`;
  const response = await axios.patch(URL, { status });
  return response;
}
