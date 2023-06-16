import {getServerSession} from 'next-auth';
import {authOptions} from '@/lib/auth';

import LogoutButton from './LogoutButton';
import Navbar from './Navbar';

async function Header() {
  const session = await getServerSession(authOptions);
  console.log('header');

  return (
    <header className="border-b-2 p-2 flex justify-between items-center">
      <Navbar />
      <p>Token: {session?.accessToken}</p>
      <LogoutButton />
    </header>
  );
}

export default Header;
