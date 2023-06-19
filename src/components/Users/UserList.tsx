'use client';

import {UserQueryKeys, getUsers} from '@/api/repositories/userRepository ';
import {useQuery} from '@tanstack/react-query';
import Link from 'next/link';

function UserList() {
  const {data, isLoading, error, isError} = useQuery({
    queryKey: [UserQueryKeys.USERS],
    queryFn: getUsers,
  });

  if (isLoading) return <div>useQuery Loading...</div>;

  if (isError && error instanceof Error) return <div>{error.message}</div>;

  return data.map((user: any) => (
    <div key={user.id} className="mb-3">
      <Link href={`/user/${user.id}`}>
        <h1>{user.name}</h1>
      </Link>
    </div>
  ));
}

export default UserList;
