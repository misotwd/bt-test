import {httpClient} from '@/api/httpClient';

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
  };
};

export default userRepository;
