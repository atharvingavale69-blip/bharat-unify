import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/forum/")({
  head: () => ({
    meta: [
      { title: "Forum · RLHS" },
      {
        name: "description",
        content: "National discourse across categories — debate the future of Bharat.",
      },
    ],
  }),
  component: ForumIndex,
});

function ForumIndex() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["forum_categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-crimson">
            Forum / Command floor
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight">
            The discourse.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pick a category and join the debate. All threads are signed,
            timestamped, and part of the public record.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
        ) : !categories?.length ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  to="/forum/$slug"
                  params={{ slug: c.slug }}
                  className="group block rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 hover:border-crimson/50 hover:bg-card transition shadow-elevated"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        0{idx + 1} · {c.slug}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold">
                        {c.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-crimson" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-border/80 p-16 text-center">
      <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground" />
      <h3 className="mt-4 font-display text-xl font-bold">No categories yet</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        An admin needs to seed the forum first.
      </p>
    </div>
  );
}
