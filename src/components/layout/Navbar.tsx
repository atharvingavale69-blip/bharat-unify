import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Shield,
  Menu,
  Globe,
  ChevronRight,
  X,
} from "lucide-react";

import { useState } from "react";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import i18n from "@/lib/i18n";

export function Navbar() {
  const { t } = useTranslation();

  // SAFE AUTH FALLBACK
  let user = null;
  let hasRole = (_role: string) => false;
  let signOut = () => {};

  try {
    const auth = useAuth();

    user = auth.user;
    hasRole = auth.hasRole;
    signOut = auth.signOut;
  } catch (error) {
    console.warn("Auth provider missing:", error);
  }

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => {
    const next = i18n.language === "hi" ? "en" : "hi";
    i18n.changeLanguage(next);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900/80 bg-black/70 backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/40">
              
              <Shield
                className="h-5 w-5 text-white"
                strokeWidth={2.5}
              />

              <div className="absolute inset-0 rounded-xl border border-red-500/40" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.25em] text-red-600">
                RLHS
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Bharat • Future
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/vision">
              Vision
            </NavLink>

            <NavLink to="/forum">
              Forum
            </NavLink>

            <NavLink to="/events">
              Events
            </NavLink>

            <NavLink to="/membership">
              Membership
            </NavLink>

            {hasRole("admin") && (
              <NavLink to="/admin">
                Admin
              </NavLink>
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="hidden h-10 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 transition hover:border-red-700 hover:text-red-500 sm:flex"
            >
              <Globe className="h-4 w-4" />

              {i18n.language === "hi" ? "EN" : "हि"}
            </button>

            {/* Auth */}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-red-700 hover:bg-red-950/20 hover:text-white"
              >
                Sign Out
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hidden border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-red-700 hover:bg-red-950/20 hover:text-white md:flex"
                >
                  <Link to="/auth">
                    Login
                  </Link>
                </Button>

                <Button
                  size="sm"
                  asChild
                  className="group rounded-xl bg-gradient-to-br from-red-600 to-red-800 px-5 text-white shadow-lg shadow-red-900/30 transition hover:scale-[1.03]"
                >
                  <Link
                    to="/auth"
                    className="flex items-center gap-2"
                  >
                    Join Now

                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:border-red-700 hover:text-red-500 md:hidden"
              aria-label="menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="border-t border-zinc-900 bg-black/95 px-6 py-6 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col gap-3">

                <MobileNavLink
                  to="/"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </MobileNavLink>

                <MobileNavLink
                  to="/vision"
                  onClick={() => setMobileOpen(false)}
                >
                  Vision
                </MobileNavLink>

                <MobileNavLink
                  to="/forum"
                  onClick={() => setMobileOpen(false)}
                >
                  Forum
                </MobileNavLink>

                <MobileNavLink
                  to="/events"
                  onClick={() => setMobileOpen(false)}
                >
                  Events
                </MobileNavLink>

                <MobileNavLink
                  to="/membership"
                  onClick={() => setMobileOpen(false)}
                >
                  Membership
                </MobileNavLink>

                {hasRole("admin") && (
                  <MobileNavLink
                    to="/admin"
                    onClick={() => setMobileOpen(false)}
                  >
                    Admin
                  </MobileNavLink>
                )}

                <button
                  onClick={toggleLang}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-red-700 hover:text-red-500"
                >
                  <Globe className="h-4 w-4" />

                  {i18n.language === "hi"
                    ? "Switch to English"
                    : "हिंदी में बदलें"}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}

function NavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-red-950/20 hover:text-red-500"
      activeProps={{
        className:
          "rounded-xl border border-red-900/40 bg-red-950/30 px-4 py-2 text-sm font-medium text-red-500",
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-xl border border-zinc-900 bg-zinc-950 px-5 py-4 text-base font-medium text-zinc-300 transition hover:border-red-900/40 hover:bg-red-950/20 hover:text-red-500"
      activeProps={{
        className:
          "rounded-xl border border-red-900/40 bg-red-950/30 px-5 py-4 text-base font-medium text-red-500",
      }}
    >
      {children}
    </Link>
  );
}
