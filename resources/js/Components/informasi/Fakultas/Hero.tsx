import React from 'react';
import fakultasSains from '!assets/fakultas-sains.png'; 
import fakultasTeknologiIndustri from '!assets/fakultas-teknologi-industri.png';
import fakultasTeknologiInfrastruktur from '!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png';

const Hero = ({ fakultas }) => {
    const dataFakultas = {
        "fakultas-sains": {
            img: fakultasSains,
            title: "Fakultas Sains",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sit suscipit incidunt commodi dignissimos tenetur ea quo aliquam iure in. Error exercitationem vel eos similique repellat sed laudantium quia molestiae!",
            history: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quia cum! Quasi, error unde. Nostrum et explicabo officia ipsa veniam. Excepturi, iusto non. Ducimus, hic asperiores est adipisci voluptas veniam! Sunt dolorum mollitia est illum magni vel error? Alias eum eius, corrupti accusantium facilis blanditiis earum sunt asperiores expedita adipisci quo exercitationem incidunt placeat reiciendis dolorem similique eveniet perspiciatis ipsum? Totam quibusdam qui odit aliquam dolor ipsa, corrupti placeat obcaecati quidem dolorem perspiciatis, natus et ipsum explicabo alias sapiente magnam nobis. Animi eaque consectetur eos alias natus! Eum, iste dolores?"
        },
        "Teknologi-Infrastruktur-dan-Kewilayahan": {
            img: fakultasTeknologiInfrastruktur,
            title: "Fakultas Teknologi Infrastruktur dan Kewilayahan",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sit suscipit incidunt commodi dignissimos tenetur ea quo aliquam iure in. Error exercitationem vel eos similique repellat sed laudantium quia molestiae!",
            history: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quia cum! Quasi, error unde. Nostrum et explicabo officia ipsa veniam. Excepturi, iusto non. Ducimus, hic asperiores est adipisci voluptas veniam! Sunt dolorum mollitia est illum magni vel error? Alias eum eius, corrupti accusantium facilis blanditiis earum sunt asperiores expedita adipisci quo exercitationem incidunt placeat reiciendis dolorem similique eveniet perspiciatis ipsum? Totam quibusdam qui odit aliquam dolor ipsa, corrupti placeat obcaecati quidem dolorem perspiciatis, natus et ipsum explicabo alias sapiente magnam nobis. Animi eaque consectetur eos alias natus! Eum, iste dolores?"
        },
        "fakultas-teknologi-industri": {
            img: fakultasTeknologiIndustri,
            title: "Fakultas Teknologi Industri",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sit suscipit incidunt commodi dignissimos tenetur ea quo aliquam iure in. Error exercitationem vel eos similique repellat sed laudantium quia molestiae!",
            history: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quia cum! Quasi, error unde. Nostrum et explicabo officia ipsa veniam. Excepturi, iusto non. Ducimus, hic asperiores est adipisci voluptas veniam! Sunt dolorum mollitia est illum magni vel error? Alias eum eius, corrupti accusantium facilis blanditiis earum sunt asperiores expedita adipisci quo exercitationem incidunt placeat reiciendis dolorem similique eveniet perspiciatis ipsum? Totam quibusdam qui odit aliquam dolor ipsa, corrupti placeat obcaecati quidem dolorem perspiciatis, natus et ipsum explicabo alias sapiente magnam nobis. Animi eaque consectetur eos alias natus! Eum, iste dolores?"
        }
    };

    const selectedFakultas = dataFakultas[fakultas] || {};

    return (
        <div>
            <div className="w-full md:flex">
                <div className="pt-20 md:pt-0 md:w-3/4 flex justify-center items-center">
                    <img src={selectedFakultas.img} className="md:w-3/4 w-2/5" />
                </div>
                <div className="space-y-3 pt-14 pl-4">
                    <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-center md:text-start text-4xl md:text-5xl">
                        {selectedFakultas.title}
                    </p>
                    <p className="pt-8 md:pt-0 ">
                        {selectedFakultas.description}
                    </p>
                </div>
            </div>
            <div className="space-y-3 mt-16 px-4 md:px-8 lg:px-0 md:mt-20">
                <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-2xl md:text-5xl">
                    Sejarah
                </p>
                <p>
                    {selectedFakultas.history}
                </p>
            </div>
        </div>
    );
};

export default Hero;
