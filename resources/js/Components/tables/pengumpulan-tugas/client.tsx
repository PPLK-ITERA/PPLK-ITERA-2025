import { columns } from "./columns";

import { useEffect, useState } from "react";

import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

interface PengumpulanTugasClientProps {
  tugas_id: number;
  no_kelompok: number;
  status: number;
}

export const PengumpulanTugasClient = ({
  tugas_id,
  no_kelompok,
  status,
}: PengumpulanTugasClientProps) => {
  const [requestParams, setRequestParams] = useState({
    status: status ? status : null,
    no_kelompok: no_kelompok ? no_kelompok : null,
    tugas_id: tugas_id,
  });

  // Function to fetch data based on requestParams
  const fetchTableData = async () => {
    // Construct API endpoint dynamically based on current state

    const apiEndpoint = route("dashboard.tugas.data", {
      no_kelompok: requestParams.no_kelompok ?? 0,
      status: requestParams.status ?? 0,
      tugas_id: requestParams.tugas_id,
    });

    // ..../data/alll/2?status=1&no_kelompok=1

    console.log("Fetching data for:", apiEndpoint);
    // You would typically fetch data here using the updated apiEndpoint
  };

  // Call fetchTableData only when parameters change and are not null
  useEffect(() => {
    if (
      requestParams.no_kelompok ||
      requestParams.status ||
      requestParams.tugas_id
    ) {
      fetchTableData();
    }
  }, [requestParams]);

  const handleApplyClick = () => {
    setRequestParams({
      tugas_id: tugas_id,
      no_kelompok: no_kelompok ? no_kelompok : null,
      status: status ? status : null,
    });
  }; // Dependency on requestParams to re-fetch when it changes

  const handleResetFilter = () => {
    window.location.reload();
  }; // Dependency on requestParams to re-fetch when it changes

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={handleApplyClick}>Terapkan</Button>
        <Button onClick={handleResetFilter} variant={"outline"}>
          Reset Filter
        </Button>
      </div>

      <Separator />
      <DataTable
        searchKey="Nama, Nim, Email"
        columns={columns}
        apiEndpoint={route("dashboard.tugas.data", {
          tugas_id: requestParams.tugas_id,
          no_kelompok: requestParams.no_kelompok ?? 0,
          status: requestParams.status ?? 0,
        })}
        title="Pengumpulan Tugas"
        // status={status}
      />
    </>
  );
};
