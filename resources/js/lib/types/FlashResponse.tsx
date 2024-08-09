import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import { useToast } from "@/Components/ui/use-toast";

interface flashresponse extends PageProps {
    flash: {
        response: {
            status: number;
            message: string;
        };
    };
}

export function FlashResponseCheck() {
    const { flash } = usePage<flashresponse>().props;
    const { toast } = useToast();

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
}
