'use client';

import {useSession} from 'next-auth/react';

const SessionData = () => {
  const {data: session} = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>accessToken: {JSON.stringify(session?.accessToken)}</pre>
      <pre>idToken: {JSON.stringify(session?.idToken)}</pre>
    </>
  );
};

export default SessionData;
