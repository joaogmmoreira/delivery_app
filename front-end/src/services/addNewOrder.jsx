import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export default async function addNewOrder(newOrderPayload) {
  const URL = `${BASE_URL}/sales`;

  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;

  const response = await axios.post(
    URL,
    newOrderPayload,
    {
      headers: { authorization: token },
    },
  );

  return response;
}
