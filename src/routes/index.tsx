import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />

      {/* Floating Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-10%] top-[5%] h-[650px] w-[650px] rounded-full bg-orange-500/20 blur-3xl"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-red-700/20 blur-3xl"
      />

      {/* Grid Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"
      />

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between border-b border-zinc-900/70 bg-black/40 px-6 py-5 backdrop-blur-xl">

        <a
          href="/"
          className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-2xl font-black tracking-[0.35em] text-transparent"
        >
          RLHS
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">

          <a
            href="/vision"
            className="transition hover:text-orange-400"
          >
            Vision
          </a>

          <a
            href="/forum"
            className="transition hover:text-orange-400"
          >
            Forum
          </a>

          <a
            href="/events"
            className="transition hover:text-orange-400"
          >
            Events
          </a>

          <a
            href="/membership"
            className="transition hover:text-orange-400"
          >
            Membership
          </a>

        </nav>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 text-sm font-semibold shadow-xl shadow-red-900/30"
        >
          Join
        </motion.button>

      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >

          <p className="mb-5 text-sm uppercase tracking-[0.5em] text-orange-400">
            Bharat • Discipline • Civilization
          </p>

          <motion.h1
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="bg-[linear-gradient(to_right,#ffffff,#f97316,#dc2626,#ffffff)] bg-[length:200%_200%] bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl"
          >
            Rashtriya Laal Hit Sangh
          </motion.h1>

          <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            A futuristic nationalist youth movement focused on truth,
            discipline, technology, culture and Bharat 2047 vision.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 font-semibold shadow-2xl shadow-red-900/40"
            >
              Join Movement
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-orange-500/30 bg-black/40 px-8 py-4 font-semibold backdrop-blur-xl hover:border-orange-500"
            >
              Explore Vision
            </motion.button>

          </div>

        </motion.div>

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

      </section>

      {/* Stats */}
      <section className="relative z-20 grid gap-6 px-6 pb-28 md:grid-cols-3">

        {[
          ['2047', 'Bharat Vision Timeline'],
          ['Youth', 'Digital Nationalist Community'],
          ['Truth', 'Discussion Beyond Propaganda'],
        ].map(([title, desc]) => (

          <motion.div
            whileHover={{ y: -10 }}
            key={title}
            className="rounded-3xl border border-orange-500/10 bg-zinc-950/60 p-8 backdrop-blur-xl transition"
          >

            <h2 className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-5xl font-black text-transparent">
              {title}
            </h2>

            <p className="mt-4 text-zinc-400">
              {desc}
            </p>

          </motion.div>

        ))}

      </section>

      {/* Ideology */}
      <section className="relative z-20 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.4em] text-orange-400">
            Core Ideology
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            Building Bharat’s Future
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              {
                title: 'Discipline',
                desc: 'Structured youth-driven movement focused on leadership and national development.',
              },
              {
                title: 'Technology',
                desc: 'AI, innovation and futuristic systems empowering Bharat.',
              },
              {
                title: 'Culture',
                desc: 'Preserving civilization identity while embracing futuristic progress.',
              },
            ].map((item) => (

              <motion.div
                whileHover={{ scale: 1.03 }}
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10 backdrop-blur-xl transition hover:border-orange-500/30"
              >

                <h3 className="text-3xl font-bold text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Timeline */}
      <section className="relative z-20 px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm uppercase tracking-[0.4em] text-orange-400">
            Bharat 2047
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            National Vision Timeline
          </h2>

          <div className="mt-20 border-l border-orange-500/20 pl-8 space-y-16">

            {[
              ['2026', 'Formation of disciplined digital youth network.'],
              ['2030', 'Grassroots expansion and technological integration.'],
              ['2047', 'Vishwaguru Bharat powered by disciplined citizens.'],
            ].map(([year, text]) => (

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                key={year}
              >

                <h3 className="text-4xl font-black text-orange-400">
                  {year}
                </h3>

                <p className="mt-3 text-lg text-zinc-400">
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-20 px-6 pb-32">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mx-auto max-w-6xl rounded-[40px] border border-orange-500/10 bg-gradient-to-br from-zinc-950 to-black p-16 text-center shadow-2xl shadow-orange-900/10"
        >

          <p className="text-sm uppercase tracking-[0.4em] text-orange-400">
            Join The Movement
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            Bharat Needs Builders.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">
            Become part of a disciplined digital community dedicated to truth,
            technology, culture and Bharat 2047.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-10 py-5 text-lg font-bold shadow-2xl shadow-red-900/40"
          >
            Become A Member
          </motion.button>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-zinc-900 bg-black/60 px-6 py-16 backdrop-blur-xl">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

          <div>

            <h2 className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-3xl font-black tracking-[0.3em] text-transparent">
              RLHS
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-zinc-500">
              Truth • Discipline • Bharat 2047
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="space-y-3 text-zinc-400">

              <a href="/vision" className="block hover:text-orange-400">
                Vision
              </a>

              <a href="/forum" className="block hover:text-orange-400">
                Forum
              </a>

              <a href="/events" className="block hover:text-orange-400">
                Events
              </a>

              <a href="/membership" className="block hover:text-orange-400">
                Membership
              </a>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Movement
            </h3>

            <div className="space-y-3 text-zinc-400">

              <p>Youth Leadership</p>
              <p>Digital Army</p>
              <p>Bharat Vision</p>
              <p>Community Forums</p>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <div className="space-y-3 text-zinc-400">

              <p>Instagram</p>
              <p>YouTube</p>
              <p>Telegram</p>
              <p>Email Support</p>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-600">
          © 2026 RLHS Platform • Built For Bharat
        </div>

      </footer>

    </main>
  )
}
