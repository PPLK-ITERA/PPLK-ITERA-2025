import React from "react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const embedLinks = {
    "hymne-itera":
        "https://www.youtube.com/embed/DGXzReYJFkQ?si=mCJEGj4NQaNgdJZM",
    "mars-itera":
        "https://www.youtube.com/embed/4qMGuIJzZiE?si=GuHoxqZdrEMSQVoA",
    "anthem-pplk":
        "https://www.youtube.com/embed/G6U5Ub6v4SU?si=YFGiH8Ed4SImjL_C",
};

const LYRICS = {
    "hymne-itera": [
        {
            id: 1,
            lines: [
                "Institut Teknologi Sumatera",
                "Pewaris perdaban bangsa",
                "Junjung martabat tiada cela",
                "Nilai budaya nusantara",
            ],
        },
        {
            id: 2,
            lines: [
                "Kreasi ilmu dan teknologi",
                "Luhur budi dan citra seni",
                "Wujudkan impian generasi",
                "Harapan sang Ibu Pertiwi",
            ],
        },
        {
            id: 3,
            lines: [
                "Jujur, amanah adil nan anggun",
                "Tanggung jawab dan sopan santun",
                "Nilai integritas yang menuntun",
                "Langkah hidup giat membangun",
            ],
        },
        {
            id: 4,
            lines: [
                "Cahaya ilahi kan memandu",
                "Tekad Tangguh kokoh Bersatu",
                "Demi makna bakti tridharmaku",
                "Itera tuk Indonesiaku",
            ],
        },
    ],
    "mars-itera": [
        {
            id: 1,
            lines: [
                "Institut Teknologi Sumatera",
                "Dari Sumatera untuk Indonesia",
                "Rupa warna pemuda nusantara",
                "Sumber daya manusia tuk dunia",
            ],
        },
        {
            id: 2,
            lines: [
                "Civitas akademika kita",
                "Berkarya dan cipta abdi jasa mulia",
                "Berbudaya berjiwa pancasila",
                "Untuk Indonesia negri tercinta",
            ],
        },
        {
            id: 3,
            lines: [
                "ITERA cemerlang tekun berkiprah",
                "ITERA gemilang tulis sejarah",
                "Tridarma ITERA demi negara",
                "Raih peradaban maju dan jaya",
            ],
        },
        {
            id: 4,
            lines: [
                "Inovasi ilmu dan teknologi",
                "Kita persembahkan tuk harumkan negri",
                "Masa depan penuh cita dan mimpi",
                "Semangat kita jelang dengan pasti",
            ],
        },
        {
            id: 5,
            lines: [
                "Nilai integritas tanam dihati",
                "Jujur sopan santun amanah dan adil",
                "Tanggung jawab k'lola waktu dan diri",
                "Penggerak dan teladan generasi",
            ],
        },
        {
            id: 6,
            lines: [
                "ITERA cemerlang tekun berkiprah",
                "ITERA gemilang tulis sejarah",
                "Tridarma ITERA demi negara",
                "Raih peradaban jaya",
            ],
        },
    ],
    "anthem-pplk": [
        {
            id: 1,
            lines: [
                "Ooo ooo, Ooo ooo",
                "Hari ini ku melangkah tinggalkan rumah",
                "Berjuang demi masa depan yang cerah",
                "Kuteguhkan tekadku kembangkan bakat",
                "Agar kubisa lebih bermanfaat",
                "Merajut mimpi seindah asa",
                "Kita percaya kita pasti bisa",
            ],
        },
        {
            id: 2,
            lines: [
                "Reff:",
                "Kita ada di PPLK ITERA",
                "Mengawali semua perjuangan kita",
                "Mencetak generasi penerus bangsa",
                "Generasi emas Indonesia",
            ],
        },
        {
            id: 3,
            lines: ["Ooo ooo, Ooo ooo"],
        },
        {
            id: 4,
            lines: [
                "Rap:",
                '"Kita mulai langkah ini dari ITERA',
                "Berjuang keras, bangun bangsa, jangan pernah menyerah",
                "Kami datang dari pelosok, dari semua sudut negeri",
                'Bersatu padu di sini, kuatkan tekad dan visi"',
            ],
        },
        {
            id: 5,
            lines: [
                "Jawa:",
                '"Raih mimpi seduwur langit, gapai kabeh cita',
                'Dewe generasi emas, delokke semangat membara"',
            ],
        },
        {
            id: 6,
            lines: [
                "Lampung:",
                "Anjak ITERA guwai indonesia,",
                "Generasei mas, lapah, gham menjak jamo bekhjayou",
            ],
        },
        {
            id: 7,
            lines: [
                "Palembang:",
                "Di PPLK kito belajar membangun karakter kuat",
                "Samo kawan baru, laju kito nambah mantap",
                "Dak galak mundur, terus maju, itu dio motto kito",
                "Bukak mato, bangun cinto, untuk bangso tercinto",
            ],
        },
        {
            id: 8,
            lines: [
                "Batak:",
                "Hita sude i ITERA on,",
                "marsada, marhiteon",
                "Berjuang ditoruni merah putih na dison",
            ],
        },
        {
            id: 9,
            lines: [
                "Minang:",
                "Dari Minang tibo di ITERA,",
                "Anak rantau basatu di arena,",
                "PPLK kini waktunyo kito basatu,",
                "Semangat juang tinggi, jan sampai diragu.",
            ],
        },
        {
            id: 10,
            lines: [
                "Reff:",
                "Kita ada di PPLK ITERA",
                "Mengawali semua perjuangan kita",
                "Mencetak generasi penerus bangsa",
                "Generasi emas Indonesia",
                "Raih mimpi",
                "Gapai cita",
                "Kita luar biasa",
                "Buka mata",
                "Bangun cinta",
                "Untuk Indonesia",
            ],
        },
        {
            id: 11,
            lines: ["Oooooo, Ooooooo"],
        },
        {
            id: 12,
            lines: [
                "Reff:",
                "Kita ada di PPLK ITERA",
                "Mengawali semua perjuangan kita",
                "Mencetak generasi penerus bangsa",
                "Generasi emas…Generasi emas.",
                "Generasi emas Indonesia",
            ],
        },
    ],
};

export default function Page() {
    return (
        <DefaultLayout isSolid={true}>
            <div className="min-h-screen py-[100px] bg-pattern-white font-montserrat">
                <Tabs defaultValue="hymne-itera" className="max-w-6xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="hymne-itera">
                            Hymne Itera
                        </TabsTrigger>
                        <TabsTrigger value="mars-itera">Mars Itera</TabsTrigger>
                        <TabsTrigger value="anthem-pplk">
                            Anthem PPLK
                        </TabsTrigger>
                    </TabsList>

                    {Object.entries(LYRICS).map(([key, verses]) => (
                        <TabsContent key={key} value={key}>
                            <Card className="md:p-5 p-0 rounded-md">
                                <div className="max-w-lg mx-auto">
                                    <div className="bg-jaffa-600 aspect-video rounded-xl flex items-center justify-center w-full h-full mx-auto overflow-hidden shadow-md">
                                        <iframe
                                            className="w-full h-full"
                                            src={embedLinks[key]}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>

                                <CardHeader className="mt-10">
                                    <CardTitle className="font-avigea font-bold text-center">
                                        {key.replace("-", " ").toUpperCase()}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 text-center text-[14px] md:text-[20px]">
                                    {verses.map((verse) => (
                                        <div
                                            key={verse.id}
                                            className="space-y-1"
                                        >
                                            {verse.lines.map((line, index) => (
                                                <p
                                                    key={index}
                                                    className="text-center"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </DefaultLayout>
    );
}
