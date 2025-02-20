import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  loader: async ({ context: { trpcQueryUtils } }) => {
    await trpcQueryUtils.healthCheck.ensureData();
    await trpcQueryUtils.privateData.ensureData();
    return;
  },
});

function RouteComponent() {
  const navigate = Route.useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome hello</p>
    </div>
  );
}
