import SessionData from '@/components/SessionData';
import React from 'react';

import {getServerSession} from 'next-auth/next';

function AdminPage() {
  return (
    <>
      <h1 className="text-2xl">Admin Page</h1>
      <SessionData />
    </>
  );
}

export default AdminPage;
