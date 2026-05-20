import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Brain, ShieldCheck, MapPin, Scale } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RLHS — Truth. Discipline. Bharat." },
      {
        name: "description",
        content:
          "Join a disciplined, command-grade civic platform for the citizens of Bharat. Debate, organise, build.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1200px] bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_25/0.18),transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-crimson"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            {t("hero.kicker")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-8 font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-balance"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-balance"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/auth"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-crimson to-crimson-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-crimson hover:opacity-95 transition"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/forum"
              className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-card/50 px-6 py-3 text-sm font-semibold text-foreground hover:border-crimson/50 hover:bg-card transition"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </motion.div>

          {/* Command HUD strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mx-auto max-w-4xl rounded-xl border border-border/60 bg-card/60 backdrop-blur-md p-1 shadow-elevated"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
              {[
                ["28+1", "STATES / UT"],
                ["766", "DISTRICTS"],
                ["22", "LANGUAGES"],
                ["∞", "VOICES"],
              ].map(([n, l]) => (
                <div key={l} className="px-4 py-5 text-center">
                  <div className="font-display text-3xl font-bold text-foreground">
                    {n}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-crimson">
              01 / Doctrine
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              {t("pillars.title")}
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-border/60 rounded-xl overflow-hidden border border-border/60">
          {[
            { i: Brain, k: "intellect" },
            { i: ShieldCheck, k: "discipline" },
            { i: MapPin, k: "bharat" },
            { i: Scale, k: "truth" },
          ].map(({ i: Icon, k }, idx) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-card p-8 lg:p-10 hover:bg-accent/50 transition md:[&:nth-child(odd)]:border-r-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-crimson/40 bg-crimson/10 text-crimson group-hover:bg-crimson group-hover:text-primary-foreground transition">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">
                {t(`pillars.${k}.t`)}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {t(`pillars.${k}.d`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative overflow-hidden rounded-2xl border border-crimson/30 bg-gradient-to-br from-card to-ink p-10 lg:p-16 shadow-elevated">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-crimson/20 blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-crimson">
              02 / Enlist
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl text-balance">
              The republic is built by those who show up.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Create an account, choose your district, earn your rank. Your voice
              joins a national record — disciplined, signed, auditable.
            </p>
            <Link
              to="/auth"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-crimson to-crimson-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-crimson hover:opacity-95 transition"
            >
              Enlist now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
