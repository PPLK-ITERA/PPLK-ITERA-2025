import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";

import React, { FC } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

interface ResetPasswordFormProps {
    currentUser: DetailUser;
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ currentUser }) => {
    const { data, setData, put } = useForm({
        id: currentUser.id,
        new_password: "",
        confirm_new_password: "",
        _method: "put",
    });

    const handleSubmit = () => {
        put(route("dashboard.user.edit-password"));

        data.new_password = "";
        data.confirm_new_password = "";
    };

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
                <Button onClick={handleSubmit}>Ubah Password</Button>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
