import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { CarouselMateri } from "@/Components/materi/ScrollMateri";

import { useAos } from "@/lib/hooks/useAos";

function Page({ response }: { response: any }) {
    const materis = response.data;

    useAos();
    return (
        <>
            <Head title="Materi" />

            <div className="bg-pattern-white flex flex-col min-h-screen">
                <DefaultLayout isSolid={true}>
                    <div className="md:pt-20 lg:pt-28 flex flex-col items-center justify-start flex-grow min-h-screen p-4 pt-32 pb-24 text-center">
                        <h1
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="text-[30px] sm:text-[39px] md:text-[49px] font-avigea bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit mb-2"
                        >
                            Materi
                        </h1>

                        <p
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="text-[16px] sm:text-[20px] font-montserrat font-[400] text-moccaccino-950 mb-8 max-w-4xl"
                        >
                            Halaman ini menyediakan materi terbaru dari pemateri
                            PPLK ITERA. Pastikan untuk memeriksa secara berkala
                            agar Anda tidak melewatkan informasi atau materi
                            penting yang diperbarui secara rutin.
                        </p>

                        <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center pb-20">
                            <CarouselMateri materis={materis} />
                        </div>
                    </div>
                </DefaultLayout>
            </div>
        </>
    );
}

export default Page;
