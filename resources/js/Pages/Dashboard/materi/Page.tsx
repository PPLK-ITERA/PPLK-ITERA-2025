import { ColumnDef } from "@tanstack/react-table";

import { IconPlus } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { MateriCellActions } from "@/Components/dashboard/materi/MateriCellActions";
import MateriForm from "@/Components/dashboard/materi/MateriForm";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Toaster } from "@/Components/ui/toaster";

import { Materi } from "@/lib/types/Materi";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Materi", link: "/dashboard/materi" },
];

interface MateriDataResponse {
  no: number;
  materi: Materi;
}

export default function Page({ auth, response }) {
  const columns: ColumnDef<MateriDataResponse>[] = [
    {
      id: "no",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      id: "nama_materi",
      accessorKey: "materi.nama_materi",
      header: "Nama",
    },
    {
      id: "link_materi",
      accessorKey: "materi.link_materi",
      header: "Link Materi",
    },
    {
      id: "hari",
      accessorKey: "materi.hari",
      header: "Hari Ke",
    },
    {
      id: "action",
      header: "Aksi",
      cell: ({ row }) => {
        return <MateriCellActions materi={row.original.materi} />;
      },
    },
  ];

  return (
    <DashboardLayout user={auth.user}>
      <Breadcrumbs items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Atur Materi</h2>

      <div className="place-content-start flex w-full">
        {/* add dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus size={18} />
              <span>Tambah Materi</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tambah Materi</DialogTitle>
            </DialogHeader>
            <MateriForm />
          </DialogContent>
        </Dialog>
      </div>

      <DataTable
        searchKey="name"
        columns={columns}
        apiEndpoint={route("dashboard.materi.data")}
        title={"Data Materi"}
        description={"Data Materi yang telah diupload."}
      />
      <Toaster />
    </DashboardLayout>
  );
}
