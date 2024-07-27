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
    role_id: number;
}

export interface UserMaba {
    no: number; // Assuming 'no' is a number
    id: number; // Assuming 'id' is a number
    user: {
        name: string;
        nim: string;
        email: string;
        role: string;
    };
}

export interface UserAuthProps {
    email: string;
    id: number;
    name: string;
    role_id: number;
}
