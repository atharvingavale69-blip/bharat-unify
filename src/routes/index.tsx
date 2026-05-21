import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Global Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]" />

      {/* Floating Glow Orbs */}
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-red-900/20 blur-3xl animate-pulse" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-red-700/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Navbar */}
      <header className="relative z-30 flex items-center justify-between border-b border-zinc-900/80 bg-black/40 px-6 py-5 backdrop-blur-xl">

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

        <button className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold transition hover:scale-105 hover:bg-red-700">
          Join
        </button>

      </header>

      {/* Hero Section */}
      <section className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

        <div className="relative z-20">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
            Bharat • Discipline • Future
          </p>

          <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
            Rashtriya Laal Hit Sangh
          </h1>

          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-red-600" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A futuristic nationalist youth movement focused on truth,
            discipline, technology, culture and Bharat 2047 vision.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-700">
              Join Movement
            </button>

            <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-red-500 hover:bg-zinc-900">
              Explore Vision
            </button>

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

      </section>

      {/* Stats Section */}
      <section className="relative z-20 grid gap-6 px-6 pb-20 md:grid-cols-3">

        <div className="group rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            2047
          </h2>

          <p className="mt-3 text-zinc-400">
            Bharat Vision Timeline
          </p>

        </div>

        <div className="group rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            Youth
          </h2>

          <p className="mt-3 text-zinc-400">
            Digital Nationalist Community
          </p>

        </div>

        <div className="group rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-red-900">

          <h2 className="text-4xl font-black text-red-600">
            Truth
          </h2>

          <p className="mt-3 text-zinc-400">
            Discussion Beyond Propaganda
          </p>

        </div>

      </section>

      {/* Ideology Section */}
      <section className="relative z-20 px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Core Ideology
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Building Bharat’s Future
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-8 transition hover:border-red-900 hover:bg-zinc-900">

              <h3 className="text-2xl font-bold text-red-500">
                Discipline
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                A structured youth-driven movement focused on responsibility,
                national development and leadership.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-8 transition hover:border-red-900 hover:bg-zinc-900">

              <h3 className="text-2xl font-bold text-red-500">
                Technology
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Leveraging digital systems, innovation and AI to strengthen
                Bharat’s future.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-8 transition hover:border-red-900 hover:bg-zinc-900">

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

      {/* Vision Timeline */}
      <section className="relative z-20 px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Bharat 2047
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            National Vision Timeline
          </h2>

          <div className="mt-16 space-y-8 border-l border-zinc-800 pl-8">

            <div>
              <h3 className="text-2xl font-bold text-red-500">
                2026
              </h3>

              <p className="mt-2 text-zinc-400">
                Formation of disciplined digital youth network.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">
                2030
              </h3>

              <p className="mt-2 text-zinc-400">
                Grassroots expansion and technology integration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">
                2047
              </h3>

              <p className="mt-2 text-zinc-400">
                Vishwaguru Bharat powered by disciplined citizens.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="relative z-20 px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl border border-red-950 bg-gradient-to-br from-zinc-950 to-black p-12 text-center shadow-2xl shadow-red-950/20">

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

          <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-700">
            Become A Member
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-zinc-900 bg-black/70 px-6 py-14 backdrop-blur">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">

          <div>

            <h2 className="text-2xl font-black tracking-[0.3em] text-red-600">
              RLHS
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Truth • Discipline • Bharat 2047
            </p>

          </div>

          <div>

            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="space-y-3 text-zinc-400">

              <a href="/vision" className="block hover:text-red-500">
                Vision
              </a>

              <a href="/forum" className="block hover:text-red-500">
                Forum
              </a>

              <a href="/events" className="block hover:text-red-500">
                Events
              </a>

              <a href="/membership" className="block hover:text-red-500">
                Membership
              </a>

            </div>

          </div>

          <div>

            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
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

            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
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

        <div className="mt-12 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-600">
          © 2026 RLHS Platform • Built For Bharat
        </div>

      </footer>

    </main>
  )
}
