import React, { useState } from "react";

import { Head } from "@inertiajs/react";

import { ChevronDown, ChevronUp, Info } from "lucide-react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { AccordionAtribut } from "@/Components/AccordionAtribut";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import { useAos } from "@/lib/hooks/useAos";

import logopplk from "!assets/logo-pplk-2024.png";

// data mengatur atribut
const attributes = [
    {
        day: "Atribut Hari Pertama",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Kedua",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Ketiga",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Keempat",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
    {
        day: "Atribut Hari Kelima",
        options: [
            {
                gender: "Laki-Laki",
                image: logopplk,
            },
            {
                gender: "Perempuan",
                image: logopplk,
            },
            {
                gender: "Perempuan Hijab",
                image: logopplk,
            },
        ],
    },
];

// sub component
const AccordionItem = ({ day, options }) => {
    // fitur menampilkan atribut
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <div
                className={`p-4 rounded-lg flex justify-between items-center cursor-pointer max-w-2xl ${
                    isOpen
                        ? "bg-jaffa-100 border-b-0 border-jaffa-600"
                        : "bg-white"
                } mx-auto border rounded-b-none`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex gap-4">
                    <Info className="text-jaffa-600" />
                    <h3 className="font-montserrat text-lg font-semibold">
                        {day}
                    </h3>
                </div>
                <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
            </div>
            {isOpen && (
                <div
                    className={`rounded-b-lg shadow-lg max-w-2xl bg-jaffa-100 mx-auto pb-3 ${
                        isOpen
                            ? "bg-jaffa-100 border border-t-0  border-jaffa-600"
                            : "bg-white"
                    }`}
                >
                    <div className="justify-evenly sm:flex hidden">
                        {options.map((option, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={option.image}
                                    alt={option.gender}
                                    className="bg-slate-400 sm:w-32 object-cover w-24 h-40 mx-auto rounded-lg"
                                />
                                <p className="sm:block hidden mt-2 font-semibold">
                                    {option.gender}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="sm:hidden block">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <div>
                                    <img
                                        src={option.image}
                                        alt={option.gender}
                                        className="bg-slate-400 object-cover rounded-lg"
                                    />
                                    <p className="sm:hidden block mt-2 font-semibold text-center">
                                        {option.gender}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// component utama
function Page() {
    useAos();

    return (
        <>
            <Head title="Ketentuan Atribut" />

            <DefaultLayout isSolid={true}>
                <div className="bg-pattern-white min-h-screen">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="xl:max-w-4xl md:max-w-2xl md:pt-20 lg:pt-24 max-w-xs mx-auto"
                    >
                        <h2 className="font-avigea text-center bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit pt-[30px] text-3xl md:text-5xl mx-auto">
                            Ketentuan Atribut
                        </h2>

                        <p className="mt-5 text-center text-[16px] sm:text-[20px]">
                            Halaman ini menampilkan atribut untuk kegiatan PPLK ITERA
                            2024 untuk setiap harinya. Pastikan kamu menggunakan atribut
                            yang tepat sesuai dengan ketentuan yang berlaku ya!
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="container p-4 mx-auto md:mt-[56px]"
                    >
                        <AccordionAtribut />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Page;
