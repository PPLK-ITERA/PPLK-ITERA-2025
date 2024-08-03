import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";

import React, { FC } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

interface SosialMediaFormProps {
    currentUser: DetailUser;
}

const SosialMediaForm: FC<SosialMediaFormProps> = ({ currentUser }) => {
    const { data, setData, put } = useForm({
        id: currentUser.id,
        instagram_url: currentUser.instagram_url,
        linkedin_url: currentUser.linkedin_url,
        _method: "put",
    });

    const handleSubmit = () => {
        put(route("dashboard.user.edit-sosmed"));
    };

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
                    value={data.instagram_url}
                    onChange={(e) => setData("instagram_url", e.target.value)}
                    placeholder="https://instagram.com/..."
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
                    value={data.linkedin_url}
                    onChange={(e) => setData("linkedin_url", e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                    className="mt-1"
                />
            </div>

            <div className="flex justify-end">
                <Button onClick={handleSubmit}>Simpan Data</Button>
            </div>
        </div>
    );
};

export default SosialMediaForm;
