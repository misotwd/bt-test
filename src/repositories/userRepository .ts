import {httpClient} from '@/services/apiService';

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
