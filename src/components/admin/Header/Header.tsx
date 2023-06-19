import {getServerSession} from 'next-auth';

import Navbar from './Navbar';
import LogoutButton from '../../LogoutButton';
import {authOptions} from '@/lib/auth';

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b-2 p-2 flex items-center">
      Admin Panel
      <div className="ml-auto flex items-center gap-4">
        <Navbar />
        <p className="bg-gray-200 px-1">Token: {session?.accessToken}</p>
        {session && <LogoutButton />}
      </div>
    </header>
  );
}

export default Header;
