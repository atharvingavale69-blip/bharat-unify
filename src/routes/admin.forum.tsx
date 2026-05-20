import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/forum")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl font-bold mb-1">Forum moderation</h2>
      <p className="text-sm text-muted-foreground">
        Pin, lock, and remove threads — coming in Phase 2.
      </p>
    </div>
  ),
});
