import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Menu } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import i18n from "@/lib/i18n";

export function Navbar() {
  const { t } = useTranslation();
  const { user, hasRole, signOut } = useAuth();

  const toggleLang = () => {
    const next = i18n.language === "hi" ? "en" : "hi";
    i18n.changeLanguage(next);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-glow shadow-crimson">
            <Shield className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">
              {t("brand")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("tagline")}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/forum">{t("nav.forum")}</NavLink>
          {hasRole("admin") && <NavLink to="/admin">{t("nav.admin")}</NavLink>}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="hidden sm:flex h-9 items-center rounded-md border border-border/60 px-2.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-crimson/50 transition"
          >
            {i18n.language === "hi" ? "EN" : "हि"}
          </button>
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="text-muted-foreground hover:text-foreground"
            >
              Sign out
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">{t("nav.login")}</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-br from-crimson to-crimson-glow text-primary-foreground hover:opacity-90 shadow-crimson"
              >
                <Link to="/auth">{t("nav.signup")}</Link>
              </Button>
            </>
          )}
          <button className="md:hidden p-2 text-muted-foreground" aria-label="menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition font-medium"
      activeProps={{ className: "text-foreground bg-accent/60" }}
    >
      {children}
    </Link>
  );
}
