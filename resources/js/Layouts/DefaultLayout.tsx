import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

interface DefaultLayoutProps {
    isSolid?: boolean;
    children: React.ReactNode;
}

export default function DefaultLayout({
    isSolid = false,
    children,
}: DefaultLayoutProps) {
    return (
        <>
            <Navbar isFixed={true} isSolid={isSolid} />
            {children}
            <Footer />
        </>
    );
}
