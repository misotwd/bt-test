import axios from 'axios';
import {Session} from 'next-auth';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = 'http://localhost:3000';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = async (session: Session | null) => {
  console.log('setAuthToken called');
  if (session?.accessToken) {
    httpClient.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${session.accessToken}`;
  } else {
    delete httpClient.defaults.headers.common['Authorization'];
  }
};

console.log('httpClient created');
