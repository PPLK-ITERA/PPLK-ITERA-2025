import React, { useEffect } from "react";
import { useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

import CarouselForm from "@/Components/fragments/CarouselForm";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useToast } from "@/Components/ui/use-toast";
import { Head, Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setData("email", e.target.value);
    };

    const handlePasswordChange = (e) => {
        setData("password", e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log("anjir");
        post(route("login"));
    };

    return (
        <>
            <Head title="Welcome" />

            <div
                className={`flex flex-col md:flex-row w-full h-full font-medium overflow-hidden justify-center font-fesbud`}
            >
                <div className="w-full md:w-[60%] min-h-[70px] p-5 md:p-0 md:min-h-[100vh] object-cover flex justify-center md:items-center bg-[url('/assets/background-login.png')] bg-cover">
                    <CarouselForm />
                </div>

                <div className="flex bg-gradient-to-tl from-jaffa-600/50 from-1% via-white via-20% to-transparent to-85% justify-center items-center flex-col w-full md:w-[40%] z-10">
                    <img
                        src="/assets/logo-pplk-2024.png"
                        className="w-36 h-36 -ml-48 lg:-ml-72 lg:-mt-[70px]"
                        alt="logo-pplk-2024"
                        width={202}
                        height={202}
                    />

                    <form
                        onSubmit={submit}
                        className="md:items-start flex flex-col items-center justify-start p-2"
                    >
                        <h1 className="text-2xl w-[300px] sm:w-[300px] sm:text-3xl lg:w-96 lg:text-4xl font-bold md:mb-8 text-jaffa-800 lg:mt-10">
                            Selamat Datang
                            <br className="lg:block hidden" /> Di Kuis
                            Personality
                            <br className="lg:block hidden" /> PPLK
                        </h1>

                        <div>
                            <label htmlFor="email">Email</label>
                            <div className="relative w-[300px] sm:w-[300px] lg:w-96">
                                <Mail className="top-3 left-2 text-jaffa-600 absolute" />
                                <Input
                                    className="focus:ring-2 ring-jaffa-600 border-jaffa-600 h-12 pl-10 mb-4 border rounded-md"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={handleEmailChange}
                                    placeholder="Email anda"
                                    id="email"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <div className="relative w-[300px] sm:w-[300px] lg:w-96">
                                <div className="relative">
                                    <LockKeyhole
                                        strokeWidth={1.5}
                                        className="top-3 left-2 text-jaffa-600 absolute"
                                    />
                                </div>

                                <Input
                                    className="focus:ring-2 ring-jaffa-600 border-jaffa-600 h-12 pl-10 mb-4 bg-transparent border rounded-md"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password anda"
                                    value={data.password}
                                    onChange={handlePasswordChange}
                                    name="password"
                                    id="password"
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                {showPassword ? (
                                    <Eye
                                        strokeWidth={1.5}
                                        className="top-3 right-2 text-jaffa-600 absolute cursor-pointer"
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                            handleTogglePassword();
                                        }}
                                    />
                                ) : (
                                    <EyeOff
                                        strokeWidth={1.5}
                                        className="top-3 right-2 text-jaffa-600 absolute cursor-pointer"
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                            handleTogglePassword();
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={processing}
                            className="w-[300px] sm:w-[300px] lg:w-96 h-12 mb-4 px-4 rounded-md border bg-jaffa-600 hover:bg-white hover:shadow-md focus:ring-2 focus:ring-jaffa-600 hover:text-jaffa-600 transition ease-out duration-300 text-black font-bold"
                        >
                            Masuk
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
