import React from "react";

import { useSidebar } from "@/lib/hooks/useSidebar";

// import LogoPplk2025 from '!assets/logo-pplk-2025.png';

export function HeadSidebar({ user }) {
	const { isMinimized } = useSidebar();
	
	return (
	    <div className="flex items-center space-x-3">
	    	<div
	    		className={isMinimized ? "hidden" : "inline-block"}
	    	>
				<span className="ml-3 text-2xl font-greek text-[#BE3F00]">
				Ellysion Panel
				</span>
			</div>
		</div>
	);
}