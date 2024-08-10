"use client";

import { columns } from "./columns";

// import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import { Heading } from "@/Components/ui/heading";
import { Separator } from "@/Components/ui/separator";

import { User } from "@/lib/data/data";

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
      <DataTable
        searchKey="name"
        // @ts-ignore
        columns={columns}
        data={data}
      />
    </>
  );
};
