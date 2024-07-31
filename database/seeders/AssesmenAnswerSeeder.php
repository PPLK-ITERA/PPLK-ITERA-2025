<?php

namespace Database\Seeders;

use App\Models\Answer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssesmenAnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $answers = [
            //jawaban pilar 1
            [
                'question_id' => 1,
                "teks_jawaban" => "Saya akan belajar dan memahami materi kuliah dengan tekun sehingga nilai ujian saya bisa mendapatkan nilai tinggi.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 1,
                "teks_jawaban" => "Saya akan belajar dengan baik sambil menekuni bidang lain untuk menambah pengalaman dan relasi yang menunjang akademik.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 1,
                "teks_jawaban" => "Saya akan belajar semampunya dan lebih mementingkan urusan nonakademik supaya mendapatkan pengalaman dan relasi yang lebih banyak.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 2,
                "teks_jawaban" => "Tetap menjalaninya namun tidak menemukan akar solusi dari rintangan tersebut.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 2,
                "teks_jawaban" => "Optimis dan tekun dalam menghadapi rintangan yang dihadapi walau tidak memugkinkan untuk menyelasaikan rintangan tersebut.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 2,
                "teks_jawaban" => "Menyalahkan keadaan, tetapi saya akan meminta bantuan kepada teman yang dapat memberi solusi positif.",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 3,
                "teks_jawaban" => "Penting bagi saya untuk mempelajari kesalahan yang terjadi agar saya dapat memperbaikinya dan meningkatkan keterampilan eksperimen. Dengan memahami kesalahan, saya bisa menghindari hal yang sama di masa depan.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 3,
                "teks_jawaban" => " Jika saya merasa putus asa, saya bisa berbicara dengan pembimbing klub atau teman-teman saya untuk mendapatkan dukungan dan saran",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 3,
                "teks_jawaban" => "Mencoba kembali eksperimen dan berharap mendapatkan hasil yang diinginkan.",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 4,
                "teks_jawaban" => "Mencoba memberanikan diri untuk mengetahui seberapa besar kemampuan saya dalam berperan di organisasi tersebut.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 4,
                "teks_jawaban" => "Saya akan menentukan posisi saya sendiri sesuai dengan keinginan dan keyakinan pribadi.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 4,
                "teks_jawaban" => "Bergabung tanpa keyakinan, namun berusaha menjadi bagian dari tim di organisasi tersebut tanpa benar-benar mempercayai atau memahami tujuan dan visi yang ada.
",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 5,
                "teks_jawaban" => "Saya biasanya menonton video motivasi atau membaca buku inspiratif. Selain itu, saya juga mengatur waktu istirahat yang cukup agar tidak terlalu lelah. Saya juga sering memikirkan tujuan jangka panjang saya untuk tetap termotivasi.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 5,
                "teks_jawaban" => " Ketika merasa lelah, saya selalu mengingatkan diri sendiri tentang impian dan tujuan saya. Saya juga biasanya menghubungi teman atau keluarga untuk mendapatkan dorongan semangat. ",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 5,
                "teks_jawaban" => "Saya biasanya tidur sebentar atau melakukan aktivitas ringan seperti berjalan-jalan untuk menyegarkan pikiran.",
                'nilai_sifat' => 1,
            ],
            //jawaban pilar2
            [
                'question_id' => 6,
                "teks_jawaban" => "Saya akan meminjamkan alat saya kepada rekan tim, tetapi hanya saat saya tidak menggunakannya, untuk memastikan proyek tetap berjalan dengan baik.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 6,
                "teks_jawaban" => "Saya akan meminjamkan alat saya sepenuhnya kepada rekan tim dan mencari cara lain untuk menyelesaikan tugas saya, karena tim lebih penting daripada individu.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 6,
                "teks_jawaban" => "Saya akan mencari alternatif alat lain yang bisa digunakan oleh rekan tersebut, sambil tetap meminjamkan alat saya jika diperlukan, untuk memastikan efisiensi kerja. ",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 7,
                "teks_jawaban" => "Sikap berbagi penting karena dapat menciptakan solidaritas dan kerja sama dalam komunitas. Saya mempraktikkannya dengan berbagi pengetahuan dan keterampilan saya dengan teman-teman.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 7,
                "teks_jawaban" => "Sikap berbagi penting karena dapat memperkuat hubungan dan rasa saling percaya. Saya mempraktikkannya dengan sering membantu teman yang membutuhkan.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 7,
                "teks_jawaban" => "Sikap berbagi penting karena dapat meningkatkan rasa empati dan kepedulian. Saya mempraktikkannya dengan rutin menyumbangkan waktu dan sumber daya saya untuk kegiatan kemanusiaan.",
                'nilai_sifat' => 2,
            ],

            [
                'question_id' => 8,
                "teks_jawaban" => "Saya akan memonitor penggunaan fasilitas secara rutin dan mendistribusikannya sesuai kebutuhan, sambil mengajak anggota tim untuk saling membantu. ",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 8,
                "teks_jawaban" => "Saya akan menciptakan sistem rotasi penggunaan fasilitas dan memberikan pelatihan tentang pentingnya berbagi dan kerjasama dalam tim",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 8,
                "teks_jawaban" => "Saya akan mengembangkan kebijakan tim yang mendukung transparansi dalam penggunaan fasilitas dan memberikan penghargaan kepada anggota tim yang menunjukkan sikap berbagi dan kerjasama yang baik.",
                'nilai_sifat' => 2,
            ],

            [
                'question_id' => 9,
                "teks_jawaban" => "Mengajak Sarah untuk bergabung dalam sesi belajar tambahan di luar jam pertemuan kelompok dan menawarkan untuk menjelaskan materi yang dia kesulitan.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 9,
                "teks_jawaban" => "Menyarankan Sarah untuk mencari bantuan dari dosen atau tutor dan tidak memberikan dukungan atau bantuan tambahan di dalam kelompok.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 9,
                "teks_jawaban" => "Menunjukkan empati dengan mendengarkan keluhan Sarah dan mengatur waktu tambahan untuk sesi belajar bersama di mana semua anggota kelompok bisa berbagi pengetahuan dan membantu Sarah memahami materi lebih baik. ",
                'nilai_sifat' => 2,
            ],

            [
                'question_id' => 10,
                "teks_jawaban" => "Penggunaan aplikasi berbagi kendaraan seperti Gojek atau Grab dapat mengurangi kemacetan dan polusi, sekaligus menciptakan lapangan pekerjaan.",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 10,
                "teks_jawaban" => "Teknologi berbagi file dan pengetahuan di internet, seperti open-source software, dapat mempercepat inovasi dan perkembangan teknologi dengan memungkinkan lebih banyak orang untuk berkontribusi dan belajar tanpa biaya besar.",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 10,
                "teks_jawaban" => "Inisiatif perpustakaan komunitas yang memungkinkan masyarakat mengakses buku dan sumber daya pendidikan tanpa biaya besar.",
                'nilai_sifat' => 1,
            ],
            //jawaban pilar3
            [
                'question_id' => 11,
                "teks_jawaban" => "Edukasi dan pelatihan tambahan tentang pentingnya penggunaan APD",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 11,
                "teks_jawaban" => "Pengecekan dan pemeriksaan rutin serta pemantauan untuk memastikan bahwa semua pekerja memakai APD dengan benar",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 11,
                "teks_jawaban" => "Sanksi disiplin sebagai penegasan bahwa pelanggaran serius terhadap kebijakan dalam pemakaian K3",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 12,
                "teks_jawaban" => "Menambah jumlah kelas praktikum untuk mengurangi beban laboratorium",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 12,
                "teks_jawaban" => "Mengadakan pelatihan keselamatan kerja di laboratorium dan memperbarui prosedur pembuangan limbah",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 12,
                "teks_jawaban" => "Meningkatkan anggaran untuk penelitian ilmiah ",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 13,
                "teks_jawaban" => "Membuang zat kimia tersebut ke tempat sampah agar tidak terjadi hal yang tidak diinginkan",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 13,
                "teks_jawaban" => "Melapor kepada asisten praktikum atau asisten laboratorium terdekat agar ditindaklanjuti",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 13,
                "teks_jawaban" => "Menyembunyikan zat tersebut ditempat yang tidak dapat ditemukan siapapun",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 14,
                "teks_jawaban" => ". Pertahankan praktik yang ada dan pertimbangkan untuk memimpin inisiatif dalam sektor keberlanjutan dan tanggung jawab sosia",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 14,
                "teks_jawaban" => " Identifikasi area yang perlu ditingkatkan dan buat rencana untuk memperbaiki praktik yang kurang efektif",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 14,
                "teks_jawaban" => "Fokus pada perbaikan signifikan dalam area yang lemah dan pertimbangkan untuk melakukan riset lebih mendalam",
                'nilai_sifat' => 1,
            ],

            [
                'question_id' => 15,
                "teks_jawaban" => "Melakukan pelatihan bagi mahasiswa dan staf mengenai cara memilah sampah dengan benar",
                'nilai_sifat' => 2,
            ],
            [
                'question_id' => 15,
                "teks_jawaban" => "Menyediakan fasilitas daur ulang dan pengomposan",
                'nilai_sifat' => 1,
            ],
            [
                'question_id' => 15,
                "teks_jawaban" => "Kampus menerapkan kebijakan mengenai pemilahan dan pengelolaan kampus",
                'nilai_sifat' => 1,
            ],
        ];
        Answer::query()->insert($answers);
    }
}
