// export export interface Tugas {
//     created_at: string;
//     deadline: string;
//     deskripsi: string;
//     id: number;
//     judul: string;
//     kartu_id: number;
//     kategori: string;
//     pengumpulan: string;
//     updated_at: string;
// }

// export export interface CardType {
//     created_at: string;
//     hari: number;
//     id: number;
//     is_selesai: boolean;
//     kelompok_id: number;
//     poster_url: string | null;
//     tanggal: string;
//     tugas: Tugas[];
//     updated_at: string;
// }

// export export interface History {
//     created_at: string;
//     id: number;
//     isReturn: number;
//     jawaban: string;
//     catatan: string;
//     tanggal_submit: string;
//     tugas_id: number;
//     tugas: Tugas;
//     updated_at: string;
//     user_id: number;
// }

// export export interface ResponseData {
//     cards: CardType[];
//     completionPercentage: { [key: number]: number };
//     history: History[];
//     memberCompletion: { [key: number]: number };
//     totalMembers: number;
//     tugasCount: { [key: number]: number };
//     isSubmitted: { [key: number]: boolean };
// }

export interface TugasMading {
    id: number;
    judul: string;
}

// export Interface for an entry in the history log
export interface HistoryEntry {
    id: number;
    user_id: number;
    tugas_id: number;
    jawaban: string;
    isReturn: boolean;
    tanggal_submit: string;
    catatan: string | null;
    tugas: TugasMading;
}

// export Interface for the properties related to the card
export interface CardType {
    completionPercentage: number[];
    cardOpen: boolean[];
    posters: (string | null)[];
}

// Root export interface to hold all data
export interface TaskSystem {
    isSelesai: boolean;
    card: CardType;
    history: HistoryEntry[];
}

export interface Tugas {
    id: number;
    judul: string;
    deskripsi: string;
    hari: string;
    tipe_link: string;
    kategori: string;
    deadline: string;
}

// Root interface for the whole data structure
export interface TaskData {
    tugas: Tugas[];
    isSubmitted: boolean;
}

// export interface History {
//     id: number;
//     user_id: number;
//     tugas_id: number;
//     jawaban: string;
//     tanggal_submit: string;
//     isReturn: boolean;
//     catatan: string;
//     tugas: Tugas;
// }
