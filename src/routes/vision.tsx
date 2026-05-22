import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/vision')({
  component: Vision,
})

function Vision() {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, 250])
  const y2 = useTransform(scrollY, [0, 1000], [0, -180])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [embers, setEmbers] = useState<
    {
      id: number
      left: number
      size: number
      delay: number
      duration: number
    }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 8 + 6,
    }))

    setEmbers(generated)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black pt-24 text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-black to-red-950/20" />

      {/* Floating Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-orange-500/20 blur-3xl"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-25%] right-[-15%] h-[650px] w-[650px] rounded-full bg-red-700/20 blur-3xl"
      />

      {/* Grid */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      {/* Embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {embers.map((ember) => (
          <motion.div
            key={ember.id}
            initial={{ y: 800, opacity: 0 }}
            animate={{
              y: -300,
              opacity: [0, 1, 0],
              x: [0, Math.random() * 60 - 30],
            }}
            transition={{
              duration: ember.duration,
              repeat: Infinity,
              delay: ember.delay,
              ease: 'linear',
            }}
            className="absolute rounded-full bg-orange-400"
            style={{
              left: `${ember.left}%`,
              width: ember.size,
              height: ember.size,
              filter: 'blur(1px)',
              boxShadow: '0 0 14px rgba(251,146,60,0.8)',
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-orange-400">
            Vision • Discipline • Bharat 2047
          </p>

          <motion.h1
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="bg-[linear-gradient(to_right,#ffffff,#f97316,#dc2626,#ffffff)] bg-[length:200%_200%] bg-clip-text text-5xl font-black text-transparent md:text-7xl"
          >
            Our Vision for New Bharat
          </motion.h1>

          <div className="mx-auto mt-6 h-1 w-44 bg-gradient-to-r from-orange-500 to-red-600" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            A movement built on truth, discipline, innovation, and cultural strength.
            We aim to shape Bharat into a global leader by 2047 through youth power,
            technology, and ideological clarity.
          </p>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {[
              { title: 'Truth', desc: 'Unfiltered clarity & ideology' },
              { title: 'Discipline', desc: 'Strong youth foundation' },
              { title: 'Technology', desc: 'Future-driven nation building' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>

    </main>
  )
}
