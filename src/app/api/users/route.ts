import {NextResponse} from 'next/server';
import {headers} from 'next/headers';

export async function GET() {
  const headersList = headers();
  const token = headersList.get('Authorization')?.split(' ')[1];

  if (!token) {
    return new Response('No token provided!', {
      status: 401,
    });
  }

  console.log('Axios Token:', token);

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({data});
}
