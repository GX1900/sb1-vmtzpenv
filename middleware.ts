import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  beforeAuth(request) {
    // ここで何らかの前処理が可能（任意）
  },
  afterAuth(auth, request, event) {
    // 未認証 & パブリックルート以外なら /signin にリダイレクト
    if (!auth.userId && !auth.isPublicRoute) {
      return Response.redirect(new URL('/signin', request.url));
    }
  },
});

export const config = {
  matcher: [
    '/',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

