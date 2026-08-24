import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.passcode === '1234') {
      return NextResponse.json({ success: true, message: 'Admin settings saved successfully' });
    }
    return NextResponse.json({ success: false, message: 'Invalid Admin Passcode' }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Error processing admin update' }, { status: 500 });
  }
}
