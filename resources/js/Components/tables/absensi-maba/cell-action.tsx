"use client";

import { AbsensiMaba } from "./columns";

import { router } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";

interface CellActionProps {
    data: AbsensiMaba;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const handleIzin = () => {
        router.get(route("dashboard.cui.izin", data.user.nim));
    };

    return (
        <>
            <div className="flex gap-1 p-2">
                <Button onClick={handleIzin} size="sm">
                    Detail
                </Button>
            </div>
        </>
    );
};
