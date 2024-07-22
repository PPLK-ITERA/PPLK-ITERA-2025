// import oxford from "!assets/fotoupt/oxford.jpg";
import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import { Link } from "@inertiajs/react";

import Header from "@/Components/informasi/Upt/Header";

import { uptData } from "@/lib/data/upt";

import chabud from "!assets/maskot.png";

function Page() {
    return (
        <DefaultLayout>
            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <Header />
            </div>

            <div className="bg-pattern-white py-10">
                <div className="max-w-7xl container flex flex-wrap justify-center">
                    {uptData.map((upt, index) => (
                        <Link
                            href={`/informasi/upt/${upt.key}`}
                            key={index}
                            className="md:w-1/3 lg:w-1/4 w-1/2 p-2"
                        >
                            <div className="overflow-hidden bg-white border rounded-lg shadow-md">
                                <img
                                    src={upt.logo}
                                    alt="UPT Kebun Raya"
                                    className="object-contain object-center w-full h-40 py-5 border"
                                />

                                <div className="bg-white p-[34px]">
                                    <h3 className="font-montserrat text-candlelight-700 text-lg font-semibold text-center">
                                        UPT Kebun Raya
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Page;
