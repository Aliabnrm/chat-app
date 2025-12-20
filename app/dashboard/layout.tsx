import React from "react";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/hooks/useAuth";
import NavbarServer from "@/src/components/Navbar/NavbarServer";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserInfo();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <>
      <NavbarServer userEmail={user.email} />
      <main className="p-4">{children}</main>
    </>
  );
};

export default DashboardLayout;
