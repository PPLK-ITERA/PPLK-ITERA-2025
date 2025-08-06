import React, { useEffect, useRef, useState, useCallback } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
// Background images
import bg_1 from "!assets/divisi/bg-1.png";
import bg_2 from "!assets/divisi/bg-2.png";
import bg_3 from "!assets/divisi/bg-3.png";
import bg_4 from "!assets/divisi/bg-4.png";
import bg_5 from "!assets/divisi/bg-5.png";
import bg_6 from "!assets/divisi/bg-6.png";
import bg_7 from "!assets/divisi/bg-7.png";
import bg_8 from "!assets/divisi/bg-8.png";
import bg_9 from "!assets/divisi/bg-9.png";
import bg_10 from "!assets/divisi/bg-10.png";
import bg_11 from "!assets/divisi/bg-11.png";
import bg_12 from "!assets/divisi/bg-12.png";
import bg_13 from "!assets/divisi/bg-13.png";
import bg_14 from "!assets/divisi/bg-14.png";
import bg_15 from "!assets/divisi/bg-15.png";
import bg_16 from "!assets/divisi/bg-16.png";
import bg_17 from "!assets/divisi/bg-17.png";
import bg_18 from "!assets/divisi/bg-18.png";

// Logo images
import logo_1 from "!assets/divisi/logo-1.png";
import logo_2 from "!assets/divisi/logo-2.png";
import logo_3 from "!assets/divisi/logo-3.png";
import logo_4 from "!assets/divisi/logo-4.png";
import logo_5 from "!assets/divisi/logo-5.png";
import logo_6 from "!assets/divisi/logo-6.png";
import logo_7 from "!assets/divisi/logo-7.png";
import logo_8 from "!assets/divisi/logo-8.png";
import logo_9 from "!assets/divisi/logo-9.png";
import logo_10 from "!assets/divisi/logo-10.png";
import logo_11 from "!assets/divisi/logo-11.png";
import logo_12 from "!assets/divisi/logo-12.png";
import logo_13 from "!assets/divisi/logo-13.png";
import logo_14 from "!assets/divisi/logo-14.png";
import logo_15 from "!assets/divisi/logo-15.png";
import logo_16 from "!assets/divisi/logo-16.png";
import logo_17 from "!assets/divisi/logo-17.png";
import logo_18 from "!assets/divisi/logo-18.png";

const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(7);
    // Responsive dot count
    const [responsiveDotCount, setResponsiveDotCount] = useState(15);
    const intervalRef = useRef<number | null>(null);

    const characters = [
        {
            id: 1,
            name: 'ZEUSVARA',
            title: 'Zeus (raja para dewa) + vara (terpilih terbaik)',
            makna: "Makna: Pemimpin agung yang dipilih sebagai yang terbaik",
            icon: logo_1,
            background: bg_1,
            accentColor: 'text-amber-400',
        },
        {
            id: 2,
            name: 'HERANAYA',
            title: "Hera (penjaga tatanan) + naya (arah/kebijakan)",
            makna: 'Makna: Pengarah jalannya roda organisasi dengan strategi dan keteraturan.',
            icon: logo_2,
            background: bg_2,
            accentColor: 'text-emerald-400',
        },
        {
            id: 3,
            name: 'APOLLONIX',
            title: 'Apollo (dewa seni dan cahaya) + ora (waktu, suara, ritme)',
            makna: "Makna: Penjaga harmoni waktu dan suasana, perancang momen-momen megah.",
            icon: logo_3,
            background: bg_3,
            accentColor: 'text-orange-400',
        },
        {
            id: 4,
            name: 'ATHENASTRA',
            title: 'Hephaistos (dewa kerja teknis) + kriya (aksi nyata)',
            makna: "Makna: Pelaksana nyata yang merancang dan menggerakkan mekanisme teknis",
            icon: logo_4,
            background: bg_4,
            accentColor: 'text-violet-400',
        },
        {
            id: 5,
            name: 'Aresdharma',
            title: 'Ares (dewa perang/disiplin) + dharma (aturan moral).',
            makna: "Makna: Penjaga keteraturan, prinsip, dan ketegasan sikap",
            icon: logo_5,
            background: bg_5,
            accentColor: 'text-violet-400',
        },
        {
            id: 6,
            name: 'Musevarna',
            title: 'Muse (Dewi inspiratif seni Yunani) + varna (warna) = Sumber inspirasi yang melahirkan karya visual penuh warna, makna, dan jiwa',
            makna: "",
            icon: logo_6,
            background: bg_6,
            accentColor: 'text-violet-400',
        },
        {
            id: 7,
            name: 'Noctheron',
            title: 'Noct- dari "nyx" (malam primordial) + Theron (pemburu, pengintai)',
            makna: "Makna: Pengintai malam yang mengabadikan jejak Aura gelap, mistik, dan menggambarkan dokumentasi & narasi yang diam-diam mengamati dan mencatat segala hal yang terjadi",
            icon: logo_7,
            background: bg_7,
            accentColor: 'text-violet-400',
        },
        {
            id: 8,
            name: 'Daewara',
            title: 'Noct- dari "nyx" (malam primordial) + Theron (pemburu, pengintai)',
            makna: "",
            icon: logo_8,
            background: bg_8,
            accentColor: 'text-violet-400',
        },
        {
            id: 9,
            name: 'Demesraya',
            title: 'Demeter (dewi panen) + shraya (penopang)',
            makna: "Makna: Penopang sumber daya dan kelancaran kesejahteraan kegiatan",
            icon: logo_9,
            background: bg_9,
            accentColor: 'text-violet-400',
        },
        {
            id: 10,
            name: 'Athenarupa',
            title: 'Athena (kebijaksanaan) + Rupa (bentuk/visual).',
            makna: "Makna: Menjelmakan kebijaksanaan Athena dalam bentuk digital – UI, sistem backend, desain visual, dan konten.",
            icon: logo_10,
            background: bg_10,
            accentColor: 'text-violet-400',
        },
        {
            id: 11,
            name: 'Gaialoka',
            title: 'Hestia/Gaia (kehangatan dan bumi) + loka (ruang/komunitas).',
            makna: "Makna: Pemersatu dan penggerak relasi antarpersonal yang hangat dan dinamis.",
            icon: logo_11,
            background: bg_11,
            accentColor: 'text-violet-400',
        },
        {
            id: 12,
            name: 'Posegatra',
            title: 'Poseidon (penguasa wilayah) + gatra (struktur).',
            makna: "Makna: Pengendali lapangan yang menjaga struktur dan wilayah kegiatan.",
            icon: logo_12,
            background: bg_12,
            accentColor: 'text-violet-400',
        },
        {
            id: 13,
            name: 'Synarchos',
            title: 'Synarchos adalah pemimpin yang mendampingi. Seperti Athena bagi Odysseus, seperti guru bagi murid, seperti rakyat bagi negaranya — kehadirannya bukan untuk menguasai, tetapi untuk menguatkan',
            makna: "Makna: Syn (bersama/dengan) + Archos (pemimpin)",
            icon: logo_13,
            background: bg_13,
            accentColor: 'text-violet-400',
        },
        {
            id: 14,
            name: 'Arsetra',
            title: 'Subdivisi manajemen lapangan yang mewujudkan perpaduan antara kekuatan strategis (Ares) dan dominasi medan (Setra). Kami adalah tim yang mengatur, memimpin, dan memastikan setiap operasi di lapangan berjalan sesuai rencana.',
            makna: "Makna : Ares (kekuatan, strategi, keberanian, pertahanan, dan dominasi.), Setra (lapangan, medan, arena, atau wilayah)",
            icon: logo_14,
            background: bg_14,
            accentColor: 'text-violet-400',
        },
        {
            id: 15,
            name: 'Krasena',
            title: 'Krasena" dapat dimaknai sebagai "Pasukan Kekuatan Mutlak" atau "Tentara dengan Otoritas dan Kekuatan yang Tak Terkalahkan."  Seperti pasukan yang berdiri di garda depan, komisi disiplin hadir bukan untuk menekan, melainkan untuk mengarahkan dengan ketegasan dan integritas.',
            makna: "Makna : Kratos (kekuatan, kuasa, dan otoritas mutlak) + Sena (Pasukan atau Tentara).",
            icon: logo_15,
            background: bg_15,
            accentColor: 'text-violet-400',
        },
        {
            id: 16,
            name: 'Theranusa',
            title: 'Theranusa dapat dimaknai sebagai "Perawat Negeri" atau "Penjaga Kesehatan Nusantara"',
            makna: "Makna : Therapeía (penyembuhan) + Nusa (negeri/pulau).Theranusa dapat dimaknai sebagai \"Perawat Negeri\" atau \"Penjaga Kesehatan Nusantara\"",
            icon: logo_16,
            background: bg_16,
            accentColor: 'text-violet-400',
        },
        {
            id: 17,
            name: 'Athantara',
            title: 'Athantara ( Sub divisi Mentor ) Gabungan dari "Athena" (dewi kebijaksanaan Yunani) + "Nusantara".',
            makna: "Makna: Kebijaksanaan Nusantara",
            icon: logo_17,
            background: bg_17,
            accentColor: 'text-violet-400',
        },
        {
            id: 18,
            name: 'Archipelagoon',
            title: 'Gabungan dari Archipelago (nusantara) + Pantheon/Olympoon (Yunani) – melambangkan kekuatan ilmu dari kepulauan nusantara dan dewa-dewa Yunani',
            makna: "",
            icon: logo_18,
            background: bg_18,
            accentColor: 'text-violet-400',
        }
    ].filter(Boolean);

    // Define types for better TypeScript support
    type Character = {
        id: number;
        name: string;
        title: string;
        makna: string;
        icon: string;
        background: string;
        accentColor: string;
    };

    type VisibleLogo = Character & {
        originalIndex: number;
    };

    // Pisahkan logika dot: dotCount selalu fixed (misal: 10), tidak terikat jumlah gambar
    const FIXED_DOT_COUNT = 10;

    const updateResponsiveCount = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1024) {
                setVisibleCount(7);
                setResponsiveDotCount(15);
            } else if (window.innerWidth >= 640) {
                setVisibleCount(5);
                setResponsiveDotCount(5);
            } else {
                setVisibleCount(3);
                setResponsiveDotCount(3);
            }
        }
    }, []);

    useEffect(() => {
        updateResponsiveCount();
        window.addEventListener('resize', updateResponsiveCount);
        return () => window.removeEventListener('resize', updateResponsiveCount);
    }, [updateResponsiveCount]);

    // Clear interval when component unmounts or when dragging
    const clearAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    // Start auto play
    const startAutoPlay = useCallback(() => {
        clearAutoPlay();
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % characters.length);
        }, 3000);
    }, [characters.length, clearAutoPlay]);

    useEffect(() => {
        startAutoPlay();
        return clearAutoPlay;
    }, [startAutoPlay, clearAutoPlay]);

    const handleLogoClick = useCallback((index: number) => {
        setCurrentIndex(index);
        clearAutoPlay();
        setTimeout(() => {
            startAutoPlay();
        }, 5000);
    }, [clearAutoPlay, startAutoPlay]);

    const currentCharacter = characters[currentIndex];
    if (!currentCharacter) return null;

    // Preload all backgrounds on mount (agar transisi antar gambar tidak delay)
    useEffect(() => {
        characters.forEach(char => {
            const img = new window.Image();
            img.src = char.background;
        });
    }, [characters]);

    // --- DOT LOGIC: FIXED WINDOW, DOT SELALU MAJU SAAT INDEX BERTAMBAH ---
    // Dots window always moves right as currentIndex increases, but only after currentIndex >= Math.floor(dotCount/2)
    // For the first few indexes, the window stays at 0, then slides right as currentIndex increases.
    // Dot active position is always Math.min(currentIndex, Math.floor(dotCount/2)) for the first window, then always in the center.
    function getDotIndexes(current: number, total: number, dotCount: number): number[] {
        if (total <= dotCount) {
            return Array.from({ length: total }, (_, i) => i);
        }
        const half = Math.floor(dotCount / 2);
        let start = current - half;
        if (start < 0) start = 0;
        if (start > total - dotCount) start = total - dotCount;
        return Array.from({ length: dotCount }, (_, i) => start + i);
    }

    // Drag state for logo carousel
    const [dragging, setDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragDelta, setDragDelta] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Calculate visible indexes for carousel
    const getVisibleIdxs = () => {
        const total = characters.length;
        const half = Math.floor(visibleCount / 2);
        let visibleIdxs: number[] = [];
        for (let i = -half; i <= half; i++) {
            let idx = (currentIndex + i + total) % total;
            visibleIdxs.push(idx);
        }
        return visibleIdxs;
    };

    // Drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setDragging(true);
        setDragStartX('touches' in e ? e.touches[0].clientX : e.clientX);
        setDragDelta(0);
        clearAutoPlay();
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging || dragStartX === null) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragDelta(clientX - dragStartX);
    };

    const handleDragEnd = () => {
        if (!dragging) return;
        setDragging(false);
        if (Math.abs(dragDelta) > 40) {
            if (dragDelta < 0) {
                // drag left
                setCurrentIndex((prev) => (prev + 1) % characters.length);
            } else {
                // drag right
                setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
            }
        }
        setDragStartX(null);
        setDragDelta(0);
        setTimeout(() => {
            startAutoPlay();
        }, 2000);
    };

    // Prevent image drag ghost
    useEffect(() => {
        const ref = carouselRef.current;
        if (!ref) return;
        const prevent = (e: Event) => e.preventDefault();
        ref.addEventListener('dragstart', prevent);
        return () => ref.removeEventListener('dragstart', prevent);
    }, []);

    return (
        <>
            <Head title="Divisi PPLK" />
            <DefaultLayout>
                <div className="min-h-screen transition-all duration-1000 ease-in-out relative overflow-hidden">
                    {/* Preload all backgrounds (hidden, for browser cache) */}
                    <div style={{ display: 'none' }}>
                        {characters.map(char => (
                            <img key={char.id} src={char.background} alt="" />
                        ))}
                    </div>
                    {/* Layer background utama */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentCharacter.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed',
                            opacity: 1,
                            pointerEvents: 'none',
                        }}
                    />
                    {/* Overlay untuk efek tambahan */}
                    <div className="absolute inset-0 bg-black/20 z-20"></div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-10 z-30">
                        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
                    </div>

                    <div className="relative z-40 flex flex-col min-h-screen">
                        {/* Left Info */}
                        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 text-white">
                            {/* Tambahkan margin top lebih besar agar konten lebih ke bawah */}
                            <div className="mt-32">
                                <h1 className={`text-3xl font-greek sm:text-4xl lg:text-6xl font-bold transition-colors duration-500 mb-4 text-center drop-shadow-lg`}>
                                    {currentCharacter.name}
                                </h1>
                                {/* Hanya tampilkan title/makna jika ada */}
                                {currentCharacter.title && (
                                    <p className="text-white/90 text-md sm:text-lg mb-1 text-center transition-all duration-500 drop-shadow-md">
                                        {currentCharacter.title}
                                    </p>
                                )}
                                {currentCharacter.makna && (
                                    <p className="text-white/90 text-md sm:text-lg mt-4 mb-2 text-center transition-all duration-500 drop-shadow-md">
                                        {currentCharacter.makna}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* Logo carousel at the bottom, responsive max */}
                        <div className="w-full flex justify-center items-end pb-8">
                            <div
                                ref={carouselRef}
                                className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 select-none cursor-grab active:cursor-grabbing"
                                style={{
                                    maxWidth: '100vw',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                    // Drag effect: translateX proportional to dragDelta
                                    transform: dragging ? `translateX(${dragDelta}px)` : undefined,
                                    transition: dragging ? 'none' : 'transform 0.3s cubic-bezier(.4,1,.4,1)',
                                    userSelect: 'none',
                                }}
                                onMouseDown={handleDragStart}
                                onMouseMove={handleDragMove}
                                onMouseUp={handleDragEnd}
                                onMouseLeave={handleDragEnd}
                                onTouchStart={handleDragStart}
                                onTouchMove={handleDragMove}
                                onTouchEnd={handleDragEnd}
                            >
                                {getVisibleIdxs().map(idx => {
                                    const logo = characters[idx];
                                    let scale = 0.9, opacity = 0.5, z = 0, translateY = 0;
                                    if (idx === currentIndex) {
                                        scale = 1.15;
                                        opacity = 1;
                                        z = 10;
                                        translateY = -10;
                                    } else if (
                                        idx === (currentIndex + 1) % characters.length ||
                                        idx === (currentIndex - 1 + characters.length) % characters.length
                                    ) {
                                        scale = 1.0;
                                        opacity = 0.8;
                                        z = 5;
                                    }
                                    return (
                                        <div
                                            key={logo.id}
                                            className="transition-all duration-500 ease-in-out flex flex-col items-center"
                                            style={{
                                                minWidth: 64,
                                                maxWidth: 120,
                                                transform: `scale(${scale}) translateY(${translateY}px)`,
                                                opacity,
                                                zIndex: z,
                                            }}
                                        >
                                            <img
                                                src={logo.icon}
                                                alt={logo.name}
                                                className="w-full h-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
                                                onClick={() => handleLogoClick(idx)}
                                                draggable={false}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Navigation dots */}
                        {/* Dots removed as requested */}
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Page;
