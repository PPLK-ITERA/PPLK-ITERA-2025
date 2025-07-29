import React, { PropsWithChildren } from "react";

// import Header from "@/Components/dashboard/layout/header";
import Sidebar from "@/Components/dashboard/layout/sidebar";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

import { UserAuthProps } from "@/lib/types/User";

export default function DashboardLayout({
  user,
  children,
}: PropsWithChildren<{ user: UserAuthProps }>) {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-dashboard bg-no-repeat bg-cover">
        <Sidebar user={user} />
        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="md:w-full md:p-8 flex-1 w-screen p-4 pt-6 space-y-4">
              {children}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
