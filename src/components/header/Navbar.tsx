'use client';

import Link from 'next/link';
import {signOut} from 'next-auth/react';

function Navbar() {
  return (
    <nav>
      <ul className="flex [&>li]:mr-8 items-center">
        <li className="hover:text-red-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-red-600">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:text-red-600">
          <Link href="/sentry">Sentry Error Page</Link>
        </li>
        <li className="hover:text-red-600">
          <Link href="/admin">Admin</Link>
        </li>
        <li className="hover:text-red-600 ml-auto">
          <button
            onClick={() => signOut()}
            className="rounded bg-purple-500 p-2 text-white"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
