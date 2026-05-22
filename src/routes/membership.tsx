import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/membership')({
  component: MembershipPage,
})

function MembershipPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* HEADER */}
        <p className="text-sm uppercase tracking-[0.5em] text-red-500">
          Join RLHS
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          Membership
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Become part of Bharat’s disciplined digital movement focused on truth, leadership, and national growth.
        </p>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-red-500"
            />

          </div>

          <input
            type="text"
            placeholder="City / State"
            className="mt-6 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-red-500"
          />

          <textarea
            placeholder="Why do you want to join RLHS?"
            className="mt-6 h-40 w-full resize-none rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-red-500"
          />

          {/* AGREEMENT */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
            <input type="checkbox" className="accent-red-500" />
            <span>I agree to follow discipline and code of conduct</span>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-semibold shadow-lg shadow-red-900/30"
          >
            Submit Application
          </motion.button>

        </motion.div>

      </div>
    </main>
  )
}
