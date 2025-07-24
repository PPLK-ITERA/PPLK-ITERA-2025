import { UserResponse } from "@/Pages/Profile/Page";
import React from "react";
import { useForm } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";

const ProfilKamu = ({ props }: { props: UserResponse }) => {
  const { data, setData, put } = useForm({
    linkedinURL: props.linkedin_url || "",
    instagramURL: props.instagram_url || "",
    bio: props.bio || "",
  });

  const handleSubmit = () => {
    put(route("profile.update"));
  };

  return (
    <div className="bg-[url('/image/profile/background1.png')] bg-repeat bg-[length:450px_450px] bg-origin-border w-full bg-transparent">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-4">

          {/* INFORMASI + FORM */}
          <div className="flex flex-col w-full items-center lg:items-start">

            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-xl shadow-md border p-6 w-full">
                <h2 className="font-bold text-lg mb-4">Profil Kamu</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm mb-1">Nama Lengkap</label>
                    <input type="text" value={props.name} readOnly className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">NIM</label>
                    <input type="text" value={props.nim} readOnly className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Prodi</label>
                    <input type="text" value={props.prodi} readOnly className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                </div>

                <h2 className="font-bold text-lg mt-6 mb-3">Sosial Media</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm mb-1">LinkedIn</label>
                    <div className="flex items-center border border-[#DA5B1C] rounded-md px-3 py-2">
                      <span className="mr-2 p-1 rounded-sm">
                        <img src="/image/profile/lock.png" className="w-[25px]" />
                      </span>
                      <input type="text" value={data.linkedinURL} onChange={(e) => setData("linkedinURL", e.target.value)} className="w-full outline-none text-sm border-none bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Instagram</label>
                    <div className="flex items-center border border-[#DA5B1C] rounded-md px-3 py-2">
                      <span className="mr-2 p-1 rounded-sm">
                        <img src="/image/profile/lock.png" className="w-[25px]" />
                      </span>
                      <input type="text" value={data.instagramURL} onChange={(e) => setData("instagramURL", e.target.value)} className="w-full outline-none text-sm border-none bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Bio Relasi Jaringan</label>
                    <Textarea value={data.bio} onChange={(e) => setData("bio", e.target.value)} className="w-full border border-[#DA5B1C] rounded-md px-3 py-2 text-sm h-24 resize-none" />
                  </div>

                  <Button onClick={handleSubmit} className="text-sm w-full bg-gradient-to-r from-[#B9822F] to-[#A6680C] text-white font-medium py-2 rounded-sm mt-2">Simpan</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilKamu;
