import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import logoPplk from "../../../../public/assets/logo-pplk-2024.png";
import Visi from "./Visi";
import Misi from "./Misi";
import FilosofiLogoInfo from "./FilosofiLogoInfo";
import Divisi from "./Divisi";

export default function Hero() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-8">
            <div className="flex max-lg:flex-col-reverse gap-8 justify-center items-center">
                <div className="flex flex-col">
                    <h2 className="flex flex-col max-lg:text-center gap-4">
                        <span className="font-avigea text-candlelight-600 text-3xl">PPLK ITERA 2024 </span>
                        <span className="font-avigea text-candlelight-600 text-3xl text-balance">Nagarika Anvensana : Exploration For The Future</span>
                    </h2>
                    <p className="font-montserrat text-justify text-[20px] mt-4">
                    Program Pengenalan Lingkungan Kampus Institut Teknologi Sumatera 2024 atau PPLK ITERA 2024 adalah sebuah kegiatan orientasi bagi seluruh Mahasiswa Baru Institut Teknologi Sumatera tahun angkatan 2024. PPLK ITERA 2024 diusung dengan tajuk Nagarika Anvensana : Exploration For The Futre, dan bertema Futuristic Nusantara
                    </p>
                    <br />
                    <p className="font-montserrat text-justify text-[20px]">
                    Kegiatan PPLK ITERA diusung dengan harapan bisa memberikan pemahaman dan memperkenalkan dunia kampus kepada seluruh Mahasiswa baru di Institut Teknologi Sumatera, sehingga para mahasiswa baru bisa menghadapi perkuliahan dengan lebih baik.
                    </p>
                </div>
                <img
                    src={logoPplk}
                    alt="pplk-logo"
                    className="w-80 h-80"
                />
            </div>
            <Visi/>
            <Misi/>
            <FilosofiLogoInfo/>
            <Divisi/>
        </div>
    );
}