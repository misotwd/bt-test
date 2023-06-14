import axios from 'axios';
import Link from 'next/link';

import userRepository from '@/api/repositories/userRepository ';

const getUsers = async () => {
  const users: Promise<[]> = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      resolve(response.data);
    }, 0);
  });

  // if (1 == 1) return Promise.reject('api error');

  return users;
};

async function UsersPage() {
  const users2 = await userRepository().getUsers();

  //console.log('users', users2);

  const users = await getUsers();
  return users.map((user: any) => (
    <div key={user.id} className="mb-3">
      <Link href={`/user/${user.id}`}>
        <h1>{user.name}</h1>
      </Link>
    </div>
  ));
}

export default UsersPage;
