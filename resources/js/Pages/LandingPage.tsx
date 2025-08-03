import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavHero from "@/Components/NavHero";
import OpeningPage from "@/Components/opening/Openingpage";
import FilosofiLogo from "@/Components/landing-page/FilosofiLogo";
import InfoSection from "@/Components/landing-page/InfoSection";
import Maskot from "@/Components/landing-page/Maskot";
import Panduan from "@/Components/landing-page/Panduan";
import Sponsorship from "@/Components/landing-page/Sponsorship";
import VideoSection from "@/Components/landing-page/VideoSection";
import What from "@/Components/landing-page/What";
import { useAos } from "@/lib/hooks/useAos";
import elang from "!assets/elang-hero.png";
import overlay_earth from "!assets/overlay-earth.png";
import pillar_brown2 from "!assets/pillar-brown2.png";
import sponsor_overlay from "!assets/sponsor-overlay.png";

export default function LandingPage() {
  const [showOpening, setShowOpening] = useState(true);
  useAos();

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  if (showOpening) {
    return <OpeningPage onComplete={handleOpeningComplete} />;
  }


  return (
    <>
      <Head title="Beranda">
        <meta
          name="description"
          content="Program Pengenalan Lingkungan Kampus (PPLK) 2025 di Institut Teknologi Sumatera adalah kegiatan orientasi yang dirancang untuk membantu mahasiswa baru mengenal lingkungan kampus, nilai-nilai akademik, serta budaya di ITERA. Program ini memberikan kesempatan bagi para mahasiswa untuk beradaptasi dengan kehidupan kampus, memahami fasilitas yang tersedia, dan membangun koneksi dengan sesama mahasiswa serta dosen. PPLK 2025 diharapkan dapat menjadi fondasi yang kuat bagi mahasiswa baru untuk memulai perjalanan akademik mereka dengan percaya diri dan semangat."
        />
        <meta property="og:title" content="Beranda - PPLK 2025" />
        <meta property="og:url" content="https://pplkitera.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pplkitera.com/" />
      </Head>

      <div className="scrollbar-hide relative overflow-hidden">
        <MaxWidthWrapper className="relative">
          <img
            src={elang}
            alt="elang"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-1 hidden top-[25rem] z-30 md:right-10 md:top-28 lg:top-20 md:block md:w-1/3 md:scale-100 lg:w-1/3"
          />
        </MaxWidthWrapper>

        <NavHero />

        <div className="bg-pattern-white relative">
          <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />

          <MaxWidthWrapper>
            <What />
            <Panduan />
          </MaxWidthWrapper>

          <img src={overlay_earth} alt="overlay_earth" className="w-full" />
        </div>

        <VideoSection />

        <FilosofiLogo />

        <div className="relative bg-[#170C0A] -mt-1 bg-pattern-white">
          <img
            src={pillar_brown2}
            alt="pillar_brown2"
            className="absolute left-0 w-[30%] hidden md:block"
          />

          <MaxWidthWrapper className="z-30">
            <Maskot />
          </MaxWidthWrapper>
        </div>

        <div className="bg-pattern-white pt-40 pb-20">
          <InfoSection />
        </div>

        <div className="h-[10px] w-full bg-candlelight-600" />

        <div data-aos="fade-up" data-aos-duration={1000}>
          <Sponsorship />
        </div>

        <img
          data-aos="fade-up"
          data-aos-duration={1000}
          src={sponsor_overlay}
          alt="sponsor_overlay"
          className="object-cover w-full"
        />

        <Footer />
      </div>
    </>
  );
}
