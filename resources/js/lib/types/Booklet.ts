export interface Booklet {
  id: number;
  nama_booklet: string;
  url_booklet: string;
  day: string; // Assuming day is a string representing the day number
  // deadline?: string; // Optional, since it can be null
  created_at: string;
  updated_at: string;
}
