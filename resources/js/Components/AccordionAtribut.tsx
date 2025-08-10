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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
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

              <AccordionContent className="flex flex-col md:flex-row gap-6 p-4">
                {/* Speak Mahasiswa Baru */}
                <div className="flex-1 border border-jaffa-600 bg-jaffa-100 rounded-lg p-4 shadow-sm">
                  <div className="text-center font-semibold text-lg mb-3">
                    Spek Mahasiswa Baru
                  </div>
                  {item.speakMaba?.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {item.speakMaba.map((speakItem, index) => (
                        <label
                          key={index}
                          className="flex items-start gap-3 cursor-pointer"
                          htmlFor={`checkbox-maba-${item.id}-${index}`}
                        >
                          <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 accent-blue-600"
                            id={`checkbox-maba-${item.id}-${index}`}
                            aria-label={`Checkbox speak mahasiswa baru ${index + 1}`}
                          />
                          <p className="text-sm font-montserrat break-words overflow-wrap">
                            {speakItem.text}
                          </p>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Speak Kelompok */}
                <div className="flex-1 border border-jaffa-600 bg-jaffa-100 rounded-lg p-4 shadow-sm">
                  <div className="text-center font-semibold text-lg mb-3">
                    Spek Kelompok
                  </div>
                  {item.speakKelompok?.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {item.speakKelompok.map((speakItem, index) => (
                        <label
                          key={index}
                          className="flex items-start gap-3 cursor-pointer"
                          htmlFor={`checkbox-kelompok-${item.id}-${index}`}
                        >
                          <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 accent-blue-600"
                            id={`checkbox-kelompok-${item.id}-${index}`}
                            aria-label={`Checkbox speak kelompok ${index + 1}`}
                          />
                          <p className="text-sm font-montserrat break-words overflow-wrap">
                            {speakItem.text}
                          </p>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
}
