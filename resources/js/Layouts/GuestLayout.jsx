import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "./Navbar";
import { Toaster } from "@/Components/ui/toaster";

export default function Guest({ children }) {
    return (
        <body className={`w-screen h-screen flex flex-col`}>
            {children}
            <Toaster />
        </body>
    );
}
