import React, { useEffect, useState } from "react";
import { TeslaSoal, TeslaFeedback } from "@/lib/types/tesla";
import Navbar from "@/Components/Navbar";
import { Card } from "@/Components/ui/card";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

const TeslaPage: React.FC = () => {
    const [soals, setSoals] = useState<TeslaSoal[]>([]);
    const [jawaban, setJawaban] = useState<{ [key: number]: string }>({});
    const [feedback, setFeedback] = useState<{ [nomor: number]: TeslaFeedback }>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSoals = async () => {
            setLoading(true);
            const res = await fetch("/api/get-tesla");
            const data = await res.json();
            setSoals(data.data || []);
            setLoading(false);
        };
        fetchSoals();
    }, []);

    const handleChange = (nomor: number, value: string) => {
        setJawaban(prev => ({ ...prev, [nomor]: value }));
    };

    const handleSubmit = async (nomor: number) => {
        try {
            const trimmedJawaban = (jawaban[nomor] || "").trim();
            const res = await fetch(`/api/tesla/jawab/${nomor}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || "",
                },
                body: JSON.stringify({
                    jawaban: trimmedJawaban
                }),
            });
            const data = await res.json();
            setFeedback(prev => ({
                ...prev,
                [nomor]: {
                    message: data?.message || "Jawaban dikirim!",
                    hasil: data?.hasil || "",
                    jawaban_user: trimmedJawaban
                }
            }));
        } catch (err) {
            setFeedback(prev => ({
                ...prev,
                [nomor]: {
                    message: "Terjadi kesalahan.",
                    hasil: "error"
                }
            }));
        }
    };

    // Pisahkan soal mendatar dan menurun
    const mendatar = soals.filter(s => s.tipe === "mendatar");
    const menurun = soals.filter(s => s.tipe === "menurun");

    return (
        <>
            <Navbar isFixed={true} />
            <MaxWidthWrapper className="flex flex-col items-center justify-center min-h-screen py-8 mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center text-jaffa-700">TTS Tesla</h2>
                {loading ? (
                    <div className="text-center py-8">Memuat soal...</div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <Card className="p-6 bg-white shadow-md border">
                        <h3 className="text-xl font-semibold mb-4 text-jaffa-600">Mendatar</h3>
                        <div className="flex flex-col gap-4">
                            {mendatar.map(soal => (
                                <div key={soal.nomor} className="flex flex-col md:flex-row md:items-center gap-2">
                                    <span className="font-bold text-jaffa-500">{soal.nomor}.</span>
                                    <span className="flex-1">{soal.pertanyaan}</span>
                                    {/* Tidak tampilkan jawaban di sini */}
                                    <input
                                        className="border rounded px-2 py-1"
                                        type="text"
                                        value={jawaban[soal.nomor] || ""}
                                        onChange={e => handleChange(soal.nomor, e.target.value)}
                                    />
                                    <button
                                        className="bg-jaffa-500 hover:bg-jaffa-600 text-white px-3 py-1 rounded ml-2"
                                        onClick={() => handleSubmit(soal.nomor)}
                                    >
                                        Jawab
                                    </button>
                                    {feedback[soal.nomor] && (
                                        <span className={`ml-2 font-semibold ${feedback[soal.nomor].hasil === "benar" ? "text-green-600" : feedback[soal.nomor].hasil === "salah" ? "text-red-600" : "text-orange-600"}`}>
                                            {feedback[soal.nomor].message}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="p-6 bg-white shadow-md border">
                        <h3 className="text-xl font-semibold mb-4 text-jaffa-600">Menurun</h3>
                        <div className="flex flex-col gap-4">
                            {menurun.map(soal => (
                                <div key={soal.nomor} className="flex flex-col md:flex-row md:items-center gap-2">
                                    <span className="font-bold text-jaffa-500">{soal.nomor}.</span>
                                    <span className="flex-1">{soal.pertanyaan}</span>
                                    {/* Tidak tampilkan jawaban di sini */}
                                    <input
                                        className="border rounded px-2 py-1"
                                        type="text"
                                        value={jawaban[soal.nomor] || ""}
                                        onChange={e => handleChange(soal.nomor, e.target.value)}
                                    />
                                    <button
                                        className="bg-jaffa-500 hover:bg-jaffa-600 text-white px-3 py-1 rounded ml-2"
                                        onClick={() => handleSubmit(soal.nomor)}
                                    >
                                        Jawab
                                    </button>
                                    {feedback[soal.nomor] && (
                                        <span className={`ml-2 font-semibold ${feedback[soal.nomor].hasil === "benar" ? "text-green-600" : feedback[soal.nomor].hasil === "salah" ? "text-red-600" : "text-orange-600"}`}>
                                            {feedback[soal.nomor].message}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                )}
            </MaxWidthWrapper>
        </>
    );
};

export default TeslaPage;

