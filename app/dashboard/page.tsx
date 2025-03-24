'use client';

export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, SignOutButton } from '@clerk/nextjs';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/signin');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">ダッシュボード</h1>
            <SignOutButton signOutCallback={() => router.push('/signin')}>
              <Button variant="outline">サインアウト</Button>
            </SignOutButton>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">ログインしました</p>
        </CardContent>
      </Card>
    </div>
  );
}
