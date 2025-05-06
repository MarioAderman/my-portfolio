// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // Here you can do something with the data, e.g., send an email or save to DB
  console.log('Contact form submission:', data);

  return NextResponse.json({ message: 'Message received!' }, { status: 200 });
}
