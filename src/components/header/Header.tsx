import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <ul className="flex [&>li]:mr-8 ">
          <li className="hover:text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-600">
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
