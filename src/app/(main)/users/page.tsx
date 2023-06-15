import axios from 'axios';
import Link from 'next/link';

import userRepository from '@/api/repositories/userRepository ';

async function UsersPage() {
  // const users = await userRepository().getUsers();

  //console.log('users', users2);

  return <h1>Users</h1>;
  // return users.map((user: any) => (
  //   <div key={user.id} className="mb-3">
  //     <Link href={`/user/${user.id}`}>
  //       <h1>{user.name}</h1>
  //     </Link>
  //   </div>
  // ));
}

export default UsersPage;
