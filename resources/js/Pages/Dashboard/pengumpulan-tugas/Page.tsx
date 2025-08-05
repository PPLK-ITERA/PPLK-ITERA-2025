import { CaretSortIcon } from "@radix-ui/react-icons";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ColumnDef } from "@tanstack/react-table";

import { useEffect, useState } from "react";

import { CheckIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { MateriCellActions } from "@/Components/dashboard/materi/MateriCellActions";
import TugasForm from "@/Components/dashboard/tugas/TugasForm";
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
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Pengumpulan Tugas", link: "/dashboard/pengumpulan-tugas" },
];

interface kelompokData {
  id: number;
  nama_kelompok: string;
  no_kelompok: string;
}

interface tugasData {
  id: number;
  judul: string;
  deskripsi?: string;
  deadline?: string;
  status?: string;
}

export default function Page({ auth, response }) {
  const user = auth.user;
  useFlashToast();

  // State management
  const [openKelompok, setOpenKelompok] = useState(false);
  const [kelompokValue, setKelompokValue] = useState("");
  const [selectedTask, setSelectedTask] = useState(""); 
  const [selectedTaskId, setSelectedTaskId] = useState<number | "">("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Data states
  const [kelompokData, setKelompokData] = useState<kelompokData[]>([]);
  const [tugasData, setTugasData] = useState<tugasData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data tugas dari database
  const getTugasData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(route("dashboard.tugas.data.judulTugas"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Sesuaikan dengan struktur response dari backend yang sudah ada
      const data = result.response?.data || result.data || result;
      setTugasData(data);

      // Set default selection ke tugas pertama
      if (data && data.length > 0) {
        setSelectedTask(data[0].id.toString());
        setSelectedTaskId(data[0].id);
      }
    } catch (error) {
      console.error("Error fetching tugas data:", error);
      setError("Gagal mengambil data tugas dari server");
      // Fallback ke data statis jika API gagal
      const fallbackData = [
        { id: 1, judul: "DIRETRA" },
        { id: 2, judul: "HARTATERA" },
        { id: 3, judul: "COOLIN" },
        { id: 4, judul: "GARTA MATERA" },
        { id: 5, judul: "PORTAL DILOGI" },
        { id: 6, judul: "REKASITERA" },
        { id: 7, judul: "MOTLET CAKRAWALA" },
      ];
      setTugasData(fallbackData);
      setSelectedTask(fallbackData[0].id.toString());
      setSelectedTaskId(fallbackData[0].id);
    } finally {
      setLoading(false);
    }
  };

  const getKelompokData = async () => {
    try {
      const response = await fetch(route("dashboard.user.data.kelompok"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setKelompokData(data);
    } catch (error) {
      console.error("Error fetching kelompok data:", error);
    }
  };

  // Load data saat komponen mount
  useEffect(() => {
    getKelompokData();
    getTugasData();
  }, []);

  // Handlers untuk perubahan selection
  const handleTaskSelection = (value: string) => {
    setSelectedTask(value);
    setSelectedTaskId(parseInt(value));
  };

  const handleSubmissionStatusChange = (status: string) => {
    setSubmissionStatus(status);
  };

  const handleKelompokSelection = (currentValue: string) => {
    setKelompokValue(currentValue === kelompokValue ? "" : currentValue);
    setOpenKelompok(false);
  };

  // Refresh data setelah menambah tugas baru
  const handleTugasAdded = () => {
    getTugasData();
  };

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-bold tracking-tight">Pengumpulan Tugas</h2>
        
        {/* Button untuk membuat tugas baru - hanya untuk role tertentu */}
        {(user.role_id == 7 || user.role_id == 3) ? (
          <div className="place-content-start flex w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <IconPlus size={18} />
                  <span>Buat Tugas</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buat Tugas</DialogTitle>
                </DialogHeader>
                <TugasForm onSuccess={handleTugasAdded} />
              </DialogContent>
            </Dialog>
          </div>
        ) : null}

        <h2>Filter berdasarkan...</h2>
        
        {/* Error message */}
        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="md:flex-row md:items-center flex flex-col items-start gap-1">
          {/* Dropdown Nama Tugas */}
          <div className="grow w-full">
            <Label className="ml-[1px]">Nama Tugas</Label>
            <Select
              onValueChange={handleTaskSelection}
              value={selectedTask}
              disabled={loading}
            >
              <SelectTrigger className="w-full font-bold">
                <SelectValue 
                  placeholder={loading ? "Memuat..." : "Pilih nama tugas"} 
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nama Tugas</SelectLabel>
                  {tugasData.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.judul}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Dropdown Nama Kelompok */}
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
                      )?.no_kelompok + " - " + kelompokData.find(
                        (kelompok) =>
                          JSON.stringify(kelompok.id) === kelompokValue,
                      )?.nama_kelompok
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
                              onSelect={handleKelompokSelection}
                            >
                              {kelompok.no_kelompok} - {kelompok.nama_kelompok}
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

          {/* Dropdown Status Pengumpulan */}
          <div className="grow w-full">
            <Label className="ml-[1px]">Status Pengumpulan</Label>
            <Select
              onValueChange={handleSubmissionStatusChange}
              value={submissionStatus}
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

        {/* Tabel Data Pengumpulan Tugas */}
        <PengumpulanTugasClient
          tugas_id={typeof selectedTaskId === "number" ? selectedTaskId : 0}
          no_kelompok={kelompokValue ? parseInt(JSON.parse(kelompokValue)) : 0}
          status={submissionStatus ? parseInt(submissionStatus) : 0}
        />
      </DashboardLayout>

      <Toaster />
    </>
  );
}