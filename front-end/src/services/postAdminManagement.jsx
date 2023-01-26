import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function adminService(payload) {
  const URL = `${BASE_URL}/admin`;
  const response = await axios.post(URL, payload);
  return response;
}
