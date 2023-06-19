import NavLink from '@/components/NavLink';

function Navbar() {
  return (
    <nav>
      <ul className="flex [&>li]:mr-4">
        <li>
          <NavLink href="/">Back to web</NavLink>
        </li>
        <li>
          <NavLink href="/admin">Home</NavLink>
        </li>

        <li>
          <NavLink href="/admin/withtoken">Protected API</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
