import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import CreateUser from "@/Components/dashboard/create-user/CreateUser";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Create User", link: "/dashboard/create-user" },
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
        }
    }, [flash, toast]);

    return (
        <>
            <DashboardLayout user={auth.user}>
                <Breadcrumbs items={breadcrumbItems} />

                <h2 className="text-3xl font-bold tracking-tight">
                    Create User
                </h2>

                <div className="md:pb-20 max-w-sm pb-64">
                    <CreateUser />
                </div>
            </DashboardLayout>

            <Toaster />
        </>
    );
}
