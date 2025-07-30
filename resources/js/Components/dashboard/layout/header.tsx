import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";

import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";

export default function Header({ user }) {
  return (
    <div className=" fixed top-0 left-0 right-0 z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        {/*<div className="md:block hidden">*/}
          {/*<h2 className="font-semibold">Dashboard {user.name}</h2>*/}
        {/*</div>*/}
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>

        {/*<div className="flex items-center gap-2">*/}
          {/*<UserNav name={user.name} />*/}
          {/* <ThemeToggle /> */}
        {/*</div>*/}
      </nav>
    </div>
  );
}
