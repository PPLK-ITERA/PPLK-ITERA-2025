import { Toaster } from "@/Components/ui/toaster";
import Navbar from "./Navbar";

export default function Authenticated({ user, header, children }) {
    return (
        <body
            className={`w-screen h-screen flex flex-col`}
            suppressHydrationWarning={true}
        >
            <Navbar user={user} />

            <main>{children}</main>

            <Toaster />
        </body>
    );
}
