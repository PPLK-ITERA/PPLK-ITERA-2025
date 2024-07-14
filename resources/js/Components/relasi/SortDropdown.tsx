import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

import React from "react";

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";

type Props = { options: { label: string; value: string }[] };

export default function SortDropdown({ options }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex gap-2 shadow-none">
                    <span>Filter</span>
                    <IconAdjustmentsHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-lg bg-jaffa-100">
                <DropdownMenuGroup>
                    {options.map((option) => (
                        <DropdownMenuItem key={option.value} className="place-content-center hover:bg-jaffa-200">
                            <span className="font-semibold">Sort by {option.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
