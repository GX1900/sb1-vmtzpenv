'use client';

export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs'; // Clerkの認証フックを追加
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  // 未ログインならリダイレクト
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/signin');
    }
  }, [isSignedIn, router]);

  const handleSignOut = () => {
    // ログアウト処理は ClerkのSignOutButtonを使うのが理想だけど、暫定で以下
    localStorage.removeItem('isAuthenticated');
    router.push('/signin');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">ダッシュボード</h1>
            <Button variant="outline" onClick={handleSignOut}>
              サインアウト
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">ログインしました</p>
        </CardContent>
      </Card>
    </div>
  );
}
