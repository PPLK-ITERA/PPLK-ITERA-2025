import React, { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

// data mengatur atribut
const attributes = [
    {
        day: "Atribut Hari Pertama",
        options: [
            {
                gender: "Laki-Laki",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan Hijab",
                image: "/assets/logo-pplk-2024.png",
            },
        ],
    },
    {
        day: "Atribut Hari Kedua",
        options: [
            {
                gender: "Laki-Laki",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan Hijab",
                image: "/assets/logo-pplk-2024.png",
            },
        ],
    },
    {
        day: "Atribut Hari Ketiga",
        options: [
            {
                gender: "Laki-Laki",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan Hijab",
                image: "/assets/logo-pplk-2024.png",
            },
        ],
    },
    {
        day: "Atribut Hari Keempat",
        options: [
            {
                gender: "Laki-Laki",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan Hijab",
                image: "/assets/logo-pplk-2024.png",
            },
        ],
    },
    {
        day: "Atribut Hari Kelima",
        options: [
            {
                gender: "Laki-Laki",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan",
                image: "/assets/logo-pplk-2024.png",
            },
            {
                gender: "Perempuan Hijab",
                image: "/assets/logo-pplk-2024.png",
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
                    className={`rounded-b-lg shadow-lg max-w-2xl bg-red-300 mx-auto pb-3 ${
                        isOpen
                            ? "bg-jaffa-100 border border-t-0  border-jaffa-600"
                            : "bg-white"
                    }`}
                >
                    <div className="justify-evenly hidden sm:flex ">
                        {options.map((option, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={option.image}
                                    alt={option.gender}
                                    className="bg-slate-400 sm:w-32 w-24 h-40 object-cover rounded-lg mx-auto"
                                />
                                <p className="mt-2 font-semibold hidden sm:block">
                                    {option.gender}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="block sm:hidden ">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center"
                            >
                                <div>
                                    <img
                                        src={option.image}
                                        alt={option.gender}
                                        className="bg-slate-400 object-cover rounded-lg"
                                    />
                                    <p className="mt-2 font-semibold block sm:hidden text-center">
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
        <div>
            <div className="max-w-xs xl:max-w-4xl md:max-w-2xl mx-auto mb-10 mt-5">
                <p className="text-2xl text-center font-bold text-[#874E0E] mb-4">
                    KETENTUAN ATRIBUT
                </p>
                <p className="text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Libero, quia? Ut veniam eveniet natus, architecto quos
                    accusamus, velit fuga dolor aliquam minima dolorum ea
                    similique labore quia in perspiciatis molestiae?
                </p>
            </div>
            <div className="container mx-auto p-4">
                {attributes.map((attr, index) => (
                    <AccordionItem
                        key={index}
                        day={attr.day}
                        options={attr.options}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
