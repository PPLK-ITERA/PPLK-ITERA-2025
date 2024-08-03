export interface Kelompok {
    id: number;
    nama_kelompok: string;
    no_kelompok: string;
    logo_kelompok: string;
    daplok_id: number;
    mentor_id: number;
}

export interface DataTopTen {
    kelompok_id: number;
    total_score: number;
    kelompok: Kelompok;
}

export interface DataKelompokScore {
    kelompok_id: number;
    total_score: number;
    kelompok: Kelompok;
    position: number;
}
