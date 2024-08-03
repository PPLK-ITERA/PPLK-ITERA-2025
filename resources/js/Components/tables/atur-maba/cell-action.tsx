"use client";

import { DataMaba } from "./columns";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { Link, router, useForm, usePage } from "@inertiajs/react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/toaster";

import { UserAuthProps } from "@/lib/types/User";

interface CellActionProps {
    data: DataMaba;
}

export const CellAction: React.FC<CellActionProps> = ({
    data,
}: CellActionProps) => {
    const { delete: deleteUser } = useForm({
        id: data.id,
    });

    const handleDelete = () => {
        deleteUser(route("dashboard.user.destroy"));
    };

    type MyPage = PageProps<{
        auth: {
            user: UserAuthProps;
        };
    }>;

    const { auth } = usePage<MyPage>().props;

    return (
        <>
            <div className="flex gap-1 p-2">
                <Link
                    className={buttonVariants({
                        size: "sm",
                    })}
                    href={route("dashboard.user.edit", data.id)}
                >
                    Edit
                </Link>

                {auth.user.role_id !== 3 ? null : (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                className="gap-2"
                                size={"sm"}
                                variant={"destructive"}
                            >
                                Delete
                            </Button>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Kamu akan menghapus data {data.user.name}{" "}
                                    secara permanen. Data yang sudah dihapus
                                    tidak dapat dikembalikan.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDelete}>
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>
            <Toaster />
        </>
    );
};
