import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";
import { useDebouncedCallback } from "use-debounce";

import React, { FC, useState } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

interface TentangPPLKFormProps {
  currentUser: DetailUser;
}

const TentangPPLKForm: FC<TentangPPLKFormProps> = ({ currentUser }) => {
  const [urlError, setUrlError] = useState<string | null>(null);

  //console.log(currentUser);

  const { data, setData, put } = useForm({
    id: currentUser.id,
    sertif: "",
    _method: "put",
  });

  const validateUrl = useDebouncedCallback(async () => {
    if (!/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(data.sertif)) {
      setUrlError("link harus dari Google Drive");
      return;
    }

    let id = data.sertif.split("/")[5];

    let response = await fetch(
      `https://www.googleapis.com/drive/v2/files/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
    );

    if (!response.ok) {
      setUrlError("Link drive belum publik, silahkan coba lagi");
      return;
    }

    setUrlError("");
  }, 100);

  const handleSubmit = () => {
    put(route("dashboard.user.edit-sertif"));
  };
  return (
    <div className="p-4 space-y-5 border rounded-xl shadow-md bg-[linear-gradient(137.47deg,_#E06C32_11.08%,_#FD8E57_42.04%,_#BE3F00_95.9%)]">
      <h2 className="text-xl text-white font-semibold tracking-tight">Tentang PPLK</h2>

      {currentUser.kelompok ? (
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-full">
            <Label htmlFor="nama-kelompok-maba" className="text-left text-white">
              Nama Kelompok
            </Label>

            <Input
              type="text"
              id="nama-kelompok-maba"
              value={currentUser.kelompok.nama_kelompok}
              disabled
              placeholder="Nawasena"
              className="mt-1"
            />
          </div>

          <div className="flex flex-col w-full">
            <Label htmlFor="nomor-kelompok-maba" className="text-left text-white">
              Nomor Kelompok
            </Label>

            <Input
              type="number"
              id="nomor-kelompok-maba"
              value={currentUser.kelompok.no_kelompok}
              disabled
              placeholder="73"
              className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col w-full">
        <Label htmlFor="score-game-individu-maba" className="text-left text-white">
          Score Game Individu
        </Label>

        <Input
          type="number"
          id="score-game-individu-maba"
          value={currentUser.score}
          disabled
          placeholder="73"
          className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>

      <div className="flex flex-col w-full">
        <Label htmlFor="pilar-maba" className="text-left text-white">
          Pilar
        </Label>

        <Input
          type="text"
          id="pilar-maba"
          value={
            currentUser.pilar ? currentUser.pilar.pilar_name : "Belum ada pilar"
          }
          disabled
          placeholder="Pilar User"
          className="mt-1"
        />
      </div>

      <div className="flex flex-col w-full">
        <Label htmlFor="serti-kelulusan-pplk-maba" className="text-left text-white">
          Sertifikat Kelulusan PPLK
        </Label>

        <Input
          type="text"
          id="serti-kelulusan-pplk-maba"
          value={
            currentUser.link_sertif ? currentUser.link_sertif : data.sertif
          }
          placeholder="https://drive.google.com/...."
          className="mt-1"
          onChange={(e) => {
            setData("sertif", e.target.value);
            validateUrl();
          }}
        />

        {!!urlError ? (
          <span className="text-red-500 text-[12px]">{urlError}</span>
        ) : urlError === "" ? (
          <span className="text-[12px] text-green-500">Link valid</span>
        ) : null}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={!!urlError || !data.sertif} className="bg-[#E58025] hover:bg-[#E58025]">
          Simpan Sertifikat
        </Button>
      </div>

      {/* <div className="flex flex-col w-full">
                <Label className="text-left">Preview Sertifikat</Label>

                <div className="w-full min-h-[200px] rounded-md bg-gray-400/30 mt-1" />
            </div> */}
    </div>
  );
};

export default TentangPPLKForm;
