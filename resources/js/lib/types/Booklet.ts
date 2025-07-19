export interface Booklet {
  id: number;
  nama_booklet: string;
  url_booklet: string;
  // deadline?: string; // Optional, since it can be null
  created_at: string;
  updated_at: string;
}

// Data booklets yang sesuai dengan interface Booklet
const booklets: Booklet[] = [
  {
    id: 1,
    nama_booklet: "Booklet Panduan Akademik",
    url_booklet: "https://example.com/booklet1.pdf",
    created_at: "2025-01-15T08:00:00Z",
    updated_at: "2025-01-15T08:00:00Z",
  },
  {
    id: 2,
    nama_booklet: "Booklet Orientasi Mahasiswa",
    url_booklet: "https://example.com/booklet2.pdf",
    created_at: "2025-01-16T09:30:00Z",
    updated_at: "2025-01-16T09:30:00Z",
  },
  {
    id: 3,
    nama_booklet: "Booklet Kegiatan Ekstrakurikuler",
    url_booklet: "https://example.com/booklet3.pdf",
    created_at: "2025-01-17T10:15:00Z",
    updated_at: "2025-01-17T10:15:00Z",
  },
  {
    id: 4,
    nama_booklet: "Booklet Prosedur Administrasi",
    url_booklet: "https://example.com/booklet4.pdf",
    created_at: "2025-01-18T11:45:00Z",
    updated_at: "2025-01-18T11:45:00Z",
  },
  {
    id: 5,
    nama_booklet: "Booklet Fasilitas Kampus",
    url_booklet: "https://example.com/booklet5.pdf",
    created_at: "2025-01-19T14:20:00Z",
    updated_at: "2025-01-19T14:20:00Z",
  },
  {
    id: 6,
    nama_booklet: "Booklet Kode Etik Mahasiswa",
    url_booklet: "https://example.com/booklet6.pdf",
    created_at: "2025-01-20T16:00:00Z",
    updated_at: "2025-01-20T16:00:00Z",
  },
];

export default booklets;
