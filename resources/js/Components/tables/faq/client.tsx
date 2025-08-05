import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

export const FAQClient = () => {
  return (
    <>
      <Separator />
      <DataTable
        searchKey="Pertanyaan dan Jawaban"
        columns={columns}
        apiEndpoint={route("dashboard.faq.data")}
        title={"FAQ"}
      />
    </>
  );
};
