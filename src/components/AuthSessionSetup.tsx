'use client';

import {useSession} from 'next-auth/react';

function AuthSessionSetup() {
  const {data: session, status} = useSession();
  console.log(session);
  console.log(status);

  return null;
}

export default AuthSessionSetup;
