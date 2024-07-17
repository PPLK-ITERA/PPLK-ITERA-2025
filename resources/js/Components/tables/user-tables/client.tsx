"use client";

import { Heading } from "@/Components/ui/heading";
import { columns } from "./columns";
import { User } from "@/constants/data";

// import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import { DataTable } from "@/Components/ui/data-table";

interface ProductsClientProps {
    data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
    // const router = useRouter();

    return (
        <>
            <div className="flex items-start justify-between">
                <Heading
                    title={`Jumlah Maba (${data.length})`}
                    description="Manajemen absensi maba cui, gunakan tabel berikut jika terdapat kendala pada barcode scanner!"
                />
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    );
};
