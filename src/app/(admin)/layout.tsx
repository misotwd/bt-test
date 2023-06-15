import '../globals.css';
import {Inter} from 'next/font/google';

import Header from '@/components/header/Header';
import NextAuthProvider from '@/providers/NextAuthProvider';
import AuthSessionSetup from '@/components/AuthSessionSetup';

import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/lib/auth';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Admin Page',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <AuthSessionSetup sessionServer={session} />
          <Header />
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
