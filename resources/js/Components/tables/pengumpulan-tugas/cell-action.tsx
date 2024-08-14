"use client";

// import { useRouter } from "next/navigation";
import { TaskEntry } from "./columns";

import { useState } from "react";

import { Link } from "@inertiajs/react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
import { Button, buttonVariants } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { User } from "@/lib/data/data";
import { UserMaba } from "@/lib/types/User";

interface CellActionProps {
  data: TaskEntry;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <>
      <div className="flex gap-1 p-2">
        <a
          href={`${data.tugas.jawaban ?? "#"}`}
          className={`${buttonVariants({ size: "sm" })}`}
        >
          Lihat Tugas
        </a>
      </div>
    </>
  );
};
