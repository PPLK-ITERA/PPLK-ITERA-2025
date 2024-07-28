import { ResultCardNotFound } from "./ResultCardNotFound";
import ResultCardSuccess from "./ResultCardSuccess";
import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

function Page({ auth, response }) {
    return (
        <DashboardLayout user={auth.user}>
            {response && response.status === 404 ? (
                <ResultCardNotFound
                    result={response.data.result}
                    routeBack={"dashboard.cui"}
                    routeScan={"dashboard.cui.absensi"}
                    message={response.message}
                />
            ) : (
                <ResultCardSuccess
                    nama={response.data.nama}
                    prodi={response.data.prodi}
                    nim={response.data.nim}
                    status={
                        response.data.status.charAt(0).toUpperCase() +
                        response.data.status.slice(1)
                    }
                    waktu={new Date(response.data.waktu)}
                    pita={response.data.pita}
                    riwayatPenyakit={response.data.riwayat}
                    keterangan={response.data.ket_izin}
                    imgUrl={response.data.photo_profile_url}
                    routeBack="dashboard.cui"
                    routeScan="dashboard.cui.absensi"
                />
            )}
        </DashboardLayout>
    );
}

export default Page;
