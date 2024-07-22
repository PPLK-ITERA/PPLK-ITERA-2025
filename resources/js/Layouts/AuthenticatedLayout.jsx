import Navbar from "./Navbar";

import { Toaster } from "@/Components/ui/toaster";

export default function Authenticated({ user, header, children }) {
    return (
        <body
            className={`flex h-screen w-screen flex-col`}
            suppressHydrationWarning={true}
        >
            <Navbar user={user} />

            <main>{children}</main>

            <Toaster />
        </body>
    );
}
