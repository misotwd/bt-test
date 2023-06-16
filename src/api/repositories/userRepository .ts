import {httpClient} from '@/api/httpClient';
import {cp} from 'fs';
import {getSession} from 'next-auth/react';

// seperate the logic from
const userRepository = () => {
  return {
    getUsers: async () => {
      try {
        const response = await httpClient.get('/users');
        return response.data;
      } catch (error) {
        // handle error
      }
    },
    editUser: (name: string, surname: string) => {
      return {
        name,
        surname,
      };
    },
    nextRouteHandler: async () => {
      const response = await httpClient.get('/api/users');
      return response.data.data;
    },
  };
};

export default userRepository;

export const UserQueryKeys = {
  USERS: 'USERS',
} as const;
