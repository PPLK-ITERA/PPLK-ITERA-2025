import { GuestLayout } from "@/Layouts/GuestLayout";

import React from "react";
import { useState } from "react";

import { Head, Link, useForm } from "@inertiajs/react";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import InputError from "@/Components/InputError";
import CarouselForm from "@/Components/fragments/CarouselForm";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

import logoPplk from "!assets/logo-pplk-2024.png";

export default function Page({ auth, status }) {
    console.log(status);

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
            <GuestLayout>
                <Head title="Login" />

                <div
                    className={`flex h-full w-full flex-col justify-center overflow-hidden font-montserrat font-medium md:flex-row`}
                >
                    <div className="flex min-h-[70px] w-full justify-center bg-[url('!assets/background-login.png')] bg-cover object-cover p-5 md:min-h-[100vh] md:w-[60%] md:items-center md:p-0">
                        <CarouselForm />
                    </div>

                    <div className="from-1% z-10 flex w-full flex-col items-center justify-center bg-gradient-to-tl from-jaffa-600/50 via-white via-20% to-transparent to-85% md:w-[40%]">
                        <img
                            src={logoPplk}
                            className="-ml-48 h-36 w-36 lg:-ml-72 lg:-mt-[70px]"
                            alt="logo-pplk-2024"
                            width={202}
                            height={202}
                        />

                        <form
                            onSubmit={submit}
                            className="md:items-start flex flex-col items-center justify-start p-2"
                        >
                            <h1 className="w-[300px] text-2xl font-bold text-jaffa-800 sm:w-[300px] sm:text-3xl md:mb-8 lg:mt-10 lg:w-96 lg:text-4xl">
                                Masuk ke Website <br /> PPLK ITERA 2024
                            </h1>

                            <div>
                                <label htmlFor="email">Email</label>
                                <div className="relative w-[300px] sm:w-[300px] lg:w-96">
                                    <Mail className="left-2 top-3 text-jaffa-600 absolute" />
                                    <Input
                                        className="border-jaffa-600 ring-jaffa-600 focus:ring-2 h-12 pl-10 mb-4 border rounded-md"
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
                                            className="left-2 top-3 text-jaffa-600 absolute"
                                        />
                                    </div>

                                    <Input
                                        className="border-jaffa-600 ring-jaffa-600 focus:ring-2 h-12 pl-10 mb-4 bg-transparent border rounded-md"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
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
                                            className="right-2 top-3 text-jaffa-600 absolute cursor-pointer"
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                                handleTogglePassword();
                                            }}
                                        />
                                    ) : (
                                        <EyeOff
                                            strokeWidth={1.5}
                                            className="right-2 top-3 text-jaffa-600 absolute cursor-pointer"
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
                                className="mb-4 h-12 w-[300px] rounded-md border bg-jaffa-600 px-4 font-bold text-white transition duration-300 ease-out hover:bg-white hover:text-jaffa-600 hover:shadow-md focus:ring-2 focus:ring-jaffa-600 sm:w-[300px] lg:w-96"
                            >
                                Masuk
                            </Button>
                        </form>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
