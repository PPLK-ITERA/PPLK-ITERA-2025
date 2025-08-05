import { SoalEntry } from "./columns";
import { Button } from "@/Components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/Components/ui/dialog";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

interface CellActionProps {
  data: SoalEntry;
  onEdit?: (soal: SoalEntry) => void;
  onDelete?: (soal: SoalEntry) => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onEdit, onDelete }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    if (onEdit) {
      onEdit(data);
    }
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!onDelete) return;
    
    setIsDeleting(true);
    try {
      await onDelete(data);
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Error deleting:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <Button 
          size="sm"
          onClick={handleEdit}
          className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-3 py-1.5 rounded-md"
        >
          
          Edit
        </Button>
        <Button 
          size="sm"
          onClick={handleDeleteClick}
          className="bg-red-500 hover:bg-red-600 text-white border-0 px-3 py-1.5 rounded-md"
        >
          
          Delete
        </Button>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Apakah Anda yakin ingin menghapus soal berikut?</p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p><strong>Nomor:</strong> {data.nomor}</p>
              <p><strong>Tipe:</strong> <span className="capitalize">{data.tipe}</span></p>
              <p><strong>Pertanyaan:</strong> {data.pertanyaan}</p>
              <p><strong>Jawaban:</strong> {data.jawaban}</p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button 
                variant="outline" 
                onClick={() => setDeleteDialogOpen(false)}
                disabled={isDeleting}
              >
                Batal
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? 'Menghapus...' : 'Hapus'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};