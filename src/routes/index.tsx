import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

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
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8,
    }))

    setEmbers(generated)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-transparent to-red-950/20" />

      {/* Floating Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-10%] top-[5%] h-[650px] w-[650px] rounded-full bg-orange-500/20 blur-3xl"
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-red-700/20 blur-3xl"
      />

      {/* Grid */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"
      />

      {/* Embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {embers.map((ember) => (
          <motion.div
            key={ember.id}
            initial={{
              y: 900,
              opacity: 0,
            }}
            animate={{
              y: -200,
              opacity: [0, 1, 0],
              x: [0, Math.random() * 80 - 40],
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
              boxShadow: '0 0 12px rgba(251,146,60,0.8)',
            }}
          />
        ))}

      </div>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
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
            className="bg-[linear-gradient(to_right,#ffffff,#f97316,#dc2626,#ffffff)] bg-[length:200%_200%] bg-clip-text text-6xl font-black text-transparent md:text-8xl"
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

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

      </section>

    </main>
  )
}
