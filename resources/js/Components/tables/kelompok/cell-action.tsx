"use client";

// import { useRouter } from "next/navigation";
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
    data: UserMaba;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    // const router = useRouter();

    const onConfirm = async () => {};

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <div className="flex gap-1 p-2">
                <Link
                    href={`/dashboard/user/edit/${data.id}`}
                    className={`${buttonVariants({ size: "sm" })}`}
                >
                    Edit
                </Link>
            </div>
        </>
    );
};
