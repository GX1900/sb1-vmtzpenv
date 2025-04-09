import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, request) => {
  // 未サインインかつパブリックルートでない場合は /signin にリダイレクト
  if (!auth.userId && !auth.isPublicRoute) {
    return Response.redirect(new URL('/signin', request.url));
  }
});

export const config = {
  matcher: [
    '/',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

