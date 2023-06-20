'use client';

import {useSession, signIn} from 'next-auth/react';
import {useLayoutEffect} from 'react';

import {httpClient} from '@/api/httpClient';

function AuthTokenHandler({children}: {children: React.ReactNode}) {
  const {data: session, status} = useSession();

  useLayoutEffect(() => {
    const setAuthToken = () => {
      if (session?.accessToken) {
        httpClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${session.accessToken}`;
      } else {
        delete httpClient.defaults.headers.common['Authorization'];
      }
    };

    if (status !== 'loading') {
      setAuthToken();
    }
  }, [session, status]);

  // if no token or token expired, redirect to login page
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
