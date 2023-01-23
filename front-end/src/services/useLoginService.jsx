import axios from 'axios';
import { BASE_URL } from '../constants/strings';

export async function loginService(loginPayload) {
  const URL = `${BASE_URL}/login`;
  const response = await axios.post(URL, loginPayload);
  return response;
}

export async function loginServiceFetch(loginPayload) {
  const URL = `${BASE_URL}/login`;

  const fetchOptions = {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(loginPayload),
  };

  const response = await fetch(URL, fetchOptions);
  const data = await response.json();

  return data;
}
