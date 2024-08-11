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
  profileImageUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  role_id: number;
  followed: boolean;
}

export interface UserMaba {
  no: number; // Assuming 'no' is a number
  id: number; // Assuming 'id' is a number
  user: {
    name: string;
    nim: string;
    email: string;
    role: string;
    isKetua: boolean;
    pilar: {
      id: number;
      nama: string;
      hasil: {
        sifat_1: number;
        sifat_2: number;
        sifat_3: number;
      };
    };
  };
  // isKetuaExist: boolean;
}

export interface UserAuthProps {
  email: string;
  id: number;
  name: string;
  role_id: number;
  isKetua: boolean;
}
