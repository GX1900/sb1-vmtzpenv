import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth') || request.headers.get('authorization');
  const isAuthPage = request.nextUrl.pathname === '/signin';

  // If user is not authenticated and trying to access protected route
  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // If user is authenticated and trying to access auth page
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin'],
};