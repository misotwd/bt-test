'use client';

import {tokenApi} from '@/api/repositories/userRepository ';
import {useQuery} from '@tanstack/react-query';

function TokenData() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['with-token'],
    queryFn: tokenApi,
  });

  if (isLoading) return <div>useQuery Loading...</div>;
  if (isError && error instanceof Error)
    return <div>useQuery Error: {error.message}</div>;

  return <div>Response: {data.token}</div>;
}

export default TokenData;
