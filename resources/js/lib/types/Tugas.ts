export type tugasData = {
  no: number;
  tugas: {
    id: number;
    kategori_tugas: string;
    link: string;
    materi: string;
    user_id: number;
    user: {
      id: number;
      name: string;
      nim: string;
      email: string;
      isFirstTime: boolean;
      photo_profile_url: string;
      linkedin_url: string;
      instagram_url: string;
      bio: string | null;
      link_sertif: string | null;
      kelompok_id: number;
      is_ketua_kelompok: boolean; // Atau bisa boolean jika hanya 0 dan 1 yang digunakan
      score: number;
      view_count: number;
      prodi_id: number;
      penyakit_id: number;
      role_id: number;
      isKetua: boolean;
    };
  };
};
