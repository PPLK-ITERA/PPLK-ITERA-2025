import React, { useState } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import bg_1 from "!assets/tesla/bg-1.png";
import bg_2 from "!assets/tesla/bg-2.png";

export default function Page() {
    const [currentTab, setCurrentTab] = useState('Petunjuk Soal');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);

    const bg = bg_1

    // Create grid for the game area
    const createGrid = () => {
        const grid = [];
        // Responsive grid size - smaller on mobile
        const gridSize = window.innerWidth < 768 ? 15 : 20;
        
        for (let i = 0; i < gridSize; i++) {
            const row = [];
            for (let j = 0; j < gridSize; j++) {
                row.push(
                    <div
                        key={`${i}-${j}`}
                        className="w-4 h-4 md:w-8 md:h-8 border border-gray-500 bg-gray-700 text-xs flex items-center justify-center"
                    />
                );
            }
            grid.push(
                <div key={i} className="flex">
                    {row}
                </div>
            );
        }
        return grid;
    };

    const notifications = [
        "lorem ipsum has been the industry's standard dummy text ever since the 1500s",
        "lorem ipsum has been the industry's standard dummy text ever since the 1500s",
        "lorem ipsum has been the industry's standard dummy text ever since the 1500s",
        "lorem ipsum has been the industry's standard dummy text ever since the 1500s",
        "lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    ];

    // Mobile Modal Component for Petunjuk
    const MobileModal = ({ isOpen, onClose, children, title }) => {
        if (!isOpen) return null;
        
        return (
            <div className="fixed inset-0  bg-black bg-opacity-50 z-50 flex items-end md:hidden">
                <div className="bg-white w-full max-h-[80vh] rounded-t-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                        <h3 className="font-medium ">{title}</h3>
                        <button 
                            onClick={onClose}
                            className="text-white text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        );
    };

    // Progress Modal Component
    const ProgressModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;
        
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 md:hidden">
                <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                        <h3 className="font-medium">Progress</h3>
                        <button 
                            onClick={onClose}
                            className="text-white text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <div className="text-center">
                                <div className="font-bold text-gray-800">5/10</div>
                                <div>Turns</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">50%</div>
                                <div>Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">1</div>
                                <div>Petunjuk</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <DefaultLayout>
            <div
                className="min-h-screen p-2 md:p-4 bg-cover bg-center bg-no-repeat relative "
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div className="absolute inset-0 bg-[#BF4000] mix-blend-multiply pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 my-4 md:my-40 md:max-w-5xl md:mx-auto">
                    {/* Header */}
                    <div className="bg-[#b84c19] w-full md:max-w-lg text-white p-3 md:p-4 md:mt-0 mt-32 rounded-lg mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 md:space-x-8">
                                <div className="text-center">
                                    <div className="text-xl md:text-3xl font-bold">150</div>
                                    <div className="text-xs md:text-sm">Skor</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-3xl font-bold">00:00</div>
                                    <div className="text-xs md:text-sm">Waktu</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-3xl font-bold">DAY</div>
                                    <div className="text-xs md:text-sm">1</div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1 md:space-y-2">
                                <button className="bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium">
                                    Chek Jawaban
                                </button>
                                <button 
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium md:hidden"
                                >
                                    Petunjuk
                                </button>
                                <button className="bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium hidden md:block">
                                    Petunjuk
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Game Area */}
                        <div className="flex-1 order-2 md:order-1 mx-auto max-w-5xl md:w-full">
                            <div className="p-2 md:p-4 rounded-lg mb-4">
                                <div className="inline-block overflow-x-auto">
                                    {createGrid()}
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <button className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base">
                                    Mulai Dari Awal
                                </button>
                                <button className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base">
                                    Pause
                                </button>
                                <button className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base">
                                    Simpan Progress
                                </button>
                            </div>
                        </div>

                        {/* Right Sidebar - Hidden on mobile, shown in modal */}
                        <div className="hidden md:block w-80 order-1 md:order-2">
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                {/* Tabs */}
                                <div className="flex">
                                    <button
                                        onClick={() => setCurrentTab('Petunjuk Soal')}
                                        className={`flex-1 py-3 px-4 text-sm font-medium ${currentTab === 'Petunjuk Soal'
                                            ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Petunjuk Soal
                                    </button>
                                </div>

                                {/* Sub tabs */}
                                <div className="flex border-b">
                                    <button
                                        onClick={() => setCurrentTab('Mendatar')}
                                        className={`flex-1 py-2 px-4 text-sm ${currentTab === 'Mendatar'
                                            ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Mendatar
                                    </button>
                                    <button
                                        onClick={() => setCurrentTab('Menurun')}
                                        className={`flex-1 py-2 px-4 text-sm ${currentTab === 'Menurun'
                                            ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Menurun
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4 max-h-80 overflow-y-auto">
                                    {notifications.map((notification, index) => (
                                        <div key={index} className="flex items-start space-x-3 mb-4">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {notification}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Quick Actions */}
                        <div className="flex md:hidden space-x-2 order-1 md:order-2 mb-4">
                            <button 
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm"
                            >
                                📝 Petunjuk
                            </button>
                            <button 
                                onClick={() => setIsProgressModalOpen(true)}
                                className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm"
                            >
                                📊 Progress
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar - Desktop Only */}
                    <div className="hidden md:block mt-6 bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">Progress</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <div className="text-center">
                                <div className="font-bold text-gray-800">5/10</div>
                                <div>Turns</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">50%</div>
                                <div>Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">1</div>
                                <div>Petunjuk</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Modal for Petunjuk */}
                <MobileModal 
                    isOpen={isMobileMenuOpen} 
                    onClose={() => setIsMobileMenuOpen(false)}
                    title="Petunjuk Soal"
                >
                    {/* Sub tabs */}
                    <div className="flex border-b">
                        <button
                            onClick={() => setCurrentTab('Mendatar')}
                            className={`flex-1 py-3 px-4 text-sm ${currentTab === 'Mendatar'
                                ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                : 'bg-gray-50 text-gray-600'
                                }`}
                        >
                            Mendatar
                        </button>
                        <button
                            onClick={() => setCurrentTab('Menurun')}
                            className={`flex-1 py-3 px-4 text-sm ${currentTab === 'Menurun'
                                ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                : 'bg-gray-50 text-gray-600'
                                }`}
                        >
                            Menurun
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 max-h-60 overflow-y-auto">
                        {notifications.map((notification, index) => (
                            <div key={index} className="flex items-start space-x-3 mb-4">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {notification}
                                </p>
                            </div>
                        ))}
                    </div>
                </MobileModal>

                {/* Progress Modal */}
                <ProgressModal 
                    isOpen={isProgressModalOpen} 
                    onClose={() => setIsProgressModalOpen(false)} 
                />
            </div>
        </DefaultLayout>
    );
}