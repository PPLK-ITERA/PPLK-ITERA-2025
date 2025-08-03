import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/Components/Navbar";
import { Card } from "@/Components/ui/card";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import bg_1 from "!assets/tesla/bg-1.png";

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

const AdminPage: React.FC = () => {
    const [soals, setSoals] = useState<Soal[]>([]);
    const [form, setForm] = useState<Soal>(emptySoal);
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");

    const [day, setDay] = useState<string>("DAY 1");
    const [dayInput, setDayInput] = useState<string>("");
    const [dayMsg, setDayMsg] = useState<string>("");

    const [isTipeDropdownOpen, setIsTipeDropdownOpen] = useState(false);
    const tipeDropdownRef = useRef<HTMLDivElement>(null);

    const fetchSoals = async () => {
        // Ganti endpoint ke /api/tesla/ agar sesuai dengan BACKEND API ROUTES (CRUD)
        const res = await fetch("/api/tesla/");
        const result = await res.json();
        setSoals(result.data || []);
    };

    // Fetch current day from API
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
        fetchSoals();
        fetchDay();
    }, []);

    // Otomatis isi nomor berikutnya saat bukan edit dan daftar soal sudah ada
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "nomor") {
            const nomor = Number(value);
            // Otomatis set tipe jika field tipe kosong atau user baru input nomor
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
        const method = editing ? "PUT" : "POST";
        // Ganti endpoint ke /api/tesla/ agar sesuai dengan BACKEND API ROUTES (CRUD)
        const url = editing ? `/api/tesla/${form.id}` : "/api/tesla/";
        const payload = { ...form, nomor: Number(form.nomor), start_row: Number(form.start_row), start_col: Number(form.start_col) };
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
        setMessage(data.message);
        setForm(emptySoal);
        setEditing(false);
        fetchSoals();
    };

    const handleEdit = (soal: Soal) => {
        setForm(soal);
        setEditing(true);
    };

    const handleDelete = async (id: number) => {
        // Ganti endpoint ke /api/tesla/ agar sesuai dengan BACKEND API ROUTES (CRUD)
        await fetch(`/api/tesla/${id}`, {
            method: "DELETE",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || "",
            },
        });
        fetchSoals();
    };

    // Handler for updating day
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

    // Close dropdown on outside click
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
        <>
            {/* Add global styles to prevent horizontal scroll */}
            <style>{`
                html, body {
                    overflow-x: hidden !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                    position: relative;
                }
                #app, #root {
                    width: 100% !important;
                    max-width: 100vw !important;
                    overflow-x: hidden !important;
                }
            `}</style>

            {/* Background Tesla */}
            <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
                style={{
                    backgroundImage: `url(${bg_1})`,
                    width: "100vw",
                    maxWidth: "100vw",
                    left: 0,
                    right: 0,
                }}>
                <div className="absolute inset-0 bg-[#BF4000] mix-blend-multiply pointer-events-none"></div>
            </div>

            <Navbar isFixed={true} />

            <MaxWidthWrapper className="py-8 mt-32 relative z-10 px-4 md:px-6 overflow-x-hidden w-full max-w-full">
                {/* --- Day Edit Section --- */}
                <Card className="p-4 md:p-6 mb-12 bg-white/90 shadow-lg rounded-xl w-full max-w-full">
                    <h3 className="text-2xl font-bold mb-8 text-[#BF4000]">Edit Day</h3>
                    <form onSubmit={handleDaySubmit} className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
                        <div className="flex-none">
                            <label className="font-medium text-gray-700">Hari Sekarang:</label>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                value={dayInput}
                                onChange={e => setDayInput(e.target.value)}
                                className="w-full border border-orange-300 rounded-lg px-3 py-2 h-10 focus:ring-2 focus:ring-orange-400 transition"
                                placeholder="DAY 1"
                            />
                        </div>
                        <div className="flex-none ml-auto">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-orange-500 to-[#BF4000] hover:from-orange-600 hover:to-[#a03c15] text-white px-6 py-2 rounded-lg font-semibold shadow transition-all h-10 whitespace-nowrap"
                            >
                                Perbarui
                            </button>
                        </div>
                        {dayMsg && <div className="flex-none ml-2 text-green-600 font-medium">{dayMsg}</div>}
                    </form>
                </Card>

                <Card className="p-4 md:p-6 mb-12 bg-white/90 shadow-lg rounded-xl w-full max-w-full">
                    <h3 className="text-2xl font-bold mb-8 text-[#BF4000]">{editing ? "Edit Soal" : "Tambah Soal"}</h3>
                    {/* --- Redesigned Form --- */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Custom Dropdown for Tipe */}
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
                            {/* Nomor */}
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
                            {/* Pertanyaan */}
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
                            {/* Jawaban */}
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
                            {/* Start Row */}
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
                            {/* Start Col */}
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
                                    onClick={() => { setForm(emptySoal); setEditing(false); }}
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
                </Card>

                <Card className="p-4 md:p-6 bg-white/90 shadow-lg rounded-xl overflow-hidden">
                    <h3 className="text-2xl font-bold mb-8 text-[#BF4000]">Daftar Soal</h3>
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-orange-100 to-orange-200">
                            <tr>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Nomor</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Tipe</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Pertanyaan</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Jawaban</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Start Row</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Start Col</th>
                                <th className="px-3 py-2 text-left font-semibold text-[#BF4000]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {soals.map(soal => (
                                <tr key={soal.id} className="hover:bg-orange-50 transition">
                                    <td className="px-3 py-2" data-label="Nomor">{soal.nomor}</td>
                                    <td className="px-3 py-2 capitalize" data-label="Tipe">{soal.tipe}</td>
                                    <td className="px-3 py-2" data-label="Pertanyaan">{soal.pertanyaan}</td>
                                    <td className="px-3 py-2 font-mono uppercase" data-label="Jawaban">{soal.jawaban}</td>
                                    <td className="px-3 py-2" data-label="Start Row">{soal.start_row}</td>
                                    <td className="px-3 py-2" data-label="Start Col">{soal.start_col}</td>
                                    <td className="px-3 py-2" data-label="Aksi">
                                        <button
                                            className="text-blue-600 hover:underline mr-2 font-semibold"
                                            onClick={() => handleEdit(soal)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-600 hover:underline font-semibold"
                                            onClick={() => handleDelete(soal.id)}
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <style>{`
                        @media (max-width: 700px) {
                            table, tbody, tr, td {
                                display: block !important;
                                width: 100% !important;
                                max-width: 100% !important;
                            }
                            thead {
                                display: none;
                            }
                            tr {
                                position: relative;
                                margin-bottom: 1rem;
                                background: #fff;
                                border-radius: 8px;
                                box-shadow: 0 1px 4px rgba(0,0,0,0.04);
                            }
                            td {
                                position: relative;
                                padding: 0.75rem 1rem !important;
                                padding-left: 120px !important;
                                min-height: 40px;
                                word-break: break-word;
                                white-space: normal;
                                hyphens: auto;
                            }
                            td::before {
                                content: attr(data-label);
                                position: absolute;
                                left: 1rem;
                                width: 100px;
                                font-weight: 600;
                                color: #BF4000;
                            }
                            td[data-label="Aksi"] {
                                border-top: 1px solid #eee;
                                margin-top: 0.5rem;
                                padding-top: 1rem !important;
                                display: flex !important;
                                gap: 0.5rem;
                                padding-left: 1rem !important;
                            }
                            td[data-label="Aksi"]::before {
                                display: none;
                            }
                        }
                    `}</style>
                </Card>
            </MaxWidthWrapper>
        </>
    );
};

export default AdminPage;
