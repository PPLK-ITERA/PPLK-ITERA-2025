import { useDebouncedCallback } from "use-debounce";

import React from "react";

import { Link } from "@inertiajs/react";

import { buttonVariants } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

function Presensi() {
  return (
    <div className="space-y-4">
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between w-full pb-2 space-y-0">
          <CardTitle className="w-full text-lg font-bold text-center">
            Absensi Maba
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center mt-2">
          <Link
            href={route("dashboard.absensi-maba/presensi")}
            className={buttonVariants()}
          >
            Mulai Absen Maba
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default Presensi;
