import {NextResponse} from 'next/server';
import {headers} from 'next/headers';

export async function GET() {
  const headersList = headers();

  console.log('Axios Token:', headersList.get('Authorization')?.split(' ')[1]);

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({data});
}
