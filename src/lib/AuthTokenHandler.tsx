'use client';

import {httpClient, setAuthToken} from '@/api/httpClient';
import {useSession} from 'next-auth/react';
import {useEffect, useLayoutEffect} from 'react';

import {signIn} from 'next-auth/react';

function AuthTokenHandler({children}: {children: React.ReactNode}) {
  const {data: session, status} = useSession();

  useLayoutEffect(() => {
    if (status !== 'loading') {
      setAuthToken(session);
    }
  }, [status]);

  httpClient.interceptors.response.use(undefined, error => {
    if (error.response.status === 401) {
      signIn('asgardeo');
    }
    return Promise.reject(error);
  });

  if (status === 'loading') return <div>Auth Loading...</div>;

  return children;
}

export default AuthTokenHandler;
