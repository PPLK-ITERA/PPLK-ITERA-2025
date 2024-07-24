import React, { useState, useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { ScrollArea, ScrollBar } from '@/Components/ui/scroll-area';
import { Button } from '@/Components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface Penyakit {
  pita: string;
  ket_penyakit: string;
}

interface User {
  name: string;
  nim: string;
  email: string | null;
  photo_profile_url: string | null;
  qrcode_id: number;
  nama_kelompok: string;
  penyakit: Penyakit;
}

interface DataItem {
  id: number,
  user_id: number;
  status: string;
  waktu_hadir: string | null;
  waktu_izin: string | null;
  waktu_selesai: string | null;
  ket_izin: string | null;
  user: User;
}

interface TableWithPaginationProps {
  data: DataItem[];
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  onSearchChange: (searchTerm: string) => void;
}

const TableWithPagination: React.FC<TableWithPaginationProps> = ({
  data,
  total,
  perPage,
  currentPage,
  totalPages,
  onPageChange,
  onItemsPerPageChange,
  onSearchChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(data);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(event.target.value));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  const renderTableRows = () => {
    return data.map((item) => (
      <TableRow key={item.id}>
        <TableCell width={200} className='p-0 w-[200px]'><img className='w-[140px] h-[112px]' src={item.user.photo_profile_url ?? ''} alt="Foto Maba"/></TableCell>
        <TableCell >{item.user.qrcode_id}</TableCell>
        <TableCell>{item.user.name}</TableCell>
        <TableCell>{item.user.nim}</TableCell>
        <TableCell>{item.user.nama_kelompok}</TableCell>
        <TableCell>{item.user.penyakit.pita}</TableCell>
        <TableCell>{item.user.penyakit.ket_penyakit}</TableCell>
        <TableCell>{item.waktu_hadir}</TableCell>
        <TableCell>{item.waktu_izin}</TableCell>
        <TableCell>{item.waktu_selesai}</TableCell>
        <TableCell>Aksi</TableCell>
      </TableRow>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
      <div className="flex justify-center items-center mt-4 space-x-2">
        <Button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          <ChevronsLeft />
        </Button>
        <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft />
        </Button>
        {pageNumbers.map(number => (
          <Button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-2 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} hover:bg-gray-300`}
          >
            {number}
          </Button>
        ))}
        <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <ChevronRight />
        </Button>
        <Button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
          <ChevronsRight />
        </Button>
      </div>
    );
  };

  return (
    <div className='w-full'>
      <div className="flex justify-between mb-4">
        <div>
          <span>Show </span>
          <select
            value={perPage}
            onChange={handleItemsPerPageChange}
            className="mx-2 p-1 ps-2 border w-16"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span> entries</span>
        </div>
        <div>
          <span>Search: </span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-1 border"
          />
        </div>
      </div>
      <ScrollArea className='h-[400px]'>
        <Table>
          <TableHeader className='bg-slate-200 '>
            <TableRow>
              <TableHead className='w-[200px]'>Foto Profil</TableHead>
              <TableHead>QR Code</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>NIM</TableHead>
              <TableHead>Kelompok</TableHead>
              <TableHead>Warna Pita</TableHead>
              <TableHead>Riwayat Penyakit</TableHead>
              <TableHead>Waktu Masuk</TableHead>
              <TableHead>Waktu Izin</TableHead>
              <TableHead>Waktu Selesai Izin</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderTableRows()}</TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
      {renderPagination()}
      <div className="mt-4">
        <span>Showing {Math.min((currentPage - 1) * perPage + 1, total)} to {Math.min(currentPage * perPage, total)} of {total} entries</span>
      </div>
    </div>
  );
};

export default TableWithPagination;
