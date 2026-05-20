import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Users, MessageSquare, FileText, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const { data: stats } = useQuery({
    queryKey: ["admin_stats"],
    queryFn: async () => {
      const [profiles, threads, posts, roles] = await Promise.all([
        supabase.from("profiles").select("*", { count: "exact", head: true }),
        supabase.from("forum_threads").select("*", { count: "exact", head: true }),
        supabase.from("forum_posts").select("*", { count: "exact", head: true }),
        supabase.from("user_roles").select("*", { count: "exact", head: true }),
      ]);
      return {
        profiles: profiles.count ?? 0,
        threads: threads.count ?? 0,
        posts: posts.count ?? 0,
        roles: roles.count ?? 0,
      };
    },
  });

  const cards = [
    { i: Users, l: "Citizens", v: stats?.profiles ?? "—" },
    { i: MessageSquare, l: "Threads", v: stats?.threads ?? "—" },
    { i: FileText, l: "Posts", v: stats?.posts ?? "—" },
    { i: Shield, l: "Role grants", v: stats?.roles ?? "—" },
  ];

  return (
    <div>
      <h2 className="font-display text-2xl font-bold mb-1">Overview</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Live state of the republic.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ i: Icon, l, v }) => (
          <div
            key={l}
            className="rounded-lg border border-border/60 bg-background/50 p-5"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-crimson" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {l}
              </span>
            </div>
            <div className="mt-4 font-display text-3xl font-bold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
