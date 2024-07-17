import { User } from "@/lib/types/User";

import React, { PropsWithChildren, ReactNode } from "react";

import Header from "@/Components/dashboard/layout/header";
import Sidebar from "@/Components/dashboard/layout/sidebar";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

export default function DashboardLayout({
    user,
    children,
}: PropsWithChildren<{ user: User }>) {
    return (
        <>
            <Header user={user} />
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <main className="flex-1 h-screen pt-16 w-full overflow-hidden">
                    <ScrollArea className="h-full">
                        <div className="md:w-full w-screen md:p-8 flex-1 p-4 pt-6 space-y-4">
                            {children}
                        </div>
                        <ScrollBar orientation="horizontal"/>
                    </ScrollArea>
                </main>
            </div>
        </>
    );
}
