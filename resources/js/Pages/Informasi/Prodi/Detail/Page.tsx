import React from "react";

import { Icon } from "lucide-react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandTiktokFilled,
    IconBrandYoutube,
    IconBrandYoutubeFilled,
    IconWorld,
} from "@tabler/icons-react";

import { AccordionFAQ } from "@/Components/AccordionFAQ";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Hmps from "@/Components/fragments/Informasi/Prodi/Hmps";
import Prodi from "@/Components/fragments/Informasi/Prodi/Prodi";
import InfoPplk from "@/Components/informasi/pplk/InfoPplk";
import { AccordionKk } from "@/Components/informasi/prodi/AccordionKk";
import AchievementList from "@/Components/informasi/prodi/AchievementList";
import { Card, CardContent } from "@/Components/ui/card";

import { programStudies } from "@/lib/data/programStudi";

import accreditation_a from "!assets/accreditation-a.png";
import awan from "!assets/awan.png";
import banpt from "!assets/banpt.png";

function Page() {
    const prodi = programStudies.at(0)!;

    return (
        <div className=" min-h-screen font-montserrat overflow-x-hidden">
            <Navbar isSolid={true} isFixed={true} />

            <div className="relative bg-pattern-white px-8">
                <Prodi prodi={prodi} className="max-w-6xl mx-auto" />
                {/* <img
                    src={awan}
                    alt=""
                    className="absolute w-full bg-gradient-to-t"
                    style={{ transform: "rotateX(180deg)" }}
                /> */}
            </div>
            <div className="bg-pattern-black text-gray-200">
                <Hmps prodi={prodi} className="mx-auto" />
            </div>

            <Footer />
        </div>
    );
}

export default Page;
