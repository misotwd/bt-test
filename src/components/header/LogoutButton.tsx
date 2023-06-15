'use client';

import {signOut, useSession} from 'next-auth/react';

function LogoutButton() {
  const {status} = useSession();

  if (status !== 'authenticated') return null;

  return (
    <button
      onClick={() => signOut()}
      className="rounded bg-purple-500 p-2 text-white"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
