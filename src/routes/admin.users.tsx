import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/users")({
  component: () => (
    <div>
      <h2 className="font-display text-2xl font-bold mb-1">Users & roles</h2>
      <p className="text-sm text-muted-foreground">
        Role assignment UI coming in Phase 2.
      </p>
    </div>
  ),
});
