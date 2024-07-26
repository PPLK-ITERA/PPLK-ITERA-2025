import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconWorldWww,
} from "@tabler/icons-react";

import logo_upa_perpus from "!assets/logoupt/logo-upa-perpus.png";

// Acuan saja tidak wajib digunakan
interface UptData {
    key: string;
    title: string;
    logo: string;
    description: string;
    history: string;
    visi: string;
    misi: string[];
    kepalaUpt: {
        nama: string;
        foto: string;
        jabatan: string;
        nip?: string;
    };
    sosmedUPT: {
        instagram: string;
        youtube: string;
        website: string;
        tiktok: string;
    };
    kegiatanUnggulan: {
        title: string;
        description: string;
        tanggal: string;
        textThumnail: string;
    }[];
}

export const VisiMisiUPT = {
    "fakultas-sains": {
        visi: "Menjadikan Jurusan Sains ITERA sebagai lembaga pendidikan tinggi yang menghasilkan sumber daya manusia di bidang sains mencakup pengembangan teknologi yang unggul dalam menyelenggarakan pendidikan dan penelitian, mandiri, dan memenuhi kebutuhan Sumber Daya Manusia (SDM) di Sumatera khususnya, dan Indonesia serta dunia",
        misi: [
            "Menyelenggarakan dan mengembangkan pendidikan tinggi sains mencangkup pengembangan teknologi serta menjadi landasan dalam pengembangan teknologi dalam upaya menghasilkan lulusan yang memahami, mengembangkan, menerapkan ilmu sains dan berkarakter.",
            "Menyelenggarakan dan mengembangkan kegiatan penelitian dan pengabdian masyarakat untuk mendorong peningkatan sains mencakup pengembangan teknologi serta menjadi landasan dalam pengembangan teknologi yang inovatif dan tanggap terhadap tantangan lokal maupun global.",
            "Turut dalam pemberdayaan potensi wilayah sekitar sumatera secara optimal melalui keunggulan dalam pendidikan, penelitian, dan pengabdian kepada masyarakat melalui kerja sama dengan stakeholder terkait.",
        ],
    },
    "fakultas-ftik": {
        visi: "Menjadi Jurusan Teknologi Insfrastruktur dan Kewilayahan yang unggul di bidang IPTEKS dan memberdayakan potensi yang ada di Sumatera dan dunia sampai 2024",
        misi: [
            "Menyelenggarakan pendidikan pada bidang teknologi infrastruktur dan kewilayahan berorientasi pada mutu yang berkelanjutan",
            "Memfasilitasi sumber daya manusia untuk melaksanakan penelitian dan pengabdian kepada masyarakat yang memberdayakan potensi Sumatera",
            "Mengembangkan kerja sama dengan pemangku kepentingan di tingkat lokal, nasional dan internasional",
            "Menyelenggarakan layanan publik prima",
        ],
    },
    "fakultas-fti": {
        visi: "Menjadikan Jurusan Teknologi Industri ITERA sebagai lembaga pendidikan tinggi yang menghasilkan sumber daya manusia di bidang teknologi industri mencakup pengembangan teknologi yang unggul dalam menyelenggarakan pendidikan dan penelitian, mandiri, dan memenuhi kebutuhan Sumber Daya Manusia (SDM) di Sumatera khususnya, dan Indonesia serta dunia",
        misi: [
            "Menyelenggarakan pendidikan pada bidang teknologi industri berorientasi pada mutu yang berkelanjutan",
            "Memfasilitasi sumber daya manusia untuk melaksanakan penelitian dan pengabdian kepada masyarakat yang memberdayakan potensi Sumatera",
            "Mengembangkan kerja sama dengan pemangku kepentingan di tingkat lokal, nasional dan internasional",
            "Menyelenggarakan layanan publik prima",
        ],
    },
};

export const SocialMediaData = {
    "fakultas-sains": [
        {
            name: "youtube",
            link: "https://www.youtube.com",
            icon: <IconBrandYoutube size={40} color="white" stroke={1.7} />,
        },
        {
            name: "instagram",
            link: "https://www.instagram.com",
            icon: <IconBrandInstagram size={40} color="white" stroke={1.7} />,
        },
        {
            name: "tiktok",
            link: "https://www.tiktok.com",
            icon: <IconBrandTiktok size={40} color="white" stroke={1.7} />,
        },
        {
            name: "website",
            link: "https://www.website.com",
            icon: <IconWorldWww size={40} color="white" stroke={1.7} />,
        },
    ],
    "fakultas-ftik": [
        {
            name: "youtube",
            link: "https://www.youtube.com",
            icon: <IconBrandYoutube size={40} color="white" stroke={1.7} />,
        },
        {
            name: "instagram",
            link: "https://www.instagram.com",
            icon: <IconBrandInstagram size={40} color="white" stroke={1.7} />,
        },
        {
            name: "tiktok",
            link: "https://www.tiktok.com",
            icon: <IconBrandTiktok size={40} color="white" stroke={1.7} />,
        },
        {
            name: "website",
            link: "https://www.website.com",
            icon: <IconWorldWww size={40} color="white" stroke={1.7} />,
        },
    ],
    "fakultas-fti": [
        {
            name: "youtube",
            link: "https://www.youtube.com",
            icon: <IconBrandYoutube size={40} color="white" stroke={1.7} />,
        },
        {
            name: "instagram",
            link: "https://www.instagram.com",
            icon: <IconBrandInstagram size={40} color="white" stroke={1.7} />,
        },
        {
            name: "tiktok",
            link: "https://www.tiktok.com",
            icon: <IconBrandTiktok size={40} color="white" stroke={1.7} />,
        },
        {
            name: "website",
            link: "https://www.website.com",
            icon: <IconWorldWww size={40} color="white" stroke={1.7} />,
        },
    ],
};

export const DataKegiatanUPT = [
    { image: "chabud1" },
    { image: "chabud2" },
    { image: "chabud3" },
    { image: "chabud4" },
    { image: "chabud5" },
];

export const uptData = [
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
    {
        key: "upa-perpustakaan",
        title: "UPA Perpustakaan",
        logo: logo_upa_perpus,
        description:
            "UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan. UPA Perpustakaan adalah unit pelaksana teknis di lingkungan Universitas Pembangunan Nasional 'Veteran' Yogyakarta yang bergerak di bidang perpustakaan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae.",
        history:
            "Sejarah UPA Perpustakaan lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde reiciendis eveniet, distinctio nam odio dicta quas blanditiis! Alias animi iure dolor illo ut ullam fugiat, temporibus enim ex vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deleniti saepe quo in impedit, harum eaque soluta unde distinctio eius numquam enim minima repellendus! Ratione aspernatur natus ullam necessitatibus consequatur!",
        visi: "Visi UPA Perpustakaan lorem ipsum dolor sit amet",
        misi: [
            "Misi UPA Perpustakaan 1 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 2 lorem ipsum dolor sit amet",
            "Misi UPA Perpustakaan 3 lorem ipsum dolor sit amet",
        ],
        kepalaUpt: {
            nama: "Nama Kepala UPT",
            foto: "!assets/fotoupt/kepalauptperpus.png",
            jabatan: "Jabatan Kepala UPT",
            nip: "NIP Kepala UPT",
        },
        sosmedUPT: {
            instagram: "https://www.instagram.com/upa_perpustakaan/",
            youtube: "https://www.youtube.com/channel/UC9J",
            website: "https://upa-perpustakaan.upnyk.ac.id/",
            tiktok: "https://www.tiktok.com/@upa_perpustakaan",
        },
        infoKegiatan: [
            {
                title: "Kegiatan 1",
                description:
                    "Deskripsi Kegiatan 1 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "1 Januari 2022",
            },
            {
                title: "Kegiatan 2",
                description:
                    "Deskripsi Kegiatan 2 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "2 Januari 2022",
            },
            {
                title: "Kegiatan 3",
                description:
                    "Deskripsi Kegiatan 3 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "3 Januari 2022",
            },
            {
                title: "Kegiatan 4",
                description:
                    "Deskripsi Kegiatan 4 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "4 Januari 2022",
            },
            {
                title: "Kegiatan 5",
                description:
                    "Deskripsi Kegiatan 5 lorem ipsum dolor sit amet consectetur adipiscing elit",
                text_thumnail: "Info Kegiatan Slurd Yhahahah",
                tanggal: "5 Januari 2022",
            },
        ],
    },
];
