import { redirect } from "next/navigation";
import { getUserInfo } from "@/hooks/useAuth";

export default async function DashboardPage() {
  const user = await getUserInfo();

  if (!user) return redirect("/sign-in");

  return <div>{user.email}</div>;
}
