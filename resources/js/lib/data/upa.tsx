import kegiatan_1_upa_kebun_raya from "!assets/kegiatanUnggulan/1/upa-kebun-raya.png";
import kegiatan_1_upa_lab_1 from "!assets/kegiatanUnggulan/1/upa-lab-1.png";
import kegiatan_1_upa_lab_2 from "!assets/kegiatanUnggulan/1/upa-lab-2.png";
import kegiatan_1_upa_lab_3 from "!assets/kegiatanUnggulan/1/upa-lab-3.png";
import kegiatan_1_upa_mkg from "!assets/kegiatanUnggulan/1/upa-mkg.png";
import kegiatan_1_upa_oail from "!assets/kegiatanUnggulan/1/upa-oail.png";
import kegiatan_1_upa_perpustakaan from "!assets/kegiatanUnggulan/1/upa-perpustakaan.png";
import kegiatan_1_upa_tik from "!assets/kegiatanUnggulan/1/upa-tik.png";
import kegiatan_1_upt_k3l from "!assets/kegiatanUnggulan/1/upt-k3l.png";
// import foto kegiatan unggulan-1
import kegiatan_2_upa_kebun_raya from "!assets/kegiatanUnggulan/2/upa-kebun-raya.png";
import kegiatan_2_upa_lab_1 from "!assets/kegiatanUnggulan/2/upa-lab-1.png";
import kegiatan_2_upa_lab_2 from "!assets/kegiatanUnggulan/2/upa-lab-2.png";
import kegiatan_2_upa_lab_3 from "!assets/kegiatanUnggulan/2/upa-lab-3.png";
import kegiatan_2_upa_mkg from "!assets/kegiatanUnggulan/2/upa-mkg.png";
import kegiatan_2_upa_oail from "!assets/kegiatanUnggulan/2/upa-oail.png";
import kegiatan_2_upa_perpustakaan from "!assets/kegiatanUnggulan/2/upa-perpustakaan.png";
import kegiatan_2_upa_tik from "!assets/kegiatanUnggulan/2/upa-tik.png";
import kegiatan_2_upt_k3l from "!assets/kegiatanUnggulan/2/upt-k3l.png";
// import foto kegiatan unggulan-2
import kegiatan_3_upa_kebun_raya from "!assets/kegiatanUnggulan/3/upa-kebun-raya.jpg";
import kegiatan_3_upa_mkg from "!assets/kegiatanUnggulan/3/upa-mkg.png";
import kegiatan_3_upa_oail from "!assets/kegiatanUnggulan/3/upa-oail.png";
import kegiatan_3_upa_perpustakaan from "!assets/kegiatanUnggulan/3/upa-perpustakaan.png";
import kegiatan_3_upa_tik from "!assets/kegiatanUnggulan/3/upa-tik.png";
import kegiatan_3_upt_k3l from "!assets/kegiatanUnggulan/3/upt-k3l.png";
// import foto kegiatan unggulan-3
import kepala_upa_kebun_raya from "!assets/kepalaUpt/upa-kebun-raya.png";
import kepala_upa_lab from "!assets/kepalaUpt/upa-lab.png";
import kepala_upa_mkg from "!assets/kepalaUpt/upa-mkg.png";
import kepala_upa_oail from "!assets/kepalaUpt/upa-oail.png";
import kepala_upa_perpustakaan from "!assets/kepalaUpt/upa-perpustakaan.png";
import kepala_upa_tik from "!assets/kepalaUpt/upa-tik.png";
import kepala_upt_k3l from "!assets/kepalaUpt/upt-k3l.png";
import logo_upa_perpus from "!assets/logoupt/logo-upa-perpus.png";
import logo_upa_kebun_raya from "!assets/logoupt/upa-kebun-raya.png";
import logo_upa_laboratorium from "!assets/logoupt/upa-lab.png";
import logo_upa_mkg from "!assets/logoupt/upa-mkg.png";
import logo_upa_oail from "!assets/logoupt/upa-oail.png";
import logo_upa_perpustakaan from "!assets/logoupt/upa-perpustakaan.png";
import logo_upa_tik from "!assets/logoupt/upa-tik.png";
import logo_upt_k3l from "!assets/logoupt/upt-k3l.png";

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
    title: "UPA TIK ",
    logo: logo_upa_tik,
    description:
      "Unit Penunjang Akademik Teknologi Informasi dan Komunikasi (UPA TIK) ITERA adalah unit yang memiliki tugas tugas melaksanakan pengembangan sistem dan pengelolaan teknologi informasi dan komunikasi serta pelayanan teknologi informasi dan komunikasi.",
    headerDescription:
      "UPA TIK ITERA mengelola dan mengembangkan teknologi informasi dan komunikasi untuk mendukung efisiensi operasional dan pencapaian tridharma perguruan tinggi.",
    history:
      "UPA TIK (Pusat Informasi Teknis) Institut Teknologi Sumatera (ITERA) merupakan bagian dari universitas yang tergolong baru yang didirikan pada tanggal 6 Oktober 2014",
    visi: "Menjadi Unit Penunjang Akademik yang terkemuka dan unggul dalam menyelenggarakan layanan teknologi informasi demi mewujudkan cita-cita dan Tri Darma Institut Teknologi Sumatera",
    misi: [
      "Menyelenggarakan layanan teknologi informasi yang berdaya saing global.",
      "Berkontribusi pada pemberdayaan potensi sumber daya yang ada di wilayah Sumatera khususnya, dan Indonesia serta dunia melalui keunggulan teknologi informasi dan komunikasi.",
    ],
    kepalaUpt: {
      nama: "Andre Febrianto, S.Kom., M.Eng",
      foto: kepala_upa_tik,
      jabatan: "Kepala UPA",
      nip: "198602142019031008",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/upatikitera/",
      youtube: "https://www.youtube.com/@upttikiteraoffical",
      website: "https://tik.itera.ac.id/",
    },
    kegiatanUnggulan: [
      {
        title: "Benchmarking Studies UPA TIK 2023",
        description:
          "Kegiatan ini bertujuan untuk mempelajari praktik terbaik dalam pengelolaan teknologi informasi di berbagai institusi, guna meningkatkan efisiensi dan efektivitas operasional UPA TIK.",
        tanggal: "2023",
        img: kegiatan_1_upa_tik,
      },
      {
        title: "Perjalanan Dinas UPT TIK 2022",
        description:
          "Kegiatan ini melibatkan kunjungan ke beberapa institusi untuk melakukan koordinasi dan diskusi terkait pengembangan teknologi informasi, serta memperkuat kerjasama antar lembaga.",
        tanggal: "2022",
        img: kegiatan_2_upa_tik,
      },
      {
        title: "Sosialisasi Aplikasi E-Surat",
        description:
          "Kegiatan ini bertujuan untuk memperkenalkan dan melatih staf serta pengguna terkait penggunaan aplikasi E-Surat, yang diharapkan dapat meningkatkan efisiensi dalam pengelolaan surat-menyurat di lingkungan UPA TIK.",
        tanggal: "2022",
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
      "Sebagai perpustakaan universitas, perpustakaan itera hadir dalam memenuhi akses pengetahuan untuk menunjang pelaksanaan tri dharma perguruan tinggi dalam bidang pendidikan, penelitian dan pengabdian masyarakat. Saat ini terdapat dua lokasi perpustakaan di itera. Pertama, perpustakaan itera berlokasi di lantai 4 GKU 1 yang menyediakan layanan sirkulasi, ruang baca, komputer, administrasi perpustakaan dan bimbingan pustakawan bagi pengunjung. Kedua, perpustakaan berlokasi di GKU 2 yang menyediakan layanan refrensi seperti tugas akhir, majalah, dan koleksi BI corner. Untuk meningkatkan pelayanan, perpustakaan itera menyediakan e-library itera dan layanan repository.",
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
      jabatan: "Kepala UPA",
      nip: "199511082022031010",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/library.itera/",
      youtube: "https://www.youtube.com/@uptperpustakaanitera6160",
      website: "https://perpustakaan.itera.ac.id",
    },
    kegiatanUnggulan: [
      {
        title: "Pekan Kreatif Seminar LIBTERA",
        description:
          "Seminar ini diadakan sebagai bagian dari Pekan Kreatif untuk mendorong inovasi dan kreativitas dalam bidang perpustakaan dan literasi. Acara ini menghadirkan berbagai pembicara ahli dan diskusi menarik tentang perkembangan terbaru dalam dunia perpustakaan.",
        tanggal: "2023",
        img: kegiatan_1_upa_perpustakaan,
      },
      {
        title: "Peraih 3 Penghargaan Anugerah Humas ITERA 2023",
        description:
          "Perpustakaan ITERA meraih tiga penghargaan bergengsi dalam ajang Anugerah Humas ITERA 2023. Penghargaan ini merupakan pengakuan atas inovasi dan dedikasi perpustakaan dalam meningkatkan layanan informasi dan literasi di lingkungan kampus.",
        tanggal: "2022",
        img: kegiatan_2_upa_perpustakaan,
      },
      {
        title: "Kunjungan Perpustakaan ITK ke perpustakaan ITERA",
        description:
          "Kegiatan ini melibatkan kunjungan dari tim Perpustakaan Institut Teknologi Kalimantan (ITK) ke Perpustakaan ITERA. Tujuan kunjungan ini adalah untuk berbagi pengetahuan dan pengalaman serta memperkuat kerjasama antara kedua institusi.",
        tanggal: "2022",
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
      "Laboratorium Teknik Institut Teknologi Sumatera (ITERA) adalah fasilitas sebagai tempat pelaksanaannya praktikum dan kegiatan yang menunjang perkuliahan.",
    headerDescription:
      "UPA Laboratorium Terpadu ITERA menyediakan fasilitas canggih untuk praktikum dan kegiatan akademik, mendukung tridharma perguruan tinggi dengan standar ISO 17025:2017.",
    history:
      "UPT Laboratorium Terpadu dibentuk dengan tujuan untuk melaksanakan tugas pengelolaan laboratorium dan peningkatan kualitas Pendidikan dan penelitian di lingkungan Institut Teknologi Sumatera. Pembentukan Unit kerja UPT Lab Terpadu berdasarkan SK Rektor Nomor 007/IT.A/SK/OT/2018 Tentang Pembentukan Unit Pelaksana Teknis Pengelolaan Laboratorium Terpadu Institut Teknologi Sumatera pada tanggal 2 Januari 2018 yang ditandatangani oleh Rektor Institut Teknologi Sumatera Prof. Ir. Ofyar Z Tamin, M.Sc., Ph.D. Pada tahun 2023 dengan terbitnya Peraturan Menteri Pendidikan, Kebudayaan, Riset, Dan Teknologi Nomor 56 Tahun 2023 Tentang Organisasi dan Tata Kerja Institut Teknologi Sumatera, UPT Laboratorium Terpadu berganti nama menjadi UPA Laboratorium Terpadu.",
    visi: "Menjadi pusat layanan laboratorium di Sumatera yang unggul dan profesional dalam mendukung penyelenggaraan tridharma perguruan tinggi dan layanan pengujian berstandar ISO 17025:2017.",
    misi: [
      "Menyediakan layanan laboratorium yang profesional untuk kegiatan pendidikan, termasuk praktikum dan peminjaman ruang/alat laboratorium untuk penelitian dan pengabdian kepada masyarakat.",
      "Menyediakan layanan pengujian berstandar ISO17025:2017 untuk universitas dan industri sekitar.",
      "Mengedepankan kesehatan dan keselamatan kerja dalam pelaksanaan layanan laboratorium.",
    ],
    kepalaUpt: {
      nama: "Dr. Tarmizi Taher, S.Si.",
      foto: kepala_upa_lab,
      jabatan: "Kepala UPA",
      nip: "1993032920211345",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/upalabitera",
      youtube: "",
      website: "https://ilab.itera.ac.id/faq",
    },
    kegiatanUnggulan: [
      {
        title: "Pelayanan Pendidikan",
        description:
          "Kegiatan ini mencakup berbagai layanan laboratorium yang mendukung kegiatan pendidikan, seperti praktikum mahasiswa, peminjaman ruang, dan peralatan laboratorium untuk penelitian dan proyek akademik.",
        tanggal: "2023",
        img: kegiatan_1_upa_lab_1,
      },
      {
        title: "Pelayanan Pengujian",
        description:
          "Layanan pengujian yang diberikan oleh laboratorium mencakup pengujian material, kualitas air, dan berbagai parameter lainnya sesuai dengan standar ISO17025:2017, baik untuk kebutuhan akademik maupun industri.",
        tanggal: "2022",
        img: kegiatan_2_upa_lab_1,
      },
      {
        title: "Pembagian Tugas CR",
        description:
          "Kegiatan ini bertujuan untuk mendistribusikan tugas dan tanggung jawab dalam tim laboratorium untuk memastikan efisiensi operasional dan peningkatan kualitas layanan.",
        tanggal: "2022",
        img: kegiatan_2_upa_lab_2,
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
      jabatan: "Kepala UPA",
      nip: "",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/kebunrayaitera/",
      youtube: "https://www.youtube.com/channel/UCVaKg6QVo-mRZkV0Wec9d-g",
      website: "https://kebunraya.itera.ac.id/",
    },
    kegiatanUnggulan: [
      {
        title: "ANUGERAH IKPA ITERA TAHUN 2022",
        description: "Pemberian penghargaan untuk prestasi di bidang IKPA.",
        tanggal: "2022",
        img: kegiatan_1_upa_kebun_raya,
      },
      {
        title:
          "Pembangunan dan Pengelolaan Kebun Raya di Indonesia dari BRIN RI",
        description: "Penghargaan dari Badan Riset dan Inovasi Nasional.",
        tanggal: "2022",
        img: kegiatan_2_upa_kebun_raya,
      },
      {
        title: "Pengelolaan Media Sosial Kategori Jurusan/UPT/Unit/Lembaga",
        description: "Penghargaan HUMAS ITERA untuk pengelolaan media sosial.",
        tanggal: "2023",
        img: kegiatan_3_upa_kebun_raya,
      },
    ],
  },

  // data UPA OAIL
  {
    key: "upa-oail",
    title: "UPA OAIL",
    logo: logo_upa_oail,
    description:
      "Unit Pelaksana Teknis Observatorium Astronomi ITERA Lampung (UPT OAIL) merupakan laboratorium keantariksaan yang dibangun sejak tahun 2018 untuk menunjang aktivitas tridharma perguruan tinggi di ITERA khususnya untuk program studi Sains Atmosfer dan Keplanetan (SAP). Selain itu, OAIL juga berguna sebagai sarana edukasi untuk memfasilitasi siswa, mahasiswa, dan seluruh masyarakat yang memiliki minat pada bidang sains khususnya astronomi seperti pengamatan benda-benda langit menggunakan teleskop.",
    headerDescription:
      "UPA OAIL ITERA adalah pusat pengamatan astronomi yang mendukung pendidikan dan penelitian dalam bidang sains atmosfer dan keplanetan.",
    history:
      "Institut Tenologi Sumatera (ITERA) bersama Institut Teknologi Bandung (ITB) dan Pemerintah Provinsi Lampung merencanakan suatu proyek pembangunan OAIL di Taman Abdurrahman, Gunung Betung, Lampung. Selama masa tahap pembangunan observatorium, program kegiatan ini dilaksanakan di lingkungan kampus ITERA. Tujuan kegiatan ini sendiri diharapkan dapat membangkitkan kesadaran sejak dini akan fenomena alam yang terjadi di sekitar kita dan juga sebagai sarana untuk menggali minat dalam bidang ilmu sains. Akhirnya UPT OAIL ITERA berdiri sejak tahun 2018 di ITERA Lampung untuk mendukung aktivitas tridharma perguruan tinggi.",
    visi: "Mencerdaskan masyarakat, sebagai laboratorium pendidikan tersier di lingkungan ITERA, ikut secara proaktif berpartisipasi dalam jejaring eksplorasi dan patroli langit.",
    misi: [
      "Melakukan penelitian dan eksplorasi langit dari wilayah Indonesia.",
      "Memanfaatkan langit untuk pendidikan keantariksaan bagi mahasiswa ITERA dan ITB serta masyarakat Lampung dan Sumatera.",
      "Memanfaatkan lokasi UPT OAIL untuk wisata edukasi, terutama dalam bidang sains antariksa, kebumian, dan teknologi instrumentasi.",
      "Membangun kerjasama nasional maupun internasional dalam melakukan eksplorasi langit untuk kesejahteraan manusia.",
    ],
    kepalaUpt: {
      nama: "Dr. Moedji Raharto",
      foto: kepala_upa_oail,
      jabatan: "Kepala UPA",
      nip: "195411081981031002",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/oail.itera/",
      youtube: "https://youtube.com/@oailitera9398",
      website: "https://oail.itera.ac.id",
    },
    kegiatanUnggulan: [
      {
        title: "Ngamat Bareng OAIL (NGABRIL)",
        description: "Kegiatan pengamatan langit bersama masyarakat.",
        tanggal: "2022",
        img: kegiatan_1_upa_oail,
      },
      {
        title: "Rukyatul Hilal",
        description:
          "Kegiatan pengamatan hilal untuk menentukan awal bulan Hijriyah.",
        tanggal: "2022",
        img: kegiatan_2_upa_oail,
      },
      {
        title: "Wisata Edukasi Astronomi OAIL",
        description:
          "Kegiatan wisata edukasi untuk mengenalkan astronomi kepada masyarakat.",
        tanggal: "2023",
        img: kegiatan_3_upa_oail,
      },
    ],
  },

  // data UPA MKG
  {
    key: "upa-mkg",
    title: "UPA MKG",
    logo: logo_upa_mkg,
    description:
      "UPT MKG atau Pusat Meteorologi, Klimatologi dan Geofisika bernaung dibawah Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) sebagai pengembangan fasilitas dan struktur kerja sama antara pihak BMKG dan ITERA yang bertujuan untuk pemanfaatan sarana prasarana, pendidikan, penelitian, dan pengabdian kepada masyarakat yang menunjang kajian potensi bencana.",
    headerDescription:
      "UPA MKG adalah kolaborasi antara ITERA dan BMKG, fokus pada pendidikan dan penelitian dalam bidang meteorologi, klimatologi, dan geofisika.",
    history:
      "Unit Pelaksana Teknis Meteorologi, Klimatologi, dan Geofisika (UPT MKG), terbentuk pada tahun 2017 karena pemanfaatan sarana dan prasarana, pendidikan, penelitian, pengembangan di bidang meteorologi, klimatologi, dan geofisika masih terbatas dan masih pada tahap pengembangan secara masif. Seiring berjalannya waktu, kini UPT MKG telah berganti menjadi Pusat Meteorologi, Klimatologi, dan Geofisika yang bernaung dibawah Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) sejak akhir tahun 2022.",
    visi: "Menjadi pusat pengembangan dan riset bersama BMKG-ITERA yang produktif dalam pendidikan serta aktif dalam penelitian dan pengabdian masyarakat.",
    misi: [
      "Bersama secara tahunan mengembangkan kurikulum pendidikan tinggi sesuai kebutuhan terkini.",
      "Mengedukasi masyarakat terkait meteorologi, klimatologi, dan geofisika.",
    ],
    kepalaUpt: {
      nama: "Drs. Zadrach Ledoufij Dupe, M.Si",
      foto: kepala_upa_mkg,
      jabatan: "Kepala UPA",
      nip: "195703221983031003",
    },
    sosmedUPT: {
      instagram: "https://www.instagram.com/mkg_itera/",
      youtube: "https://youtube.com/@uptmkgitera3276?si=YYAoSYxCUXY7RKJI",
      website: "https://sites.google.com/itera.ac.id/mkgitera/home",
    },
    kegiatanUnggulan: [
      {
        title: "Pelatihan Navigasi Darat",
        description: "Pelatihan untuk meningkatkan kemampuan navigasi darat.",
        tanggal: "2022",
        img: kegiatan_1_upa_mkg,
      },
      {
        title: "Pelatihan Bantuan Hidup Dasar",
        description:
          "Pelatihan untuk memberikan pengetahuan dasar mengenai bantuan hidup.",
        tanggal: "2023",
        img: kegiatan_2_upa_mkg,
      },
      {
        title: "Pelatihan Water Rescue",
        description: "Pelatihan untuk keterampilan penyelamatan di air.",
        tanggal: "2023",
        img: kegiatan_3_upa_mkg,
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
      nama: "drh. Sri Sulistiawati, M.M.",
      foto: kepala_upt_k3l,
      jabatan: "Kepala UPT",
      nip: "196507101995032001",
    },
    sosmedUPT: {
      instagram: "",
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
