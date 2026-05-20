import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between border-b border-zinc-900 px-6 py-5">

        <div className="text-2xl font-black tracking-widest text-red-600">
          RLHS
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#" className="transition hover:text-red-500">
            Vision
          </a>

          <a href="#" className="transition hover:text-red-500">
            Forum
          </a>

          <a href="#" className="transition hover:text-red-500">
            Events
          </a>

          <a href="#" className="transition hover:text-red-500">
            Membership
          </a>
        </nav>

        <button className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold transition hover:bg-red-700">
          Join
        </button>

      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
          Bharat • Discipline • Future
        </p>

        <h1 className="text-6xl font-black tracking-tight md:text-8xl">
          RLHS
        </h1>

        <div className="mt-5 h-1 w-32 rounded-full bg-red-600" />

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          A futuristic nationalist youth movement focused on truth, discipline,
          technology, culture and Bharat 2047 vision.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
            Join Movement
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-red-500">
            Explore Vision
          </button>

        </div>

      </section>

      {/* Stats Section */}
      <section className="relative z-10 grid gap-6 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur">

          <h2 className="text-4xl font-black text-red-600">
            2047
          </h2>

          <p className="mt-3 text-zinc-400">
            Bharat Vision Timeline
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur">

          <h2 className="text-4xl font-black text-red-600">
            Youth
          </h2>

          <p className="mt-3 text-zinc-400">
            Digital Nationalist Community
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur">

          <h2 className="text-4xl font-black text-red-600">
            Truth
          </h2>

          <p className="mt-3 text-zinc-400">
            Discussion Beyond Propaganda
          </p>

        </div>

      </section>

    </main>
  )
}
