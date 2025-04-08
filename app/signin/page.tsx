'use client';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignIn path="/signin" routing="path" />
    </div>
  );
}
