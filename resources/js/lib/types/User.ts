export interface User {
    id: number;
    name: string;
    followers: number;
    following: number;
    nim: number;
    prodi: string;
    batch: number;
    quote: string;
    profileImageUrl: string;
    socialLinks: { instagram: string; linkedin: string };
}
