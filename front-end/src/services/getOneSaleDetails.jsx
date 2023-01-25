import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getOneSaleDetails(id) {
  const URL = `${BASE_URL}/sales/${id}`;
  const response = await axios.get(URL);
  return response;
}
