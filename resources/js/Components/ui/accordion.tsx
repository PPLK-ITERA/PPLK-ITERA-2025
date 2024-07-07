import React, { useState, ReactNode } from 'react';

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        onClick();
        setIsClicked(!isClicked);
    };

    return (
        <div className={`shadow-xl border border-[#DADADA] rounded-lg mb-4 ${isClicked ? 'bg-jaffa-100' : ''}`}>
            <div
                onClick={handleClick}
                className="cursor-pointer p-4 flex justify-between items-center"
            >
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 text-jaffa-600"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                    </svg>
                    <h3 className="text-[16px] font-montserrat font-semibold">{title}</h3>
                </div>
                <span>
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 9l6 6l6 -6" />
                        </svg>
                    )}
                </span>
            </div>
            {isOpen && <div className="text-left ml-[20px] -mt-2 mb-4">{children}</div>}
        </div>
    );
};

interface AccordionProps {
    items: { title: string; content: ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
