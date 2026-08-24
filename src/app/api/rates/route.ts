import { NextResponse } from 'next/server';
import { defaultRatesData } from '@/lib/ratesStore';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(defaultRatesData);
}
