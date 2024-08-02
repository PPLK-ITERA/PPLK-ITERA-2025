import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

export interface FAQ {
    teks_pertanyaan: string;
    teks_jawaban: string;
}
export interface AccordionFAQProps {
    items: FAQ[];
}
export function AccordionFAQ({ items }: AccordionFAQProps) {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const handleClick = (index: number) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`mb-4 rounded-lg shadow-xl ${
                            clickedIndex === index
                                ? "border border-jaffa-600 bg-jaffa-100"
                                : "border border-[#DADADA] bg-white"
                        }`}
                    >
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger
                                onClick={() => handleClick(index)}
                                className="flex items-center w-full px-3 py-5 text-left border-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`icon icon-tabler icons-tabler-filled icon-tabler-info-square-rounded mr-2 text-jaffa-600`}
                                    style={{
                                        transform:
                                            clickedIndex === index
                                                ? "none"
                                                : "rotate(0deg)",
                                    }}
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                                </svg>
                                <span className="flex-1 font-montserrat text-[12px] md:text-[16px] font-semibold">
                                    {item.teks_pertanyaan}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="-mt-1 px-[15px] text-[10px] md:text-[14px] text-left">
                                {item.teks_jawaban}
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                ))}
            </Accordion>
        </div>
    );
}
