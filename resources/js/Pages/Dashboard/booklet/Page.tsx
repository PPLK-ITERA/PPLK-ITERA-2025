import DashboardLayout from "@/Layouts/DashboardLayout";
import { format } from "date-fns";

import React from "react";

import { CalendarIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import { BookletTable } from "@/Components/dashboard/booklet/BookletTable";
import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { Button } from "@/Components/dashboard/ui/button";
import { Calendar } from "@/Components/dashboard/ui/calendar";
import { Input } from "@/Components/dashboard/ui/input";
import { Label } from "@/Components/dashboard/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/dashboard/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

import { cn } from "@/lib/utils";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Booklet", link: "/dashboard/booklet" },
];

export default function Page({ auth, response }) {
    const [date, setDate] = React.useState<Date>();
    const [isValidUrl, setIsValidUrl] = React.useState(false);

    function validateUrl(url: string) {
        // https://www.googleapis.com/drive/v2/files/1MZJncNc6-fz-NiF7qfZigUEVcEmjAD7O?key=AIzaSyB4-JCqVpt3dC5MlC0Q6yQOSYG0uysdvwc
        setIsValidUrl(/^https:\/\/(www\.)?drive\.google\.com\/.*$/g.test(url));
    }

    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur Booklet</h2>

            <div className="w-full flex place-content-end">
                {/* add dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <IconPlus size={18} />
                            <span>Tambah Booklet</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Tambah Booklet</DialogTitle>
                        </DialogHeader>
                        <form className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                    htmlFor="nama_booklet"
                                    className="text-right"
                                >
                                    Nama Booklet
                                </Label>
                                <Input
                                    id="nama_booklet"
                                    required
                                    type="text"
                                    maxLength={500}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                    htmlFor="url_booklet"
                                    className="text-right"
                                    onchange={(e) => validateUrl(e.target.value)}
                                >
                                    Link Google Drive Booklet
                                </Label>
                                <Input
                                    id="url_booklet"
                                    required
                                    type="text"
                                    maxLength={500}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Deadline
                                </Label>
                                <Input
                                    id="deadline"
                                    required
                                    type="date"
                                    value={
                                        date ? format(date, "yyyy-MM-dd") : ""
                                    }
                                    maxLength={500}
                                    className="hidden col-span-3"
                                    hidden
                                />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] justify-start text-left font-normal",
                                                !date &&
                                                    "text-muted-foreground",
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? (
                                                format(date, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </form>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <BookletTable booklets={response.data} />
        </DashboardLayout>
    );
}
