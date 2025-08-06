import React, { useState } from "react";

import { ChevronLeft } from "lucide-react";

import { DashboardNav } from "@/Components/dashboard/dashboard-nav";
import { HeadSidebar } from "@/Components/dashboard/layout/head-sidebar";
import { UserSidebar } from "@/Components/dashboard/layout/user-sidebar";

import { navItems } from "@/lib/data/data";
import { useSidebar } from "@/lib/hooks/useSidebar";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
  user: any; // Replace 'any' with the actual user type if available
};

export default function ({ user, className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <nav
      className={cn(
        `relative hidden h-screen flex-none border-r z-10 md:block bg-[#F5EFEB]`,
        status && "duration-500",
        !isMinimized ? "w-72" : "w-[72px]",
        className,
      )}
    >

      <div className="px-3 mt-3 space-y-1">
        <HeadSidebar user={user} />
      </div>
      <div className="px-3 mt-3 space-y-1">
        <UserSidebar user={user} />
      </div>
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-[#E0822D] text-3xl text-white",
          isMinimized && "rotate-180",
        )}
        onClick={handleToggle}
      />
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
