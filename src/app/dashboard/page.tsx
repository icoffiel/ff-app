import { requireAuth } from "@/actions/auth";
import { DashboardClient } from "./client";

export default async function Dashboard() {
  // Server-side auth check - will redirect if not authenticated
  const user = await requireAuth();

  // Handle the case where email might be undefined
  const userEmail = user.email || "User";

  return <DashboardClient userEmail={userEmail} />;
}
