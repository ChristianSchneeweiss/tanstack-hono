import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/dashboard">Go to Dashboard</Link>
      <p>healthCheck: {healthCheck.data}</p>
      {/* <SignUp /> */}
    </div>
  );
}
