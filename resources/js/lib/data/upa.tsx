import kegiatan_1_upa_kebun_raya from "!assets/kegiatanUnggulan/1/upa-kebun-raya.png";
import kegiatan_1_upa_lab_1 from "!assets/kegiatanUnggulan/1/upa-lab.png";
// import kegiatan_1_upa_lab_2 from "!assets/kegiatanUnggulan/1/upa-lab-2.png";
// import kegiatan_1_upa_lab_3 from "!assets/kegiatanUnggulan/1/upa-lab-3.png";
// import kegiatan_1_upa_mkg from "!assets/kegiatanUnggulan/1/upa-mkg.png";
// import kegiatan_1_upa_oail from "!assets/kegiatanUnggulan/1/upa-oail.png";
import kegiatan_1_upa_perpustakaan from "!assets/kegiatanUnggulan/1/upa-perpustakaan.png";
import kegiatan_1_upa_tik from "!assets/kegiatanUnggulan/1/upa-tik.png";
import kegiatan_1_upt_k3l from "!assets/kegiatanUnggulan/1/upt-k3l.png";
import kegiatan_1_upt_bahasa from "!assets/kegiatanUnggulan/1/upt-bahasa.png";
// import foto kegiatan unggulan-1
import kegiatan_2_upa_kebun_raya from "!assets/kegiatanUnggulan/2/upa-kebun-raya.png";
import kegiatan_2_upa_lab_1 from "!assets/kegiatanUnggulan/2/upa-lab.png";
import kegiatan_2_upa_lab_2 from "!assets/kegiatanUnggulan/2/upa-lab.png";
import kegiatan_2_upa_lab_3 from "!assets/kegiatanUnggulan/2/upa-lab-3.png";
import kegiatan_2_upa_mkg from "!assets/kegiatanUnggulan/2/upa-mkg.png";
import kegiatan_2_upa_oail from "!assets/kegiatanUnggulan/2/upa-oail.png";
import kegiatan_2_upa_perpustakaan from "!assets/kegiatanUnggulan/2/upa-perpustakaan.png";
import kegiatan_2_upa_tik from "!assets/kegiatanUnggulan/2/upa-tik.png";
import kegiatan_2_upt_k3l from "!assets/kegiatanUnggulan/2/upt-k3l.png";
import kegiatan_2_upt_bahasa from "!assets/kegiatanUnggulan/2/upt-bahasa.png";
// import foto kegiatan unggulan-2
import kegiatan_3_upa_kebun_raya from "!assets/kegiatanUnggulan/3/upa-kebun-raya.jpg";
import kegiatan_3_upa_mkg from "!assets/kegiatanUnggulan/3/upa-mkg.png";
import kegiatan_3_upa_oail from "!assets/kegiatanUnggulan/3/upa-oail.png";
import kegiatan_3_upa_perpustakaan from "!assets/kegiatanUnggulan/3/upa-perpustakaan-1.png";
import kegiatan_3_upa_tik from "!assets/kegiatanUnggulan/3/upa-tik.png";
import kegiatan_3_upt_k3l from "!assets/kegiatanUnggulan/3/upt-k3l.png";
import kegiatan_3_upa_lab from "!assets/kegiatanUnggulan/2/upa-lab.png";
import kegiatan_3_upt_bahasa from "!assets/kegiatanUnggulan/3/upt-bahasa.png";
// import foto kegiatan unggulan-3
import kepala_upa_kebun_raya from "!assets/kepalaUpt/upa-kebun-raya.png";
import kepala_upa_lab from "!assets/kepalaUpt/upa-lab.png";
import kepala_upa_mkg from "!assets/kepalaUpt/upa-mkg.png";
import kepala_upa_oail from "!assets/kepalaUpt/upa-oail.png";
import kepala_upa_perpustakaan from "!assets/kepalaUpt/upa-perpustakaan.png";
import kepala_upa_tik from "!assets/kepalaUpt/upa-tik.png";
import kepala_upt_k3l from "!assets/kepalaUpt/upt-k3l.png";
import kepala_upt_bahasa from "!assets/kepalaUpt/upa-bahasa.png";
import logo_upa_perpus from "!assets/logoupt/logo-upa-perpus.png";
import logo_upa_kebun_raya from "!assets/logoupt/upa-kebun-raya.png";
import logo_upa_laboratorium from "!assets/logoupt/upa-lab.png";
import logo_upa_mkg from "!assets/logoupt/upa-mkg.png";
import logo_upa_oail from "!assets/logoupt/upa-oail.png";
import logo_upa_perpustakaan from "!assets/logoupt/upa-perpustakaan.png";
import logo_upa_tik from "!assets/logoupt/upa-tik.png";
import logo_upt_k3l from "!assets/logoupt/upt-k3l.png";
import logo_upt_bahasa from "!assets/logoupt/upa-bahasa.png";


// Acuan saja tidak wajib digunakan
export interface UptData {
  key: string;
  title: string;
  logo: string;
  description: string;
  headerDescription?: string;
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
    instagram?: string;
    youtube?: string;
    website?: string;
    tiktok?: string;
  };
  kegiatanUnggulan: {
    title: string;
    description: string;
    tanggal: string;
    img: any;
  }[];
}

export const DetailUPTData: UptData[] = [
  // data UPA tik
  {
    key: "upa-tik",
    title: "UPA TIK",
    logo: logo_upa_tik,
    description:
      "Unit Penunjang Akademik TIK ITERA merupakan unit pendukung kebutuhan akademik di Institut Teknologi Sumatera yang berfokus pada layanan teknologi, informasi, dan komunikasi. UPA TIK bertugas membuat dan mengembangkan aplikasi serta menyelesaikan berbagai permasalahan terkait TIK di lingkungan kampus.",
    headerDescription:
      "UPA TIK ITERA mengelola dan mengembangkan teknologi informasi dan komunikasi untuk mendukung efisiensi operasional dan pencapaian tridharma perguruan tinggi.",
    history:
      "UPA TIK didirikan pada tahun 2015 sebagai langkah pemenuhan kebutuhan dalam pengembangan dan pengelolaan infrastruktur teknologi yang modern, dengan tujuan mendukung kegiatan akademik dan administratif di lingkungan kampus dengan 556 user dan 5 sistem informasi pada kala awal dicipatakan. Hampir 1 dekade berdiri kini UPA TIK memiliki pencapaian 100+ aplikasi sistem informasi yamg dikembangkan dan memiliki 34.000+ user.",
    visi: "Menjadi Unit Penunjang Akademik yang terkemuka dan unggul dalam menyelenggarakan layanan teknologi informasi demi mewujudkan cita-cita dan Tri Darma Institut Teknologi Sumatera",
    misi: [
      "Menyelenggarakan layanan teknologi informasi yang berdaya saing global.",
      "Berkontribusi pada pemberdayaan potensi sumber daya yang ada di wilayah sumatera khususnya, dan Indonesia serta dunia melalui keunggulan teknologi informasi dan komunikasi",
    ],
    kepalaUpt: {
      nama: "Harry Yuliansyah, S.T., M.Eng.",
      foto: kepala_upa_tik,
      jabatan: "Kepala",
      nip: "198607222012121002",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/upatikitera/",
      tiktok: "",
      website: "https://tik.itera.ac.id/",
      youtube: "https://www.youtube.com/@upttikiteraoffical",
    },
    kegiatanUnggulan: [
      {
        title: "Aplikasi Pocket ITERA untuk Android &  IOS",
        description:
          "Pocket ITERA merupakan aplikasi yang dikembangkan untuk memudahkan mahasiswa dalam menjalani aktivitas akademik di ITERA dengan lebih efisien dan nyaman.",
        tanggal: "2025",
        img: kegiatan_1_upa_tik,
      },
      {
        title: "Wifi Corner Setiap Gedung di ITERA",
        description:
          "Layanan ini bertujuan untuk memudahkan akses internet di setiap gedung di ITERA oleh setiap civitas akademika ITERA.",
        tanggal: "2025",
        img: kegiatan_2_upa_tik,
      },
      {
        title: "Event Tahunan seperti UTBK, Tes POLRI, Tes SKD CAT CPNS",
        description:
          "UPA TIK seringg dipercayai sebagai salah satu untuk membantu menyelenggarakan event-event besar seperti UTBK, Tes POLRI, Tes SKD CAT CPNS.",
        tanggal: "2025",
        img: kegiatan_3_upa_tik,
      },
    ],
  },

  // data UPA perpustakaan
  {
    key: "upa-perpustakaan",
    title: "UPA Perpustakaan",
    logo: logo_upa_perpustakaan,
    description:
      "Perpustakaan ITERA merupakan salah satu unit pelaksana teknis di ITERA dengan tugas pokok pelayanan informasi untuk menunjang pelaksanaan tri dharma perguruan tinggi melalui penyediaan sarana prasarana, koleksi buku digital dan cetak, serta layanan pustakawan.",
    headerDescription:
      "Perpustakaan ITERA menyediakan sumber daya informasi yang komprehensif untuk mendukung tridharma perguruan tinggi, meliputi pendidikan, penelitian, dan pengabdian masyarakat.",
    history:
      "Sebagai perpustakaan universitas, perpustakaan itera hadir dalam memenuhi akses pengetahuan untuk menunjang pelaksanaan tri dharma perguruan tinggi dalam bidang pendidikan, penelitian dan pengabdian masyarakat. Saat ini terdapat dua lokasi perpustakaan di itera. Pertama, perpustakaan itera berlokasi di lantai 4 GKU 1 yang menyediakan layanan sirkulasi, ruang baca, komputer, administrasi perpustakaan dan bimbingan pustakawan bagi pengunjung. Kedua, perpustakaan berlokasi di GKU 2 yang menyediakan layanan refrensi seperti tugas akhir, majalah, dan koleksi BI corner. Untuk meningkatkan pelayanan, perpustakaan itera menyediakan e-library itera dan layanan repository",
    visi: "Menjadi perpustakaan yang unggul dan mandiri sebagai sumber informasi untuk mendukung pelaksanaan tridharma perguruan tinggi bagi sivitas akademika ITERA.",
    misi: [
      "Mengumpulkan, mengorganisasi, mendistribusikan informasi terkini sebagai bahan rujukan bagi sivitas akademika ITERA",

      "Meningkatkan mutu layanan, prasarana dan teknologi informasi sebagai sumber pembelajaran bagi sivitas akademika ITERA",

      "Menjadi sarana penunjang kegiatan untuk meningkatkan kreativitas dan pengembangan diri sivitas akademika ITERA",

      "Menjalin kerja sama dengan berbagai institusi untuk memperoleh informasi yang dibutuhkan oleh sivitas akademika ITERA",
    ],
    kepalaUpt: {
      nama: "M. ALVIEN GHIFARI, S.SI., M.SC.",
      foto: kepala_upa_perpustakaan,
      jabatan: "Kepala",
      nip: "199511082022031010",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/library.itera/",
      tiktok: "",
      website: "https://perpustakaan.itera.ac.id",
      youtube: "https://www.youtube.com/@uptperpustakaanitera6160",
    },
    kegiatanUnggulan: [
      {
        title: "AHI 2024 Kategori 'Pengelolaan Media Sosial' terbaik 1",
        description:
          "Perpustakaan ITERA meraih penghargaan sebagai pengelola media sosial terbaik di kategori 'Pengelolaan Media Sosial' dalam ajang Anugerah Humas ITERA 2023.",
        tanggal: "2024",
        img: kegiatan_1_upa_perpustakaan,
      },
      {
        title: "AHI 2024 Kategori Fakultas Lembaga UPA 'Insan Humas Terfavorit' UPA Perpustakaan",
        description:
          "Perpustakaan ITERA meraih penghargaan bergengsi sebagai 'Insan Humas Terfavorit' dalam kategori Fakultas, Lembaga, dan UPA pada ajang Anugerah Humas ITERA (AHI) 2024. Penghargaan ini menjadi bentuk apresiasi atas inovasi, kreativitas, dan dedikasi Perpustakaan ITERA dalam meningkatkan layanan informasi serta literasi di lingkungan kampus.",
        tanggal: "2024",
        img: kegiatan_2_upa_perpustakaan,
      },
      {
        title: "Kunjungan Benchmarking ke Perpustakaan Nasional, Brin, dan Kemendikbud",
        description:
          "Perpustakaan ITERA menerima kunjungan benchmarking dari tim Perpustakaan Nasional, BRIN, dan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek). Kunjungan ini bertujuan untuk berbagi pengetahuan, pengalaman, serta memperkuat kolaborasi antara ketiga institusi dengan Perpustakaan ITERA dalam pengembangan layanan perpustakaan dan literasi informasi.",
        tanggal: "2024",
        img: kegiatan_3_upa_perpustakaan,
      },
    ],
  },

  // data UPA laboratorium
  {
    key: "upa-laboratorium-terpadu",
    title: "UPA Laboratorium Terpadu",
    logo: logo_upa_laboratorium,
    description:
      "UPA Laboratorium Tepadu ITERA adalah unit penunjang akademik yang menyedikan layanan pendidikan khususnya pada bidang praktikum yang berada pada lingkungan Institut Teknologi Sumatera dalam menjalankan misi pendidikan, penelitian, dan layanan pengujian",
    headerDescription:
      "UPA Laboratorium Terpadu ITERA menyediakan fasilitas canggih untuk praktikum dan kegiatan akademik, mendukung tridharma perguruan tinggi dengan standar ISO 17025:2017.",
    history:
      "Sebagai kebutuhan dan memenuhi fungsi dari tridharma perguruan tinggi, Institut Teknologi Sumatera mendirikan UPA Laboratorium terpadu yang melayani pengujian, penelitian, dan pendidikan terutama pengujian bahan alam dan keteknikan yang lebih profesional dan terbaik pada kelasnya baik bagi institusi sendiri dan umum.",
    visi: "Menjadi pusat layanan laboratorium di Sumatera yang unggul dan profesional dalam mendukung penyelenggaraan tridharma perguruan tinggi dan layanan pengujian berstandar ISO 17025:2017.",
    misi: [
      "Menyediakan layanan laboratorium yang profesional untuk kegiatan pendidikan, termasuk praktikum dan peminjaman ruang/alat laboratorium untuk penelitian dan pengabdian kepada masyarakat.",
      "Menyediakan layanan pengujian berstandar ISO17025:2017 untuk universitas dan industri sekitar.",
      "Mengedepankan kesehatan dan keselamatan kerja dalam pelaksanaan layanan laboratorium.",
    ],
    kepalaUpt: {
      nama: "Agel Vidian Krama, S.Pd., M.Si",
      foto: kepala_upa_lab,
      jabatan: "Kepala",
      nip: "198807172019031011",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/upalabitera",
      tiktok: "",
      youtube: "",
      website: "https://ilab.itera.ac.id/faq",
    },
    kegiatanUnggulan: [
      {
        title: "Workshop Fitokimia",
        description:
          "Workshop Fitokimia diselenggarakan dengan tujuan meningkatkan pemahaman mahasiswa ITERA tentang konsep dasar fitokimia serta aplikasinya dalam bidang penelitian, khususnya terkait senyawa-senyawa kimia alami yang berasal dari tumbuhan. Kegiatan ini diharapkan dapat memperluas wawasan dan keterampilan mahasiswa ITERA dalam menganalisis serta memanfaatkan potensi fitokimia untuk pengembangan ilmu dan inovasi.",
        tanggal: "2025",
        img: kegiatan_1_upa_lab_1,
      },
      {
        title: "Pengujian Bahan Alam dan Teknik",
        description:
          "Laboratorium ITERA menyediakan layanan pengujian Bahan Alam dan Teknik yang mencakup analisis material, pengujian kualitas air, serta berbagai parameter fisik dan kimia lainnya. Seluruh layanan pengujian dilaksanakan sesuai dengan standar mutu ISO/IEC 17025:2017 dan didukung oleh peralatan laboratorium yang terkalibrasi. Layanan ini terbuka untuk mendukung kegiatan penelitian akademik, tugas akhir mahasiswa, hingga kebutuhan industri dan instansi eksternal.",
        tanggal: "2025",
        img: kegiatan_2_upa_lab_1,
      },
      {
        title: "Penelitian Laboratorium",
        description:
          "Laboratorium ITERA aktif dalam penelitian yang berfokus pada pengembangan teknologi dan inovasi di bidang sains dan teknik. Penelitian ini melibatkan kolaborasi dengan berbagai fakultas dan lembaga, serta berupaya untuk menghasilkan solusi praktis yang dapat diterapkan di masyarakat.",
        tanggal: "2025",
        img: kegiatan_3_upa_lab,
      },
    ],
  },

  // data UPA kebun raya
  {
    key: "upa-kebun-raya",
    title: "UPA Kebun Raya",
    logo: logo_upa_kebun_raya,
    description:
      "Kebun Raya ITERA yang dikelola UPT Konservasi Flora Sumatera. Dalam pembangunannya, Kebun Raya ITERA mengusung tema “Konservasi Tumbuhan Pamah Sumatera” yakni konservasi tumbuhan dataran rendah Sumatera yang menjadi ciri khas. Tercatat tanaman yang sudah dikonservasi untuk jenis non anggrek berjumlah 300 spesies dan jenis anggrek 34 spesies yang berasal dari Lampung, Indonesia bahkan luar negeri.",
    headerDescription:
      "UPA Kebun Raya ITERA merupakan pusat konservasi tumbuhan dataran rendah Sumatera, berfokus pada pendidikan, penelitian, dan pengembangan ekosistem.",
    history:
      "Kampus Institut Teknologi Sumatera (ITERA) di Desa Way Hui, Kec. Jati Agung, Kab. Lampung Selatan Provinsi Lampung yang berdiri pada tahun 2014 berdasarkan Peraturan Presiden RI No. 124 tahun 2014 berada pada hamparan lahan seluas 285 ha. Sesuai Masterplan Kampus ITERA, direncanakan 60% dari lahan yang tersedia diperuntukkan sebagai Ruang Terbuka Hijau (RTH). Keinginan pembangunan Kebun Raya mengintegrasikan aktivitas kampus dengan konservasi lingkungan sebagai satu kesatuan ekosistem. Hasil kajian Tim Pusat Konservasi Tumbuhan Kebun Raya – BRIN juga menyimpulkan bahwa lokasi tapak layak dijadikan sebagai kebun raya. Kehadiran KR ITERA juga menjadikan Provinsi Lampung yang pertama di Sumatera yang memiliki dua kebun raya.",
    visi: "Menjadi kebun raya terkemuka di dunia dalam bidang konservasi, penelitian dan pendidikan berbasis tumbuhan pamah Sumatera untuk pemanfaatan yang berkelanjutan.",
    misi: [
      "Mengimplementasikan pengelolaan kawasan kebun raya, pemeliharaan koleksi tumbuhan dan infrastruktur pendukungnya sesuai dengan Peraturan Kepala LIPI Nomor 10 Tahun 2015 tentang Pengelolaan Kebun Raya.",
      "Meningkatkan kuantitas dan koleksi tumbuhan, terutama jenis-jenis lokal, endemik, langka dan berpotensi dari hutan pamah Sumatera yang beradaptasi dengan baik di lokasi Kebun Raya ITERA.",
      "Menyediakan sarana dan prasarana penelitian di bidang konservasi, domestikasi, reintroduksi tumbuhan langka dan rehabilitasi lahan serta botani ekonomi berbasis koleksi tumbuhan yang dimiliki.",
      "Mengembangkan pendidikan konservasi untuk meningkatkan tumbuh kembangnya kesadaran sivitas ITERA dan masyarakat dalam pelestarian lingkungan.",
      "Menyediakan sarana wisata yang sehat, nyaman dan bernilai edukatif.",
      "Memberikan dampak terhadap peningkatan kualitas lingkungan sekitar kebun raya, yang meliputi aspek tata air, keanekaragaman hayati, penyerapan karbon, dan keindahan lanskap kawasan.",
      "Memperkuat jaringan kerja sama dengan kebun raya dan lembaga konservasi lain di dalam maupun luar negeri.",
      "Memperkuat sistem kelembagaan.",
    ],
    kepalaUpt: {
      nama: "Alawiyah, S.P., M.Hut.",
      foto: kepala_upa_kebun_raya,
      jabatan: "Kepala",
      nip: "",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/kebunrayaitera/",
      tiktok: "",
      youtube: "https://www.youtube.com/channel/UCVaKg6QVo-mRZkV0Wec9d-g",
      website: "https://kebunraya.itera.ac.id/",
    },
    kegiatanUnggulan: [
      {
        title: "Konservasi Tumbuhan melalui Pengembangan Konservasi Tumbuhan yang Ada di Sumatera",
        description: "Kebun Raya ITERA berkomitmen terhadap upaya konservasi tumbuhan melalui pengembangan koleksi flora khas Sumatera. Fokus utama konservasi mencakup spesies tumbuhan lokal, endemik, dan langka yang memiliki nilai ekologis dan ilmiah tinggi. Program ini juga berperan sebagai sarana penelitian, pendidikan, dan wisata ilmiah berbasis konservasi.",
        tanggal: "2025",
        img: kegiatan_1_upa_kebun_raya,
      },
      {
        title:
          "Program Eduwisata (Edukasi Flora) untuk Pelajar hingga Perguruan Tinggi tentang Pengenalan Tumbuhan",
        description: "Program ini menyediakan kegiatan edukasi flora di Kebun Raya ITERA, yang meliputi pengenalan tumbuhan lokal, endemik, dan langka serta upaya rehabilitasi lahan di Kebun Raya ITERA.",
        tanggal: "2025",
        img: kegiatan_2_upa_kebun_raya,
      },
      {
        title: "Program Wisata ",
        description: "Program ini mencakup kegiatan wisata ilmiah, pengelolaan lahan, rehabilitasi lahan, dan pengelolaan koleksi flora di Kebun Raya ITERA.",
        tanggal: "2025",
        img: kegiatan_3_upa_kebun_raya,
      },
    ],
  },

  // data UPA OAIL
  // {
  //   key: "upa-oail",
  //   title: "UPA OAIL",
  //   logo: logo_upa_oail,
  //   description:
  //     "Unit Pelaksana Teknis Observatorium Astronomi ITERA Lampung (UPT OAIL) merupakan laboratorium keantariksaan yang dibangun sejak tahun 2018 untuk menunjang aktivitas tridharma perguruan tinggi di ITERA khususnya untuk program studi Sains Atmosfer dan Keplanetan (SAP). Selain itu, OAIL juga berguna sebagai sarana edukasi untuk memfasilitasi siswa, mahasiswa, dan seluruh masyarakat yang memiliki minat pada bidang sains khususnya astronomi seperti pengamatan benda-benda langit menggunakan teleskop.",
  //   headerDescription:
  //     "UPA OAIL ITERA adalah pusat pengamatan astronomi yang mendukung pendidikan dan penelitian dalam bidang sains atmosfer dan keplanetan.",
  //   history:
  //     "Institut Tenologi Sumatera (ITERA) bersama Institut Teknologi Bandung (ITB) dan Pemerintah Provinsi Lampung merencanakan suatu proyek pembangunan OAIL di Taman Abdurrahman, Gunung Betung, Lampung. Selama masa tahap pembangunan observatorium, program kegiatan ini dilaksanakan di lingkungan kampus ITERA. Tujuan kegiatan ini sendiri diharapkan dapat membangkitkan kesadaran sejak dini akan fenomena alam yang terjadi di sekitar kita dan juga sebagai sarana untuk menggali minat dalam bidang ilmu sains. Akhirnya UPT OAIL ITERA berdiri sejak tahun 2018 di ITERA Lampung untuk mendukung aktivitas tridharma perguruan tinggi.",
  //   visi: "Mencerdaskan masyarakat, sebagai laboratorium pendidikan tersier di lingkungan ITERA, ikut secara proaktif berpartisipasi dalam jejaring eksplorasi dan patroli langit.",
  //   misi: [
  //     "Melakukan penelitian dan eksplorasi langit dari wilayah Indonesia.",
  //     "Memanfaatkan langit untuk pendidikan keantariksaan bagi mahasiswa ITERA dan ITB serta masyarakat Lampung dan Sumatera.",
  //     "Memanfaatkan lokasi UPT OAIL untuk wisata edukasi, terutama dalam bidang sains antariksa, kebumian, dan teknologi instrumentasi.",
  //     "Membangun kerjasama nasional maupun internasional dalam melakukan eksplorasi langit untuk kesejahteraan manusia.",
  //   ],
  //   kepalaUpt: {
  //     nama: "Dr. Moedji Raharto",
  //     foto: kepala_upa_oail,
  //     jabatan: "Kepala",
  //     nip: "195411081981031002",
  //   },
  //   sosmedUPT: {
  //     instagram: "https://www.instagram.com/oail.itera/",
  //     tiktok: "",
  //     youtube: "https://youtube.com/@oailitera9398",
  //     website: "https://oail.itera.ac.id",
  //   },
  //   kegiatanUnggulan: [
  //     {
  //       title: "Ngamat Bareng OAIL (NGABRIL)",
  //       description: "Kegiatan pengamatan langit bersama masyarakat.",
  //       tanggal: "2022",
  //       img: kegiatan_1_upa_oail,
  //     },
  //     {
  //       title: "Rukyatul Hilal",
  //       description:
  //         "Kegiatan pengamatan hilal untuk menentukan awal bulan Hijriyah.",
  //       tanggal: "2022",
  //       img: kegiatan_2_upa_oail,
  //     },
  //     {
  //       title: "Wisata Edukasi Astronomi OAIL",
  //       description:
  //         "Kegiatan wisata edukasi untuk mengenalkan astronomi kepada masyarakat.",
  //       tanggal: "2023",
  //       img: kegiatan_3_upa_oail,
  //     },
  //   ],
  // },

  // data UPA MKG
  // {
  //   key: "upa-mkg",
  //   title: "UPA MKG",
  //   logo: logo_upa_mkg,
  //   description:
  //     "UPT MKG atau Pusat Meteorologi, Klimatologi dan Geofisika bernaung dibawah Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) sebagai pengembangan fasilitas dan struktur kerja sama antara pihak BMKG dan ITERA yang bertujuan untuk pemanfaatan sarana prasarana, pendidikan, penelitian, dan pengabdian kepada masyarakat yang menunjang kajian potensi bencana.",
  //   headerDescription:
  //     "UPA MKG adalah kolaborasi antara ITERA dan BMKG, fokus pada pendidikan dan penelitian dalam bidang meteorologi, klimatologi, dan geofisika.",
  //   history:
  //     "Unit Pelaksana Teknis Meteorologi, Klimatologi, dan Geofisika (UPT MKG), terbentuk pada tahun 2017 karena pemanfaatan sarana dan prasarana, pendidikan, penelitian, pengembangan di bidang meteorologi, klimatologi, dan geofisika masih terbatas dan masih pada tahap pengembangan secara masif. Seiring berjalannya waktu, kini UPT MKG telah berganti menjadi Pusat Meteorologi, Klimatologi, dan Geofisika yang bernaung dibawah Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) sejak akhir tahun 2022.",
  //   visi: "Menjadi pusat pengembangan dan riset bersama BMKG-ITERA yang produktif dalam pendidikan serta aktif dalam penelitian dan pengabdian masyarakat.",
  //   misi: [
  //     "Bersama secara tahunan mengembangkan kurikulum pendidikan tinggi sesuai kebutuhan terkini.",
  //     "Mengedukasi masyarakat terkait meteorologi, klimatologi, dan geofisika.",
  //   ],
  //   kepalaUpt: {
  //     nama: "Drs. Zadrach Ledoufij Dupe, M.Si",
  //     foto: kepala_upa_mkg,
  //     jabatan: "Kepala",
  //     nip: "195703221983031003",
  //   },
  //   sosmedUPT: {
  //     instagram: "https://www.instagram.com/mkg_itera/",
  //     tiktok: "",
  //     youtube: "https://youtube.com/@uptmkgitera3276?si=YYAoSYxCUXY7RKJI",
  //     website: "https://sites.google.com/itera.ac.id/mkgitera/home",
  //   },
  //   kegiatanUnggulan: [
  //     {
  //       title: "Pelatihan Navigasi Darat",
  //       description: "Pelatihan untuk meningkatkan kemampuan navigasi darat.",
  //       tanggal: "2022",
  //       img: kegiatan_1_upa_mkg,
  //     },
  //     {
  //       title: "Pelatihan Bantuan Hidup Dasar",
  //       description:
  //         "Pelatihan untuk memberikan pengetahuan dasar mengenai bantuan hidup.",
  //       tanggal: "2023",
  //       img: kegiatan_2_upa_mkg,
  //     },
  //     {
  //       title: "Pelatihan Water Rescue",
  //       description: "Pelatihan untuk keterampilan penyelamatan di air.",
  //       tanggal: "2023",
  //       img: kegiatan_3_upa_mkg,
  //     },
  //   ],
  // },
// UPT Bahasa
  {
    key: "upt-bahasa",
    title: "UPT Bahasa",
    logo: logo_upt_bahasa,
    description:
      "UPA Bahasa menyediakan layanan terkait Bahasa bagi sivitas akademik ITERA. UPA Bahasa berperan sebagai pusat pengelolaan informasi, penyebaran informasi sumber belajar dan penunjang pembelajaran Bahasa Asing dan Bahasa Indonesia bagi Penutur Asing sehingga mampu mengakomodasi mahasiswa dan sivitas akademik untuk dapat berkomunikasi dalam bahasa asing baik itu secara verbal, kolaborasi dan profesional di bidangnya. UPA menyediakan berbagai macam layanan seperti layanan administrasi , layanan akademik ,dan layanan sarana dan prasarana dan mampu menjadi tempat yang akomodatif  untuk menjadi pusat belajar bahasa.",
    headerDescription:
      "UPA Bahasa ITERA merupakan pusat layanan bahasa yang mendukung pengembangan kemampuan berbahasa asing dan Bahasa Indonesia bagi Penutur Asing (BIPA) bagi sivitas akademik. Melalui layanan akademik, administrasi, serta sarana prasarana yang lengkap, UPA Bahasa menjadi wadah pembelajaran yang akomodatif untuk komunikasi, kolaborasi, dan profesionalisme lintas bahasa.",
    history:
      "Unit Penunjang Akademik Bahasa merupakan Unit yang berada di dalam Institut Teknologi Sumatera pertama kali dibentuk tahun 2015 sesuai dengan peraturan Nomor 37 Tahun 2015. Sejak November, 2015 Unit Penunjang Akademik Bahasa dipimpin oleh Hafiz Budi Firmansyah, S.Kom., M.Sc., Ph.D. Jumlah SDM sebanyak 7 (tujuh) orang terdiri dari 2 (dua) tenaga kependidikan dan 5 (lima) instruktur. Unit Penunjang Akademik Bahasa mempunyai wilayah kerja meliputi layanan akademik, layanan non-akademik, kerjasama institusional dan pengembangan sumber daya bahasa. Pada tahun 2023 sesuai dengan peraturan Nomor 56 Tahun 2023 UPT Bahasa berubah nama menjadi Unit Penunjang Akademik (UPA) Bahasa. Unit Penunjang Akademik Bahasa di Institut Teknologi Sumatera (ITERA) merupakan salah satu unit strategis yang berperan penting dalam mendukung pencapaian visi dan misi institusi, khususnya dalam aspek peningkatan kualitas akademik dan internasionalisasi. Unit ini hadir untuk memberikan layanan kebahasaan yang menyeluruh kepada sivitas akademika, mencakup pelatihan, penerjemahan, penyuntingan naskah ilmiah, hingga pengajaran bahasa asing dan Bahasa Indonesia bagi penutur asing (BIPA). Dalam menjalankan fungsinya, unit ini menyelenggarakan berbagai program pelatihan bahasa, baik untuk meningkatkan kemampuan bahasa Inggris akademik maupun umum. Salah satu program unggulan adalah pelatihan TOEFL dan IELTS preparation yang ditujukan untuk mahasiswa dan dosen yang ingin melanjutkan studi atau melakukan publikasi di tingkat internasional. Selain itu, unit ini juga memberikan layanan proofreading dan editing karya tulis ilmiah, sehingga mendukung peningkatan kualitas publikasi dosen dan mahasiswa di jurnal bereputasi. Tidak hanya fokus pada bahasa Inggris, Unit Penunjang Akademik Bahasa ITERA juga menyelenggarakan program pengajaran Bahasa Indonesia bagi Penutur Asing (BIPA), sebagai bentuk dukungan terhadap program internasionalisasi kampus dan penerimaan mahasiswa atau mitra kerja sama dari luar negeri. Secara keseluruhan, unit ini memiliki peran strategis dalam memfasilitasi sivitas akademika ITERA untuk meningkatkan kompetensi kebahasaan mereka, sekaligus memperkuat posisi ITERA dalam kancah akademik nasional dan internasional. Melalui layanan yang profesional dan berorientasi pada mutu, Unit Penunjang Akademik Bahasa ITERA terus berkomitmen untuk menjadi mitra utama dalam pengembangan kapasitas akademik berbasis kebahasaan. Unit Penunjang Akademik Bahasa dipimpin oleh Hafiz Budi Firmansyah, S.Kom., M.Sc., Ph.D. Jumlah SDM sebanyak 2 Tenaga Kependidikan, 1 Pegawai Perjanjian Waktu Tertentu (PKWT) dan 5 Dosen yang masuk ke dalam Tim Instruktur UPA Bahasa. UPA Bahasa berlokasi di Gedung Kuliah Umum 1 lantai 1 Institut Teknologi Sumatera.",
    visi: "Melaksanakan pelatihan / pembelajaran bahasa yang efektif. Menjadikan Laboratorium Bahasa sebagai tempat penelitian, pendidikan dan pengkajian keterampilan kebahasaan kepada sivitas akademika, dari masyarakat luas baik secara kelembagaan (seperti perguruan tinggi, sekolah lanjutan dan pondok pesantren) maupun perorangan.",
    misi: [
      "Menyelenggarakan kursus/pelatihan bahasa yang efektif Memberikan pelayanan kepada civitas akademik ITERA dan masyarakat luas dalam bidang paltihan, pengembangan masalah kebahasaan Menyelenggarakan layanan kursus bahasa Indonesia untuk orang asing Meningkatkan peranan dalam jaringan kerjasama dalam dan luar negeri di bidang kebahasaan.",
    ],
    kepalaUpt: {
      nama: "Hafiz Budi Firmansyah, S.Kom., M.Sc., Ph.D",
      foto: kepala_upt_bahasa,
      jabatan: "Kepala UPT",
      nip: "199108242019031014",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/languagecenter.itera",
      tiktok: "",
      youtube: "",
      website: "https://pusatbahasa.itera.ac.id",
    },
    kegiatanUnggulan: [
      {
        title: "Computer-Based Test (CBT) Itera English Proficiency Test (INCITE)",
        description:
          "Tes kemampuan bahasa Inggris berbasis komputer (CBT) yang diselenggarakan oleh UPA Bahasa ITERA untuk mengukur kompetensi bahasa Inggris mahasiswa, dosen, dan tenaga kependidikan sebagai bagian dari persiapan akademik dan internasionalisasi.",
        tanggal: "2025",
        img: kegiatan_1_upt_bahasa,
      },
      {
        title: "Kursus Bahasa",
        description:
          "Program pembelajaran bahasa asing dan Bahasa Indonesia bagi Penutur Asing (BIPA) yang dirancang untuk meningkatkan kemampuan berbahasa secara lisan maupun tulisan bagi sivitas akademika ITERA.",
        tanggal: "2025",
        img: kegiatan_2_upt_bahasa,
      },
      {
        title: "Bulan Bahasa",
        description: "Kegiatan tahunan yang diselenggarakan UPA Bahasa ITERA sebagai bentuk apresiasi terhadap keberagaman bahasa dan budaya, serta mendorong peningkatan literasi dan kemampuan berbahasa melalui lomba, seminar, dan pelatihan.",
        tanggal: "2025",
        img: kegiatan_3_upt_bahasa,
      },
    ],
  },
  // UPT K3L
  {
    key: "upt-k3l",
    title: "UPT K3L",
    logo: logo_upt_k3l,
    description:
      "Unit Keselamatan Kesehatan Kerja dan Lingkungan (K3L) merupakan unit yang menangani penghijauan, ketertiban, keamanan, kenyamanan, dan kebersihan di lingkungan kampus. ",
    headerDescription:
      "UPT K3L ITERA bertanggung jawab atas penghijauan, ketertiban, keamanan, kenyamanan, dan kebersihan di lingkungan kampus.",
    history:
      "Dibentuknya unit Kawasan dan K3 diharapkan mampu menangani penghijauan, ketertiban, keamanan, kenyamanan, dan kebersihan lingkungan di kampus, unit Kawasan dan K3 memiliki komitmen  terhadap penghijauan wilayah ITERA, penanganan masalah keamanan, ketertiban dan kenyamanan serta Keselamatan Kesehatan Kerja dan Lingkungan (K3L) kampus. Menjadi suatu tantangan bagi unit Kawasan dan K3 dalam menyelenggarakan tugas dan fungsinya yaitu menghijaukan, melindungi, mengamankan dan menertibkan lingkungan kampus ITERA dari ancaman, tantangan,  hambatan dan gangguan di kampus.",
    visi: "Menjadi Unit yang mampu menjaga dan mengelola aset-aset di lingkungan ITERA, serta menjalanakan fungsi Mewujudkan Budaya Keselamatan Kesehatan Kerja dan Lingkungan Kerja, dalam rangka mendukung terwujudnya ITERA KUAT, MASLAHAT DAN BERMARTABAT.",
    misi: [
      "Patuh kepada semua peraturan perundangan-undangan pemerintah dan perintah/arahan/kebijakan pimpinan ITERA.",
      "Merencanakan, mengukur dan melaporkan tujuan dan target K3L ITERA secara rutin.",
      "Berupaya maksimal memberikan suasana aman dan nyaman bagi seluruh sivitas akademika ITERA.",
      "Menerapkan pola K3 (Keselamatan dan Kesehatan Kerja) dalam setiap aktifitas belajar mengajar dan pengadministrasian di lingkungan ITERA.",
      "Menyiapkan personil yang memiliki kompetensi dan kapasitas memadai dalam penanganan kerja berbasis K3 (Keselamatan dan kesehatan Kerja).",
      "Melakukan pengelolaan yang maksimal terhadap fasilitas ITERA yang mendukung terselenggaranya K3L (Keselamatan, Kesehatan Kerja dan Lingkungan Kerja).",
      "Menciptakan dan menjaga lingkungan ITERA yang sehat, nyaman dan bersahabat.",
    ],
    kepalaUpt: {
      nama: "EDO KHARISMA ARMY, S.T., M.T",
      foto: kepala_upt_k3l,
      jabatan: "Kepala UPT",
      nip: "199209172022031007",
    },
    sosmedUPT: {
      instagram: "",
      tiktok: "",
      youtube: "",
      website: "",
    },
    kegiatanUnggulan: [
      {
        title: "Manajemen Keamanan dan Ketertiban",
        description:
          "Pelatihan untuk memberikan pengetahuan dasar mengenai Manajemen Keamanan dan Ketertiban.",
        tanggal: "2022",
        img: kegiatan_1_upt_k3l,
      },
      {
        title: "Manajemen Lingkungan",
        description:
          "Pelatihan untuk memberikan pengetahuan dasar mengenai Manajemen Lingkungan.",
        tanggal: "2023",
        img: kegiatan_2_upt_k3l,
      },
      {
        title: "Manajemen K3 dan Lingkungan Kerja",
        description: "Pelatihan untuk Manajemen K3 dan Lingkungan Kerja.",
        tanggal: "2023",
        img: kegiatan_3_upt_k3l,
      },
    ],
  },
];
