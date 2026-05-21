import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vision')({
  component: VisionPage,
})

function VisionPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.3em] text-red-500">
          Bharat 2047
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          National Vision
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          A disciplined roadmap focused on technology,
          youth leadership, culture and civilizational growth.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-bold text-red-500">
              Economy
            </h2>

            <p className="mt-4 text-zinc-400">
              Strengthening Bharat through innovation and industry.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-bold text-red-500">
              Culture
            </h2>

            <p className="mt-4 text-zinc-400">
              Preserving heritage while embracing future growth.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">
            <h2 className="text-2xl font-bold text-red-500">
              Technology
            </h2>

            <p className="mt-4 text-zinc-400">
              AI, digital infrastructure and futuristic systems.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}
