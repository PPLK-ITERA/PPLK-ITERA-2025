export interface User {
    id: number;
    name: string;
    followers: number;
    following: number;
    viewer: number;
    nim: number;
    prodi: string;
    kelompok: number;
    namaKelompok: string;
    batch: number;
    quote: string;
    profileImageUrl: string;
    socialLinks: { instagram: string; linkedin: string };
}
