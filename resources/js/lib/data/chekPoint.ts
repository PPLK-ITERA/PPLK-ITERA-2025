import bg_1 from "!assets/checkPoint/bg-1.png";
import bg_2 from "!assets/checkPoint/bg-2.png";
import bg_3 from "!assets/checkPoint/bg-3.png";
import bg_4 from "!assets/checkPoint/bg-4.png";
import bg_5 from "!assets/checkPoint/bg-5.png";
import cui from "!assets/checkPoint/cui.png";

export interface DataChekPoin {
    name: string,
    title: string,
    description1: string,
    description2: string,
    bg_image: any,
    checkBoxData: any[],
}

export const Data_Page_ChekPoint = [
    {
        name: "pra-pplk",
        title: "QUEST PRA PPLK",
        description1: "Hallo Satriya ITERA, selamat telah menyelesaikan Day 0 PPLK! Berikut adalah tantangan untuk Day 0, yang berisi:",
        bg_image: bg_1,
        checkBoxData: [
            {
                1: "POST 1",
                2: "POST 2",
                3: "POST 3",
                4: "POST 4",
                5: "POST 5",
            },
        ],
        description2: "Pada hari ini, kalian telah melaksanakan Pra-PPLK di mana kalian sudah mulai mengenal lingkungan Kampus ITERA, memahami titik-titik penting yang akan menjadi bagian dari kehidupan perkuliahan, serta membangun kerja sama dengan teman-teman baru. Semoga pengalaman ini menjadi awal yang menyenangkan, penuh semangat, dan memotivasi kalian untuk terus berpartisipasi aktif dalam setiap rangkaian kegiatan PPLK selanjutnya."
    },
    {
        name: "day-0",
        title: "QUEST DAY 0",
        description1: "Hallo Satriya ITERA, selamat telah menyelesaikan Day 0 PPLK! Berikut adalah tantangan untuk Day 0, yang berisi:",
        bg_image: bg_2,
        checkBoxData: [
            {
                1: "Sidang PMB dan Pengenalan Pimpinan ITERA",
                2: "Materi Pemahaman Pancasila Sebagai Ideologi Negara",
                3: "Materi Peran Generasi Muda Dalam Membangun Kota yang Maju, Inklusif, dan Berdaya Saing",
                4: "Materi Literasi Finansial",
            },
        ],
        description2: "Pada hari ini, kalian telah mengikuti Sidang PMB, Materi Pengenalan Pimpinan ITERA, Materi Pemahaman Pancasila Sebagai Ideologi Negara, Materi Peran Generasi Muda Dalam Membangun Kota yang Maju, Inklusif, dan Berdaya Saing, dan Materi Literasi Finansial. Semua kegiatan ini adalah langkah awal untuk memahami lingkungan kampus dan menjadi mahasiswa yang berdaya saing. Semoga ini menjadi awal yang baik untuk perjalanan Satriya di ITERA"
    },
    {
        name: "day-1",
        title: "QUEST DAY 1",
        description1: "Hallo Satriya ITERA, selamat telah menyelesaikan Day 1 PPLK! Berikut adalah tantangan untuk Day 1, yang berisi:",
        bg_image: bg_3,
        checkBoxData: [
            {
                1: "Materi Pengenalan Sistem Pendidikan Tinggi dan Peraturan Akademik",
                2: "Materi Hukum Positif dan Pencegahan Narkotika",
                3: "Materi PKKPT, PPSDM, dan Komdis",
                4: "Materi KM dan Senat ITERA",
                5: "Materi Kesadaran Lingkungan Hidup",
            },
        ],
        description2: "Pada hari ini, kalian telah menyelesaikan materi Pengenalan Sistem Pendidikan Tinggi dan Peraturan Akademik, Materi Hukum Positif dan Pencegahan Narkotika, Materi PKKPT, PPSDM, dan Komdis, Materi KM dan Senat ITERA dan Materi Kesadaran Lingkungan Hidup. Semua materi ini akan membantu membentuk karakter pribadi yang kuat dan bertanggung jawab. Semoga setiap ilmu yang didapat menjadi bekal berharga untuk masa depan Satriya ITERA"
    },
    {
        name: "day-2",
        title: "QUEST DAY 2",
        description1: "Hallo Satriya, selamat telah menyelesaikan Day 2 PPLK! Berikut adalah tantangan untuk Day 2, yang berisi:",
        bg_image: bg_4,
        checkBoxData: [
            {
                1: "PPLK FAKULTAS (FTI) dan Materi Mahasiswa Berprestasi",
                2: "PPLK PRODI (FTI)",
                3: "LKMM PRA-TD (FS & FTIK)",
            },
        ],
        description2: "Pada hari ini, kalian telah mengikuti PPLK FAKULTAS (FTI) dan Materi Mahasiswa Berprestasi, PPLK PRODI (FTI) dan LKMM PRA-TD (FS & FTIK). Satrya ITERA telah memulai perjalanan di fakultas dan program studi masing-masing, yang merupakan bagian penting dari identitas kalian sebagai mahasiswa. Semoga para Satriya menemukan semangat dan inspirasi baru di fakultas dan prodi masing-masing."
    },
    {
        name: "day-3",
        title: "QUEST DAY 3",
        description1: "Hallo Satriya, selamat telah menyelesaikan Day 3 PPLK! Berikut adalah tantangan untuk Day 3, yang berisi:",
        bg_image: bg_5,
        checkBoxData: [
            {
                1: "PPLK FAKULTAS (FS & FTIK) dan Materi Mahasiswa Berprestasi",
                2: "PPLK PRODI (FS & FTIK)",
                3: "LKMM PRA-TD (FTI)",
            },
        ],
        description2: "Pada hari ini, kalian telah mengikuti PPLK FAKULTAS (FS & FTIK) dan Materi Mahasiswa Berprestasi, PPLK PRODI (FS & FTIK) dan LKMM PRA-TD (FTI). Satriya ITERA telah mendalami fakultas dan prodi Satriya ITERA, serta mengembangkan keterampilan kepemimpinan. Ini adalah kesempatan emas untuk tumbuh dan menjadi lebih baik. Semoga Satriya ITERA semakin termotivasi untuk belajar dan berorganisasi"
    },
    {
        name: "cui",
        title: "QUEST C.U.I",
        description1: "Hallo Satriya, selamat telah menyelesaikan Day 4 atau Last day PPLK! Berikut adalah tantangan untuk Day 4, yang berisi:",
        bg_image: cui,
        checkBoxData: [
            {
                1: "PAPER MOB",
                2: "DRAMA MUSIKAL",
                3: "C.U.I",
            },
        ],
        description2: "Pada hari terakhir ini, kalian akan melaksanakan PAPER MOB, melihat DRAMA MUSIKAL, dan C.U.I. Ini adalah puncak dari perjuangan dan kerja keras Satriya ITERA selama ini, serta waktu untuk merayakan pencapaian bersama. Selamat atas keberhasilan Satriya ITERA dan semoga persahabatan yang terjalin akan abadi."
    },
];