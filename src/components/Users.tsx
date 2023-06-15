'use client';

import userRepository from '@/api/repositories/userRepository ';
import {useQuery} from '@tanstack/react-query';
import Link from 'next/link';

function UsersClient() {
  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: userRepository().nextRouteHandler,
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  //   return <h1>Users</h1>;

  return data.map((user: any) => (
    <div key={user.id} className="mb-3">
      <Link href={`/user/${user.id}`}>
        <h1>{user.name}</h1>
      </Link>
    </div>
  ));
}

export default UsersClient;
