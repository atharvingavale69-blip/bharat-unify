import { Link } from "@tanstack/react-router";
import { Shield, Instagram, Github, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-zinc-900 bg-black">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Branding */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/30">
                <Shield className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-[0.25em] text-red-600">
                  RLHS
                </h2>

                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Bharat • Discipline • Future
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
              Rashtriya Laal Hit Sangh is a futuristic civic movement
              focused on youth leadership, truth-driven discussions,
              technological progress and Bharat 2047 vision.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 transition hover:border-red-700 hover:bg-red-950/20"
              >
                <Instagram className="h-5 w-5 text-zinc-400" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 transition hover:border-red-700 hover:bg-red-950/20"
              >
                <Github className="h-5 w-5 text-zinc-400" />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 transition hover:border-red-700 hover:bg-red-950/20"
              >
                <Globe className="h-5 w-5 text-zinc-400" />
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400">

              <Link
                to="/vision"
                className="transition hover:text-red-500"
              >
                Vision
              </Link>

              <Link
                to="/forum"
                className="transition hover:text-red-500"
              >
                Forum
              </Link>

              <Link
                to="/events"
                className="transition hover:text-red-500"
              >
                Events
              </Link>

              <Link
                to="/membership"
                className="transition hover:text-red-500"
              >
                Membership
              </Link>

            </div>

          </div>

          {/* Command */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Command
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400">

              <span className="transition hover:text-red-500">
                Code Of Conduct
              </span>

              <span className="transition hover:text-red-500">
                Moderation System
              </span>

              <span className="transition hover:text-red-500">
                Digital Discipline
              </span>

              <span className="transition hover:text-red-500">
                Bharat 2047
              </span>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-zinc-900 pt-8 text-sm text-zinc-600 md:flex-row">

          <p>
            © {new Date().getFullYear()} RLHS Platform • Built For Bharat
          </p>

          <p className="uppercase tracking-[0.25em] text-zinc-700">
            Truth • Discipline • Future
          </p>

        </div>

      </div>

    </footer>
  );
}
