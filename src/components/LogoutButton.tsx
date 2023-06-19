'use client';

import {signOut} from 'next-auth/react';

function LogoutButton() {
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
