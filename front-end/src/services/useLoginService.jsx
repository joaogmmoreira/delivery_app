import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function loginService(loginPayload) {
  const URL = `${BASE_URL}/login`;
  const response = await axios.post(URL, loginPayload);
  return response;
}
