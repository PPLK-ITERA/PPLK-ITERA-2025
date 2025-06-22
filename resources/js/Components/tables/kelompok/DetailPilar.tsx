import React from "react";

import AsesmenResult from "@/Components/asesmen/Result";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

import { UserMaba } from "@/lib/types/User";

import pilar1 from "!assets/pilar/pilar1.png";
import pilar2 from "!assets/pilar/pilar2.png";
import pilar3 from "!assets/pilar/pilar3.png";
import pilar4 from "!assets/pilar/pilar4.png";

export const DetailPilar = ({ dataPilar }) => {
  const ProgresPilar = ({ textColor, gradient, angka, hasil }) => {
    return (
      <div className="font-montserrat mb-6">
        <div className="flex justify-between">
          <p className={`${textColor} text-lg font-bold`}>
            Pilar {angka} :
            {" " +
              (angka === 1
                ? "Work Hard"
                : angka === 2
                  ? "Sharing is Caring"
                  : angka === 3
                    ? "Equity"
                    : "Refinement")}
          </p>
          <p className={`${textColor} self-end font-medium `}>
            {hasil}/{10}
          </p>
        </div>Belum memiliki Pilar

        <div className="text-xl font-bold">
          <Progress className={gradient} value={(hasil * 100) / 10} />
        </div>
      </div>
    );
  };

  return (
    <>
      <p className="text-xs w-full text-center">{dataPilar.user.pilar.nama}</p>

      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-center hover:cursor-pointer">
            {dataPilar.user.pilar.id === 1 ? (
              <img src={pilar1} height={60} width={60} />
            ) : dataPilar.user.pilar.id === 2 ? (
              <img src={pilar2} height={60} width={60} />
            ) : dataPilar.user.pilar.id === 3 ? (
              <img src={pilar3} height={60} width={60} />
            ) : dataPilar.user.pilar.id === 4 ? (
              <img src={pilar4} height={60} width={60} />
            ) : null}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pilar {dataPilar.user.pilar.nama}</DialogTitle>
            <DialogDescription>
              Berikut detail asesmen oleh {dataPilar.user.name} yang mendapatkan
              pilar {dataPilar.user.pilar.nama}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center flex-col items-center gap-5">
            {dataPilar.user.pilar.id === 1 ? (
              <img src={pilar1} height={100} width={100} />
            ) : dataPilar.user.pilar.id === 2 ? (
              <img src={pilar2} height={100} width={100} />
            ) : dataPilar.user.pilar.id === 3 ? (
              <img src={pilar3} height={100} width={100} />
            ) : dataPilar.user.pilar.id === 4 ? (
              <img src={pilar4} height={100} width={100} />
            ) : null}
            <div className="font-montserrat border-2 drop-shadow-xl bg-white py-5 px-10 rounded-xl border-[#74211A]">
              <div>
                <ProgresPilar
                  angka={1}
                  hasil={dataPilar.user.pilar.hasil.sifat_1}
                  textColor="text-[#74301A]"
                  gradient={"bg-gradient-to-r from-[#864D0D] to-[#432005]"}
                />
              </div>

              <div>
                <ProgresPilar
                  angka={2}
                  hasil={dataPilar.user.pilar.hasil.sifat_2}
                  textColor="text-[#9A241A]"
                  gradient={"bg-gradient-to-r from-[#B54419] to-[#90381C]"}
                />
              </div>

              <div>
                <ProgresPilar
                  angka={3}
                  hasil={dataPilar.user.pilar.hasil.sifat_3}
                  textColor="text-[#DA5B1C]"
                  gradient={"bg-gradient-to-r from-[#ED8F45] to-[#ED8F45]"}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
