export interface Prodi {
  id: number;
  nama_prodi: string;
}

export interface Dapmen {
  id: number;
  name: string;
  prodi_id: number;
  prodi: Prodi;
}

export interface Kelompok {
  id: number;
  no_kelompok: string;
  nama_kelompok: string;
  logo_kelompok: string;
  daplok_id: number;
  mentor_id: number;
  mentor?: Dapmen | null;
  daplok?: Dapmen | null;

}
