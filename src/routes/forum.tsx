import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/forum')({
  component: ForumPage,
})

function ForumPage() {
  const posts = [
    {
      title: 'Bharat Development Strategy 2047',
      desc: 'Infrastructure, youth leadership, and long-term national planning discussion.',
      tag: 'National Vision',
    },
    {
      title: 'Youth Discipline & Leadership',
      desc: 'How youth can build strong ideological and physical discipline.',
      tag: 'Culture',
    },
    {
      title: 'Technology in New Bharat',
      desc: 'AI, defense tech, and digital sovereignty discussions.',
      tag: 'Tech',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-red-500">
              Command Discussions
            </p>

            <h1 className="mt-4 text-5xl font-black md:text-6xl">
              Forum Hub
            </h1>

            <p className="mt-4 max-w-xl text-zinc-400">
              A centralized space for ideology, development, technology and youth discussions shaping Bharat 2047.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold shadow-lg shadow-red-900/30"
          >
            + Create Post
          </motion.button>

        </div>

        {/* POSTS GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
            >

              {/* glow border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative">

                <span className="inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                  {post.tag}
                </span>

                <h2 className="mt-4 text-2xl font-bold leading-tight">
                  {post.title}
                </h2>

                <p className="mt-3 text-zinc-400">
                  {post.desc}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-zinc-500">

                  <span>Active discussion</span>

                  <button className="text-red-400 hover:text-red-300">
                    Join →
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </main>
  )
}
