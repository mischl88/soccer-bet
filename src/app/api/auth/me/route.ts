import { NextResponse } from 'next/server';

import { getLoggedInUser } from '@/externalApi/auth';

export async function GET() {
  try {
    const user = await getLoggedInUser();

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      { ...error, message: error.message },
      { status: error.statusCode ?? 500 },
    );
  }
}
