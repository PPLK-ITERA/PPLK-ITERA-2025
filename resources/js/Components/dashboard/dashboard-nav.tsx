import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { Dispatch, SetStateAction } from "react";

import { Link, usePage } from "@inertiajs/react";

import { Icons } from "@/Components/dashboard/icons";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

import { NavItem } from "@/lib/data/data";
import { useSidebar } from "@/lib/hooks/useSidebar";
import { User } from "@/lib/types/User";
import { cn } from "@/lib/utils";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const { isMinimized } = useSidebar();
  type MyPage = PageProps<{
    auth: {
      user: User;
    };
  }>;

  const { auth } = usePage<MyPage>().props;

  if (!items?.length) {
    return null;
  }

  return (
    <ScrollArea className="h-[calc(100vh-128px)] overflow-y-auto">
      <nav className="grid items-start gap-2">
        <TooltipProvider>
          {items.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"];
            return (
              item.href &&
              item.role_id.includes(auth.user.role_id) && (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.disabled ? "/" : item.href}
                      className={cn(
                        "flex items-center gap-2 overflow-hidden rounded-md py-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        // path === item.href
                        //     ? "bg-accent"
                        //     : "transparent",
                        item.disabled && "cursor-not-allowed opacity-80",
                      )}
                      onClick={() => {
                        if (setOpen) setOpen(false);
                      }}
                    >
                      <Icon className={`ml-3 size-5 text-[#BE3F00]`} />

                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <span className="mr-2 truncate text-[#BE3F00] font-jakarta">{item.title}</span>
                      ) : (
                        ""
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    align="center"
                    side="right"
                    sideOffset={8}
                    className={!isMinimized ? "hidden" : "inline-block"}
                  >
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              )
            );
          })}
        </TooltipProvider>
      </nav>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
