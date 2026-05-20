import { createFileRoute, Outlet, redirect, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Users, MessageSquare, FileText, ScrollText } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw redirect({ to: "/auth" });
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);
    const isAdmin = (roles ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw redirect({ to: "/" });
  },
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-crimson">
            Command · Admin
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight flex items-center gap-3">
            <Shield className="h-8 w-8 text-crimson" /> War room
          </h1>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-xl border border-border/60 bg-card/60 backdrop-blur p-2 h-fit">
            <SideLink to="/admin" icon={ScrollText} label="Overview" exact />
            <SideLink to="/admin/users" icon={Users} label="Users & roles" />
            <SideLink to="/admin/forum" icon={MessageSquare} label="Forum" />
            <SideLink to="/admin/audit" icon={FileText} label="Audit log" />
          </aside>
          <section className="rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 lg:p-8 shadow-elevated">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

function SideLink({
  to,
  icon: Icon,
  label,
  exact,
}: {
  to: string;
  icon: any;
  label: string;
  exact?: boolean;
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-accent/60 hover:text-foreground transition"
      activeProps={{
        className:
          "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm bg-crimson/10 text-crimson border border-crimson/30",
      }}
    >
      <Icon className="h-4 w-4" /> {label}
    </Link>
  );
}
