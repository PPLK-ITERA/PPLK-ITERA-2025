import React, { useEffect, useState, useRef } from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { IconPlus } from "@tabler/icons-react";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { TeslaClient } from "@/Components/tables/tesla/client";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Tesla", link: "/dashboard/tesla" },
];

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

function TeslaSoalForm({ onSuccess, soals }: { onSuccess?: () => void; soals: Soal[] }) {
  const [form, setForm] = useState<Soal>(emptySoal);
  const [message, setMessage] = useState("");
  const [isTipeDropdownOpen, setIsTipeDropdownOpen] = useState(false);
  const tipeDropdownRef = useRef<HTMLDivElement>(null);

  // Autofill nomor & tipe setiap kali soals berubah (dan bukan edit)
  useEffect(() => {
    if (soals.length > 0) {
      const maxNomor = Math.max(...soals.map(s => s.nomor));
      setForm(prev => ({
        ...emptySoal,
        nomor: maxNomor + 1,
        tipe: (maxNomor + 1) % 2 === 0 ? "mendatar" : "menurun"
      }));
    } else {
      setForm(prev => ({
        ...emptySoal,
        nomor: 1,
        tipe: "menurun"
      }));
    }
  }, [soals]);

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
    const res = await fetch("/api/tesla/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || "",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.message || "Gagal menyimpan data");
      return;
    }
    setMessage("Berhasil tambah soal");
    setForm(emptySoal);
    if (onSuccess) onSuccess();
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

  return (
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
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-[#BF4000] hover:from-orange-600 hover:to-[#a03c15] text-white px-6 py-2 rounded-lg font-semibold shadow transition-all h-10 min-w-[120px]"
        >
          Tambah
        </button>
      </div>
      {message && <div className="text-green-600 font-medium mt-2">{message}</div>}
    </form>
  );
}

const TeslaAdminPage: React.FC<{ auth: any }> = ({ auth }) => {
  const [day, setDay] = useState<string>("DAY 1");
  const [dayInput, setDayInput] = useState<string>("");
  const [dayMsg, setDayMsg] = useState<string>("");
  const [openTambahSoal, setOpenTambahSoal] = useState(false);
  const [refreshTable, setRefreshTable] = useState(0); // Tambahkan state ini

  // Tambah state soals untuk autofill
  const [soals, setSoals] = useState<Soal[]>([]);

  const fetchSoals = async () => {
    const res = await fetch("/api/tesla/");
    const result = await res.json();
    setSoals(result.data || []);
  };

  // Fetch soals setiap kali dialog tambah soal dibuka
  useEffect(() => {
    if (openTambahSoal) fetchSoals();
  }, [openTambahSoal]);

  const fetchDay = async () => {
    try {
      const res = await fetch("/api/day/");
      const result = await res.json();
      if (result.data && result.data.change_day) {
        setDay(result.data.change_day);
        setDayInput(result.data.change_day);
      }
    } catch {
      setDay("DAY 1");
    }
  };

  useEffect(() => {
    fetchDay();
  }, []);

  const handleDaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDayMsg("");
    const res = await fetch("/api/day/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || "",
      },
      body: JSON.stringify({ change_day: dayInput }),
    });
    const data = await res.json();
    if (!res.ok) {
      setDayMsg(data.message || "Gagal update day");
      return;
    }
    setDayMsg("Berhasil update day");
    setDay(data.data.change_day);
  };

  return (
    <>
      <DashboardLayout user={auth?.user}>
          <Breadcrumbs items={breadcrumbItems} />
          <h2 className="text-3xl font-bold tracking-tight">Tesla</h2>

          {/* Inline buttons */}
          <div className="flex gap-2 mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <IconPlus size={18} />
                  <span>Ubah Hari</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Hari</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleDaySubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hari Sekarang</Label>
                    <input
                      type="text"
                      value={dayInput}
                      onChange={e => setDayInput(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="DAY 1"
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="destructive">
                    Perbarui
                  </Button>
                  {dayMsg && <div className="text-green-600 font-medium mt-2">{dayMsg}</div>}
                </form>
              </DialogContent>
            </Dialog>
            {/* Tambah Soal Button */}
            <Dialog open={openTambahSoal} onOpenChange={setOpenTambahSoal}>
              <DialogTrigger asChild>
                <Button onClick={() => setOpenTambahSoal(true)}>
                  <IconPlus size={18} />
                  <span>Tambah Soal</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah Soal</DialogTitle>
                </DialogHeader>
                <TeslaSoalForm
                  onSuccess={() => {
                    setOpenTambahSoal(false);
                    fetchSoals(); // refresh autofill
                    setRefreshTable(v => v + 1); // trigger refresh tabel
                  }}
                  soals={soals}
                />
              </DialogContent>
            </Dialog>
            </div>

          {/* Table Section */}
          <div className="mt-8">
            <TeslaClient apiEndpoint="/api/tesla/" refresh={refreshTable} />
          </div>
      </DashboardLayout>
      <Toaster />
    </>
  );
};

export default TeslaAdminPage;
