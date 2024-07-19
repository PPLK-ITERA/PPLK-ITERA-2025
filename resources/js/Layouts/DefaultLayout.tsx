import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar isFixed={true} />
            {children}
            <Footer />
        </>
    );
}
