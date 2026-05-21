import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forum')({
  component: ForumPage,
})

function ForumPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              Command Discussions
            </p>

            <h1 className="mt-3 text-5xl font-black">
              Forum
            </h1>

          </div>

          <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">
            Create Post
          </button>

        </div>

        <div className="mt-16 space-y-6">

          {[1,2,3].map((post) => (
            <div
              key={post}
              className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8"
            >

              <h2 className="text-2xl font-bold">
                Bharat Development Discussion
              </h2>

              <p className="mt-4 text-zinc-400">
                Open discussion regarding infrastructure,
                youth leadership and national progress.
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}
