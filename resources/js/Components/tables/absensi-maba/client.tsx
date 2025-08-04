import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

interface AbsensiMabaClientProps {
  day: string;
}

export const AbsensiMabaClient = ({ day }: AbsensiMabaClientProps) => {
  return (
    <>
      <div className="flex items-start justify-between"></div>
      <Separator />
      <DataTable
        searchKey="name"
        columns={columns}
        apiEndpoint={route("dashboard.presensi.data", { date: day })}
        title={"Absensi Maba"}
      />
    </>
  );
};
