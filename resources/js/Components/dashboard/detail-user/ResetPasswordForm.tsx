import React, { FC } from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

interface ResetPasswordFormProps {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({}) => {
    return (
        <div className="h-fit w-full p-4 space-y-5 border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Reset Password</h2>

            <div className="flex flex-col">
                <Label htmlFor="nama-maba" className="text-left">
                    Password Baru
                </Label>

                <Input
                    type="text"
                    id="nama-maba"
                    value=""
                    placeholder="Chandra Budi Wijaya"
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
                    value=""
                    placeholder="Chandra Budi Wijaya"
                    className="mt-1"
                />
            </div>

            <div className="flex justify-end">
                <Button onClick={() => alert("Reset Password")}>
                    Ubah Password
                </Button>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
