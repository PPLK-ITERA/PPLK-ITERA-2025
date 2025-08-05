import React, { useState } from 'react';

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
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ],
        'Part of Chaos': [
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ],
        'Flame of Hephaestus': [
            'https://images.unsplash.com/photo-1509248961158-d3f2619ad5a1?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1509248961158-d3f2619ad5a1?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1509248961158-d3f2619ad5a1?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ],
        'Wisdom of Athena': [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ],
        'Wrath of Ares': [
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ],
        'Ascension to Elysion': [
            'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
        ]
    };

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
                        {[1, 2, 3].map((page) => (
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
                </div>
            </div>
        </div>
    );
};

export default PplkDokumtasi;