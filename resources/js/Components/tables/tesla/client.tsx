import { columns } from "./columns";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { IconPlus } from "@tabler/icons-react";
import { Label } from "@/Components/ui/label";
import { Heading } from "@/Components/ui/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

type Soal = {
  id: number;
  nomor: number;
  tipe: string;
  pertanyaan: string;
  jawaban: string;
  start_row: number;
  start_col: number;
};

const emptySoal: Soal = { id: 0, nomor: 0, tipe: "mendatar", pertanyaan: "", jawaban: "", start_row: 0, start_col: 0 };

export const TeslaClientTriggerButton = ({ onClick }: { onClick?: () => void }) => (
  <DialogTrigger asChild>
    <Button onClick={onClick}>
      <IconPlus size={18} />
      <span>Tambah Soal</span>
    </Button>
  </DialogTrigger>
);

export const TeslaClient = ({ apiEndpoint, refresh }: { apiEndpoint: string; refresh?: number }) => {
  const [soals, setSoals] = useState<Soal[]>([]);
  const [form, setForm] = useState<Soal>(emptySoal);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Frontend search state
  const [searchTerm, setSearchTerm] = useState("");

  const [isTipeDropdownOpen, setIsTipeDropdownOpen] = useState(false);
  const tipeDropdownRef = useRef<HTMLDivElement>(null);

  const fetchSoals = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiEndpoint);
      const result = await res.json();
      setSoals(result.data || []);
    } catch (error) {
      console.error('Error fetching soals:', error);
      setSoals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSoals();
  }, [refresh, apiEndpoint]);

  useEffect(() => {
    if (!editing && soals.length > 0) {
      const maxNomor = Math.max(...soals.map(s => s.nomor));
      setForm(prev => ({
        ...prev,
        nomor: maxNomor + 1,
        tipe: (maxNomor + 1) % 2 === 0 ? "mendatar" : "menurun"
      }));
    } else if (!editing && soals.length === 0) {
      setForm(prev => ({
        ...prev,
        nomor: 1,
        tipe: "menurun"
      }));
    }
  }, [soals, editing]);

  // Frontend filtering logic
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return soals;

    return soals.filter(soal => {
      const searchLower = searchTerm.toLowerCase();
      return (
        soal.nomor.toString().includes(searchLower) ||
        soal.tipe.toLowerCase().includes(searchLower) ||
        soal.pertanyaan.toLowerCase().includes(searchLower) ||
        soal.jawaban.toLowerCase().includes(searchLower) ||
        soal.start_row.toString().includes(searchLower) ||
        soal.start_col.toString().includes(searchLower)
      );
    });
  }, [soals, searchTerm]);

  // React Table setup
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "nomor") {
      const nomor = Number(value);
      setForm(prev => ({
        ...prev,
        nomor,
        tipe: nomor % 2 === 0 ? "mendatar" : "menurun"
      }));
    } else if (name === "tipe") {
      setForm({ ...form, tipe: value });
    } else {
      setForm({
        ...form,
        [name]: name === "nomor" || name === "start_row" || name === "start_col" ? Number(value) : value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const method = editing ? "PUT" : "POST";
      const url = editing ? `/api/tesla/${form.id}` : "/api/tesla/";
      const payload = {
        ...form,
        nomor: Number(form.nomor),
        start_row: Number(form.start_row),
        start_col: Number(form.start_col)
      };

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || "",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Gagal menyimpan data");
        return;
      }

      setMessage(data.message || "Berhasil menyimpan data");
      setForm(emptySoal);
      setEditing(false);
      setOpen(false);

      // Refresh data setelah submit
      await fetchSoals();

    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage("Terjadi kesalahan saat menyimpan data");
    }
  };

  const handleEdit = (soal: Soal) => {
    setForm(soal);
    setEditing(true);
    setOpen(true);
  };

  useEffect(() => {
    if (!isTipeDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (tipeDropdownRef.current && !tipeDropdownRef.current.contains(e.target as Node)) {
        setIsTipeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isTipeDropdownOpen]);

  // Pagination info
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;
  const totalItems = filteredData.length;
  const startItem = totalItems > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Soal" : "Tambah Soal"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:flex-1 flex flex-col" ref={tipeDropdownRef}>
                <label className="font-medium text-gray-700 mb-1">Tipe</label>
                <button
                  type="button"
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 bg-white flex items-center justify-between focus:ring-2 focus:ring-orange-400 transition relative"
                  onClick={() => setIsTipeDropdownOpen(v => !v)}
                  tabIndex={0}
                >
                  <span className="capitalize">{form.tipe}</span>
                  <svg className="w-4 h-4 ml-2 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isTipeDropdownOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-orange-200 rounded-lg shadow-lg z-50">
                    <div
                      className={`px-4 py-2 cursor-pointer hover:bg-orange-50 capitalize ${form.tipe === "mendatar" ? "font-bold text-orange-600" : ""}`}
                      onClick={() => { setForm({ ...form, tipe: "mendatar" }); setIsTipeDropdownOpen(false); }}
                    >
                      Mendatar
                    </div>
                    <div
                      className={`px-4 py-2 cursor-pointer hover:bg-orange-50 capitalize ${form.tipe === "menurun" ? "font-bold text-orange-600" : ""}`}
                      onClick={() => { setForm({ ...form, tipe: "menurun" }); setIsTipeDropdownOpen(false); }}
                    >
                      Menurun
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full md:flex-1 flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Nomor</label>
                <input
                  name="nomor"
                  type="number"
                  value={form.nomor}
                  onChange={handleChange}
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:flex-1 flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Pertanyaan</label>
                <input
                  name="pertanyaan"
                  type="text"
                  value={form.pertanyaan}
                  onChange={handleChange}
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition"
                  required
                />
              </div>
              <div className="w-full md:flex-1 flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Jawaban</label>
                <input
                  name="jawaban"
                  type="text"
                  value={form.jawaban}
                  onChange={handleChange}
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition uppercase"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:flex-1 flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Start Row</label>
                <input
                  name="start_row"
                  type="number"
                  value={form.start_row}
                  onChange={handleChange}
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition"
                  min={0}
                />
              </div>
              <div className="w-full md:flex-1 flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Start Col</label>
                <input
                  name="start_col"
                  type="number"
                  value={form.start_col}
                  onChange={handleChange}
                  className="border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition"
                  min={0}
                />
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-2">(Boleh dikosongkan untuk auto)</span>
            <div className="flex flex-row items-center justify-end gap-2 mt-6 w-full">
              {editing && (
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg border border-gray-300 h-10 bg-gray-100 hover:bg-gray-200 transition"
                  onClick={() => {
                    setForm(emptySoal);
                    setEditing(false);
                    setMessage("");
                  }}
                >
                  Batal
                </button>
              )}
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-[#BF4000] hover:from-orange-600 hover:to-[#a03c15] text-white px-6 py-2 rounded-lg font-semibold shadow transition-all h-10 min-w-[120px]"
              >
                {editing ? "Update" : "Tambah"}
              </button>
            </div>
            {message && <div className="text-green-600 font-medium mt-2">{message}</div>}
          </form>
        </DialogContent>
      </Dialog>
      <Separator />

      {/* Custom Table with Frontend Search */}
      <div className="md:flex font-inter justify-between">
        <Heading
          title="Daftar Soal Tesla"
          description="Daftar soal tesla yang tersedia."
        />
        <Input
          placeholder="Search Nomor, Tipe, Pertanyaan, Jawaban..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:max-w-sm w-full my-2"
        />
      </div>

      <ScrollArea className="max-w-7xl h-[calc(80vh-220px)] rounded-md border">
        <Table className="md:w-full relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <div className="line-clamp-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  {searchTerm ? "Tidak ada hasil pencarian." : "Tidak ada data."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Pagination Info */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          {totalItems > 0 ? (
            `Showing ${startItem} to ${endItem} of ${totalItems} entries`
          ) : (
            "No entries found"
          )}
          {searchTerm && (
            <span className="ml-2 text-gray-500">
              (filtered from {soals.length} total entries)
            </span>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => table.setPageIndex(pageNum - 1)}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

TeslaClient.TriggerButton = TeslaClientTriggerButton;
