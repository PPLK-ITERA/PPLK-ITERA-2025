import React from "react";

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
	);
}