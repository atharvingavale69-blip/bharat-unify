import { Link } from "@tanstack/react-router";
import {
  Shield,
  Instagram,
  Github,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.12),transparent_65%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-700 shadow-2xl shadow-red-900/40">

                <Shield className="h-6 w-6 text-white" />

                <div className="absolute inset-0 rounded-2xl border border-white/10" />

              </div>

              <div>

                <h2 className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-3xl font-black tracking-[0.3em] text-transparent">
                  RLHS
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Bharat • Discipline • Future
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400">
              Rashtriya Laal Hit Sangh is a futuristic youth-driven movement
              focused on truth, discipline, technology, leadership and Bharat’s
              rise towards 2047.
            </p>

            {/* Social */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-orange-500/40 hover:bg-orange-500/10"
              >
                <Instagram className="h-5 w-5 text-zinc-400 transition group-hover:text-orange-400" />
              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-orange-500/40 hover:bg-orange-500/10"
              >
                <Github className="h-5 w-5 text-zinc-400 transition group-hover:text-orange-400" />
              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-orange-500/40 hover:bg-orange-500/10"
              >
                <Globe className="h-5 w-5 text-zinc-400 transition group-hover:text-orange-400" />
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
              Navigation
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              <FooterLink to="/vision">
                Vision
              </FooterLink>

              <FooterLink to="/forum">
                Forum
              </FooterLink>

              <FooterLink to="/events">
                Events
              </FooterLink>

              <FooterLink to="/membership">
                Membership
              </FooterLink>

            </div>

          </div>

          {/* Command */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
              Core Principles
            </h3>

            <div className="mt-8 flex flex-col gap-5 text-zinc-400">

              <FooterText>
                Truth Driven Ideology
              </FooterText>

              <FooterText>
                Youth Leadership
              </FooterText>

              <FooterText>
                Digital Discipline
              </FooterText>

              <FooterText>
                Bharat 2047 Vision
              </FooterText>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">

          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} RLHS Platform • Built For Bharat
          </p>

          <p className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-sm font-semibold uppercase tracking-[0.35em] text-transparent">
            Truth • Discipline • Future
          </p>

        </div>

      </div>

    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"
    >
      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />

      {children}
    </Link>
  );
}

function FooterText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm transition hover:text-orange-400">
      {children}
    </div>
  );
}
