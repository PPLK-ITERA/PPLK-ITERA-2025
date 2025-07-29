import { UserResponse } from "@/Pages/Profile/Page";

import React from "react";

import { useForm } from "@inertiajs/react";

import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";


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
                    <input 
                    type="text" 
                    value={props.name} 
                    readOnly
                    disabled
                    className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">NIM</label>
                    <input 
                    type="text" 
                    placeholder="Hubungi dapmen utk mengisi NIM"
                    value={props.nim} 
                    readOnly 
                    disabled
                    className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Prodi</label>
                    <input 
                    type="text" 
                    value={props.prodi} 
                    readOnly 
                    disabled
                    className="w-full bg-[#98989840] text-[#3F150B] border border-[#C2C2C2] rounded-md px-3 py-2" />
                  </div>
                </div>

            <h2 className="font-bold text-lg mt-6 mb-3">Sosial Media</h2>
                <div className="space-y-3">

          <div className="relative">
                <label
                  htmlFor="linkedin"
                  className="block text-sm mb-1"
                >
                LinkedIn
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="linkedin"
                    value={data.linkedinURL}
                    onChange={(e) => {
                      setData("linkedinURL", e.target.value);
                    }}
                    placeholder="ex. https://www.linkedin.com/in/username/"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none ">
                    <img src="/image/profile/lock.png" className="w-[20px] ml-1" />
                  </div>
                </div>

              </div>
        
            <div className="relative">
                <label
                  htmlFor="instagram"
                  className="block text-sm mb-1"
                >
                  Link Instagram
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="instagram"
                    value={data.instagramURL}
                    onChange={(e) => {
                      setData("instagramURL", e.target.value);
                    }}
                    placeholder="ex. https://www.instagram.com/pplkitera/"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                <img src="/image/profile/lock.png" className="w-[20px] ml-1" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm mb-1"
                >
                  Bio Relasi Jaringan
                </label>
                <Textarea
                  id="bio"
                  value={data.bio}
                  onChange={(e) => {
                    setData("bio", e.target.value);
                  }}
                  placeholder="Tulis bio kamu disini..."
                  className="xl:max-w-[396px] xl:h-[88px] w-full h-full rounded-sm border border-jaffa-600 bg-white text-monserrat text-[16px] max-h-[150px]"
                />
              </div>
              <Button
                className="flex justify-center items-center xl:w-[396px] xl:h-[40px] w-full h-full p-2 bg-gradient-to-b from-[#B9822F] to-[#A6680C] rounded-sm md:mt-4"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <h2 className="text-[14px] font-montserrat font-medium text-center text-white">
                  Simpan
                </h2>
              </Button>
      
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default ProfilKamu;