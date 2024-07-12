import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import InfoPplk from "@/Components/informasi/InfoPplk";
import logoPplk from "../../../../public/assets/logo-pplk-2024.png";

function Page() {
    return (
        <div className="min-h-screen bg-pattern-white">
            <Navbar isSolid={true} isFixed={true}/>
            <div className="pt-28">
                <div className="font-avigea text-center text-jaffa-600 text-4xl px-8">
                    <h2 className="">PROGRAM PENGENALAN LINGKUNGAN KAMPUS ITERA 2024</h2>
                    <h2>-- PPLK ITERA 2024 --</h2>
                </div>
            </div>

            <InfoPplk/>

            <Footer/>
        </div>
    );
}

export default Page;
