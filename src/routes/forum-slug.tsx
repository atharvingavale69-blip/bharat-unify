import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Pin, Lock, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/forum-slug")({
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const { user } = useAuth();

  const { data: category } = useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_categories")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { data: threads, isLoading } = useQuery({
    queryKey: ["threads", category?.id],
    enabled: !!category?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_threads")
        .select("id, title, body, is_locked, is_pinned, created_at, author_id, view_count")
        .eq("category_id", category!.id)
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-10"
        >
          <div>
            <Link
              to="/forum"
              className="font-mono text-xs uppercase tracking-[0.2em] text-crimson hover:underline"
            >
              ← Forum
            </Link>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
              {category?.name ?? slug}
            </h1>
            {category?.description && (
              <p className="mt-2 text-muted-foreground max-w-2xl">
                {category.description}
              </p>
            )}
          </div>
          {user && (
            <Button className="bg-gradient-to-br from-crimson to-crimson-glow text-primary-foreground shadow-crimson">
              New thread
            </Button>
          )}
        </motion.div>

        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-20 rounded-lg" />
            ))}
          </div>
        ) : !threads?.length ? (
          <div className="rounded-xl border border-dashed border-border/80 p-16 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 font-display text-xl font-bold">
              No threads yet
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Be the first voice in this category.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-border/60 bg-card/60 backdrop-blur overflow-hidden divide-y divide-border/60">
            {threads.map((t) => (
              <div
                key={t.id}
                className="p-5 hover:bg-accent/40 transition cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {t.is_pinned && <Pin className="h-3.5 w-3.5 text-crimson" />}
                      {t.is_locked && (
                        <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                      <h3 className="font-display text-lg font-bold truncate">
                        {t.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {t.body}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {new Date(t.created_at).toLocaleDateString()} ·{" "}
                      {t.view_count} views
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
