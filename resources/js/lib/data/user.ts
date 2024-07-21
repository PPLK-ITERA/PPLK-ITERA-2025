import { User } from "../types/User";

import logopplk from "!assets/logo-pplk-2024.png";

export const users: User[] = [
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: i + 2,
        name: `Rahmat Aldi Nasda${i + 1}`,
        followers: 80 * (i + 1),
        following: 150 * (i + 1),
        viewer: 1000 * (i + 1),
        nim: 122140000 + (i + 1),
        prodi: `Teknik Informatika${i + 1}`,
        namaKelompok: `Budaya FC ${i + 1}`,
        kelompok: i,
        bio: `saya user ${i + 1}`,
        profileImageUrl: logopplk,
        instagramUrl: "https://www.instagram.com/radhinka.bagaskara/",
        linkedinUrl: "https://www.linkedin.com/in/cewe-anime-764572286/",
    })),
];
