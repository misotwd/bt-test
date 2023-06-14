import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('httpClient created');
