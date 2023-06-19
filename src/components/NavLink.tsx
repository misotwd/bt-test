import Link from 'next/link';

function NavLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <Link className="hover:text-red-600" href={href}>
      {children}
    </Link>
  );
}
export default NavLink;
