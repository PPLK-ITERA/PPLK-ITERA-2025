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
      {/* <DataTable searchKey="name" columns={columns} data={data} /> */}
    </>
  );
};
