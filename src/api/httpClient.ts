import axios from 'axios';
import {getSession} from 'next-auth/react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = async () => {
  console.log('setAuthToken called');
  const session = await getSession();
  if (session?.accessToken) {
    httpClient.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${session.accessToken}`;
  } else {
    delete httpClient.defaults.headers.common['Authorization'];
  }
};

console.log('httpClient created');
