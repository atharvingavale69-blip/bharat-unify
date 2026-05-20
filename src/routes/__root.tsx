import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Provider as ReduxProvider } from "react-redux";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { store } from "@/store";
import { AuthProvider } from "@/hooks/use-auth";
import "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson">
          404 · Unmapped sector
        </p>
        <h1 className="mt-3 font-display text-6xl font-bold">Off-grid.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This route is not part of the RLHS command map.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-glow px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson hover:opacity-90"
        >
          Return to base
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson">
          System fault
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold">Signal lost.</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-glow px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson hover:opacity-90"
        >
          Re-establish
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RLHS — Rashtriya Lok Hit Sangathan" },
      {
        name: "description",
        content:
          "A disciplined, command-grade civic platform for the citizens of Bharat. Truth. Discipline. Bharat.",
      },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "RLHS — Rashtriya Lok Hit Sangathan" },
      {
        property: "og:description",
        content:
          "A disciplined, command-grade civic platform for the citizens of Bharat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RLHS — Rashtriya Lok Hit Sangathan" },
      { name: "description", content: "Bharat Unify is a full-stack political movement platform for truth-driven discussions and youth empowerment." },
      { property: "og:description", content: "Bharat Unify is a full-stack political movement platform for truth-driven discussions and youth empowerment." },
      { name: "twitter:description", content: "Bharat Unify is a full-stack political movement platform for truth-driven discussions and youth empowerment." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AuthCacheBridge() {
  const router = useRouter();
  const qc = useQueryClient();
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      router.invalidate();
      qc.invalidateQueries();
    });
    return () => sub.subscription.unsubscribe();
  }, [router, qc]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <AuthCacheBridge />
          <Outlet />
        </AuthProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
