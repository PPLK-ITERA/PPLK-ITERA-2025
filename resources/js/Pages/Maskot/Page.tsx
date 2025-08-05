import React from "react";

import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardTitle } from "@/Components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { useAos } from "@/lib/hooks/useAos";
import maskot_pplk_man from "!assets/maskot/maskot-pplk-man.png";
import maskot_pplk_woman from "!assets/maskot/maskot-pplk-woman.png";
import overlay_earth from "!assets/overlay-earth.png";

const MASKOTS = [
  {
    index: 0,
    key: "maskot-man",
    name: "Kato",
    description:"Halo, namaku Rhinoceto. Aku biasa dipanggil “Seto”. Namaku berasal dari gabungan kata “Rhinoceros”, yang berarti badak jantan dan “Cato” yang berarti bijaksana. Aku merupakan perwujudan mahasiswa baru yang senantiasa bijaksana dan berani dalam mengambil keputusan. Namaku menjadi titik balik bagi mahasiswa baru untuk memiliki jiwa kepemimpinan dan mampu bertanggung jawab atas dirinya dan lingkungan sekitar",
    image: maskot_pplk_man,
  },
  {
    index: 1,
    key: "maskot-woman",
    name: "Sera",
    description:"Hai, namaku Rhinocera. Aku biasa di panggil “Sera”. Namaku berasal dari gabungan kata “Rhinoceros”, yang berarti badak betina dan “Vara” yang berarti terpilih. Aku menggambarkan mahasiswa-mahasiswa terpilih yang berkesempatan untuk menjajakan  perjalanan akademiknya di pulau Sumatera dan mewujudkan Indonesia emas 2045.",
    image: maskot_pplk_woman,
  },
];

function Page() {
  const [viewMaskot, setViewMaskot] = React.useState("maskot-man");
  const selectedMaskot = MASKOTS.find((maskot) => maskot.key === viewMaskot);

  useAos();

  return (
    <>
      <Head title="Maskot PPLK ITERA 2025" />

      <div className="overflow-hidden">
        <DefaultLayout isSolid={true}>
          <div className="bg-pattern-white relative items-center justify-center pt-20">
            <div className="lg:mt-[55px] flex flex-col items-center text-center">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="font-greek text-jaffa-900 font-bold w-fit mx-auto pt-[30px] text-3xl md:text-5xl"
              >
                Maskot PPLK
                <br />
                ITERA 2025
              </h2>

              <div
                data-aos="fade-in"
                data-aos-duration="1000"
                className="md:flex-row relative flex flex-col mt-10"
              >
                {MASKOTS.map((maskot, index) => (
                  <Card
                    className={`${viewMaskot === maskot.key
                      ? "grayscale-0 scale-90"
                      : "grayscale scale-75"
                      } cursor-pointer transition relative bg-transparent shadow-none overflow-hidden h-full w-full duration-300 ease-in-out z-20 border-none`}
                    key={index}
                    onClick={() => setViewMaskot(`${maskot.key}`)}
                  >
                    <CardTitle className="backdrop-blur-3xl absolute inset-0">
                      {Array.from({ length: 10 }).map((_, indexArray) => (
                        <span
                          key={index}
                          className={`xl:text-[80px] md:text-[40px] lg:text-[50px] text-[30px] blur-[1px] md:blur-[3px] xl:blur-[6px] font-extrabold italic ${indexArray % 2 === 0 ? "drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white" : `${viewMaskot === maskot.key ? "text-jaffa-800" : "text-black"}`} flex flex-col transition-all duration-300 ease-in-out ${index === 0 ? "tracking-[0.2em]" : ""}`}
                        >
                          {maskot.name}
                        </span>
                      ))}
                    </CardTitle>

                    <CardContent
                      className={`relative flex w-full h-full ${index === 1 ? "flex-row-reverse" : ""} justify-center items-center`}
                    >
                      <div className="w-2/3 mx-auto">
                        <img
                          src={maskot.image}
                          alt="Maskot"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="place-content-center justify-items-center absolute inset-0 w-full h-full">
                  {selectedMaskot && (
                    <Dialog>
                      <DialogTrigger
                        asChild
                        className="focus:outline-none focus:border-none focus:ring-0"
                      >
                        <Button
                          variant="outline"
                          className="hover:bg-jaffa-600 hover:text-white text-jaffa-800 z-40 transition-all duration-300 ease-in-out bg-transparent"
                        >
                          Click Me!
                        </Button>
                      </DialogTrigger>

                      <DialogContent
                        className={`max-w-screen bg-white/20 backdrop-blur-md flex items-center justify-center w-screen h-screen max-h-screen border-none md:flex-row rounded-none ${selectedMaskot.index === 0 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse md:flex-row"}`}
                      >
                        <div className="backdrop-blur-md bg-white/30 md:w-1/2 w-full p-4 overflow-hidden overflow-y-auto rounded-lg">
                          <p
                            className={`font-montserrat text-white ${selectedMaskot.index === 1 ? "md:text-end text-center" : "text-center md:text-start"} text-[12px] xl:text-lg`}
                          >
                            {selectedMaskot.description}
                          </p>
                        </div>

                        <div
                          className={`flex w-1/2 h-full justify-center items-center relative`}
                        >
                          <div className="z-20 mx-auto">
                            <img
                              src={selectedMaskot.image}
                              alt="Maskot"
                              className="md:scale-50 object-contain w-full h-full"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </div>

            <div className="overflow-hidden h-[260px] md:h-[290px] lg:h-[620px]">
              <img
                src={overlay_earth}
                alt="Overlay Earth"
                className="w-full h-[305px] lg:h-[629px]"
              />
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
}

export default Page;
