import React from "react";

import { Link } from "@inertiajs/react";

import { IconLayoutNavbarFilled, IconLogout } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import { useSidebar } from "@/lib/hooks/useSidebar";

import BlankPhoto from '!assets/blank-profile.png';

const roles = [
  "DataEntry",
  "Maba",
  "Daplok",
  "Admin",
  "Mentor",
  "Pjprodi",
  "Korlap",
  "Mamet",
  "CustomerService",
];

export function UserSidebar({ user }) {
	const { isMinimized } = useSidebar();

	return (
		<DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/*<Button>*/}
					<div className="flex mx-3 flex items-center gap-2">
							<div className="size-12">
						<div
							className={isMinimized ? "mt-10" : ""}
						>
								<img
									src={user.photo_profile_url || BlankPhoto}
									alt="Foto Profil"
									className="rounded-full"
								/>
							</div>
						</div>
					    <div
					    	className={isMinimized ? "hidden" : "inline-block"}
					    >
					    	<div>
								<span className="ml-2 font-medium text-xs font-poppins">
									{user.name}
								</span>
							</div>
							<div>
								<span className="ml-2 font-bold text-sm font-poppins text-[#BE3F00]">
									{roles[parseInt(user.role_id)]}
								</span>
							</div>
						</div>
					</div>
        {/*</Button>*/}
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