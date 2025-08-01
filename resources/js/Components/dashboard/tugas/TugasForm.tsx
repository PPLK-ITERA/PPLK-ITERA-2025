import React, { FormEvent, useState } from "react";
import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { toast } from "@/Components/ui/use-toast";
import { Textarea } from "@/Components/ui/textarea";

type TugasData = {
  judul: string;
  deskripsi: string;
  hari: string;
  tipe_link: string;
  kategori: string;
  deadline: string;
};

function TugasForm() {
  const { data, setData, post, processing, errors } = useForm<TugasData>({
    judul: "",
    deskripsi: "",
    hari: "",
    tipe_link: "",
    kategori: "",
    deadline: "",
  });

  const [error, setError] = useState<string | null>(null);

  function onSubmit() {
    toast({
      title: "Mohon tunggu sebentar...",
      description: "Sedang mengupload Tugas...",
    });

    post(route("dashboard.tugas.addTugas"), {
      onError: () => {
        toast({
          title: "Uh oh! Gagal mengupload Tugas.",
          description: errors.judul || errors.deskripsi || errors.hari || errors.tipe_link || errors.kategori || errors.deadline,
        });
      },
      onSuccess: () => {
        toast({
          title: "Berhasil!",
          description: "Tugas berhasil diupload.",
        });
      },
    });
    window.location.reload();
  }

  return (
    // <p>test</p>
    <form
      aria-describedby="form"
      className="grid gap-4 py-4"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="judul" className="text-right">
          Judul
        </Label>
        <Input
          id="judul"
          name="judul"
          required
          type="text"
          value={data.judul}
          maxLength={255}
          className="col-span-3"
          onChange={(e) => {
            setData("judul", e.target.value);
            validateJudul();
          }}
        />
      </div>
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="deskripsi" className="text-right">
          Deskripsi
        </Label>
        <Textarea
          id="deskripsi"
          name="deskripsi"
          required
          type="text"
          value={data.deskripsi}
          maxLength={255}
          className="col-span-3"
          onChange={(e) => setData("deskripsi", e.target.value)}
        />
      </div>
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="hari" className="text-right">
          Hari
        </Label>
        <Select
          value={data.hari}
          onValueChange={(value) => setData("hari", value)}
        >
          <SelectTrigger className="col-span-3" id="hari" name="hari" required>
            <SelectValue placeholder="Pilih hari" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="tipe_link" className="text-right">
          Tipe Link
        </Label>
        <Select
          value={data.tipe_link}
          onValueChange={(value) => setData("tipe_link", value)}
        >
          <SelectTrigger className="col-span-3" id="tipe_link" name="tipe_link" required>
            <SelectValue placeholder="Pilih tipe link" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="drive">Google Drive</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="kategori" className="text-right">
          Kategori
        </Label>
        <Select
          value={data.kategori}
          onValueChange={(value) => setData("kategori", value)}
        >
          <SelectTrigger className="col-span-3" id="kategori" name="kategori" required>
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individu">Individu</SelectItem>
            <SelectItem value="kelompok">Kelompok</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid items-center grid-cols-4 gap-4">
        <Label htmlFor="deadline" className="text-right">
          Deadline
        </Label>
        <Input
          id="deadline"
          name="deadline"
          required
          type="date"
          value={data.deadline}
          className="col-span-3"
          onChange={(e) => setData("deadline", e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="place-content-center flex items-center justify-between gap-4 mt-4 text-right">
        {!!error && <p className="text-sm text-red-500">{error}</p>}
        <Button
          size={"sm"}
          type={"submit"}
          className="w-full bg-[#BE3F00]"
          disabled={!!error || processing}
        >
          Tambahkan Tugas
        </Button>
      </div>
    </form>
  );
}

export default TugasForm;