"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { User } from "@/lib/data/data";
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
                <Button size="sm">Atur Izin</Button>
                <Button size="sm">Edit</Button>
            </div>
        </>
    );
};
