import React, { useState } from 'react';
import dokum_21 from "!assets/dokumentasi/dokum-21.jpg";
import dokum_22 from "!assets/dokumentasi/dokum-22.jpg";
import dokum_23 from "!assets/dokumentasi/dokum-23.jpg";
import dokum_24 from "!assets/dokumentasi/dokum-24.jpg";
import dokum_25 from "!assets/dokumentasi/dokum-25.jpg";
import dokum_26 from "!assets/dokumentasi/dokum-26.jpg";
import dokum_27 from "!assets/dokumentasi/dokum-27.jpg";
import dokum_28 from "!assets/dokumentasi/dokum-28.jpg";
import dokum_29 from "!assets/dokumentasi/dokum-29.jpg";
import dokum_30 from "!assets/dokumentasi/dokum-30.jpg";
import dokum_31 from "!assets/dokumentasi/dokum-31.jpg";
import dokum_32 from "!assets/dokumentasi/dokum-32.jpg";
import dokum_33 from "!assets/dokumentasi/dokum-33.jpg";
import dokum_34 from "!assets/dokumentasi/dokum-34.jpg";
import dokum_35 from "!assets/dokumentasi/dokum-35.jpg";
import dokum_36 from "!assets/dokumentasi/dokum-36.jpg";
import dokum_37 from "!assets/dokumentasi/dokum-37.jpg";
import dokum_38 from "!assets/dokumentasi/dokum-38.jpg";
import dokum_39 from "!assets/dokumentasi/dokum-39.jpg";
import dokum_40 from "!assets/dokumentasi/dokum-40.jpg";
import dokum_41 from "!assets/dokumentasi/dokum-41.jpg";
import dokum_42 from "!assets/dokumentasi/dokum-42.jpg";
import dokum_43 from "!assets/dokumentasi/dokum-43.jpg";
import dokum_44 from "!assets/dokumentasi/dokum-44.jpg";
import dokum_45 from "!assets/dokumentasi/dokum-45.jpg";
import dokum_46 from "!assets/dokumentasi/dokum-46.jpg";
import dokum_47 from "!assets/dokumentasi/dokum-47.jpg";
import dokum_48 from "!assets/dokumentasi/dokum-48.jpg";
import dokum_49 from "!assets/dokumentasi/dokum-49.jpg";
import dokum_50 from "!assets/dokumentasi/dokum-50.jpg";
import dokum_51 from "!assets/dokumentasi/dokum-51.jpg";
import dokum_52 from "!assets/dokumentasi/dokum-52.jpg";
import dokum_53 from "!assets/dokumentasi/dokum-53.jpg";
import dokum_54 from "!assets/dokumentasi/dokum-54.jpg";
import dokum_55 from "!assets/dokumentasi/dokum-55.jpg";
import dokum_56 from "!assets/dokumentasi/dokum-56.jpg";
import dokum_57 from "!assets/dokumentasi/dokum-57.jpg";
import dokum_58 from "!assets/dokumentasi/dokum-58.jpg";
import dokum_59 from "!assets/dokumentasi/dokum-59.jpg";
import dokum_60 from "!assets/dokumentasi/dokum-60.jpg";
import dokum_61 from "!assets/dokumentasi/dokum-61.jpg";
import dokum_62 from "!assets/dokumentasi/dokum-62.jpg";
import dokum_63 from "!assets/dokumentasi/dokum-63.jpg";
import dokum_64 from "!assets/dokumentasi/dokum-64.jpg";
import dokum_65 from "!assets/dokumentasi/dokum-65.jpg";
import dokum_66 from "!assets/dokumentasi/dokum-66.jpg";
import dokum_67 from "!assets/dokumentasi/dokum-67.jpg";
import dokum_68 from "!assets/dokumentasi/dokum-68.jpg";
import dokum_69 from "!assets/dokumentasi/dokum-69.jpg";
import dokum_70 from "!assets/dokumentasi/dokum-70.jpg";
import dokum_71 from "!assets/dokumentasi/dokum-71.jpg";
import dokum_72 from "!assets/dokumentasi/dokum-72.jpg";
import dokum_73 from "!assets/dokumentasi/dokum-73.jpg";
import dokum_74 from "!assets/dokumentasi/dokum-74.jpg";
import dokum_75 from "!assets/dokumentasi/dokum-75.jpg";
import dokum_76 from "!assets/dokumentasi/dokum-76.jpg";


const PplkDokumtasi = () => {
    const [selectedMenu, setSelectedMenu] = useState('The Calling of Olympus');
    const [currentPage, setCurrentPage] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile dropdown

    const menuItems = [
        'The Calling of Olympus',
        'Part of Chaos',
        'Flame of Hephaestus',
        'Wisdom of Athena',
        'Wrath of Ares',
        'Ascension to Elysion'
    ];

    const imageData = {
        'The Calling of Olympus': [
            dokum_21, dokum_22, dokum_23, dokum_24, dokum_25, dokum_26, dokum_27, dokum_28, dokum_29
        ],
        'Part of Chaos': [
            dokum_30, dokum_31, dokum_32, dokum_33, dokum_34, dokum_35, dokum_36, dokum_37, dokum_38
        ],
        'Flame of Hephaestus': [
            dokum_39, dokum_40, dokum_41, dokum_42, dokum_43, dokum_44, dokum_45, dokum_46, dokum_47
        ],
        'Wisdom of Athena': [
            dokum_48, dokum_49, dokum_50, dokum_51, dokum_52, dokum_53, dokum_54, dokum_55, dokum_56
        ],
        'Wrath of Ares': [
            dokum_57, dokum_58, dokum_59, dokum_60, dokum_61, dokum_62, dokum_63, dokum_64, dokum_65
        ],
        'Ascension to Elysion': [
            dokum_66, dokum_67, dokum_68, dokum_69, dokum_70, dokum_71, dokum_72, dokum_73, dokum_74, dokum_75, dokum_76
        ]
    };

    const drivePplk = [
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
        'https://drive.google.com/drive/folders/1C0-7MWlPxqlJHfHbyW5K2el-fxojwojo',
    ]


    const itemsPerPage = 6;
    const totalPages = 3;
    const currentImages = imageData[selectedMenu] || [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedImages = currentImages.slice(startIndex, startIndex + itemsPerPage);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setCurrentPage(1);
        setIsMenuOpen(false); // Close dropdown after selection on mobile
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-4 md:p-8 md:max-w-6xl mx-auto bg-[#fff1eb] rounded-xl my-20">

            <div className="md:hidden mb-6">
                <div className="text-center mb-4 bg-gradient-to-r from-orange-400 to-orange-500 p-4 shadow-lg rounded-xl">
                    <div className="border-2 border-white border-dashed p-3 font-greek rounded-lg">
                        <h1 className="text-white text-lg font-bold">GALERI PPLK-TERA 2025</h1>
                    </div>
                </div>


                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-full flex justify-between items-center p-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg shadow-md"
                    >
                        <span>{selectedMenu}</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleMenuClick(item)}
                                    className={`p-3 cursor-pointer transition-colors ${selectedMenu === item
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="hidden md:block w-80 bg-gradient-to-b from-orange-400 to-orange-500 p-6 shadow-lg rounded-xl mr-6">
                    <div className="text-center mb-8">
                        <div className="border-2 border-white border-dashed p-4 font-greek rounded-lg">
                            <h1 className="text-white text-xl font-bold mb-2">GALERI PPLK-TERA 2025</h1>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleMenuClick(item)}
                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${selectedMenu === item
                                    ? 'bg-white bg-opacity-20 border-2 border-white'
                                    : 'bg-white bg-opacity-10 hover:bg-opacity-15'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full border-2 border-white mr-3 ${selectedMenu === item ? 'bg-white' : ''
                                    }`}></div>
                                <span className="text-black font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-4 text-white text-2xl opacity-30">❋</div>
                    <div className="absolute top-4 right-4 text-white text-2xl opacity-30">❋</div>
                    <div className="absolute bottom-4 right-4 text-white text-2xl opacity-30">❋</div>
                    <div className="absolute top-4 left-4 text-white text-2xl opacity-30">❋</div>
                </div>

                <div className="flex-1 p-4 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {displayedImages.map((image, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${selectedMenu} ${index + 1}`}
                                    className="w-full h-48 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-2">
                        {[1, 2].map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium transition-all duration-200 ${currentPage === page
                                    ? 'bg-orange-500 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-orange-100 border border-gray-300'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <div className='flex justify-start my-5'>
                        <a href={drivePplk[currentPage - 1]} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg text-white p-2">Lihat Semua</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PplkDokumtasi;