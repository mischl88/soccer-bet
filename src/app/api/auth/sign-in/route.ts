import { NextRequest, NextResponse } from 'next/server';

import { signIn } from '@/externalApi/auth';
import AuthToken from '@/services/AuthToken';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await signIn(body.email, body.password);
    const cookieString = await AuthToken.setTokens(response.data);

    return new Response('ok', {
      status: 200,
      headers: { 'Set-Cookie': cookieString },
    });
  } catch (error: any) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: error.statusCode || 500 },
    );
  }
}
