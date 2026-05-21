import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

function EventsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.3em] text-red-500">
          National Activities
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Events
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {[1,2,3].map((event) => (
            <div
              key={event}
              className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8"
            >

              <div className="h-48 rounded-xl bg-zinc-900" />

              <h2 className="mt-6 text-2xl font-bold">
                Youth Leadership Meet
              </h2>

              <p className="mt-3 text-zinc-400">
                Mumbai • 2026
              </p>

              <button className="mt-6 rounded-xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-700">
                Register
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}
