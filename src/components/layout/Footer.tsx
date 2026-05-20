import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-glow">
              <Shield className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold">{t("brand")}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {t("tagline")}. A disciplined civic platform for the citizens of Bharat.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Platform
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/forum" className="hover:text-crimson">Forum</Link></li>
            <li><Link to="/auth" className="hover:text-crimson">Join</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Conduct
          </h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-muted-foreground">Code of conduct</span></li>
            <li><span className="text-muted-foreground">Moderation log</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} RLHS</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
