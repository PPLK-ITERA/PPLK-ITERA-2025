import { UserResponse } from "@/Pages/Profile/Page";

import React from "react";

import { useForm } from "@inertiajs/react";

import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

const ProfilKamu = ({ props }: { props: UserResponse }) => {
    const { toast } = useToast();

    const { data, setData, put, processing, errors } = useForm({
        linkedinURL: props.linkedin_url || "",
        instagramURL: props.instagram_url || "",
        bio: props.bio || "",
    });

    const handleSubmit = () => {
        put(route("profile.update"));
    };

    return (
        <div className="flex flex-col gap-4 pt-3 pb-5 pl-5 pr-5">
            <h2 className="text-[20px] text-black font-montserrat font-bold">
                Profil Kamu
            </h2>
            <div>
                <label
                    htmlFor="full-name"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={props.name}
                    readOnly
                    disabled
                />
            </div>
            <div>
                <label
                    htmlFor="NIM"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    NIM
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={props.nim}
                    readOnly
                    disabled
                />
            </div>
            <div>
                <label
                    htmlFor="prodi"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Prodi
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border bg-gray-200 border-gray-400 text-monserrat text-[16px]"
                    value={props.prodi.nama_prodi}
                    readOnly
                    disabled
                />
            </div>
            <h2 className="text-[20px] text-black font-montserrat font-bold mt-3">
                Sosial Media
            </h2>
            <div className="relative">
                <label
                    htmlFor="linkedin"
                    className="font-montserrat text-[14px] mb-2 block"
                >
                    Link LinkedIn
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="linkedin"
                        value={data.linkedinURL}
                        onChange={(e) => {
                            setData("linkedinURL", e.target.value);
                        }}
                        placeholder="https://www.linkedin.com/in/..."
                        className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <div className="bg-jaffa-600 p-[2px] rounded-sm">
                            <IconBrandLinkedin
                                className="w-5 h-5 text-white"
                                size={24}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <label
                    htmlFor="instagram"
                    className="font-montserrat text-[14px] mb-2 block"
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
                        placeholder="https://www.instagram.com/..."
                        className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-sm border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <div className="bg-jaffa-600 p-[2px] rounded-sm">
                            <IconBrandInstagram
                                className="w-5 h-5 text-white"
                                size={24}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label
                    htmlFor="bio"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
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
                    window.location.reload();
                }}
            >
                <h2 className="text-[14px] font-montserrat font-semibold text-center text-white">
                    Simpan
                </h2>
            </Button>
        </div>
    );
};

export default ProfilKamu;
