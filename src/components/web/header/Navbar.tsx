import NavLink from '@/components/NavLink';

function Navbar() {
  return (
    <nav>
      <ul className="flex [&>li]:mr-8">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/server">Server Component</NavLink>
        </li>
        <li>
          <NavLink href="/client">Client Component</NavLink>
        </li>
        <li>
          <NavLink href="/sentry">Sentry Error Page</NavLink>
        </li>
        <li>
          <NavLink href="/withtoken">Protected API</NavLink>
        </li>
        <li>
          <NavLink href="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
