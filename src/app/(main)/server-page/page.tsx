import userRepository from '@/api/repositories/userRepository ';
import Link from 'next/link';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/lib/auth';

async function ServerPage() {
  const session = await getServerSession(authOptions);
  // console.log('sesison', session);
  const users = await userRepository().nextRouteHandler();

  //  return <h1>dfsdf</h1>;
  return users.map((user: any) => (
    <div key={user.id} className="mb-3">
      <Link href={`/user/${user.id}`}>
        <h1>{user.name}</h1>
      </Link>
    </div>
  ));
}

export default ServerPage;
