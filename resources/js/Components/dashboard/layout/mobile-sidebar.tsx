import { useState } from "react";

import { MenuIcon } from "lucide-react";

import { IconX } from "@tabler/icons-react";

import { DashboardNav } from "@/Components/dashboard/dashboard-nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/Components/ui/sheet";

import { navItems } from "@/lib/data/data";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>

        <SheetContent side="left" className="!px-0">
          <SheetClose asChild className="flex items-end justify-end w-full">
            <div className="px-2">
              <IconX />
            </div>
          </SheetClose>

          <div className="relative py-4 space-y-4">
            <div className="px-3 py-2">
              <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav
                  items={navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
