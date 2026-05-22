import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/join')({
  component: JoinPage,
})

function JoinPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-black to-red-950/20" />

      {/* Floating Effects */}
      <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[0.5em] text-orange-400">
            Join The Movement
          </p>

          <h1 className="mt-6 bg-[linear-gradient(to_right,#ffffff,#f97316,#dc2626,#ffffff)] bg-[length:200%_200%] bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Become Part Of RLHS
          </h1>

          <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Join a disciplined futuristic movement focused on Bharat 2047,
            youth leadership, technology, truth and cultural strength.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {[
            {
              title: 'Leadership',
              desc: 'Build strong youth leadership and disciplined communities.',
            },
            {
              title: 'Technology',
              desc: 'Use modern technology for Bharat’s future growth.',
            },
            {
              title: 'National Vision',
              desc: 'Contribute toward a powerful and self-reliant Bharat.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600" />

              <h2 className="text-2xl font-bold text-white">
                {item.title}
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
        >

          <h2 className="text-center text-3xl font-black md:text-4xl">
            Apply Now
          </h2>

          <p className="mt-4 text-center text-zinc-400">
            Fill the form below to become part of the movement.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-orange-500"
            />

          </div>

          <textarea
            placeholder="Why do you want to join RLHS?"
            className="mt-6 h-40 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-orange-500"
          />

          <div className="mt-8 flex justify-center">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-10 py-4 font-semibold shadow-2xl shadow-red-900/30"
            >
              Submit Application
            </motion.button>

          </div>

        </motion.div>

      </div>

    </main>
  )
}
