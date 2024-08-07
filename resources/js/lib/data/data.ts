import pilar_sdgs from "!assets/filosofi-pilar/4-pilar-sgds.png";
import angka_10 from "!assets/filosofi-pilar/angka-10.png";
import biji_emas from "!assets/filosofi-pilar/biji-emas.png";
import helai_daun from "!assets/filosofi-pilar/helai-daun.png";
import naungan_tangan from "!assets/filosofi-pilar/naungan-tangan.png";
import pulau_sumatera from "!assets/filosofi-pilar/pulau-sumatera.png";
import tetes_air from "!assets/filosofi-pilar/tetes-air.png";
import logopplk from "!assets/logo-pplk-2024.png";

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
    description?: string;
    role_id: number[];
}

export const navItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        label: "dashboard",
        role_id: [2, 3, 4, 5, 6, 7],
    },
    {
        title: "Tambah User",
        href: "/dashboard/create-user",
        icon: "user",
        label: "tambah-user",
        role_id: [3, 8],
    },
    {
        title: "Atur Maba",
        href: "/dashboard/atur-maba",
        icon: "user",
        label: "atur-maba",
        role_id: [3],
    },
    {
        title: "Atur Dapmen",
        href: "/dashboard/atur-dapmen",
        icon: "user",
        label: "atur-dapmen",
        role_id: [3, 8],
    },
    {
        title: "Atur PJ Prodi",
        href: "/dashboard/atur-pjprodi",
        icon: "user",
        label: "atur-pjprodi",
        role_id: [3, 8],
    },
    {
        title: "Atur Korlap",
        href: "/dashboard/atur-korlap",
        icon: "user",
        label: "atur-korlap",
        role_id: [3, 8],
    },
    {
        title: "Absensi Maba",
        href: "/dashboard/absensi-maba",
        icon: "notebook",
        label: "atur-absensi-maba",
        role_id: [2, 3, 4, 5],
    },
    {
        title: "Booklet",
        href: "/dashboard/booklet",
        icon: "book",
        label: "atur-booklet",
        role_id: [3, 7, 8],
    },
    {
        title: "Materi",
        href: "/dashboard/materi",
        icon: "books",
        label: "atur-materi",
        role_id: [3, 7, 8],
    },
    {
        title: "FAQ",
        href: "/dashboard/faq",
        icon: "question",
        label: "atur-faq",
        role_id: [3, 8],
    },
    {
        title: "Mading",
        href: "/dashboard/mading",
        icon: "map",
        label: "atur-mading",
        role_id: [2, 3, 4, 8],
    },
    {
        title: "Informasi Kelompok",
        href: "/dashboard/informasi-kelompok",
        icon: "map",
        label: "atur-informasi-kelompok",
        role_id: [2, 3, 4, 8],
    },
    {
        title: "Game Offline",
        href: "/dashboard/game-offline",
        icon: "game",
        label: "atur-informasi-kelompok",
        role_id: [2, 3, 4, 5, 8],
    },
    {
        title: "CUI",
        href: "/dashboard/cui",
        icon: "ticket",
        label: "atur-cui",
        role_id: [3],
    },
];

export type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_birth: string; // Consider using a proper date type if possible
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    longitude?: number; // Optional field
    latitude?: number; // Optional field
    job: string;
    profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type User = {
    id: number;
    name: string;
    company: string;
    role: string;
    verified: boolean;
    status: string;
};
export const users: User[] = [
    {
        id: 1,
        name: "Candice Schiner",
        company: "Dell",
        role: "Frontend Developer",
        verified: false,
        status: "Active",
    },
    {
        id: 2,
        name: "John Doe",
        company: "TechCorp",
        role: "Backend Developer",
        verified: true,
        status: "Active",
    },
    {
        id: 3,
        name: "Alice Johnson",
        company: "WebTech",
        role: "UI Designer",
        verified: true,
        status: "Active",
    },
    {
        id: 4,
        name: "David Smith",
        company: "Innovate Inc.",
        role: "Fullstack Developer",
        verified: false,
        status: "Inactive",
    },
    {
        id: 5,
        name: "Emma Wilson",
        company: "TechGuru",
        role: "Product Manager",
        verified: true,
        status: "Active",
    },
    {
        id: 6,
        name: "James Brown",
        company: "CodeGenius",
        role: "QA Engineer",
        verified: false,
        status: "Active",
    },
    {
        id: 7,
        name: "Laura White",
        company: "SoftWorks",
        role: "UX Designer",
        verified: true,
        status: "Active",
    },
    {
        id: 8,
        name: "Michael Lee",
        company: "DevCraft",
        role: "DevOps Engineer",
        verified: false,
        status: "Active",
    },
    {
        id: 9,
        name: "Olivia Green",
        company: "WebSolutions",
        role: "Frontend Developer",
        verified: true,
        status: "Active",
    },
    {
        id: 10,
        name: "Robert Taylor",
        company: "DataTech",
        role: "Data Analyst",
        verified: false,
        status: "Active",
    },
];

export const DataFilosofiLogo = [
    {
        image: helai_daun,
        title: "Helai Daun",
        description: "Helai Daun memiliki arti Keteduhan dan Kesejukan",
    },
    {
        image: angka_10,
        title: "Angka 10",
        description: "Angka 10 mengartikan 1 dekade PPLK ITERA",
    },
    {
        image: pilar_sdgs,
        title: "4 Pilar SDG's",
        description:
            "4 Pilar SDGs sebagai pondasi dasar dari tujuan keseluruhan acara PPLK ITERA 2024",
    },
    {
        image: pulau_sumatera,
        title: "Pulau Sumatera",
        description:
            "Pulau Sumatera merepresentasikan tempat dimana Kampus ITERA berdiri dan akan menciptakan manusia terbaik di Indonesia",
    },
    {
        image: tetes_air,
        title: "Tetes Air",
        description:
            "Tetes Air merepresentasikan bukti dari proses dalam mencapai Indonesia Emas 2045",
    },
    {
        image: naungan_tangan,
        title: "Naungan Tangan",
        description:
            "Naungan Tangan memiliki arti PPLK ITERA menjadi naungan untuk mahasiswa baru mengenal lingkungan Kampusnya",
    },
    {
        image: biji_emas,
        title: "Biji Emas",
        description:
            "Biji Emas merepresentasikan keberhasilan Indonesi Emas 2045",
    },
];

export const InformasiInfoSection = [
    { title: "Informasi Fakultas", href: "/informasi/fakultas" },
    { title: "Informasi HMPS & PRODI", href: "/informasi/prodi" },
    { title: "Informasi UPT", href: "/informasi/upt" },
    { title: "Informasi KM ITERA", href: "/informasi/km" },
    { title: "Informasi UKM ITERA", href: "/informasi/ukm" },
];

export const InformasiFooter = [
    { title: "Tentang PPLK 2024", href: "/informasi/pplk" },
    { title: "Informasi Fakultas", href: "/informasi/fakultas" },
    { title: "Informasi HMPS & PRODI", href: "/informasi/prodi" },
    { title: "Informasi UPA", href: "/informasi/upa" },
    { title: "Informasi KM ITERA", href: "/informasi/km" },
    { title: "Informasi UKM ITERA", href: "/informasi/ukm" },
];

export const FooterLink = [
    { title: "Instagram", href: "https://www.instagram.com/pplkitera/" },
    { title: "Youtube", href: "https://www.youtube.com/@pplkitera413" },
];

export const DataAtribut = [
    {
        day: "Atribut Hari Pertama",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Kedua",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Ketiga",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Keempat",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Kelima",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
];
