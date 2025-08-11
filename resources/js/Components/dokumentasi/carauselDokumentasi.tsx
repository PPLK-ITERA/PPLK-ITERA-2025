import { useEffect, useRef, useState } from "react";
import dokum_11 from "!assets/dokumentasi/dokum-21.jpg";
import dokum_12 from "!assets/dokumentasi/dokum-22.jpg";
import dokum_13 from "!assets/dokumentasi/dokum-23.jpg";
import dokum_14 from "!assets/dokumentasi/dokum-24.jpg";
import dokum_15 from "!assets/dokumentasi/dokum-25.jpg";
import dokum_16 from "!assets/dokumentasi/dokum-26.jpg";
import dokum_17 from "!assets/dokumentasi/dokum-27.jpg";
import dokum_18 from "!assets/dokumentasi/dokum-28.jpg";
import dokum_19 from "!assets/dokumentasi/dokum-29.jpg";
import dokum_20 from "!assets/dokumentasi/dokum-30.jpg";


export default function CarauselDokumentasi({ images = [], speed = 0.5 }) {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    // Default image jika tidak ada gambar diberikan
    const defaultImages = [
        dokum_11,
        dokum_12,
        dokum_13,
        dokum_14,
        dokum_15,
        dokum_16,
        dokum_17,
        dokum_18,
        dokum_19,
        dokum_20,
    ];
    

    const finalImages = images.length > 0 ? images : defaultImages;

    useEffect(() => {
        const allImages = contentRef.current?.querySelectorAll("img") || [];
        let loadedCount = 0;

        allImages.forEach((img) => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.onload = img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === allImages.length) {
                        setLoaded(true);
                    }
                };
            }
        });

        if (loadedCount === allImages.length) {
            setLoaded(true);
        }
    }, [finalImages]);

    useEffect(() => {
        if (!loaded) return;

        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        let x = 0;
        let frameId;

        const step = () => {
            x += speed;
            if (x >= content.scrollWidth / 2) x = 0;
            container.scrollLeft = x;
            frameId = requestAnimationFrame(step);
        };

        frameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(frameId);
    }, [loaded, speed]);

    return (
        <div className="w-full overflow-hidden py-4 my-10 md:m-0">
            <div ref={containerRef} className="w-full overflow-hidden">
                <div ref={contentRef} className="flex w-max whitespace-nowrap">
                    {[...finalImages, ...finalImages].map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`scroll-img-${idx}`}
                            className="h-40 w-auto object-cover mx-2 rounded-md shadow"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
