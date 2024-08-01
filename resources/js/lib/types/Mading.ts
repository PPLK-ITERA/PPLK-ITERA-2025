export interface Tugas {
    created_at: string;
    deadline: string;
    deskripsi: string;
    id: number;
    judul: string;
    kartu_id: number;
    kategori: string;
    pengumpulan: string;
    updated_at: string;
}

export interface CardType {
    created_at: string;
    hari: number;
    id: number;
    is_selesai: boolean;
    kelompok_id: number;
    poster_url: string | null;
    tanggal: string;
    tugas: Tugas[];
    updated_at: string;
}

export interface History {
    created_at: string;
    id: number;
    isReturn: number;
    jawaban: string;
    catatan: string;
    tanggal_submit: string;
    tugas_id: number;
    tugas: Tugas;
    updated_at: string;
    user_id: number;
}

export interface ResponseData {
    cards: CardType[];
    completionPercentage: { [key: number]: number };
    history: History[];
    memberCompletion: { [key: number]: number };
    totalMembers: number;
    tugasCount: { [key: number]: number };
    isSubmitted: { [key: number]: boolean };
}
