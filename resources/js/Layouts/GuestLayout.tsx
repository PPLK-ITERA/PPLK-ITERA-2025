import Navbar from "./Navbar";

import { PropsWithChildren, ReactNode } from "react";

import { Link } from "@inertiajs/react";

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
        <body className={`flex h-screen w-screen flex-col`}>{children}</body>
    );
}
