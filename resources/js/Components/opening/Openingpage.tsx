import { useState, useEffect } from 'react';

import pplk2025 from "!assets/pplk/2025.jpg";
import pplk2024 from "!assets/pplk/2024.jpg";
import pplk2022 from "!assets/pplk/2022.jpg";
import bg1 from "!assets/tesla/bg-3.png"; // tambahkan import background
import nagaBg from "!assets/pplk/asset_naga.png"; // tambahkan import background naga


const OpeningPage = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [fullscreenMode, setFullscreenMode] = useState(false);
    const [showIframe, setShowIframe] = useState(false);
    const [iframeUrl, setIframeUrl] = useState('');
    const [preloadedIframes, setPreloadedIframes] = useState({});
    const [isIframeLoading, setIsIframeLoading] = useState(true);
    const [loadedIframes, setLoadedIframes] = useState<{ [key: string]: boolean }>({});
    const [iframeReady, setIframeReady] = useState(false);

    const images = [
        { id: 0, src: pplk2025, alt: 'PPLK 2025', title: 'ADVENTURE AWAITS', year: 'PPLK 2025', link: '/' },
        { id: 1, src: pplk2024, alt: 'PPLK 2024', title: 'TEAM SPIRIT', year: 'PPLK 2024', link: 'https://pplk2024-755271153581.asia-southeast2.run.app/informasi/pplk' },
        { id: 2, src: pplk2022, alt: 'PPLK 2022', title: 'LEADERSHIP', year: 'PPLK 2022', link: 'https://pplk2022-755271153581.europe-west1.run.app/' },
    ];

    // Modified preload effect
    useEffect(() => {
        const preloadSites = async () => {
            const externalSites = images.filter(img => img.link !== '/');
            const iframeContainer = {};

            for (const site of externalSites) {
                iframeContainer[site.link] = true;

                const iframe = document.createElement('iframe');
                iframe.style.cssText = `
                    position: fixed;
                    top: -9999px;
                    left: -9999px;
                    width: 100%;
                    height: 100%;
                    border: none;
                    opacity: 0;
                    pointer-events: none;
                    z-index: -1;
                `;
                iframe.src = site.link;

                iframe.onload = () => {
                    setLoadedIframes(prev => ({
                        ...prev,
                        [site.link]: true
                    }));
                };

                document.body.appendChild(iframe);
            }

            setPreloadedIframes(iframeContainer);
        };

        preloadSites();

        return () => {
            const preloadedFrames = document.querySelectorAll('iframe[style*="position: fixed"]');
            preloadedFrames.forEach(frame => frame.remove());
        };
    }, []);

    // Add new effect to handle iframe ready state
    useEffect(() => {
        if (showIframe) {
            setIframeReady(false);
            const timer = setTimeout(() => {
                setIframeReady(true);
            }, 2000); // Minimum loading time
            return () => clearTimeout(timer);
        }
    }, [showIframe, iframeUrl]);

    const handleImageClick = (index) => {
        if (isAnimating) return;
        if (index === currentIndex) {
            if (images[currentIndex].year === 'PPLK 2025') {
                if (typeof onComplete === 'function') onComplete();
            } else {
                setIsIframeLoading(true); // Reset loading state
                setIframeUrl(images[currentIndex].link);
                setShowIframe(true);
            }
        } else {
            // Tentukan arah berdasarkan perbedaan index, tapi jika looping, tetap konsisten
            const total = images.length;
            if ((index === 0 && currentIndex === total - 1)) {
                setTransitionDirection('right');
            } else if ((index === total - 1 && currentIndex === 0)) {
                setTransitionDirection('left');
            } else if (index > currentIndex) {
                setTransitionDirection('right');
            } else {
                setTransitionDirection('left');
            }
            setCurrentIndex(index);
            setIsAnimating(true);
        }
    };

    // Add new function to exit iframe view
    const exitIframe = () => {
        setShowIframe(false);
        setIframeUrl('');
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

    // Modified showIframe render
    if (showIframe) {
        const isLoaded = loadedIframes[iframeUrl] && iframeReady;

        return (
            <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center">
                <div className="absolute top-0 right-4 z-50">
                    <button
                        onClick={exitIframe}
                        className="text-white hover:text-gray-300 font-bold text-xl"
                    >
                        ✕
                    </button>
                </div>
                <div className="w-full h-full relative">
                    <div
                        className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${!isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url(${images[currentIndex].src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: isLoaded ? -1 : 1,
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-white text-xl font-greek">Loading {images[currentIndex].year}...</p>
                        </div>

                    </div>
                    <iframe
                        key={iframeUrl}
                        src={iframeUrl}
                        className={`w-full h-full border-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{ zIndex: isLoaded ? 2 : 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => {
                            setLoadedIframes(prev => ({
                                ...prev,
                                [iframeUrl]: true
                            }));
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Preload iframes */}
            <div className="hidden">
                {Object.keys(preloadedIframes).map(url => (
                    <iframe
                        key={url}
                        src={url}
                        style={{ display: 'none' }}
                        aria-hidden="true"
                    />
                ))}
            </div>

            <div
                className="h-screen flex flex-col items-center justify-between relative overflow-hidden px-4 sm:px-6 py-8"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay naga di belakang dengan opacity 0.25 */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${nagaBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.01,
                    }}
                />
                {/* Orange overlay for base color, match with #BF4000 and mix-blend-multiply */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: '#BF400099',
                        opacity: 1,
                        mixBlendMode: 'multiply',
                    }}
                />
                <div className="w-full max-w-7xl relative z-10 flex flex-col min-h-full py-4">
                    <div className="text-center mt-12 mb-4 md:mt-0 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-greek font-bold text-white">
                            SELAMAT DATANG SATRIYA
                        </h1>
                    </div>


                    <div className="relative flex items-center justify-center flex-1">
                        <div className="relative w-full max-w-5xl mx-2 sm:mx-6 flex items-center justify-center space-x-2 sm:space-x-6">
                            {/* Left Image */}
                            <div
                                className={`relative w-1/3 max-w-[100px] sm:max-w-[140px] md:max-w-[180px] aspect-[2/3] transform transition-all duration-800 ease-out
                                        ${transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-90' :
                                        transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-90' :
                                            'translate-x-0 opacity-80 scale-95'}
                                        ${!isAnimating ? 'hover:opacity-100 hover:scale-100' : ''}
                                        cursor-pointer`}
                                onClick={() => handleImageClick((currentIndex + images.length - 1) % images.length)}
                            >
                                <img src={images[(currentIndex + images.length - 1) % images.length].src} alt="Previous" className="w-full h-full object-cover rounded-xl shadow-xl rotate-2" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                        {images[(currentIndex + images.length - 1) % images.length].year}
                                    </h3>
                                </div>

                            </div>


                            {/* Center Image */}
                            <div
                                className={`relative w-1/2 max-w-[180px] sm:max-w-[240px] md:max-w-[280px] aspect-[2/3] transform transition-all duration-800 ease-out z-10 group
                                    hover:scale-105 active:scale-105 touch-pan-y
                                    ${isAnimating ? (transitionDirection === 'right' ? 'translate-x-full opacity-0 scale-90' : 'translate-x-0 opacity-0 scale-90') : 'translate-x-0 opacity-100 scale-110'}
                                    ${!isAnimating ? 'cursor-pointer' : ''}`}
                                onClick={() => handleImageClick(currentIndex)}
                            >
                                <img
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    className="w-full h-full object-cover rounded-2xl brightness-150 transition-all duration-300 group-hover:brightness-125"
                                />
                                <div className="absolute inset-0 rounded-2xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-2xl font-greek md:text-4xl lg:text-5xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                        {images[currentIndex].year}
                                    </h3>
                                </div>
                                <div className="absolute inset-0 border-2 sm:border-4 border-white border-opacity-50 rounded-2xl"></div>

                            </div>


                            {/* Right Image */}
                            <div
                                className={`relative w-1/3 max-w-[100px] sm:max-w-[140px] md:max-w-[180px] aspect-[2/3] transform transition-all duration-800 ease-out
                                ${transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-90' :
                                        transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-90' :
                                            'translate-x-0 opacity-80 scale-95'}
                                ${!isAnimating ? 'hover:opacity-100 hover:scale-100' : ''}
                                cursor-pointer`}
                                onClick={() => handleImageClick((currentIndex + 1) % images.length)}
                            >
                                <img
                                    src={images[(currentIndex + 1) % images.length].src}
                                    alt="Next"
                                    className="w-full h-full object-cover rounded-xl shadow-xl -rotate-2"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                        {images[(currentIndex + 1) % images.length].year}
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 text-white px-2 mt-auto pt-4 pb-2 sm:pb-8">
                        <div className="flex items-center gap-2 text-lg font-greek md:text-3xl order-1 sm:order-1">
                            <span className="text-2xl font-bold">0{currentIndex + 1}</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-300">0{images.length}</span>
                        </div>
                        <div className="flex justify-center w-full sm:w-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 space-x-2 order-3 sm:order-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isAnimating && index !== currentIndex) {
                                            const total = images.length;
                                            if ((index === 0 && currentIndex === total - 1)) {
                                                setTransitionDirection('right');
                                            } else if ((index === total - 1 && currentIndex === 0)) {
                                                setTransitionDirection('left');
                                            } else if (index > currentIndex) {
                                                setTransitionDirection('right');
                                            } else {
                                                setTransitionDirection('left');
                                            }
                                            setCurrentIndex(index);
                                            setIsAnimating(true);
                                        }
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                                />
                            ))}
                        </div>
                        <div className="flex items-center space-x-4 text-base sm:text-lg text-gray-200 font-greek md:text-3xl order-2 sm:order-3">
                            <button
                                type="button"
                                onClick={goToPrevious}
                                disabled={isAnimating}
                                className="hover:underline focus:outline-none"
                            >
                                PREVIOUS
                            </button>
                            <span className="mt-2">|</span>
                            <button
                                type="button"
                                onClick={goToNext}
                                disabled={isAnimating}
                                className="hover:underline focus:outline-none"
                            >
                                NEXT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpeningPage;
