export type LogBookCui = {
    no: number;
    id: number;
    user_id: number;
    status: string;
    waktu_izin: string;
    waktu_selesai: string;
    waktu_hadir: string;
    ket_izin: string;
    user: {
        name: string;
        nim: string;
        email: string;
        photo_profile_url: string;
        qrcode: string;
        nama_kelompok: string;
        penyakit: {
            pita: string;
            ket_penyakit: string;
        };
    };
};
