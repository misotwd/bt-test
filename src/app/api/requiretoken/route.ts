import {NextResponse} from 'next/server';
import {headers} from 'next/headers';

export async function GET() {
  const headersList = headers();
  const token = headersList.get('Authorization')?.split(' ')[1];

  if (!token) {
    return new Response('Unauthorized!', {
      status: 401,
    });
  }

  return NextResponse.json({token});
}
