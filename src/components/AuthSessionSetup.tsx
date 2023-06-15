'use client';

import {setAuthToken} from '@/api/httpClient';
import {useSession} from 'next-auth/react';
import {useEffect} from 'react';

function AuthSessionSetup({sessionServer}: {sessionServer: any}) {
  const {data: session, status} = useSession();

  console.log('sessionServer', sessionServer);

  useEffect(() => {
    setAuthToken();
  }, [session]);

  return null;
}

export default AuthSessionSetup;
