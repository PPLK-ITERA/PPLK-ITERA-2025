import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Link, router } from '@inertiajs/react';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import React, { FC } from 'react'

interface ResultCardProps {
    nama: string,
    prodi: string,
    nim: string,
    status: string,
    waktu: Date,
    pita: string,
    riwayatPenyakit: string,
    keterangan: string,
    imgUrl: string,
    routeBack: string,
    routeScan: string
}


export const ResultCardSuccess: FC<ResultCardProps> = ({
    nama,
    prodi,
    nim,
    status,
    waktu,
    pita,
    riwayatPenyakit,
    keterangan,
    imgUrl,
    routeBack,
    routeScan
}) => {
    return (
        <div className='relative flex h-full flex-col justify-center md:justify-between items-center'>
            <div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <img
                        className='w-32 aspect-[3/4] border border-black rounded-xl'
                        src={imgUrl}
                        alt='Foto Maba'
                    />
                    <p className='font-bold text-lg mt-2'>{nama}</p>
                    <p className='font-medium'>{prodi}</p>
                    <p className='font-medium'>{nim}</p>
                </div>
                <Card className='w-96 pt-4 mt-4 rounded-lg'>
                    <CardContent>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold'>Status</p>
                                <div className='flex items-center gap-2'>
                                    <p className='font-bold text-green-500'>{status}</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        className="fill-green-500"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Waktu</p>
                                <p>{format(waktu, 'dd/MM/yyyy HH:mm')}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Pita</p>
                                <div className={`${pita === 'merah' ? 'bg-red-600' : pita === 'kuning' ? 'bg-yellow-500' : 'bg-green-500'} px-3 rounded-md text-white font-bold`}>
                                    {pita.charAt(0).toUpperCase() + pita.slice(1)}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Riwayat Penyakit</p>
                                <p>{riwayatPenyakit}</p>
                            </div>
                            {keterangan? (
                                <div>
                                    <p>Keterangan</p>
                                    <p>{keterangan}</p>
                                </div>
                            ) : null}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className='fixed bottom-0 left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                <Link href={route(routeScan)} className='bg-slate-600 rounded-full w-12 h-12 flex items-center self-center justify-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-white lucide lucide-scan-qr-code"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /></svg>
                </Link>

                <Button onClick={() => router.get(route(routeBack))} className='w-fit'>
                    <ArrowLeft className='mr-2' />
                    Kembali
                </Button>
            </div>
        </div>
    )
}

export default ResultCardSuccess