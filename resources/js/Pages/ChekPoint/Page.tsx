import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Data_Page_ChekPoint } from "@/lib/data/chekPoint";

export default function Page() {
    const [dayData, setDayData] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        // Ambil parameter day dari URL
        const urlParams = new URLSearchParams(window.location.search);
        const dayParam = urlParams.get('day');
        
        // Cari data yang sesuai berdasarkan parameter day
        const foundData = Data_Page_ChekPoint.find(data => data.name === dayParam);
        
        // Jika data ditemukan, set data tersebut. Jika tidak, gunakan data pertama sebagai default
        const selectedData = foundData || Data_Page_ChekPoint[0];
        setDayData(selectedData);
        
        // Initialize checkedItems berdasarkan jumlah item dalam checkBoxData
        if (selectedData && selectedData.checkBoxData[0]) {
            const itemCount = Object.keys(selectedData.checkBoxData[0]).length;
            setCheckedItems(new Array(itemCount).fill(false));
        }
    }, []);

    const handleCheckboxChange = (key) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[key] = !newCheckedItems[key];
        setCheckedItems(newCheckedItems);
    };

    // Loading state jika data belum tersedia
    if (!dayData) {
        return (
            <DefaultLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#682300]"></div>
                        <p className="mt-4 text-[#682300]">Loading...</p>
                    </div>
                </div>
            </DefaultLayout>
        );
    }

    const { title, description1, description2, bg_image, checkBoxData } = dayData;

    return (
        <DefaultLayout>
            <div
                className="min-h-screen p-2 md:p-4 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bg_image})`,
                }}
            >
                <div className="relative w-full mt-20 md:max-w-4xl md:mr-auto glass-container p-4 md:p-8 rounded-xl my-4 md:my-20 mx-2 md:mx-4">
                    <div className="mb-6 md:mb-8">
                        <h1 className="block md:hidden font-greek text-2xl font-bold text-[#682300] mb-3">
                            {title}
                        </h1>
                        <h1 className="hidden md:block text-3xl md:text-4xl font-bold text-[#682300] font-greek mb-4 tracking-wide">
                            {title}
                        </h1>

                        <p className="text-[#543122] text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                            {description1}
                        </p>

                        <div className="space-y-3 md:space-y-4">
                            {Object.entries(checkBoxData[0]).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex md:max-w-xl items-center glass-item p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                >
                                    <div className="relative mr-3 md:mr-4">
                                        <input
                                            type="checkbox"
                                            id={`quest-${key}`}
                                            checked={checkedItems[key - 1] || false}
                                            onChange={() => handleCheckboxChange(key - 1)}
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor={`quest-${key}`}
                                            className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border-2 border-white rounded cursor-pointer transition-all duration-200"
                                        >
                                            {checkedItems[key - 1] && (
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
                                        {value}
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
                            {description2}
                        </p>
                    </div>

                    {/* Back to Map Button */}
                    <div className="mt-8 md:mt-12">
                        <a
                            href="/map"
                            className="inline-flex items-center px-6 py-3 bg-[#682300] text-white font-medium rounded-lg hover:bg-[#543122] transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Kembali ke Peta
                        </a>
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