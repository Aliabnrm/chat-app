import React from "react";
import { redirect } from "next/navigation";
import MainNavbar from "@/src/shared/navbar";
import { getUserInfo } from "@/src/hooks/useAuth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserInfo();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <>
      <MainNavbar userEmail={user?.email} />
      <main className="p-4">{children}</main>
    </>
  );
};

export default DashboardLayout;
