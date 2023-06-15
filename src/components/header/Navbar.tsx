import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul className="flex [&>li]:mr-8">
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
          <Link href="/test">Test Page</Link>
        </li>
        <li className="hover:text-red-600">
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
