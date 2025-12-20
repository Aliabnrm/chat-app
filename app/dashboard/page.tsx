import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const cookieStore = cookies() as ReturnType<typeof cookies>;

  const token = cookieStore.get("token")?.value;

  if (!token) return redirect("/sign-in");

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
      email: string;
    };
    return <div>سلام {user.email}</div>;
  } catch {
    return redirect("/sign-in");
  }
}
