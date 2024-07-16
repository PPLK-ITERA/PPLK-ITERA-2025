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
    bio: string;
    profileImageUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
    role_id?: number;
}
