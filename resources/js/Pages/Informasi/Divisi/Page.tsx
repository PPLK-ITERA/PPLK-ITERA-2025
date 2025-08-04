import React, { useEffect, useRef, useState, useCallback } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
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
    const [isDragging, setIsDragging] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<number | null>(null);
    const dragStartRef = useRef<number>(0);
    const dragEndRef = useRef<number>(0);

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

    // Scroll to specific card - fixed positioning
    const scrollToCard = useCallback((index: number) => {
        const container = scrollRef.current;
        if (!container) return;

        const cards = container.children;
        if (index >= cards.length) return;

        const card = cards[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;

        // Center the selected card
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: 'smooth',
        });
    }, []);

    // Handle logo click
    const handleLogoClick = useCallback((index: number) => {
        setCurrentIndex(index);
        clearAutoPlay();
        // Restart autoplay after 5 seconds
        setTimeout(() => {
            startAutoPlay();
        }, 5000);
    }, [clearAutoPlay, startAutoPlay]);

    // Handle drag start
    const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        clearAutoPlay();

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragStartRef.current = clientX;
        e.preventDefault();
    }, [clearAutoPlay]);

    // Handle drag end
    const handleDragEnd = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        setIsDragging(false);
        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
        dragEndRef.current = clientX;

        const dragDistance = dragStartRef.current - dragEndRef.current;
        const threshold = 50; // minimum distance to trigger slide

        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                // Dragged left, go to next
                setCurrentIndex(prev => (prev + 1) % characters.length);
            } else {
                // Dragged right, go to previous
                setCurrentIndex(prev => prev === 0 ? characters.length - 1 : prev - 1);
            }
        }

        // Restart autoplay after 5 seconds
        setTimeout(() => {
            startAutoPlay();
        }, 5000);
    }, [isDragging, characters.length, startAutoPlay]);

    // Initialize with proper positioning
    useEffect(() => {
        scrollToCard(currentIndex);
    }, [currentIndex, scrollToCard]);

    // Start autoplay on mount
    useEffect(() => {
        startAutoPlay();
        return clearAutoPlay;
    }, [startAutoPlay, clearAutoPlay]);

    const currentCharacter = characters[currentIndex];

    // Tambahkan debug log untuk memastikan jumlah karakter
    console.log('Jumlah karakter:', characters.length);

    if (!currentCharacter) return null;

    // Generate visible logos (show 3 at a time with proper looping)
    const getVisibleLogos = (): VisibleLogo[] => {
        const visible: VisibleLogo[] = [];
        const totalLogos = characters.length;

        // Always show 3 logos: previous, current, next
        for (let i = -1; i <= 1; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalLogos - 1;
            if (index >= totalLogos) index = 0;
            visible.push({ ...characters[index], originalIndex: index });
        }

        return visible;
    };

    const visibleLogos = getVisibleLogos();

    // Helper to get responsive value
    const getResponsiveValue = (desktop: number, tablet: number, mobile: number) => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1024) return desktop; // lg+
            if (window.innerWidth >= 640) return tablet;   // sm/md
            return mobile;
        }
        return desktop;
    };

    return (
        <DefaultLayout>
            <div className="min-h-screen transition-all duration-1000 ease-in-out relative overflow-hidden">
                {/* Layer background semua divisi, opacity 50% */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {characters.map((char, idx) => (
                        <img
                            key={char.id}
                            src={char.background}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                zIndex: 1,
                                opacity: 0.5, // Selalu 50% meskipun sedang aktif
                                pointerEvents: 'none',
                            }}
                        />
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
                            className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide"
                            style={{
                                maxWidth: '100vw',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                            }}
                        >
                            {/* Responsive logo display: desktop 7, tab 5, mobile 3 */}
                            {(() => {
                                let visibleCount = 7;
                                if (typeof window !== "undefined") {
                                    if (window.innerWidth >= 1024) visibleCount = 7;
                                    else if (window.innerWidth >= 640) visibleCount = 5;
                                    else visibleCount = 3;
                                }
                                const total = characters.length;
                                let visibleIdxs: number[] = [];
                                const half = Math.floor(visibleCount / 2);
                                for (let i = -half; i <= half; i++) {
                                    let idx = (currentIndex + i + total) % total;
                                    visibleIdxs.push(idx);
                                }
                                return visibleIdxs.map(idx => {
                                    const logo = characters[idx];
                                    return (
                                        <div
                                            key={logo.id}
                                            className={`transition-all duration-500 ease-in-out ${
                                                idx === currentIndex
                                                    ? 'scale-110 opacity-100 z-10'
                                                    : 'scale-90 opacity-50 z-0'
                                            }`}
                                            style={{
                                                minWidth: 64,
                                                maxWidth: 120,
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
                                });
                            })()}
                        </div>
                    </div>
                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {(() => {
                            // Responsive dot count: desktop 15, tab 10, mobile 5
                            let dotCount = 15;
                            if (typeof window !== "undefined") {
                                if (window.innerWidth >= 1024) dotCount = 15;
                                else if (window.innerWidth >= 640) dotCount = 10;
                                else dotCount = 5;
                            }
                            // Spread dots evenly across characters
                            const total = characters.length;
                            let dotIndexes: number[] = [];
                            if (dotCount >= total) {
                                dotIndexes = Array.from({ length: total }, (_, i) => i);
                            } else {
                                for (let i = 0; i < dotCount; i++) {
                                    dotIndexes.push(Math.round(i * (total - 1) / (dotCount - 1)));
                                }
                            }
                            // Remove duplicates if any (can happen due to rounding)
                            dotIndexes = Array.from(new Set(dotIndexes));
                            return dotIndexes.map(index => (
                                <button
                                    key={index}
                                    onClick={() => handleLogoClick(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-white scale-125'
                                            : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                />
                            ));
                        })()}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Page;
