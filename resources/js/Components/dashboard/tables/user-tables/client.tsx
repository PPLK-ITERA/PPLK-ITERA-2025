"use client";

import { columns } from "./columns";
import { User } from "@/constants/data";

// import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/Components/dashboard/ui/button";
import { DataTable } from "@/Components/dashboard/ui/data-table";
import { Heading } from "@/Components/dashboard/ui/heading";
import { Separator } from "@/Components/dashboard/ui/separator";

interface ProductsClientProps {
    data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
    // const router = useRouter();

    return (
        <>
            <div className="flex items-start justify-between">
                <Heading
                    title={`Users (${data.length})`}
                    description="Manage users (Client side table functionalities.)"
                />
                <Button
                    className="md:text-sm text-xs"
                    // onClick={() => router.push(`/dashboard/user/new`)}
                >
                    <Plus className="w-4 h-4 mr-2" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    );
};
