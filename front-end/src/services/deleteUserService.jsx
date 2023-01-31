import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function deleteUserService(id) {
  const URL = `${BASE_URL}/users/${id}`;
  const response = await axios.delete(URL);

  return response;
}
