'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const router = useRouter();

  const handleSignOut = () => {
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