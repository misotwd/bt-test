'use client';

import {setAuthToken} from '@/api/httpClient';
import {useSession} from 'next-auth/react';
import {useEffect, useLayoutEffect} from 'react';

function AuthTokenSetup({children}: {children: React.ReactNode}) {
  const {data: session, status} = useSession();

  useLayoutEffect(() => {
    if (status !== 'loading') {
      setAuthToken(session);
    }
  }, [session]);

  if (status === 'loading') return <div>Auth Loading...</div>;

  return children;
}

export default AuthTokenSetup;
