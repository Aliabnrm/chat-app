import { redirect } from "next/navigation";
import { getUserInfo } from "@/src/hooks/useAuth";

export default async function DashboardPage() {
  const user = await getUserInfo();

  if (!user) return redirect("/sign-in");

  return <div>home</div>;
}
