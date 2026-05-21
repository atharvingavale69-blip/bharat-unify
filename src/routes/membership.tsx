import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/membership')({
  component: MembershipPage,
})

function MembershipPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-red-500">
          Join RLHS
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          Membership
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
          Become part of Bharat’s disciplined digital movement.
        </p>

        <div className="mt-20 rounded-3xl border border-zinc-900 bg-zinc-950 p-10">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-zinc-800 bg-black px-5 py-4 outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-zinc-800 bg-black px-5 py-4 outline-none focus:border-red-500"
            />

          </div>

          <textarea
            placeholder="Why do you want to join?"
            className="mt-6 h-40 w-full rounded-xl border border-zinc-800 bg-black px-5 py-4 outline-none focus:border-red-500"
          />

          <button className="mt-8 rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700">
            Submit Application
          </button>

        </div>

      </div>

    </main>
  )
}
