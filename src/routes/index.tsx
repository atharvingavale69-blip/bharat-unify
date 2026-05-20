import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]" />

        <div className="relative z-10">
          <p className="mb-4 text-red-500 tracking-[0.3em] uppercase text-sm">
            Vision 2047
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            RLHS
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            A disciplined futuristic nationalist movement platform focused on
            youth, unity, technology, truth-driven discussions and Bharat’s
            civilizational future.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">
              Join Movement
            </button>

            <button className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-red-500">
              Explore Forum
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
