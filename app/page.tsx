'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="flex justify-end">
        <UserButton afterSignOutUrl="/signin" />
      </div>
    </div>
  )
}

