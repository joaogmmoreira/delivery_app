import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function getAllUsers() {
  const URL = `${BASE_URL}/users`;
  const response = await axios.get(URL);

  return response;
}
