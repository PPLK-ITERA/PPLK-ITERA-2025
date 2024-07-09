import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "./Navbar";
import { Toaster } from "@/Components/ui/toaster";

export default function Guest({ children }) {
    return (
        <body className={`flex h-screen w-screen flex-col`}>
            {children}
            <Toaster />
        </body>
    );
}
