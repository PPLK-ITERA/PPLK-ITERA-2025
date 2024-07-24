import { Button } from '@/Components/ui/button'
import { Card, CardContent } from '@/Components/ui/card'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import ResultCard from './ResultCard'


function Page({ auth, response}) {
    console.log(response)
    return (
        <DashboardLayout user={auth.user}>
            <ResultCard
                nama={response.data.nama}
                prodi={response.data.prodi}
                nim={response.data.nim}
                status={response.data.status}
                waktu={new Date(response.data.waktu)}
                pita={response.data.pita}
                riwayatPenyakit={response.data.riwayat}
                keterangan={response.data.ket_izin}
                imgUrl={'https://kelulusan.sman10-semarang.sch.id/img/profile/default-pas-photo.jpeg'} 
                routeBack='dashboard.cui'     
                routeScan='dashboard.cui.absensi'
                />
        </DashboardLayout>
    )
}

export default Page