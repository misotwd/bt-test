import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('httpClient created');
