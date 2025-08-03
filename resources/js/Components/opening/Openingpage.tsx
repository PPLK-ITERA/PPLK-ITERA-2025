import { useState, useEffect } from 'react';
import pplk2025 from "!assets/pplk/2025.png";
import pplk2024 from "!assets/pplk/2024.png";
import pplk2022 from "!assets/pplk/2022.png";

const OpeningPage = ({ onComplete }) => {
    // Ubah tipe transitionDirection agar bisa 'left' | 'right' | null
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [fullscreenMode, setFullscreenMode] = useState(false);

    const images = [
        { id: 0, src: pplk2025, alt: 'PPLK 2025', title: 'ADVENTURE AWAITS', year: 'PPLK 2025', link: '/' },
        { id: 1, src: pplk2024, alt: 'PPLK 2024', title: 'TEAM SPIRIT', year: 'PPLK 2024', link: 'https://mypepeelkah-755271153581.europe-west1.run.app/' },
        { id: 2, src: pplk2022, alt: 'PPLK 2022', title: 'LEADERSHIP', year: 'PPLK 2022', link: 'https://pplk2022-755271153581.europe-west1.run.app/' },
    ];

    const handleImageClick = (index) => {
        if (isAnimating) return;
        setCurrentIndex(index);
        setFullscreenMode(true);
    };

    const exitFullscreen = () => setFullscreenMode(false);

    const goToPrevious = () => {
        if (isAnimating) return;
        setTransitionDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setIsAnimating(true);
    };

    const goToNext = () => {
        if (isAnimating) return;
        setTransitionDirection('right');
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsAnimating(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTransitionDirection(null);
        }, 800);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        if (!fullscreenMode) {
            const interval = setInterval(goToNext, 5000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, fullscreenMode]);

    if (fullscreenMode) {
        return (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4" onClick={exitFullscreen}>
                <div className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-full object-contain rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
                        <p className='font-greek font-bold text-4xl sm:text-5xl md:text-7xl text-white'>START HERE</p>
                        <button
                            className='inline-block bg-white text-black text-lg font-greek md:text-3xl rounded-full px-4 py-2 sm:px-6 sm:py-3'
                            onClick={(e) => {
                                e.stopPropagation();
                                if (typeof onComplete === 'function') {
                                    onComplete();
                                }
                                if (images[currentIndex].link === '/') {
                                    // For internal link, let the parent component handle it
                                } else {
                                    // For external links, open in new tab
                                    window.open(images[currentIndex].link);
                                }
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#483b28] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
            <div className="w-full max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-greek font-bold text-white">
                        SELAMAT DATANG SATRIYA
                    </h1>
                </div>

                <div className="relative flex items-center justify-center">
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 group"
                        disabled={isAnimating}
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="relative w-full max-w-6xl mx-2 sm:mx-6 flex items-center justify-center space-x-2 sm:space-x-6">
                        {/* Left Image */}
                        <div
                            className={`relative w-1/3 max-w-[120px] sm:max-w-[160px] md:max-w-[200px] aspect-[2/3] transform transition-all duration-800 ease-out
                                ${transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-90' :
                                  transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-90' :
                                  'translate-x-0 opacity-80 scale-95'}
                                hover:opacity-100 hover:scale-100 cursor-pointer`}
                        >
                            <img src={images[(currentIndex + images.length - 1) % images.length].src} alt="Previous" className="w-full h-full object-cover rounded-xl shadow-xl rotate-2" onClick={() => handleImageClick((currentIndex + images.length - 1) % images.length)} />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl">{images[(currentIndex + images.length - 1) % images.length].year}</h3>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div
                            className={`relative w-1/2 max-w-[200px] sm:max-w-[260px] md:max-w-[300px] aspect-[2/3] transform transition-all duration-800 ease-out z-10
                                ${isAnimating ? (transitionDirection === 'right' ? 'translate-x-full opacity-0 scale-90' : 'translate-x-0 opacity-0 scale-90') : 'translate-x-0 opacity-100 scale-110'}
                                cursor-pointer`}
                            onClick={() => handleImageClick(currentIndex)}
                        >
                            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl">{images[currentIndex].year}</h3>
                            </div>
                            <div className="absolute inset-0 border-2 sm:border-4 border-white border-opacity-50 rounded-2xl"></div>
                        </div>

                        {/* Right Image */}
                        <div
                            className={`relative w-1/3 max-w-[120px] sm:max-w-[160px] md:max-w-[200px] aspect-[2/3] transform transition-all duration-800 ease-out
                                ${transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-90' :
                                  transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-90' :
                                  'translate-x-0 opacity-80 scale-95'}
                                hover:opacity-100 hover:scale-100 cursor-pointer`}
                        >
                            <img
                                src={images[(currentIndex + 1) % images.length].src}
                                alt="Next"
                                className="w-full h-full object-cover rounded-xl shadow-xl -rotate-2"
                                onClick={() => handleImageClick((currentIndex + 1) % images.length)}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl">{images[(currentIndex + 1) % images.length].year}</h3>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 group"
                        disabled={isAnimating}
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-10 gap-4 text-white text-lg font-greek md:text-3xl px-2">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">0{currentIndex + 1}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-300">0{images.length}</span>
                    </div>
                    <div className="flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating && index !== currentIndex) {
                                        setTransitionDirection(index > currentIndex ? 'right' : 'left');
                                        setCurrentIndex(index);
                                        setIsAnimating(true);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                            />
                        ))}
                    </div>
                    <div className="hidden sm:flex items-center space-x-4 text-xs text-gray-200">
                        <span>PREVIOUS</span>
                        <span>|</span>
                        <span>NEXT</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningPage;
