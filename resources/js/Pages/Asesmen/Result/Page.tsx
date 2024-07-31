import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import AsesmenResult from "@/Components/asesmen/Result";

export default function Page({ response }) {
    console.log(response);
    return (
        <div>
            <DefaultLayout isSolid={true}>
                <div className="mt-28">
                    <AsesmenResult
                        nilai1={response.data.result.sifat_1_score}
                        nilai2={response.data.result.sifat_2_score}
                        nilai3={response.data.result.sifat_3_score}
                        namaPilar={response.data.pilar.pilar_name}
                        pilar={response.data.pilar.id}
                    />
                </div>
            </DefaultLayout>
        </div>
    );
}
