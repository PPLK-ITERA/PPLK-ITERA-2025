import React from "react";

import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

type Props = { options: { label: string; value: string }[]; setSort };

export default function SortDropdown({ options, setSort }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-2 shadow-none">
          <span>Filter</span>
          <IconAdjustmentsHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-jaffa-100 rounded-lg" align="end">
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setSort(option.value)}
              className="place-content-end hover:bg-jaffa-200 px-2"
            >
              <span className="font-semibold">Sort by {option.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
