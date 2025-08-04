import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect, useState } from "react";

import { usePage } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import CoverMading from "@/Components/dashboard/mading/CoverMading";
import DetailTugasUser from "@/Components/dashboard/mading/DetailTugasUser";
import TugasKelompok from "@/Components/dashboard/mading/TugasKelompok";
import { MadingClient } from "@/Components/tables/mading/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Mading", link: "/dashboard/mading" },
  { title: "Detail Tugas", link: "/dashboard/mading/user" },
];

interface flashresponse extends PageProps {
  flash: {
    response: {
      status: number;
      message: string;
    };
  };
}

export default function Page({ auth, id }) {
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

        <DetailTugasUser id={id} />
      </DashboardLayout>

      <Toaster />
    </>
  );
}
