import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { AturMabaClient } from "@/Components/tables/atur-maba/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Atur Maba", link: "/dashboard/atur-maba" },
];

interface flashresponse extends PageProps {
    flash: {
        response: {
            status: number;
            message: string;
        };
    };
}

export default function Page({ auth }) {
    const { toast } = useToast();

    const { flash } = usePage<flashresponse>().props;

    useEffect(() => {
        if (flash.response) {
            if (flash.response.status === 200) {
                toast({
                    title: "Berhasil",
                    description: flash.response.message,
                    variant: "default",
                });
            } else {
                toast({
                    title: "Gagal",
                    description: flash.response.message,
                    variant: "destructive",
                });
            }

            window.location.reload();
        }
    }, [flash, toast]);

    return (
        <>
            <DashboardLayout user={auth.user}>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className="text-3xl font-bold tracking-tight">Atur Maba</h2>

                <AturMabaClient />
            </DashboardLayout>

            <Toaster />
        </>
    );
}
