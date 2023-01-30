import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function adminService(payload, token) {
  const URL = `${BASE_URL}/admin`;
  const response = await axios.post(URL, payload, {
    headers: { authorization: token },
  });
  return response;
}
