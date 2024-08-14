import { CaretSortIcon } from "@radix-ui/react-icons";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ColumnDef } from "@tanstack/react-table";

import { useEffect, useState } from "react";

import { CheckIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { MateriCellActions } from "@/Components/dashboard/materi/MateriCellActions";
import MateriForm from "@/Components/dashboard/materi/MateriForm";
import { PengumpulanTugasClient } from "@/Components/tables/pengumpulan-tugas/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/Components/ui/command";
import { DataTable } from "@/Components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Toaster } from "@/Components/ui/toaster";

import { useFlashToast } from "@/lib/hooks/useFlashToast";
import { Materi } from "@/lib/types/Materi";
import { cn } from "@/lib/utils";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Pengumpulan Tugas", link: "/dashboard/pengumpulan-tugas" },
];

const ListDataTugas = [
  { id: 1, label: "DIRETRA", value: "1" },
  { id: 2, label: "HARTATERA", value: "2" },
  { id: 3, label: "COOLIN", value: "3" },
  { id: 4, label: "GARTA MATERA", value: "4" },
  { id: 5, label: "PORTAL DILOGI", value: "5" },
  { id: 6, label: "REKASITERA", value: "6" },
  { id: 7, label: "MOTLET CAKRAWALA", value: "7" },
];

interface kelompokData {
  id: number;
  nama_kelompok: string;
  no_kelompok: string;
}

export default function Page({ auth, response }) {
  useFlashToast();

  const [openKelompok, setOpenKelompok] = useState(false);
  const [kelompokValue, setKelompokValue] = useState("");
  const [selectedTask, setSelectedTask] = useState("1"); // State for storing the selected task
  const [selectedTaskId, setSelectedTaskId] = useState(1); // State for storing the selected task id
  const [submissionStatus, setSubmissionStatus] = useState(""); // State for storing the submission status

  const [kelompokData, setKelompokData] = useState<kelompokData[]>([]);

  const getKelompokData = async () => {
    const response = await fetch(route("dashboard.user.data.kelompok"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setKelompokData(data);
  };

  useEffect(() => {
    getKelompokData();
  }, []);

  // Handlers for selections
  const handleTaskSelection = (value) => {
    setSelectedTask(value); // Update state when a user selects a task
    setSelectedTaskId(value);
  };

  const handleSubmissionStatusChange = (status) => {
    setSubmissionStatus(status); // Update state when a user selects a submission status
  };

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-bold tracking-tight">Pengumpulan Tugas</h2>

        <h2>Filter berdasarkan...</h2>
        <div className="md:flex-row md:items-center flex flex-col items-start gap-1">
          <div className="grow w-full">
            <Label className="ml-[1px]">Nama Tugas</Label>

            <Select
              onValueChange={handleTaskSelection}
              defaultValue={selectedTask}
            >
              <SelectTrigger className="w-full font-bold">
                <SelectValue placeholder="Pilih nama tugas" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nama Tugas</SelectLabel>
                  {ListDataTugas.map((item) => (
                    <SelectItem key={item.id} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grow w-full">
            <Label className="ml-[1px]">Nama Kelompok</Label>

            <Popover open={openKelompok} onOpenChange={setOpenKelompok}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openKelompok}
                  className="justify-between w-full font-normal shadow-none"
                  size={"sm"}
                >
                  {kelompokValue
                    ? kelompokData.find(
                        (kelompok) =>
                          JSON.stringify(kelompok.id) === kelompokValue,
                      )?.id
                    : `Pilih Kelompok`}
                  <CaretSortIcon className="shrink-0 w-4 h-4 ml-2 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent>
                <Command>
                  <CommandInput
                    placeholder="Cari Kelompok..."
                    className="h-9"
                  />
                  <CommandEmpty>Data kelompok tidak ada.</CommandEmpty>
                  <CommandGroup>
                    <ScrollArea className="h-[calc(50vh-64px)]">
                      {kelompokData.length > 0
                        ? kelompokData.map((kelompok, index) => (
                            <CommandItem
                              key={index}
                              value={JSON.stringify(kelompok.id)}
                              onSelect={(currentValue) => {
                                setKelompokValue(
                                  currentValue === kelompokValue
                                    ? ""
                                    : currentValue,
                                );
                                setOpenKelompok(false);
                              }}
                            >
                              {kelompok.no_kelompok}-{kelompok.nama_kelompok}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  kelompokValue === JSON.stringify(kelompok.id)
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))
                        : null}
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grow w-full">
            <Label className="ml-[1px]">Status Pengumpulan</Label>

            <Select
              onValueChange={handleSubmissionStatusChange}
              defaultValue={submissionStatus}
            >
              <SelectTrigger className="w-full font-bold">
                <SelectValue placeholder="Pilih status pengumpulan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status Pengumpulan</SelectLabel>
                  <SelectItem value="1">Sudah Mengumpulkan</SelectItem>
                  <SelectItem value="2">Telat Mengumpulkan</SelectItem>
                  <SelectItem value="3">Dikembalikan</SelectItem>
                  <SelectItem value="4">Belum Mengumpulkan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <PengumpulanTugasClient
          tugas_id={selectedTaskId}
          no_kelompok={parseInt(kelompokValue)}
          status={parseInt(submissionStatus)}
        />
      </DashboardLayout>

      <Toaster />
    </>
  );
}
