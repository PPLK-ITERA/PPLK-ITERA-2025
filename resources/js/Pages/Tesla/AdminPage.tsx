import React, { useEffect, useState } from "react";
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

    const fetchSoals = async () => {
        // Ganti endpoint ke /api/tesla/ agar sesuai dengan BACKEND API ROUTES (CRUD)
        const res = await fetch("/api/tesla/");
        const result = await res.json();
        setSoals(result.data || []);
    };

    useEffect(() => {
        fetchSoals();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "nomor") {
            const nomor = Number(value);
            setForm(prev => ({
                ...prev,
                nomor,
                tipe: nomor % 2 === 0 ? "menurun" : "mendatar" // otomatis set tipe berdasarkan ganjil/genap
            }));
        } else {
            setForm({ ...form, [name]: name === "nomor" || name === "start_row" || name === "start_col" ? Number(value) : value });
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

    return (
        <>
            {/* Background Tesla */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg_1})`,
                }}
            >
                <div className="absolute inset-0 bg-[#BF4000] mix-blend-multiply pointer-events-none"></div>
            </div>
            <Navbar isFixed={true} />
            <MaxWidthWrapper className="py-8 mt-20 relative z-10">
                <Card className="p-6 mb-8 bg-white/90">
                    <h3 className="text-xl font-semibold mb-4">{editing ? "Edit Soal" : "Tambah Soal"}</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex gap-4">
                            <div>
                                <label className="mr-2">Tipe:</label>
                                <select
                                    name="tipe"
                                    value={form.tipe}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-40 h-10"
                                >
                                    <option value="mendatar">Mendatar</option>
                                    <option value="menurun">Menurun</option>
                                </select>
                            </div>
                            <div>
                                <label className="mr-2">Nomor:</label>
                                <input
                                    name="nomor"
                                    type="number"
                                    value={form.nomor}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-40 h-10"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="mr-2">Pertanyaan:</label>
                                <input
                                    name="pertanyaan"
                                    type="text"
                                    value={form.pertanyaan}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-full h-10"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="mr-2">Jawaban:</label>
                                <input
                                    name="jawaban"
                                    type="text"
                                    value={form.jawaban}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-full h-10"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <label className="mr-2">Start Row:</label>
                                <input
                                    name="start_row"
                                    type="number"
                                    value={form.start_row}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-40 h-10"
                                    min={0}
                                />
                            </div>
                            <div>
                                <label className="mr-2">Start Col:</label>
                                <input
                                    name="start_col"
                                    type="number"
                                    value={form.start_col}
                                    onChange={handleChange}
                                    className="border rounded px-2 py-1 w-40 h-10"
                                    min={0}
                                />
                            </div>
                            <span className="text-xs text-gray-500 mt-2">(Boleh dikosongkan untuk auto)</span>
                        </div>
                        <div>
                            <button type="submit" className="bg-[#FF6B20] hover:bg-[#e65a00] text-white px-4 py-2 rounded h-10">
                                {editing ? "Update" : "Tambah"}
                            </button>
                            {editing && (
                                <button type="button" className="ml-2 px-4 py-2 rounded border h-10" onClick={() => { setForm(emptySoal); setEditing(false); }}>
                                    Batal
                                </button>
                            )}
                        </div>
                        {message && <div className="text-green-600">{message}</div>}
                    </form>
                </Card>
                <Card className="p-6 bg-white/90">
                    <h3 className="text-xl font-semibold mb-4">Daftar Soal</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead>
                                <tr>
                                    {/* <th className="border px-2 py-1">ID</th> */}
                                    <th className="border px-2 py-1">Nomor</th>
                                    <th className="border px-2 py-1">Tipe</th>
                                    <th className="border px-2 py-1">Pertanyaan</th>
                                    <th className="border px-2 py-1">Jawaban</th>
                                    <th className="border px-2 py-1">Start Row</th>
                                    <th className="border px-2 py-1">Start Col</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {soals.map(soal => (
                                    <tr key={soal.id}>
                                        {/* <td className="border px-2 py-1">{soal.id}</td> */}
                                        <td className="border px-2 py-1">{soal.nomor}</td>
                                        <td className="border px-2 py-1">{soal.tipe}</td>
                                        <td className="border px-2 py-1">{soal.pertanyaan}</td>
                                        <td className="border px-2 py-1">{soal.jawaban}</td>
                                        <td className="border px-2 py-1">{soal.start_row}</td>
                                        <td className="border px-2 py-1">{soal.start_col}</td>
                                        <td className="border px-2 py-1">
                                            <button className="text-blue-600 mr-2" onClick={() => handleEdit(soal)}>Edit</button>
                                            <button className="text-red-600" onClick={() => handleDelete(soal.id)}>Hapus</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </MaxWidthWrapper>
        </>
    );
};

export default AdminPage;
