import {getServerSession} from 'next-auth';
import {authOptions} from '@/lib/auth';

import Navbar from './Navbar';
import LogoutButton from '@/components/LogoutButton';

async function Header() {
  const session = await getServerSession(authOptions);
  console.log('header server component');

  return (
    <header className="border-b-2 p-2 flex justify-between items-center">
      <Navbar />
      <div className="flex items-center gap-3">
        <p>Logged In: {String(!!session)}</p>
        {session ? <LogoutButton /> : null}
      </div>
    </header>
  );
}

export default Header;
