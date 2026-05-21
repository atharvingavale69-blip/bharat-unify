import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/membership')({
  component: MembershipPage,
})

function MembershipPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <h1 className="text-5xl font-black text-red-600">
        Membership
      </h1>

      <p className="mt-6 text-zinc-400">
        Join the disciplined digital movement for Bharat 2047.
      </p>
    </main>
  )
}
