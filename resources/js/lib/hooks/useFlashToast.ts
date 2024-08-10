// hooks/useFlashToast.ts
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import { useToast } from "@/Components/ui/use-toast";

interface FlashResponse extends PageProps {
  flash: {
    error: string;
    response: {
      status: number;
      message: string;
    };
  };
}

export const useFlashToast = () => {
  const { toast } = useToast();
  const { flash } = usePage<FlashResponse>().props;

  useEffect(() => {
    if (flash && flash.response) {
      const variant = flash.response.status === 200 ? "default" : "destructive";
      toast({
        title: flash.response.status === 200 ? "Berhasil" : "Gagal",
        description:
          flash.response.status === 200
            ? flash.response.message
            : flash.response.message || flash.error,
        variant: variant,
      });
    }
  }, [flash, toast]);
};
