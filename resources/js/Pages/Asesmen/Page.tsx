import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Navbar from "@/Components/Navbar";
import AsesmenForm from "@/Components/asesmen/AsesmenForm";

function Page({ auth }) {
    return (
        <div>
            <Head title="Asesmen" />

            <DefaultLayout isSolid={true}>
                <div className="bg-pattern-white">
                    <AsesmenForm />
                </div>
            </DefaultLayout>
        </div>
    );
}

export default Page;
