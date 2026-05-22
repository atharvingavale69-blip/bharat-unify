import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Vision", href: "/vision" },
    { name: "Forum", href: "/forum" },
    { name: "Events", href: "/events" },
    { name: "Membership", href: "/membership" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-zinc-900/70 bg-black/40 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link
            to="/"
            className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-2xl font-black tracking-[0.35em] text-transparent"
          >
            RLHS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-orange-400"
                activeProps={{
                  className:
                    "text-sm font-medium text-orange-400",
                }}
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Join Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 text-sm font-semibold shadow-xl shadow-red-900/30 md:block"
            >
              <div className="flex items-center gap-2">
                Join
                <ChevronRight className="h-4 w-4" />
              </div>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-black/60 text-zinc-300 transition hover:border-orange-500 hover:text-orange-400 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl md:hidden"
          >

            {/* Top */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-2xl font-black tracking-[0.35em] text-transparent">
                RLHS
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-black/60 text-zinc-300"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 px-8 py-10">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 text-lg font-semibold text-zinc-300 transition hover:border-orange-500 hover:text-orange-400"
                >
                  {item.name}
                </Link>
              ))}

              {/* Join Button */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="mt-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-6 py-5 text-lg font-bold text-white shadow-2xl shadow-red-900/40"
              >
                Join Movement
              </motion.button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
