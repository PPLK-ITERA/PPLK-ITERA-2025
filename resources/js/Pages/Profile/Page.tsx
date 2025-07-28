import { QRCodeCanvas } from "qrcode.react";

import { useEffect, useState } from "react";

import { Head, useForm } from "@inertiajs/react";

import { IconPencil } from "@tabler/icons-react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Profil from "@/Components/profile/ProfilKamu";
import TentangPplk from "@/Components/profile/TentangPplk";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { toast } from "@/Components/ui/use-toast";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

import info from "!assets/info.png";

export interface UserResponse {
  name: string;
  nim: string;
  prodi: {
    fakultas_id: number;
    id: number;
    nama_prodi: string;
  };
  role: string;
  photo_profile_url: string;
  linkedin_url: string;
  instagram_url: string;
  kelompok: {
    id: number;
    logo_kelompok: string;
    nama_kelompok: string;
    no_kelompok: number;
    daplok: string;
    mentor: string;
  };
  pilar: string;
  viewCount: number;
  followersCount: number;
  followingsCount: number;
  qrcode: string;
  bio: string;
}

const Page = ({ response }) => {
  useFlashToast();

  const UserData: UserResponse = response.data;

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [qrData, setQrData] = useState("");

  const { data, setData, post } = useForm({
    photo: null,
    _method: "put",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith("image")) {
        toast({
          title: "Invalid File Type",
          description: "Tolong pilih file gambar.",
          variant: "destructive",
        });
        setFile(null);
        setData("photo", null);
        setPreviewUrl("");
        return;
      }

      // Check if the file size exceeds 2MB
      if (file.size > 2048000) {
        // 2MB in bytes
        toast({
          title: "File Too Large",
          description: "Pilih foto yang berukuran dibawah 2MB.",
          variant: "destructive",
        });
        setFile(null);
        setData("photo", null);
        setPreviewUrl("");
        return;
      }

      // If all checks pass, update state and set the file for upload
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setData("photo", file);
    } else {
      setFile(null);
      setData("photo", null);
      setPreviewUrl("");
    }
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas!
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${UserData.name}_${UserData.nim}_qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    setQrData(UserData.qrcode);
  }, []);

  const changeProfile = () => {
    post(route("profile.update.profile"));
  };

  return (
    <>
      <Head title={`myprofile`} />

      <div className="bg-pattern-white">
        <Navbar isSolid={true} isFixed={true} />
        <Toaster />
        <div className="sm:flex-row mb-28 flex flex-col justify-center gap-3 pt-32 mx-auto">
          <div className="flex flex-col items-center gap-4 mx-2">
            <div className="relative w-[212px] h-[212px] overflow-hidden flex justify-center items-center rounded-full border">
  {previewUrl ? (
    <img
      src={
        previewUrl ??
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      }
      alt="preview-image-kelompok"
      className="object-cover object-center w-full h-full"
    />
  ) : (
    <img
      src={
        UserData.photo_profile_url ??
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      }
      alt="logopplk"
      className="object-cover object-center w-full h-full"
    />
  )}

  {/* menambahkan logo bendera */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    alt="bendera"
    className="absolute bottom-1 right-1 w-8 h-8 rounded-full border border-white shadow-md"
  />
</div>


            <h2 className="text-center text-[16px] font-montserrat font-bold">
              {UserData.name}
            </h2>

            <div className="flex justify-center items-center w-[98px] h-[40px] rounded-[10px] border border-[#B9622F]">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-[#CF7A1F] border border-[#CF7A1F] hover:bg-white hover:border-[#cf7a1f] hover:shadow-md transition-colors duration-200">
                    Edit Foto Profil
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Foto Profilmu</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative flex items-center justify-center mx-auto rounded-full">
                      <div className="w-36 h-36 flex items-center justify-center overflow-hidden border rounded-full">
                        {previewUrl ? (
                          <img
                            src={previewUrl}
                            alt="preview-image-kelompok"
                            className="object-cover object-center w-full h-full"
                          />
                        ) : (
                          <img
                            src={UserData.photo_profile_url}
                            alt="logopplk"
                            className="object-cover object-center w-full h-full"
                          />
                        )}
                      </div>

                      <Label htmlFor="upload-logo-kelompok">
                        <IconPencil
                          size={32}
                          color="white"
                          className="-mt-[1px] cursor-pointer absolute bottom-1 right-1 bg-gradient-to-b from-[#B9822F] to-[#A6680C] border rounded-full p-1"
                        />
                      </Label>

                      <Input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                        id="upload-logo-kelompok"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant={"outline"}
                        // disabled={processing}
                      >
                        Batalkan
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        // type="submit"
                        onClick={changeProfile}
                        // disabled={processing}
                        className="bg-gradient-to-b from-[#B9822F] to-[#A6680C]"
                      >
                        Simpan
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div>
              <h2 className="text-black font-montserrat font-bold text-[16px] text-center mt-9 md:mt-5 sm:mt-1 ">
                QR Presensi
              </h2>
              {/* BG ERROR */}
              <div className="aspect-square bg-[#DA5B1C] border flex justify-center items-center mt-1 w-[200px] h-[200px] rounded-md">
                {qrData === "" ? (
                  <p>Loading...</p>
                ) : (
                  <QRCodeCanvas
                    value={qrData}
                    size={200}
                    includeMargin={true}
                    level="H"
                    width={500}
                    height={500}
                    bgColor="#DA5B1C"
                    fgColor="#ffffff"
                  />
                )}
              </div>
            </div>

            <Button
              className="bg-gradient-to-b from-[#B9822F] to-[#A6680C]"
              onClick={downloadQRCode}
            >
              Download QR Code
            </Button>
          </div>

          <div className="flex flex-col gap-6 mx-2">
            <div className="mx-auto flex  xl:items-start xl:justify-start xl:max-w-[945px] md:max-w-[920px] lg:max-w-[800px] md:max-h-[108px] w-full h-full bg-jaffa-600 rounded-xl">
              <div className="xl:p-3 flex flex-col gap-2 p-5 ml-1">
                <h2 className="flex md:text-[19px] lg:text-[19px] text-[19px] font-montserrat font-semibold text-white items-center">
                  <img src={info} alt="info" className="mr-2" />
                  Informasi
                </h2>
                <p className="md:text-[15px] lg:text-[15px] text-[15px] font-montserrat font-normal text-white">
                  Hubungi Daplok atau Mentor jika terdapat kesalahan data
                </p>
              </div>
            </div>

            <div className="md:flex-row flex flex-col gap-8">
              <div className="xl:max-h-auto xl:max-w-[444px] lg:max-w-[350px] mx-auto w-full rounded-md bg-transparent">
                <Profil
                  props={{
                    name: UserData.name,
                    nim: UserData.nim,
                    role: UserData.role,
                    photo_profile_url: UserData.photo_profile_url,
                    linkedin_url: UserData.linkedin_url,
                    instagram_url: UserData.instagram_url,
                    kelompok: UserData.kelompok,
                    pilar: UserData.pilar,
                    viewCount: UserData.viewCount,
                    followersCount: UserData.followersCount,
                    followingsCount: UserData.followingsCount,
                    qrcode: UserData.qrcode,
                    prodi: UserData.prodi,
                    bio: UserData.bio,
                  }}
                />
              </div>
              <div className="md:max-h-[605px] lg:max-h-[590px] xl:max-w-[444px] lg:max-w-[350px] mx-auto w-full h-full rounded-md">
                <TentangPplk
                  props={{
                    nama_daplok: UserData.kelompok.daplok,
                    nama_mentor: UserData.kelompok.mentor,
                    nama_kelompok: UserData.kelompok.nama_kelompok,
                    no_kelompok: UserData.kelompok.no_kelompok,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Toaster />
    </>
  );
};

export default Page;
