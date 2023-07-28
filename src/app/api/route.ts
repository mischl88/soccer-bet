import { NextResponse } from 'next/server';

import { list } from "@/db/repository/Order";

export async function GET() {
  const orders = await list();

  return NextResponse.json({ data: orders });
}
