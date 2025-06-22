import Error from "../Error";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect } from "react";

import { useForm, usePage } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

export default function Page({ auth }) {
  useFlashToast();

  if (!auth.user) {
    return <Error status={404} />;
  }

  const { data, setData, put } = useForm({
    new_password: "",
    confirm_new_password: "",
    _method: "put",
  });

  const handleChangePassword = () => {
    put(route("first.change.password"));
  };

  return (
    <>
      <div className="bg-pattern-white">
        <div className="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto">
          <h2 className="text-xl font-bold tracking-tight text-center">
            Ini pertama kalinya kamu login, silahkan ganti password
          </h2>

          <div className="h-fit w-full p-4 mt-10 space-y-5 bg-white border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Reset Password</h2>

            <div className="flex flex-col">
              <Label htmlFor="nama-maba" className="text-left">
                Password Baru
              </Label>

              <Input
                type="text"
                id="nama-maba"
                value={data.new_password}
                onChange={(e) => setData("new_password", e.target.value)}
                placeholder="ex. 1234@Jamal#GG"
                className="mt-1"
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email-maba" className="text-left">
                Konfirmasi Password
              </Label>

              <Input
                type="email"
                id="email-maba"
                value={data.confirm_new_password}
                onChange={(e) =>
                  setData("confirm_new_password", e.target.value)
                }
                placeholder="ex. 1234@Jamal#GG"
                className="mt-1"
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleChangePassword}>Ubah Password</Button>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}
