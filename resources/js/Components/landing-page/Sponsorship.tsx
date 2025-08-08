import React from "react";
import goodday from "!assets/logo-sponsor/goodday.png";
import { data_media_partner, data_sponsor } from "@/lib/data/landing-page";

// Type definitions
interface SponsorItem {
    id: number;
    name: string;
    src: string;
}

interface MediaPartnerItem {
    id: number;
    name: string;
    src: string;
}

function repeatArrayToFill<T>(minLength: number, arr: T[]): T[] {
    const result: T[] = [];
    let i = 0;
    while (result.length < minLength) {
        result.push(arr[i % arr.length]);
        i++;
    }
    return result;
}

// Card component replacement
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`${className}`}>
        {children}
    </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`${className}`}>
        {children}
    </div>
);

// MaxWidthWrapper component replacement
const MaxWidthWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

// Hook untuk drag functionality
function useDragScroll() {
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragOffset, setDragOffset] = React.useState(0);
    const [animationPaused, setAnimationPaused] = React.useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setAnimationPaused(true);
        const startX = e.pageX;
        const scrollContainer = e.currentTarget;
        const currentTransform = scrollContainer.style.transform || 'translateX(0px)';
        const currentOffset = parseFloat(currentTransform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/)?.[1] || 0);

        const handleMouseMove = (e) => {
            const x = e.pageX;
            const walk = (x - startX) * 2;
            setDragOffset(currentOffset + walk);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setAnimationPaused(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);

            // Reset offset after a delay
            setTimeout(() => {
                setDragOffset(0);
            }, 1000);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return { isDragging, dragOffset, animationPaused, handleMouseDown };
}

export default function Sponsorship() {
    // Buat 5 set lengkap untuk seamless loop yang lebih smooth
    const sponsorRepeat = repeatArrayToFill<SponsorItem>(data_sponsor.length * 5, data_sponsor as SponsorItem[]);
    const mediaRepeat = repeatArrayToFill<MediaPartnerItem>(data_media_partner.length * 5, data_media_partner as MediaPartnerItem[]);

    // Drag functionality hooks
    const sponsorDrag = useDragScroll();
    const mediaDrag = useDragScroll();

    // Preload all images
    React.useEffect(() => {
        (data_sponsor as SponsorItem[]).forEach((item) => {
            const img = new window.Image();
            img.src = item.src;
        });
        (data_media_partner as MediaPartnerItem[]).forEach((item) => {
            const img = new window.Image();
            img.src = item.src;
        });
    }, []);

    return (
        <MaxWidthWrapper className="relative flex flex-col items-center w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
            <style>
                {`
                .scroll-loop {
                    display: flex;
                    width: max-content;
                    animation: scroll-right 25s linear infinite;
                    will-change: transform;
                }
                .scroll-loop-left {
                    display: flex;
                    width: max-content;
                    animation: scroll-left 30s linear infinite;
                    will-change: transform;
                }

                /* Perfect seamless animation with fixed spacing */
                @keyframes scroll-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 5));
                    }
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(calc(-100% / 5));
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                /* Hover and drag pause effect */
                .scroll-container:hover .scroll-loop,
                .scroll-container:hover .scroll-loop-left,
                .scroll-loop.dragging,
                .scroll-loop-left.dragging {
                    animation-play-state: paused;
                }

                /* Fixed item dimensions to prevent padding shifts */
                .sponsor-item {
                    width: 216px !important;
                    height: 156px !important;
                    flex-shrink: 0;
                    flex-grow: 0;
                    padding: 4px;
                    box-sizing: border-box;
                }

                .media-item {
                    width: 136px !important;
                    height: 136px !important;
                    flex-shrink: 0;
                    flex-grow: 0;
                    padding: 4px;
                    box-sizing: border-box;
                    margin: 80px 0;
                }

                /* Logo styling untuk crop yang lebih baik */
                .logo-container {
                    border: 1px solid rgba(229, 231, 235, 0.5);
                    transition: transform 0.3s ease;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }

                .logo-container:hover {
                    transform: translateY(-2px);
                }

                .media-logo-container {
                    border: 1px solid rgba(229, 231, 235, 0.5);
                    transition: transform 0.3s ease;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }

                .media-logo-container:hover {
                    transform: translateY(-2px);
                }

                /* Better image fit */
                .logo-image {
                    filter: contrast(1.1) saturate(1.1);
                    transition: filter 0.3s ease;
                }

                .logo-image:hover {
                    filter: contrast(1.2) saturate(1.2);
                }

                /* Cursor styles for drag */
                .scroll-loop,
                .scroll-loop-left {
                    cursor: grab;
                }

                .scroll-loop.dragging,
                .scroll-loop-left.dragging {
                    cursor: grabbing;
                }
                `}
            </style>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-300 rounded-full opacity-15 blur-2xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-25 blur-lg"></div>
            </div>

            {/* Sponsor Section */}
            <div className="relative flex flex-col items-center justify-center w-full mb-20 z-10">
                <h2 className="mb-12 w-fit bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text font-bold text-2xl md:text-4xl lg:text-5xl text-center text-transparent">
                    Terimakasih Kepada Sponsor
                </h2>

                <div className="overflow-hidden w-full relative scroll-container">
                    <div
                        className={`scroll-loop ${sponsorDrag.isDragging ? 'dragging' : ''} ${sponsorDrag.animationPaused ? 'dragging' : ''}`}
                        style={{
                            transform: sponsorDrag.dragOffset !== 0 ? `translateX(${sponsorDrag.dragOffset}px)` : undefined
                        }}
                        onMouseDown={sponsorDrag.handleMouseDown}
                    >
                        {sponsorRepeat.map((item, idx) => (
                            <div
                                key={`${item.id}-sponsor-${idx}`}
                                className={`sponsor-item ${item.id === 1 ? 'special' : ''}`}
                            >
                                <Card className={`logo-container ${item.id === 1 ? 'special' : 'rounded-xl'} overflow-hidden border-none h-full`}>
                                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            loading="eager"
                                            className={`object-cover ${
                                                item.src === goodday ? "w-[4000px]" :
                                                item.id === 1 ? "w-3/4" : "w-1/2"
                                            }`}
                                            style={{
                                                pointerEvents: 'none'
                                            }}
                                            draggable={false}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced gradient fade effect */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent pointer-events-none z-10" />
                </div>
            </div>

            {/* Media Partner Section */}
            <div className="relative flex flex-col items-center justify-center w-full z-10">
                <h2 className="mb-12 w-fit bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text font-bold text-2xl md:text-4xl lg:text-5xl text-center text-transparent">
                    Terimakasih Kepada Media Partner
                </h2>

                <div className="overflow-hidden w-full relative scroll-container">
                    <div
                        className={`scroll-loop-left ${mediaDrag.isDragging ? 'dragging' : ''} ${mediaDrag.animationPaused ? 'dragging' : ''}`}
                        style={{
                            transform: mediaDrag.dragOffset !== 0 ? `translateX(${mediaDrag.dragOffset}px)` : undefined
                        }}
                        onMouseDown={mediaDrag.handleMouseDown}
                    >
                        {mediaRepeat.map((item, idx) => (
                            <div
                                key={`${item.id}-media-${idx}`}
                                className="media-item"
                            >
                                <Card className="media-logo-container overflow-hidden border-none h-full">
                                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            loading="eager"
                                            className="object-cover w-[100px] h-[100px] rounded-full"
                                            style={{ pointerEvents: 'none' }}
                                            draggable={false}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced gradient fade effect */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent pointer-events-none z-10" />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
