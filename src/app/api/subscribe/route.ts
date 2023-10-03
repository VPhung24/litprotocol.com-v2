import GhostAdminAPI from '@tryghost/admin-api';
import { NextResponse } from 'next/server';

const admin = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
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
  const res = await addMember(email);

  const data = await res.json();

  return NextResponse.json(data);
}
