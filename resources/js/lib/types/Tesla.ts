export type TeslaSoal = {
    nomor: number;
    tipe: string;
    pertanyaan: string;
    jawaban?: string;
};

export type TeslaFeedback = {
    message: string;
    hasil: string;
    jawaban_user?: string;
};

// Untuk admin (opsional, jika ingin akses jawaban)
export type TeslaSoalAdmin = {
    id: number;
    nomor: number;
    tipe: string;
    pertanyaan: string;
    jawaban: string;
    created_at?: string;
    updated_at?: string;
};