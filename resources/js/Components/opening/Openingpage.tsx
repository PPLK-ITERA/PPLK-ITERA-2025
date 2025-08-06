import { useState, useEffect } from 'react';
import { Head } from "@inertiajs/react"; // Tambahkan import ini

import pplk2025 from "!assets/pplk/2025.jpg";
import pplk2024 from "!assets/pplk/2024.jpg";
import pplk2022 from "!assets/pplk/2022.jpg";
import bg1 from "!assets/tesla/bg-3.png";
import nagaBg from "!assets/pplk/asset_naga.png";

const OpeningPage = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
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

    // Function to get dynamic title based on current image
    const getDynamicTitle = () => {
        const currentYear = images[currentIndex].year;
        if (currentYear === 'PPLK 2024') {
            return 'Website PPLK 2024';
        } else if (currentYear === 'PPLK 2022') {
            return 'Website PPLK 2022';
        } else if (currentYear === 'PPLK 2025') {
            return 'Website PPLK 2025';
        }

    };

    // Function to get iframe title
    const getIframeTitle = () => {
        const currentYear = images[currentIndex].year;
        if (currentYear === 'PPLK 2024') {
            return 'PPLK 2024';
        } else if (currentYear === 'PPLK 2022') {
            return 'PPLK 2022';
        }
        return 'PPLK';
    };

    // Optimized preload effect
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

    // Faster iframe ready state
    useEffect(() => {
        if (showIframe) {
            setIframeReady(false);
            const timer = setTimeout(() => {
                setIframeReady(true);
            }, 1000); // Reduced from 2000ms to 1000ms
            return () => clearTimeout(timer);
        }
    }, [showIframe, iframeUrl]);

    const handleImageClick = (index) => {
        if (isAnimating) return;
        if (index === currentIndex) {
            if (images[currentIndex].year === 'PPLK 2025') {
                if (typeof onComplete === 'function') onComplete();
            } else {
                setIsIframeLoading(true);
                setIframeUrl(images[currentIndex].link);
                setShowIframe(true);
            }
        } else {
            const total = images.length;
            setNextIndex(index); // Set target index

            if ((index === 0 && currentIndex === total - 1)) {
                setTransitionDirection('right');
            } else if ((index === total - 1 && currentIndex === 0)) {
                setTransitionDirection('left');
            } else if (index > currentIndex) {
                setTransitionDirection('right');
            } else {
                setTransitionDirection('left');
            }
            setIsAnimating(true);
        }
    };

    const exitIframe = () => {
        setShowIframe(false);
        setIframeUrl('');
    };

    const exitFullscreen = () => setFullscreenMode(false);

    const goToPrevious = () => {
        if (isAnimating) return;
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setNextIndex(newIndex);
        setTransitionDirection('left');
        setIsAnimating(true);
    };

    const goToNext = () => {
        if (isAnimating) return;
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setNextIndex(newIndex);
        setTransitionDirection('right');
        setIsAnimating(true);
    };

    // Animation timing with delayed index change
    useEffect(() => {
        if (isAnimating) {
            // Change index at the middle of animation (200ms out of 400ms)
            const changeTimer = setTimeout(() => {
                setCurrentIndex(nextIndex);
            }, 200);

            // Complete animation
            const completeTimer = setTimeout(() => {
                setIsAnimating(false);
                setTransitionDirection(null);
            }, 400);

            return () => {
                clearTimeout(changeTimer);
                clearTimeout(completeTimer);
            };
        }
    }, [isAnimating, nextIndex]);

    // Optimized iframe render with faster transitions
    if (showIframe) {
        const isLoaded = loadedIframes[iframeUrl] && iframeReady;

        return (
            <>
                <Head title={getIframeTitle()} />
                <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center">
                    <div className="absolute top-0 right-4 z-50">
                        <button
                            onClick={exitIframe}
                            className="text-white hover:text-gray-300 font-bold text-xl transition-colors duration-200"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="w-full h-full relative">
                        <div
                            className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-300 ${!isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${images[currentIndex].src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: isLoaded ? -1 : 1,
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                            <div className="relative z-10 flex flex-col items-center space-y-4">
                                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-white text-lg font-greek">Loading {images[currentIndex].year}...</p>
                            </div>
                        </div>
                        <iframe
                            key={iframeUrl}
                            src={iframeUrl}
                            className={`w-full h-full border-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
            </>
        );
    }

    return (
        <>
            <Head title={getDynamicTitle()} />
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
                {/* Background overlays */}
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
                            {/* Left Image - Faster and smoother transitions */}
                            <div
                                className={`relative w-1/3 max-w-[100px] sm:max-w-[140px] md:max-w-[180px] aspect-[2/3] transform transition-all duration-400 ease-in-out
                                        ${transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-75' :
                                        transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-75' :
                                            'translate-x-0 opacity-80 scale-95'}
                                        ${!isAnimating ? 'hover:opacity-100 hover:scale-100' : ''}
                                        cursor-pointer`}
                                onClick={() => handleImageClick((currentIndex + images.length - 1) % images.length)}
                            >
                                <img
                                    src={images[(currentIndex + images.length - 1) % images.length].src}
                                    alt="Previous"
                                    className="w-full h-full object-cover rounded-xl shadow-xl rotate-2 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full rotate-2 transition-transform duration-300">
                                        {images[(currentIndex + images.length - 1) % images.length].year}
                                    </h3>
                                </div>
                            </div>

                            {/* Center Image - Overlay timing and style matched to side cards */}
                            <div
                                className={`relative w-1/2 max-w-[180px] sm:max-w-[240px] md:max-w-[280px] aspect-[2/3] transform transition-all duration-400 ease-in-out z-10 group
                                    hover:scale-100 active:scale-95 touch-pan-y
                                    ${isAnimating ? (transitionDirection === 'right' ? 'translate-x-full opacity-0 scale-75' : '-translate-x-full opacity-0 scale-75') : 'translate-x-0 opacity-100 scale-95'}
                                    ${!isAnimating ? 'cursor-pointer' : ''}`}
                                onClick={() => handleImageClick(currentIndex)}
                            >
                                <img
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    className="w-full h-full object-cover rounded-2xl brightness-150 transition-all duration-300 group-hover:brightness-125"
                                />
                                {/* Overlay for opacity on hover - timing and style matched */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl transition-opacity duration-300 group-hover:opacity-40 opacity-0 pointer-events-none"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-2xl font-greek md:text-4xl lg:text-5xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                        {images[currentIndex].year}
                                    </h3>
                                </div>
                                <div className="absolute inset-0 border-2 sm:border-4 border-white border-opacity-50 rounded-2xl transition-opacity duration-300"></div>
                            </div>

                            {/* Right Image - Faster and smoother transitions */}
                            <div
                                className={`relative w-1/3 max-w-[100px] sm:max-w-[140px] md:max-w-[180px] aspect-[2/3] transform transition-all duration-400 ease-in-out
                                ${transitionDirection === 'right' && isAnimating ? '-translate-x-full opacity-0 scale-75' :
                                        transitionDirection === 'left' && isAnimating ? 'translate-x-full opacity-0 scale-75' :
                                            'translate-x-0 opacity-80 scale-95'}
                                ${!isAnimating ? 'hover:opacity-100 hover:scale-100' : ''}
                                cursor-pointer`}
                                onClick={() => handleImageClick((currentIndex + 1) % images.length)}
                            >
                                <img
                                    src={images[(currentIndex + 1) % images.length].src}
                                    alt="Next"
                                    className="w-full h-full object-cover rounded-xl shadow-xl -rotate-2 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-bold text-white tracking-wide drop-shadow-xl text-lg font-greek md:text-3xl text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full -rotate-2 transition-transform duration-300">
                                        {images[(currentIndex + 1) % images.length].year}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 text-white px-2 mt-auto pt-4 pb-2 sm:pb-8">
                        <div className="flex items-center gap-2 text-lg font-greek md:text-3xl order-1 sm:order-1">
                            <span className="text-2xl font-bold transition-all duration-300">0{currentIndex + 1}</span>
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
                                            setNextIndex(index);

                                            if ((index === 0 && currentIndex === total - 1)) {
                                                setTransitionDirection('right');
                                            } else if ((index === total - 1 && currentIndex === 0)) {
                                                setTransitionDirection('left');
                                            } else if (index > currentIndex) {
                                                setTransitionDirection('right');
                                            } else {
                                                setTransitionDirection('left');
                                            }
                                            setIsAnimating(true);
                                        }
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 text-base sm:text-lg text-gray-200 font-greek md:text-3xl order-2 sm:order-3">
                            <button
                                type="button"
                                onClick={goToPrevious}
                                disabled={isAnimating}
                                className="hover:underline focus:outline-none transition-colors duration-200 hover:text-white disabled:opacity-50"
                            >
                                PREVIOUS
                            </button>
                            <span className="mt-2">|</span>
                            <button
                                type="button"
                                onClick={goToNext}
                                disabled={isAnimating}
                                className="hover:underline focus:outline-none transition-colors duration-200 hover:text-white disabled:opacity-50"
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
