"use client";

import { User } from "@/constants/data";

// import { useRouter } from "next/navigation";
import { useState } from "react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/dashboard/ui/dropdown-menu";
import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
import { Button } from "@/Components/ui/button";
import { LogBookCui } from "@/lib/types/LogBookCui";

interface CellActionProps {
    data: LogBookCui;
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
                <Button size="sm">
                    Atur Izin
                </Button>
                <Button size="sm">
                    Edit
                </Button>
            </div>
        </>
    );
};
