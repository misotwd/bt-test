import Link from "next/link";

function Header() {
  return (
    <header className="border-b-2 p-2">
      <nav>
        <ul className="flex [&>li]:mr-8 ">
          <li className="hover:text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-600">
            <Link href="/users">Users</Link>
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
