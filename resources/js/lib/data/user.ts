import { User } from "../types/User";

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
        profileImageUrl:
            "https://s3-alpha-sig.figma.com/img/fe8b/f7a6/2d772475e6d62c28d9a18f469bcee494?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMKIg2P3rK5WVuDokZD2Gn0exB3Zoc7GLm8QeUnmd~aal-shS23m8rBzUDiPPTIla29C2OskM-MALS1Wktkd7wIrBwsUHmHb1IJnv-~ZcFJtDFs7ne1n9id8aBS-mzg1qCZbHjQay-CwfKu-7RTP0G3iWBFreh95Qdw54hEhWN6qWdLH-00BPvetAd7WUnFQl26vW~QeHoC85msotufDe6Ss~DAIkdCnfVLYoyQNALJI1a~FlMx9dYJBx7t0xdBGMteFdibe8jogIgT4clUpdoHozkaVupWSAlTbNITlwH7bKyQ6V~LjPcN82qpVMnK3I-aUbFrlwv1dEEMOb7ZGrQ__",
        instagramUrl: "https://www.instagram.com/radhinka.bagaskara/",
        linkedinUrl: "https://www.linkedin.com/in/cewe-anime-764572286/",
    })),
];
