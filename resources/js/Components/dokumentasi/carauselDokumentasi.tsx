import { useEffect, useRef, useState } from "react";

export default function CarauselDokumentasi({ images = [], speed = 0.5 }) {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    // Default image jika tidak ada gambar diberikan
    const defaultImages = [
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
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
