import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

import { DataAtribut } from "@/lib/data/atribut";

export function AccordionAtribut() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([]);

  useEffect(() => {
    // Initialize the currentImageIndex array with zeros for each option
    setCurrentImageIndex(DataAtribut.map(() => 0));

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndexes) =>
        prevIndexes.map((index, i) => {
          const maxLength = DataAtribut[i]?.options?.[0]?.images?.length || 1;
          return (index + 1) % maxLength;
        }),
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {DataAtribut.map((item, index) => (
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
                    transform: clickedIndex === index ? "none" : "rotate(0deg)",
                  }}
                >
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                  <circle cx="12" cy="9" r="1.5" fill="white" />
                  <rect
                    x="11"
                    y="11"
                    width="2"
                    height="6"
                    rx="1"
                    fill="white"
                  />
                </svg>

                <span className="flex-1 truncate font-montserrat md:text-[16px] font-semibold text-[12px]">
                  {item.day}
                </span>
              </AccordionTrigger>

              <AccordionContent className="md:flex-row md:px-5 lg:px-8 flex flex-col items-center justify-center gap-5 px-2 text-left">
                {item.options.map((option, index) => (
                  <div className="flex flex-col">
                    <div
                      key={index}
                      className="rounded-[25px] flex flex-col items-center justify-center overflow-hidden"
                    >
                      <img
                        src={option.images[currentImageIndex[index]]}
                        alt={option.gender}
                        className={`object-cover rounded-[25px]`}
                      />
                    </div>
                    <p className="mt-2 font-semibold text-center">
                      {option.gender}
                    </p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
}
