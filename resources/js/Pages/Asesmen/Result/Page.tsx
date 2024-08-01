import React from "react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import AsesmenResult from "@/Components/asesmen/Result";

export default function Page({ response }) {
    return (
        <div>
            <DefaultLayout isSolid={true}>
                <AsesmenResult
                    nilai1={response.data.result.sifat_1_score}
                    nilai2={response.data.result.sifat_2_score}
                    nilai3={response.data.result.sifat_3_score}
                    namaPilar={response.data.pilar.pilar_name}
                    pilar={response.data.pilar.id}
                />
            </DefaultLayout>
        </div>
    );
}
