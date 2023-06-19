import {httpClient} from '@/api/httpClient';

export const getUsers = async () => {
  const response = await httpClient.get('/users');
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await httpClient.get(`/users/${id}`);
  return response.data;
};

export const tokenApi = async () => {
  const response = await httpClient.get(
    'http://localhost:3000/api/requiretoken'
  );
  return response.data;
};

export const UserQueryKeys = {
  USERS: 'USERS',
} as const;
