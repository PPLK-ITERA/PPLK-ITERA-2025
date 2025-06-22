import { useDebouncedCallback } from "use-debounce";

import React, { useEffect, useState } from "react";

import { router, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";

import { checkImageExists } from "@/lib/utils";

type DataMaba = {
  message: string;
  nama: string;
  nim: string;
  prodi: string;
  pita: string;
  riwayat: string;
  profil_url: string;
  qr_code: string | null;
  kelompok: string;
};

function Presensi({ response }) {
  const [error, setError] = useState("");
  const [dataMaba, setDataMaba] = useState<DataMaba | null>(null);
  const [inputNim, setInputNim] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleSubmit = (e) => {
    setInputNim(e.target.value);
    debounced(e.target.value);
  };

  const handlePresensi = (qr_code: string) => {
    router.post(route("cui.scan"), {
      qr_code: qr_code,
    });
  };

  const getDataMaba = async (nim: string) => {
    setLoading(true);
    await fetch(route("dashboard.cui.detail", { name: nim }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            setError(data.message);
            setDataMaba(null);
          });
        }
      })
      .then((json) => {
        setError("");
        setDataMaba(json.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const testImage = async () => {
    const url = dataMaba?.profil_url; // Replace with your image URL
    const defaultUrl =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; // Replace with your default image URL
    const finalUrl = await checkImageExists(url, defaultUrl);
    setImageSrc(finalUrl as string);
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      getDataMaba(value);
    },
    // delay in ms
    500,
  );

  useEffect(() => {
    testImage();
  }, []);

  // useEffect(() => {
  //     if (data.qr_code) {
  //         post(route("cui.scan"));
  //     }
  // }, [data.qr_code]);
  return (
    <div className="space-y-4">
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between w-full pb-2 space-y-0">
          <CardTitle className="w-full text-lg font-bold text-center">
            Absensi CUI Maba
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center mt-2">
          <Button onClick={() => router.get(route("dashboard.cui.absensi"))}>
            Mulai Absen Maba
          </Button>
        </CardContent>
      </Card>
      <Input
        disabled={loading}
        value={inputNim}
        onChange={handleSubmit}
        placeholder="Cari Nama dan Kelompok. cth (Ujang 99)"
      />

      {error && <p className="font-bold text-red-600">{error}</p>}

      {dataMaba && (
        <div className="w-full">
          <p className="font-bold text-green-500">{dataMaba.message}</p>
          <div className="flex w-full gap-5 mt-3">
            <div>
              <img
                className="bg-fill object-cover w-56 h-64 mb-2 rounded-lg"
                src={imageSrc ?? ""}
                alt="Foto profil"
              />
              {dataMaba.pita === "hijau" && (
                <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-green-500">
                  Pita Hijau
                </div>
              )}
              {dataMaba.pita === "kuning" && (
                <div>
                  <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-yellow-400">
                    Pita Kuning
                  </div>
                  <p>Riwayat penyakit: {dataMaba.riwayat}</p>
                </div>
              )}
              {dataMaba.pita === "merah" && (
                <div>
                  <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-red-600">
                    Pita Merah
                  </div>
                  <p>Riwayat penyakit: {dataMaba.riwayat}</p>
                </div>
              )}
            </div>
            <div>
              <div className="ring-1 ring-black/30 rounded-xl p-2 text-xl">
                <p className="font-bold">{dataMaba.nama}</p>
                <p>{dataMaba.prodi}</p>
                <p>{dataMaba.nim}</p>
                <p>{dataMaba.kelompok}</p>
              </div>
              {dataMaba.qr_code ? (
                <Button
                  onClick={() => handlePresensi(dataMaba.qr_code ?? "")}
                  className="w-full mt-2"
                >
                  Presensi
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Presensi;
