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
      <header className="relative z-20 flex items-center justify-between border-b border-zinc-900 px-6 py-5 backdrop-blur">

        <a
          href="/"
          className="text-2xl font-black tracking-[0.3em] text-red-600"
        >
          RLHS
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">

          <a
            href="/vision"
            className="transition hover:text-red-500"
          >
            Vision
          </a>

          <a
            href="/forum"
            className="transition hover:text-red-500"
          >
            Forum
          </a>

          <a
            href="/events"
            className="transition hover:text-red-500"
          >
            Events
          </a>

          <a
            href="/membership"
            className="transition hover:text-red-500"
          >
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
          Rashtriya Laal Hit Sangh
        </h1>

        <div className="mt-5 h-1 w-32 rounded-full bg-red-600" />

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          A futuristic nationalist youth movement focused on truth,
          discipline, technology, culture and Bharat 2047 vision.
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

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            2047
          </h2>

          <p className="mt-3 text-zinc-400">
            Bharat Vision Timeline
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            Youth
          </h2>

          <p className="mt-3 text-zinc-400">
            Digital Nationalist Community
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            Truth
          </h2>

          <p className="mt-3 text-zinc-400">
            Discussion Beyond Propaganda
          </p>

        </div>

      </section>

      {/* Ideology Section */}
      <section className="relative z-10 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Core Ideology
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Building Bharat’s Future
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">

              <h3 className="text-2xl font-bold text-red-500">
                Discipline
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                A structured youth-driven movement focused on responsibility,
                national development and leadership.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">

              <h3 className="text-2xl font-bold text-red-500">
                Technology
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Leveraging digital systems, innovation and AI to strengthen
                Bharat’s future.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">

              <h3 className="text-2xl font-bold text-red-500">
                Culture
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Preserving civilizational identity while embracing futuristic
                progress and unity.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl border border-red-950 bg-gradient-to-br from-zinc-950 to-black p-12 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Join The Movement
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Bharat Needs Builders.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Become part of a disciplined digital community dedicated to truth,
            development and Bharat 2047.
          </p>

          <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
            Become A Member
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-12">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

          <div>

            <h2 className="text-2xl font-black tracking-[0.3em] text-red-600">
              RLHS
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Truth • Discipline • Bharat 2047
            </p>

          </div>

          <div className="flex gap-6 text-sm text-zinc-400">

            <a href="/vision" className="hover:text-red-500">
              Vision
            </a>

            <a href="/forum" className="hover:text-red-500">
              Forum
            </a>

            <a href="/events" className="hover:text-red-500">
              Events
            </a>

            <a href="/membership" className="hover:text-red-500">
              Membership
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-600">
          © 2026 RLHS Platform • Built For Bharat
        </div>

      </footer>

    </main>
  )
}
