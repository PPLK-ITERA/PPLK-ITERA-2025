export interface Kelompok {
    nama_kelompok: string;
    no_kelompok: string;
    daplok: string;
    mentor: string;
}

export interface User {
    id: number;
    name: string;
    nim: string;
    prodi: string;
    role: string;
    photo_profile_url: string;
    linkedin_url: string;
    instagram_url: string;
    kelompok: Kelompok;
    pilar: string;
    view_count: number;
    followers_count: number;
    followings_count: number;
    bio: string;
    qrcode: string;
}
