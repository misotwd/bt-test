import {httpClient} from '@/api/httpClient';
import {getSession} from 'next-auth/react';

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
      console.log(response.data);
      return response.data.data;
    },
  };
};

export default userRepository;
