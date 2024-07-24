import { Button } from "./button";
import { Input } from "./input";
// Asumsi Button dan Input ada di path ini
import { ScrollArea, ScrollBar } from "./scroll-area";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useDebouncedCallback } from "use-debounce";

import React, { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Heading } from "./heading";

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
    description
}: DataTableProps<TData, TValue>) {
    const [data, setData] = useState<TData[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(0);
    const [search, setSearch] = useState("");

    console.log(data);
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
    }, [page, perPage, search]);

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

    return (
        <>
            <Heading
                title={`${title} (${totalRows})`}
                description={description}
            />

            <Input
                placeholder={`Search ${searchKey}...`}
                onChange={(e) => handleSubmit(e)}
                className="md:max-w-sm w-full my-2"
            />

            <ScrollArea className="max-w-6xl h-[calc(80vh-220px)] rounded-md border">
                <Table className="relative md:w-full">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef
                                                        .header,
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
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center"
                                >
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="flex items-center justify-between py-4">
                <div className="text-sm text-gray-700">
                    Showing {(page - 1) * perPage + 1} to{" "}
                    {Math.min(page * perPage, totalRows)} of {totalRows} entries
                </div>
                <div className="flex space-x-1">
                    <Button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() =>
                            setPage((prev) =>
                                prev * perPage < totalRows ? prev + 1 : prev,
                            )
                        }
                        disabled={page * perPage >= totalRows}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}
