import React from "react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconWorldWww,
} from "@tabler/icons-react";

import { useAos } from "@/lib/hooks/useAos";

const icons = {
    instagram: (
        <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
            <IconBrandInstagram size={40} color="black" />
        </div>
    ),
    youtube: (
        <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
            <IconBrandYoutube size={40} color="black" />
        </div>
    ),
    website: (
        <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
            <IconWorldWww size={40} color="black" />
        </div>
    ),
    tiktok: (
        <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
            <IconBrandTiktok size={40} color="black" />
        </div>
    ),
};

export default function Sosmed({ allsosmed }) {
    const sosmedLinks = allsosmed[0];
    useAos();

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="z-20 flex flex-wrap items-center justify-center gap-5"
        >
            {Object.entries(sosmedLinks).map(([type, url]) =>
                url ? (
                    <a
                        key={type}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {icons[type] || <span>Icon not found</span>}
                    </a>
                ) : null,
            )}
        </div>
    );
}
