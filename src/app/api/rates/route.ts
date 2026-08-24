import { NextResponse } from 'next/server';
import { defaultRatesData } from '@/lib/ratesStore';

export async function GET() {
  try {
    // Return live rates JSON
    return NextResponse.json(defaultRatesData, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (e) {
    return NextResponse.json(defaultRatesData, { status: 200 });
  }
}
