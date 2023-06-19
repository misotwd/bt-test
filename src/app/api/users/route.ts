import {NextResponse} from 'next/server';

export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return NextResponse.json(users);
}
