import React, { useState } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import bg_1 from "!assets/map/bg.png";

export default function Page() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleDayClick = (e, day) => {
        if (day !== "Day-1") {
            e.preventDefault();
            setPopupMessage(`Belum sampai PPLK2025 ${day}`);
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <DefaultLayout>
            <div className="relative w-full min-h-screen overflow-auto">
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                            <h3 className="text-lg font-bold mb-4">{popupMessage}</h3>
                            <button
                                onClick={closePopup}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}

                <div className="relative" style={{ minWidth: '1300px', minHeight: '800px' }}>
                    <img
                        src={bg_1}
                        alt="Campus Map"
                        className="block w-full h-auto"
                        style={{ minWidth: '100%', minHeight: '100%' }}
                    />

                    <div className="absolute inset-0">
                        <a
                            href="/chekPoint"
                            className="absolute z-20 group"
                            style={{
                                top: '15%',
                                left: '20%',
                            }}
                            title="Day-1"
                            onClick={(e) => handleDayClick(e, "Day-1")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Day-1
                            </div>
                        </a>

                        <a
                            href="/map"
                            className="absolute z-20 group"
                            style={{
                                top: '38%',
                                left: '60%',
                            }}
                            title="Day-3"
                            onClick={(e) => handleDayClick(e, "Day-3")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Day-3
                            </div>
                        </a>

                        <a
                            href="/map"
                            className="absolute z-20 group"
                            style={{
                                top: '40%',
                                left: '36%',
                            }}
                            title="Day-2"
                            onClick={(e) => handleDayClick(e, "Day-2")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Day-2
                            </div>
                        </a>

                        <a
                            href="/map"
                            className="absolute z-20 group"
                            style={{
                                top: '55%',
                                left: '80%',
                            }}
                            title="Day-5"
                            onClick={(e) => handleDayClick(e, "Day-5")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Day-5
                            </div>
                        </a>

                        <a
                            href="/map"
                            className="absolute z-20 group"
                            style={{
                                top: '70%',
                                left: '55%',
                            }}
                            title="map-4"
                            onClick={(e) => handleDayClick(e, "map-4")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                map-4
                            </div>
                        </a>

                        <a
                            href="/map"
                            className="absolute z-20 group"
                            style={{
                                top: '80%',
                                left: '90%',
                            }}
                            title="Cui"
                            onClick={(e) => handleDayClick(e, "Cui")}
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-200"></div>
                            <div className="absolute top-0 left-0 mt-5 ml-1 bg-white text-red-500 w-20 text-center py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Cui
                            </div>
                        </a>
                    </div>
                </div>

                <a
                    href="/"
                    className="fixed z-30 top-4 left-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:bg-red-600 transition-colors duration-200"
                >
                    ←
                </a>
            </div>
        </DefaultLayout>
    );
}