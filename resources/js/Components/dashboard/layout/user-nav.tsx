"use client";

import { Link } from "@inertiajs/react";

import { IconLayoutNavbarFilled, IconLogout } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export function UserNav({ name }) {
  if (name) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              <AvatarImage />
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">{name}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={route("welcome")}>
            <DropdownMenuItem className="flex items-center justify-between w-full hover:bg-black/5">
              Landing Page
              <IconLayoutNavbarFilled className="mr-[2px]" />
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={route("logout")} method="post">
            <DropdownMenuItem className="flex items-center justify-between w-full hover:bg-black/5">
              Log out
              <IconLogout />
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
