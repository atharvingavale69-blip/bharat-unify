import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vision')({
  component: VisionPage,
})

function VisionPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <h1 className="text-5xl font-black text-red-600">
        Bharat 2047 Vision
      </h1>

      <p className="mt-6 max-w-3xl text-zinc-400 text-lg leading-relaxed">
        A roadmap focused on technology, discipline, infrastructure,
        youth leadership, cultural identity and a stronger Bharat.
      </p>
    </main>
  )
}
