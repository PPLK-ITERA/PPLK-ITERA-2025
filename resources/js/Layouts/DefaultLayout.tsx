import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

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
