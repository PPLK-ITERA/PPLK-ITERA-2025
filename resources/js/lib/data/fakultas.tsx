import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";

import bawahan1_fti from "!assets/bawahanDekan/1/fti.png";
import bawahan1_ftik from "!assets/bawahanDekan/1/ftik.png";
import bawahan1_sains from "!assets/bawahanDekan/1/sains.png";
import bawahan2_fti from "!assets/bawahanDekan/2/fti.png";
import bawahan2_sains from "!assets/bawahanDekan/2/sains.png";
import bawahan3_sains from "!assets/bawahanDekan/3/sains.png";
import dekan_fti from "!assets/dekanFakultas/fti.png";
import dekan_ftik from "!assets/dekanFakultas/ftik.png";
import dekan_sains from "!assets/dekanFakultas/sains.png";
import kegiatan1_fti from "!assets/kegiatanFakultas/1/fti.png";
import kegiatan1_ftik from "!assets/kegiatanFakultas/1/ftik.png";
import kegiatan1_sains from "!assets/kegiatanFakultas/1/sains.png";
import kegiatan2_fti from "!assets/kegiatanFakultas/2/fti.png";
import kegiatan2_ftik from "!assets/kegiatanFakultas/2/ftik.png";
import kegiatan2_sains from "!assets/kegiatanFakultas/2/sains.png";
import kegiatan3_fti from "!assets/kegiatanFakultas/3/fti.png";
import kegiatan3_ftik from "!assets/kegiatanFakultas/3/ftik.png";
import kegiatan3_sains from "!assets/kegiatanFakultas/3/sains.png";
import logo_sains from "!assets/logoFakultas/fakultas-sains.png";
import logo_fti from "!assets/logoFakultas/fti.png";
import logo_ftik from "!assets/logoFakultas/ftik-hd.png";

// Define the FakultasData interface
export interface FakultasData {
  key: string;
  title: string;
  header_desc: string;
  logo: any;
  description: string;
  history: string;
  visi: string;
  misi: string[];
  struktur_organisasi: {
    nama: string;
    foto: any;
    jabatan: string;
  }[];
  prodi: string[];
  sosmedFakultas: {
    name: string;
    link: string;
    icon: any;
  }[];
  kegiatanUnggulan: {
    title: string;
    description: string;
    tanggal: string;
    img: any;
    text_thumbnail: string;
  }[];
  jumlah_prodi: number;
  jumlah_mahasiswa: number;
  jumlah_dosen: number;
}

export const FAKULTAS_DATA = {
  "fakultas-sains": {
    key: "fakultas-sains",
    title: "Fakultas Sains",
    header_desc:
      "Sebagai Wadah Supaya Inovasi dan Pengetahuan Dapat Berkembang",
    logo: logo_sains,
    description:
      "Fakultas Sains merupakan salah satu fakultas setingkat fakultas yang berkedudukan di Institut Teknologi Sumatera (ITERA). Fakultas Sains, Itera memiliki 9 program studi yang berkaitan dengan kebutuhan sumber daya manusia (SDM) yang siap berkontribusi dalam perubahan. Juga dalam mengembangkan sains dan teknologi guna menggali potensi yang ada di Indonesia umumnya, dan Sumatera khususnya.",
    history: " ",
    visi: "Menjadikan Fakultas Sains ITERA sebagai lembaga pendidikan tinggi yang menghasilkan sumber daya manusia di bidang sains mencakup pengembangan teknologi yang unggul dalam menyelenggarakan pendidikan dan penelitian, mandiri, dan memenuhi kebutuhan Sumber Daya Manusia (SDM) di Sumatera khususnya, dan Indonesia serta dunia",
    misi: [
      "Menyelenggarakan dan mengembangkan pendidikan tinggi sains mencangkup pengembangan teknologi serta menjadi landasan dalam pengembangan teknologi dalam upaya menghasilkan lulusan yang memahami, mengembangkan, menerapkan ilmu sains dan berkarakter.",
      "Menyelenggarakan dan mengembangkan kegiatan penelitian dan pengabdian masyarakat untuk mendorong peningkatan sains mencakup pengembangan teknologi serta menjadi landasan dalam pengembangan teknologi yang inovatif dan tanggap terhadap tantangan lokal maupun global.",
      "Turut dalam pemberdayaan potensi wilayah sekitar Sumatera secara optimal melalui keunggulan dalam pendidikan, penelitian, dan pengabdian kepada masyarakat melalui kerja sama dengan stakeholder terkait.",
    ],
    prodi: [
      "Fisika",
      "Sains Atmosfer dan Keplanetan",
      "Farmasi",
      "Matematika",
      "Sains Aktuaria",
      "Sains Data",
      "Kimia",
      "Biologi",
      "Sains Lingkungan Kelautan",
    ],
    key_prodi: [
      "fisika",
      "sains-atmosfer-dan-keplanetan",
      "farmasi",
      "matematika",
      "sains-aktuaria",
      "sains-data",
      "kimia",
      "biologi",
      "sains-lingkungan-kelautan",
    ],
    struktur_organisasi: [
      {
        nama: "Dr. Ikah N.P. Permanasari, S.Si., M.Si.",
        foto: dekan_sains,
        jabatan: "Dekan",
      },
      {
        nama: "Dr. Sri Efrinita Irwan, S.Si., M.Si.",
        foto: bawahan1_sains,
        jabatan: "Wakil Dekan Fakultas Sains Bidang Akademik dan Kemahasiswaan",
      },
      {
        nama: "apt. Dirga, S.Farm., M.Sc.",
        foto: bawahan2_sains,
        jabatan: "Wakil Dekan Fakultas Sains Bidang Keuangan dan Umum",
      },
      {
        nama: "Widyastuti, S.Kom., M.M.",
        foto: bawahan3_sains,
        jabatan: "Subbagian Umum Fakultas Sains",
      },
    ],
    sosmedFakultas: [
      {
        name: "youtube",
        link: "https://www.youtube.com/@fakultassainsitera",
        icon: <IconBrandYoutube size={40} color="black" />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/sainsitera",
        icon: <IconBrandInstagram size={40} color="black" />,
      },
      {
        name: "website",
        link: "https://fs.itera.ac.id/",
        icon: <IconWorldWww size={40} color="black" />,
      },
      
    ],
    kegiatanUnggulan: [
      {
        title:
          "Fakultas Sains ITERA dan BRIN Bersinergi dan Bekerjasama untuk Menguatkan Keantariksaan Nasional",
        text_thumbnail: "Sinergi Fakultas Sains ITERA dan BRIN",
        description:
          "Kegiatan ini bertujuan untuk menguatkan keantariksaan nasional melalui kolaborasi dengan BRIN.",
        tanggal: "15 Januari 2024",
        img: kegiatan1_sains,
      },
      {
        title:
          "Program Studi Matematika ITERA Juarai Event Modelling Math Competition 2024 di ITB",
        text_thumbnail: "Juarai Event Modelling Math Competition 2024 di ITB",
        description:
          "Ukir Prestasi di Kampus Bergengsi, Mahasiswa Program Studi Matematika ITERA berhasil menjuarai kompetisi Modelling Math di ITB.",
        tanggal: "20 Febuari 2024",
        img: kegiatan2_sains,
      },
      {
        title:
          "Diskusi dan Kerjasama Internasional Chung-Ang University dan Fakultas Sains Institut Teknologi Sumatera",
        text_thumbnail:
          "Diskusi dan Kerjasama Internasional Chung-Ang University",
        description:
          "Kegiatan ini mencakup diskusi dan kerjasama antara Fakultas Sains Institut Teknologi Sumatera dan internasional dengan Chung-Ang University.",
        tanggal: "10 Maret 2024",
        img: kegiatan3_sains,
      },
    ],
    jumlah_prodi: 9,
    jumlah_mahasiswa: 3859,
    jumlah_dosen: 144,
  },
  "fakultas-ftik": {
    key: "fakultas-teknologi-infrastruktur-dan-kewilayahan",
    title: "Fakultas Teknologi Infrastruktur dan Kewilayahan",
    header_desc:
      "Pemberdaya IPTEKS Infrastruktur dan Wilayah Sumatera Mendunia",
    logo: logo_ftik,
    description:
      "Fakultas Teknologi Infrastruktur dan Kewilayahan di Institut Teknologi Sumatera (ITERA) adalah sebuah entitas pendidikan tinggi yang berfokus pada pengembangan ilmu pengetahuan dan teknologi dalam bidang infrastruktur dan pengembangan wilayah.",
    history: " ",
    visi: "Menjadi Fakultas Teknologi Insfrastruktur dan Kewilayahan yang unggul di bidang IPTEKS dan memberdayakan potensi yang ada di Sumatera dan dunia sampai 2024",
    misi: [
      "Menyelenggarakan pendidikan pada bidang teknologi infrastruktur dan kewilayahan berorientasi pada mutu yang berkelanjutan.",
      "Memfasilitasi sumber daya manusia untuk melaksanakan penelitian dan pengabdian kepada masyarakat yang memberdayakan potensi Sumatera",
      "Mengembangkan kerja sama dengan pemangku kepentingan di tingkat lokal, nasional dan internasional.",
      "Menyelenggarakan layanan publik prima",
    ],
    prodi: [
      "Teknik Sipil",
      "Perencanaan Wilayah dan Kota",
      "Teknik Geomatika",
      "Teknik Lingkungan",
      "Teknik Kelautan",
      "Desain Komunikasi Visual",
      "Arsitektur",
      "Arsitektur Lanskap",
      "Teknik Perkeretaapian",
      "Rekayasa Tata Kelola Air Terpadu",
      "Pariwisata",
    ],
    key_prodi: [
      "teknik-sipil",
      "perencanaan-wilayah-dan-kota",
      "teknik-geomatika",
      "teknik-lingkungan",
      "teknik-kelautan",
      "desain-komunikasi-visual",
      "arsitektur",
      "arsitektur-lanskap",
      "teknik-perkeretaapian",
      "rekayasa-tata-kelola-air-terpadu",
      "pariwisata",
    ],
    struktur_organisasi: [
      {
        nama: "Arif Rohman, S.T., M.T.",
        foto: dekan_ftik,
        jabatan: "Dekan",
      },
      {
        nama: "Roy Candra P Sigalingging, M.Sc., Ph.D.",
        foto: bawahan1_ftik,
        jabatan: "Sekretaris Fakultas Teknologi Infrastuktur dan Kewilayahan",
      },
    ],
    sosmedFakultas: [
      {
        name: "instagram",
        link: "https://www.instagram.com/ftik_itera",
        icon: <IconBrandInstagram size={40} color="black" />,
      },
      {
        name: "website",
        link: "https://ftik.itera.ac.id/",
        icon: <IconWorldWww size={40} color="black" />,
      },
    ],
    kegiatanUnggulan: [
      {
        title:
          "Upacara Pembukaan Coastal and Tropical Infrastructure Development International Course (COSTROP-ID) 2024",
        text_thumbnail: "Upacara Pembukaan COSTROP-ID 2024",
        description:
          "Kegiatan ini bertujuan untuk membuka kursus internasional tentang pengembangan infrastruktur pesisir dan tropis.",
        tanggal: "10 Januari 2024",
        img: kegiatan1_ftik,
      },
      {
        title:
          "FTIK menyelenggarakan seminar konstruksi dengan tema “Mewujudkan Proyek Konstruksi yang Berkualitas",
        text_thumbnail: "Seminar Konstruksi FTIK",
        description:
          "Seminar ini membahas bagaimana mewujudkan proyek konstruksi yang berkualitas. bertujuan untuk memberikan wawasan kepada mahasiswa.",
        tanggal: "15 Februari 2024",
        img: kegiatan2_ftik,
      },
      {
        title:
          "Ikuti Pertukaran Dosen ke Nagoya University Jepang, Satrio Muhammad Alif, S.T., M.T., Dosen Prodi Geomatika",
        text_thumbnail: "Pertukaran Dosen ke Nagoya University Jepang",
        description:
          "Program pertukaran dosen ini bertujuan untuk mengkaji lebih dalam mengenai mitigasi bencana gempa di Sumatera.",
        tanggal: "5 Maret 2024",
        img: kegiatan3_ftik,
      },
    ],
    jumlah_prodi: 11,
    jumlah_mahasiswa: 6332,
    jumlah_dosen: 207,
  },
  "fakultas-fti": {
    key: "fakultas-teknologi-industri",
    title: "Fakultas Teknologi Industri",
    header_desc: "Pengembang SDM dan Inovasi Teknologi Industri Berbasis SDA",
    logo: logo_fti,
    description:
      "Fakultas Teknologi Industri (FTI) merupakan salah satu fakultas yang berkedudukan di Institut Teknologi Sumatera (ITERA). Fakultas Teknologi Industri, Itera memiliki 21 program studi yang berkaitan dengan kebutuhan sumber daya manusia (SDM) yang siap berkontribusi dalam perubahan. Juga dalam mengembangkan teknologi dan inovasi guna menggali potensi yang ada di Indonesia umumnya, dan Sumatera khususnya.",
    history:
      "Fakultas Teknologi Industri (FTI) Itera berasal dari Fakultas Teknologi Produksi dan Industri (JTPI) Itera yang terbentuk pada tahun 2018 sesuai SK rektor Nomor 870/IT9.A/SK/OT/2018. FTI Itera terbentuk berdasarkan Peraturan Menteri Pendidikan, Kebudayaan, Riset dan Teknologi Republik Indonesia Nomor 56 Tahun 2023 tanggal 20 September 2023 telah membuka beberapa program studi. Pada tahun 2022 telah berdiri resmi 20 program studi yang ada di Fakultas Teknologi Industri antara lain Teknik Kimia, Teknologi Industri Pertanian, Teknologi Pangan, Teknik Biosistem, Rekayasa Kehutanan, Teknik Geologi, Teknik Mesin, Teknik Geofisika, Teknik Industri, Teknik Material, Teknik Pertambangan, Teknik Informatika, Teknik Elektro, Teknik Fisika, Teknik Sistem Energi, Teknik Telekomunikasi, Teknik Biomedis, Rekayasa Kosmetik, Rekayasa Minyak dan Gas, Rekayasa Instrumentasi dan Automasi. Pada Tahun 2023 berdasarkan Keputusan Menteri Pendidikan, Kebudayaaan, Riset dan Teknologi Republik Indonesia Nomor: 426/E/2023 tanggal 16 Mei 2023 dibuka Program Studi Rekayasa Keolahragaan pada Fakultas Teknologi Industri.",
    visi: "Menjadi fakultas yang berkontribusi dalam pengembangan sumber daya manusia dan inovasi teknologi produksi dan industri yang berorientasi pada pengolahan potensi sumber daya alam di indonesia, khususnya di Sumatra pada tahun 2027",
    misi: [
      "Menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat yang berorientasi pada pengelolaan potensi sumber daya alam Indonesia, khususnya Sumatera",
      "Menyelenggarakan peningkatan kompetensi, kapabilitas dan profesionalitas sumber daya manusia.",
      "Menyelenggarakan peningkatan implementasi inovasi dan teknologi di bidang produksi dan Industri.",
      "Menyelenggarakan tata kelola program studi yang berorientasi pada pelayanan secara berkelanjutan.",
    ],
    prodi: [
      "Teknik Geofisika",
      "Teknik Geologi",
      "Teknik Pertambangan",
      "Teknologi Industri Pertanian",
      "Teknik Biosistem",
      "Teknik Telekomunikasi",
      "Rekayasa Minyak dan Gas",
      "Teknik Informatika",
      "Teknik Elektro",
      "Rekayasa Instrumentasi dan Automasi",
      "Rekayasa Keolahragaan",
      "Teknik Material",
      "Teknik Mesin",
      "Teknik Industri",
      "Teknik Fisika",
      "Teknik Biomedis",
      "Rekayasa Kosmetik",
      "Teknik Kimia",
      "Teknologi Pangan",
      "Teknik Sistem Energi",
      "Rekayasa Kehutanan",
    ],
    key_prodi: [
      "teknik-geofisika",
      "teknik-geologi",
      "teknik-pertambangan",
      "teknologi-industri-pertanian",
      "teknik-biosistem",
      "teknik-telekomunikasi",
      "rekayasa-minyak-dan-gas",
      "teknik-informatika",
      "teknik-elektro",
      "rekayasa-instrumentasi-dan-automasi",
      "rekayasa-keolahragaan",
      "teknik-material",
      "teknik-mesin",
      "teknik-industri",
      "teknik-fisika",
      "teknik-biomedis",
      "rekayasa-kosmetik",
      "teknik-kimia",
      "teknologi-pangan",
      "teknik-sistem-energi",
      "rekayasa-kehutanan",
    ],
    struktur_organisasi: [
      {
        nama: "Hadi Teguh Yudistira, S.T., Ph.D.",
        foto: dekan_fti,
        jabatan: "Dekan",
      },
      {
        nama: "Dr. Jabosar Ronggur Hamonangan Panjaitan, S.T., M.T.",
        foto: bawahan1_fti,
        jabatan: "Wakil Dekan Bidang Akademik dan Kemahasiswaan",
      },
      {
        nama: "Dr. Sena Maulana, S.Hut., M.Si.",
        foto: bawahan2_fti,
        jabatan: "Wakil Dekan Bidang Umum dan Keuangan",
      },
    ],
    sosmedFakultas: [
      {
        name: "youtube",
        link: "http://www.youtube.com/@jurusanteknologiproduksiin4127",
        icon: <IconBrandYoutube size={40} color="black" />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/ftiitera",
        icon: <IconBrandInstagram size={40} color="black" />,
      },
      {
        name: "website",
        link: "https://fti.itera.ac.id/profil/",
        icon: <IconWorldWww size={40} color="black" />,
      },
    ],
    kegiatanUnggulan: [
      {
        title:
          "Bahas tentang Rehabilitasi Hutan dan Lahan, BPDAS Lampung dan Deputi Staf Kepresidenan kunjungi FTI Itera",
        text_thumbnail: "Bahas Rehabilitasi Hutan dan Lahan",
        description:
          "Kegiatan ini bertujuan untuk membahas tentang rehabilitasi hutan dan lahan dengan BPDAS Lampung dan Deputi Staf Kepresidenan.",
        tanggal: "12 Oktober 2023",
        img: kegiatan1_fti,
      },
      {
        title:
          "Penandatanganan Perjanjian MoU dan Kerja Sama dengan PT Nectars Natura Karya",
        text_thumbnail: "MoU dengan PT Nectars Natura Karya",
        description:
          "FTI Itera menandatangani MoU dan kerja sama dengan PT Nectars Natura Karya.",
        tanggal: "5 November 2023",
        img: kegiatan2_fti,
      },
      {
        title:
          "Tim Teknologi Pangan ITERA menjadi Pemenang dalam Sakura Science, Technology, and Innovation Awards 2023",
        text_thumbnail: "Tekpang ITERA Menang Sakura Awards 2023",
        description:
          "Tim Teknologi Pangan ITERA berhasil memenangkan Sakura Science, Technology, and Innovation Awards 2023.",
        tanggal: "1 Desember 2023",
        img: kegiatan3_fti,
      },
    ],
    jumlah_prodi: 21,
    jumlah_mahasiswa: 10399,
    jumlah_dosen: 248,
  },
};
