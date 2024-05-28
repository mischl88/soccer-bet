import { NextRequest, NextResponse } from 'next/server';

import { signUp } from '@/externalApi/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await signUp({ ...body, username: 'test' });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: error.statusCode || 500 },
    );
  }
}
