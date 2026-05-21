import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forum')({
  component: ForumPage,
})

function ForumPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <h1 className="text-5xl font-black text-red-600">
        Discussion Forum
      </h1>

      <p className="mt-6 text-zinc-400">
        Truth-driven discussions for the youth of Bharat.
      </p>
    </main>
  )
}
