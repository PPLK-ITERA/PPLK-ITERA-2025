import { SoalEntry } from "./columns";
import { Button } from "@/Components/ui/button";

interface CellActionProps {
  data: SoalEntry;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // ...implementasi aksi edit/hapus sesuai kebutuhan...
  // Untuk contoh, hanya tampilkan tombol edit & hapus (tanpa aksi)
  return (
    <div className="flex gap-2">
      <Button size="sm" variant="outline">Edit</Button>
      <Button size="sm" variant="destructive">Hapus</Button>
    </div>
  );
};
