import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

function EventsPage() {
  const events = [
    {
      title: 'Youth Leadership Summit',
      location: 'Mumbai',
      date: '2026',
    },
    {
      title: 'Tech & Bharat Innovation Meet',
      location: 'Delhi',
      date: '2026',
    },
    {
      title: 'Cultural Unity Gathering',
      location: 'Pune',
      date: '2026',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.5em] text-red-500">
            National Activities
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Events
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Join national-level gatherings focused on leadership, technology, culture and youth empowerment.
          </p>

        </div>

        {/* EVENT GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              {/* glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative">

                {/* IMAGE PLACEHOLDER */}
                <div className="h-44 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800" />

                {/* TITLE */}
                <h2 className="mt-6 text-xl font-bold">
                  {event.title}
                </h2>

                {/* META */}
                <p className="mt-2 text-sm text-zinc-400">
                  📍 {event.location} • 🗓 {event.date}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3 font-semibold shadow-lg shadow-red-900/30"
                >
                  Register Now
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </main>
  )
}
