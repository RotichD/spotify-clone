import { NextResponse, NextRequest } from 'next/server';
import { GetTokenParams, getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  } as GetTokenParams);

  const { pathname } = request.nextUrl;

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/login'

  if (!token && pathname !== '/login') {
    return NextResponse.rewrite(url)
  }

  return NextResponse.next();
}

export const config = {
    matcher: '/',
  };