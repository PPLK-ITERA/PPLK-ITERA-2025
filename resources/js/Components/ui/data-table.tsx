import { Button, buttonVariants } from "./button";
import { Heading } from "./heading";
import { Input } from "./input";
import { ScrollArea, ScrollBar } from "./scroll-area";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDebouncedCallback } from "use-debounce";

import React, { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/Components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  searchKey: string;
  apiEndpoint: string;
  title: string;
  description: string;
}

export function DataTable<TData, TValue>({
  columns,
  searchKey,
  apiEndpoint,
  title,
  description,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [search, setSearch] = useState("");

  const numberOfPages = Math.ceil(totalRows / perPage);
  const visiblePages = 2;

  const fetchTableData = async () => {
    setLoading(true);
    const response = await fetch(
      `${apiEndpoint}?page=${page}&perPage=${perPage}&search=${search}`,
    );
    const json = await response.json();
    setData(json.data);
    setTotalRows(json.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchTableData();
  }, [apiEndpoint, page, perPage, search]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: perPage,
      },
    },
  });

  const handleSubmit = (e) => {
    debounced(e.target.value);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSearch(value);
    },
    // delay in ms0
    500,
  );

  const getPaginationRange = () => {
    const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    const endPage = Math.min(numberOfPages, startPage + visiblePages - 1);
    const range: number[] = []; // Explicitly declare the type

    for (let i = startPage; i <= endPage; i++) {
      range.push(i); // i is inferred as a number
    }
    return range;
  };

  return (
    <>
      <Heading title={`${title} (${totalRows})`} description={description} />

      <Input
        placeholder={`Search ${searchKey}...`}
        onChange={(e) => handleSubmit(e)}
        className="md:max-w-sm w-full my-2"
      />

      <ScrollArea className="max-w-7xl h-[calc(80vh-220px)] rounded-md border">
        <Table className="md:w-full relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <div className="line-clamp-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {(page - 1) * perPage + 1} to{" "}
          {Math.min(page * perPage, totalRows)} of {totalRows} entries
        </div>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              disabled={page === 1}
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>

          {page > 1 + visiblePages / 2 && (
            <>
              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          {getPaginationRange().map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                isActive={page === pageNum}
                onClick={() => setPage(pageNum)}
                className={
                  page === pageNum
                    ? `${buttonVariants()} cursor-default hover:text-white`
                    : "cursor-pointer"
                }
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}

          {page < numberOfPages - visiblePages / 2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => setPage(numberOfPages)}>
                  {numberOfPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <Button
              disabled={page === numberOfPages}
              onClick={() => setPage(Math.min(page + 1, numberOfPages))}
            >
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
