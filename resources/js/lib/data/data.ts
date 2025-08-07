import angka_11 from "!assets/filosofi-pilar/angka 11 abu2.png";
import helm_sparta from "!assets/filosofi-pilar/helm sparta.png";
import ornamen_lampung from "!assets/filosofi-pilar/ornamen lampung.png";
import pedang_kebawah from "!assets/filosofi-pilar/pedang kebawah.png";
import perisai_yunani from "!assets/filosofi-pilar/perisai hitam.png";
import biji_emas from "!assets/filosofi-pilar/biji-emas.png";
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
    icon: "mahkota",
    label: "tambah-user",
    role_id: [3, 8],
  },
  {
    title: "Atur Maba",
    href: "/dashboard/atur-maba",
    icon: "users",
    label: "atur-maba",
    role_id: [2, 3, 4],
  },
  {
    title: "Atur Dapmen",
    href: "/dashboard/atur-dapmen",
    icon: "userCog",
    label: "atur-dapmen",
    role_id: [3, 8],
  },
  {
    title: "Atur PJ Prodi",
    href: "/dashboard/atur-pjprodi",
    icon: "userCheck",
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
    label: "game-offline",
    role_id: [2, 3, 4, 6, 8],
  },
  {
    title: "CUI",
    href: "/dashboard/cui",
    icon: "ticket",
    label: "atur-cui",
    role_id: [3, 6],
  },
  {
    title: "Pengumpulan Tugas",
    href: "/dashboard/pengumpulan-tugas",
    icon: "bookCheck",
    label: "atur-pengumpulan-tugas",
    role_id: [7, 3, 8],
  },
  {
    title: "Dokumentasi",
    // href: {route("dashboard.dokumentasi.index")},
    href: "/dashboard/dokumentasi/view",
    icon: "image",
    label: "Dokumentasi",
    role_id: [2, 4, 5, 6, 7, 8],
  },
  {
    title: "Dokumentasi",
    // href: {route("dashboard.dokumentasi.index")},
    href: "/dashboard/dokumentasi/",
    icon: "image",
    label: "Dokumentasi",
    role_id: [3],
  },
  {
    title: "Tesla",
    // href: {route("dashboard.dokumentasi.index")},
    href: "/dashboard/tesla",
    icon: "tesla",
    label: "Tesla",
    role_id: [3],
  },
  {
    title: "Komdis",
    // href: {route("dashboard.dokumentasi.index")},
    href: "/dashboard/komdis",
    icon: "ticket",
    label: "Komdis",
    role_id: [3,6],
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
    image: angka_11,
    title: "ANGKA 11",
    description:
    "Menandakan bahwa tahun ini merupakan Tahun ke-11 ITERA sudah berdiri. Sebuah penanda perjalanan panjang dalam membentuk karakter awal para mahasiswa baru.",
  },
  {
    image: perisai_yunani,
    title: "PERISAI YUNANI",
    description: "Merupakan ciri khas dari perisai Yunani Kuno yang menjadi tema utama PPLK tahun ini. Bentuk V juga melambangkan victory (kemenangan), sejalan dengan semangat juang dan keberhasilan yang diharapkan dari para peserta.",
  },
  {
    image: helm_sparta,
    title: "HELM SPARTA",
    description: "Melambangkan keberanian, disiplin, dan semangat juang para Satriya ITERA. Helm ini menjadi simbol kesiapan menghadapi tantangan serta keteguhan hati dalam menjunjung nilai-nilai integritas.",
  },
  {
    image: ornamen_lampung,
    title: "ORNAMEN LAMPUNG",
    description: "Menggambarkan akar budaya lokal yang kuat, ukiran ini melambangkan ketegasan dan keseimbangan. Sebuah refleksi bahwa dalam keberagaman, mahasiswa ITERA tetap menjunjung nilai harmoni dan karakter yang kokoh.",
  },
  {
    image: pedang_kebawah,
    title: "PEDANG KEBAWAH",
    description: "Menandakan kesiapan para peserta PPLK dalam menerima, menjalani, dan menghadapi seluruh proses kegiatan yang akan berlangsung. Pedang yang tertancap ke bawah juga merepresentasikan kedamaian dan tekad yang telah disiapkan.",
  },
];

export const InformasiInfoSection = [
  { title: "Informasi Fakultas", href: "/informasi/fakultas" },
  { title: "Informasi HMPS & PRODI", href: "/informasi/prodi" },
  { title: "Informasi UPA", href: "/informasi/upa" },
  { title: "Informasi KM ITERA", href: "/informasi/km" },
  { title: "Informasi UKM ITERA", href: "/informasi/ukm" },
];

export const InformasiFooter = [
  { title: "Tentang PPLK 2025", href: "/informasi/pplk" },
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
