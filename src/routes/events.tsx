import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

function EventsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <h1 className="text-5xl font-black text-red-600">
        Events
      </h1>

      <p className="mt-6 text-zinc-400">
        Movement meetups, digital rallies and volunteer drives.
      </p>
    </main>
  )
}
