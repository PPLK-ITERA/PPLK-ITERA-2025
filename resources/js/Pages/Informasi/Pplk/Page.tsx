import React from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import InfoPplk from "@/Components/informasi/pplk/InfoPplk";

function Page() {
    return (
        <div className="min-h-screen bg-pattern-white">
            <Navbar isSolid={true} isFixed={true}/>
            <div className="sm:pt-28 pt-10">
                <div className="font-avigea text-center text-jaffa-600 sm:text-4xl sm:px-8 text-2xl">
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
