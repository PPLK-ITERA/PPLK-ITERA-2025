"use client";

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

export const PengumpulanTugasClient = ({ tugas_id, no_kelompok, status }) => {
  const [requestParams, setRequestParams] = useState({
    tugas_id,
    no_kelompok,
    status,
  });

  // Function to update request parameters state
  const handleApplyClick = () => {
    setRequestParams({
      no_kelompok: no_kelompok,
      status: status,
      tugas_id: tugas_id,
    });
    console.log("Request params updated:", requestParams);
  };

  // Construct the API endpoint dynamically
  const apiEndpoint = route("dashboard.tugas.data", requestParams);

  // Fetch data when requestParams changes
  useEffect(() => {
    console.log("Fetching data for:", requestParams);
    console.log(apiEndpoint);
    // You would typically fetch data here using the updated apiEndpoint
  }, [requestParams]); // Dependency on requestParams to re-fetch when it changes

  return (
    <>
      <Button onClick={handleApplyClick}>Terapkan</Button>
      <Separator />
      <DataTable
        searchKey="Nama, Nim, Email"
        columns={columns}
        apiEndpoint={apiEndpoint}
        title="Data Pengumpulan Tugas"
        description="Gunakan sistem informasi ini untuk melihat data pengumpulan tugas mahasiswa baru!"
        status={status}
      />
    </>
  );
};
