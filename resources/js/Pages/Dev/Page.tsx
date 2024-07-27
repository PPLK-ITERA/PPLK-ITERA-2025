import React from "react";

import { Carousel } from "@/Components/CarouselMaskot";
import DevCard from "@/Components/dev/DevCard";

function Page() {
    return (
        <div className="bg-mobile-hero-background md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background h-screen bg-bottom bg-cover">
            <DevCard></DevCard>
        </div>
    );
}

export default Page;
