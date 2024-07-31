import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import Navbar from "@/Components/Navbar";
import AsesmenForm from "@/Components/asesmen/AsesmenForm";

function Page({ auth }) {
    return (
        <div>
            <DefaultLayout isSolid={true}>
                <div className="mt-28">
                    <AsesmenForm />
                </div>
            </DefaultLayout>
        </div>
    );
}

export default Page;
