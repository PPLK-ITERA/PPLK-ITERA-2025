import React, { useState } from "react";

import { ChevronDown, ChevronUp, Info } from "lucide-react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

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
                    <h3 className="text-lg font-semibold">{day}</h3>
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
    return (
        <>
            <Navbar isSolid={true} />
            <div className="bg-pattern-white min-h-screen">
                <div className="xl:max-w-4xl md:max-w-2xl max-w-xs pt-10 mx-auto">
                    <p className="text-2xl text-center font-bold text-[#874E0E] mb-4">
                        KETENTUAN ATRIBUT
                    </p>
                    <p className="text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero, quia? Ut veniam eveniet natus, architecto
                        quos accusamus, velit fuga dolor aliquam minima dolorum
                        ea similique labore quia in perspiciatis molestiae?
                    </p>
                </div>
                <div className="container p-4 mx-auto">
                    {attributes.map((attr, index) => (
                        <AccordionItem
                            key={index}
                            day={attr.day}
                            options={attr.options}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page;