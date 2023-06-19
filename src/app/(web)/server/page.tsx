import {getUsers} from '@/api/repositories/userRepository ';
import Link from 'next/link';

async function UsersPage() {
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
