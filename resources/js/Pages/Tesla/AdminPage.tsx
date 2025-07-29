import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import { Card } from "@/Components/ui/card";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

type Soal = {
    id: number;
    nomor: number;
    tipe: string;
    pertanyaan: string;
    jawaban: string;
};

const emptySoal = { id: 0, nomor: 0, tipe: "mendatar", pertanyaan: "", jawaban: "" };

const AdminPage: React.FC = () => {
    const [soals, setSoals] = useState<Soal[]>([]);
    const [form, setForm] = useState<Soal>(emptySoal);
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");

    const fetchSoals = async () => {
        const res = await fetch("/api/tesla/");
        const result = await res.json();
        setSoals(result.data || []);
    };

    useEffect(() => {
        fetchSoals();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        const method = editing ? "PUT" : "POST";
        const url = editing ? `/api/tesla/${form.id}` : "/api/tesla/";
        const payload = { ...form, nomor: Number(form.nomor) };
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
        if (!confirm("Yakin hapus soal ini?")) return;
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
            <Navbar isFixed={true} />
            <MaxWidthWrapper className="py-8 mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center text-jaffa-700">Admin TTS Tesla</h2>
                <Card className="p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">{editing ? "Edit Soal" : "Tambah Soal"}</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div>
                            <label className="mr-2">Tipe:</label>
                            <select name="tipe" value={form.tipe} onChange={handleChange} className="border rounded px-2 py-1">
                                <option value="mendatar">Mendatar</option>
                                <option value="menurun">Menurun</option>
                            </select>
                        </div>
                        <div>
                            <label className="mr-2">Nomor:</label>
                            <input name="nomor" type="number" value={form.nomor} onChange={handleChange} className="border rounded px-2 py-1" required />
                        </div>
                        <div>
                            <label className="mr-2">Pertanyaan:</label>
                            <input name="pertanyaan" type="text" value={form.pertanyaan} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
                        </div>
                        <div>
                            <label className="mr-2">Jawaban:</label>
                            <input name="jawaban" type="text" value={form.jawaban} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
                        </div>
                        <div>
                            <button type="submit" className="bg-jaffa-500 hover:bg-jaffa-600 text-white px-4 py-2 rounded">
                                {editing ? "Update" : "Tambah"}
                            </button>
                            {editing && (
                                <button type="button" className="ml-2 px-4 py-2 rounded border" onClick={() => { setForm(emptySoal); setEditing(false); }}>
                                    Batal
                                </button>
                            )}
                        </div>
                        {message && <div className="text-green-600">{message}</div>}
                    </form>
                </Card>
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Daftar Soal</h3>
                    <table className="w-full border">
                        <thead>
                            <tr>
                                <th className="border px-2 py-1">ID</th>
                                <th className="border px-2 py-1">Nomor</th>
                                <th className="border px-2 py-1">Tipe</th>
                                <th className="border px-2 py-1">Pertanyaan</th>
                                <th className="border px-2 py-1">Jawaban</th>
                                <th className="border px-2 py-1">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {soals.map(soal => (
                                <tr key={soal.id}>
                                    <td className="border px-2 py-1">{soal.id}</td>
                                    <td className="border px-2 py-1">{soal.nomor}</td>
                                    <td className="border px-2 py-1">{soal.tipe}</td>
                                    <td className="border px-2 py-1">{soal.pertanyaan}</td>
                                    <td className="border px-2 py-1">{soal.jawaban}</td>
                                    <td className="border px-2 py-1">
                                        <button className="text-blue-600 mr-2" onClick={() => handleEdit(soal)}>Edit</button>
                                        <button className="text-red-600" onClick={() => handleDelete(soal.id)}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </MaxWidthWrapper>
        </>
    );
};

export default AdminPage;
