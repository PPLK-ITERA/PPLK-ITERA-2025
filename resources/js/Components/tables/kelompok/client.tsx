import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

export const KelompokClient = () => {
  return (
    <>
      <div className="flex items-start justify-between"></div>
      <Separator />
      {/*<DataTable
        searchKey="Nama, Nim, Email"
        columns={columns}
        apiEndpoint={route("dashboard.user.data.maba")}
        title={"Kelompok"}
        description=""
      />*/}
    </>
  );
};
