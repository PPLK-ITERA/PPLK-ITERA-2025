import React, { useState } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import bg_1 from "!assets/checkPoint/bg-1.png";

export default function Page() {
    const bg = bg_1;
    const [checkedItems, setCheckedItems] = useState([false, false, false]);

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    const questItems = [
        "POS 1",
        "POS 2",
        "POS 3",
        "POS 4",
        "POS 5"

    ];

    return (
        <DefaultLayout>
            <div
                className="min-h-screen p-2 md:p-4 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div className="relative w-full mt-20 md:max-w-4xl md:mr-auto glass-container p-4 md:p-8 rounded-xl my-4 md:my-20 mx-2 md:mx-4">
                    <div className="mb-6 md:mb-8">
                        <h1 className="block md:hidden font-greek text-2xl font-bold text-[#682300] mb-3">
                            Quest DAY 1
                        </h1>
                        <h1 className="hidden md:block text-3xl md:text-4xl font-bold text-[#682300] font-greek mb-4 tracking-wide">
                            QUEST DAY 1
                        </h1>

                        <p className="text-[#543122] text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                            Hallo Satriya ITERA, selamat telah menyelesaikan Day 0 PPLK!
Berikut adalah tantangan untuk Day 0, yang berisi:\

                        </p>

                        <div className="space-y-3 md:space-y-4">
                            {questItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex md:max-w-xl items-center glass-item p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                >
                                    <div className="relative mr-3 md:mr-4">
                                        <input
                                            type="checkbox"
                                            id={`quest-${index}`}
                                            checked={checkedItems[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor={`quest-${index}`}
                                            className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border-2 border-white rounded cursor-pointer transition-all duration-200"
                                        >
                                            {checkedItems[index] && (
                                                <svg
                                                    className="w-3 h-3 md:w-4 md:h-4 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </label>
                                    </div>
                                    <span className="text-white text-base md:text-lg flex-1">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12">
                        <div className="border-t border-[#543122] border-opacity-30 mb-4 md:mb-6 md:hidden"></div>
                        <h2 className="text-2xl font-greek md:text-4xl font-bold text-[#682300] mb-3 md:mb-4">
                            SUMMARY
                        </h2>
                        <p className="text-[#543122] text-base md:text-lg leading-relaxed">
                            Pada hari ini, kalian telah melaksanakan Pra-PPLK di mana kalian sudah mulai mengenal lingkungan Kampus ITERA, memahami titik-titik penting yang akan menjadi bagian dari kehidupan perkuliahan, serta membangun kerja sama dengan teman-teman baru. Semoga pengalaman ini menjadi awal yang menyenangkan, penuh semangat, dan memotivasi kalian untuk terus berpartisipasi aktif dalam setiap rangkaian kegiatan PPLK selanjutnya.

                        </p>
                    </div>

                    <div className="hidden md:block absolute top-10 right-10 w-16 h-16 rounded-full bg-white opacity-10 backdrop-blur-sm"></div>
                    <div className="hidden md:block absolute bottom-20 left-10 w-12 h-12 rounded-full bg-white opacity-10 backdrop-blur-sm"></div>
                </div>

                <style>{`
                    .glass-container {
                        background: rgba(255, 255, 255, 0.25);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.18);
                        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
                    }
                    .glass-item {
                        background: rgba(88, 29, 0, 2.7);
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    .glass-item:hover {
                        background: rgba(88, 29, 0, 0.8);
                    }
                `}</style>
            </div>
        </DefaultLayout>
    );
}