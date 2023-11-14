import GhostAdminAPI from '@tryghost/admin-api';
import { NextResponse } from 'next/server';

const admin = new GhostAdminAPI({
  url: process.env.GHOST_API_URL || 'https://spark.ghost.io',
  key: process.env.GHOST_ADMIN_API_KEY || '',
  version: 'v5.0',
});

async function addMember(email: string) {
  return await admin.members.add(
    { email },
    { send_email: true, email_type: 'subscribe' }
  );
}

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const res = await addMember(email);
    return NextResponse.json(res);
  } catch (err: any) {
    const context = err?.context ? err.context : 'Unknown error';
    if (context.includes('already exists')) {
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
