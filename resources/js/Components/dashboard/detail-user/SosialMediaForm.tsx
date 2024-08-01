import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";

import React, { FC } from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

interface SosialMediaFormProps {
    currentUser: DetailUser;
}

const SosialMediaForm: FC<SosialMediaFormProps> = ({ currentUser }) => {
    return (
        <div className="p-4 space-y-5 border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Sosial Media</h2>

            <div className="flex flex-col">
                <Label htmlFor="instagram-maba" className="text-left">
                    Instagram
                </Label>

                <Input
                    type="text"
                    id="instagram-maba"
                    value={currentUser.instagram_url}
                    placeholder="@chandrabudiwijaya"
                    className="mt-1"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="linkedin-maba" className="text-left">
                    LinkedIn
                </Label>

                <Input
                    type="text"
                    id="linkedin-maba"
                    value={currentUser.linkedin_url}
                    placeholder="Chandra Budi"
                    className="mt-1"
                />
            </div>

            <div className="flex justify-end">
                <Button onClick={() => alert("Reset Password")}>
                    Simpan Data
                </Button>
            </div>
        </div>
    );
};

export default SosialMediaForm;
