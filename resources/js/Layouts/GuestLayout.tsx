import Navbar from "./Navbar";

import { PropsWithChildren, ReactNode } from "react";

import { Link } from "@inertiajs/react";

import ApplicationLogo from "@/Components/ApplicationLogo";
import { Toaster } from "@/Components/ui/toaster";

interface GuestLayoutProps {
    header?: string | null;
    description?: string | ReactNode | null;
}

export function GuestLayout({
    description = null,
    header = null,
    children,
}: PropsWithChildren<GuestLayoutProps>) {
    return (
        <body className={`flex h-screen w-screen flex-col`}>
            {children}
            <Toaster />
        </body>
    );
}
