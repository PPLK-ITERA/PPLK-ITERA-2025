<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssesmenQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $question = [
            //soal pilar1
            [
                'teks_pertanyaan' => 'Sebagai mahasiswa ITERA yang memiliki kerja keras tinggi di bidang akademik, pastinya akan memikirkan cara bagaimana untuk memperoleh nilai tinggi selama kuliah. Apa yang akan Anda dilakukan untuk memperoleh hal tersebut?',
                'sifat' => 1,
            ],
            [
                'teks_pertanyaan' => 'Anda adalah mahasiswa baru, ketika Anda menjalani aktivitas perkuliahan namun menghadapi rintangan yang sulit di berbagai kondisi, sikap apa yang paling efektif untuk dilakukan?',
                'sifat' => 1,
            ],
            [
                'teks_pertanyaan' => 'Anda adalah seorang mahasiswa yang baru saja bergabung dengan organisasi sains di kampusnya, organisasi tersebut sedang mempersiapkan kompetisi eksperimen sains antar kampus. Anda sangat bersemangat dan ingin membuat proyek yang berkaitan dengan energi terbarukan. Namun, saat melakukan eksperimen pertama, hasilnya tidak sesuai harapan.. Apa langkah pertama yang sebaiknya Anda lakukan?',
                'sifat' => 1,
            ],
            [
                'teks_pertanyaan' => 'Sebagai mahasiswa baru pastinya Anda mempunyai minat dan bakat untuk berperan aktif dalam kegiatan kemahasiswaan, contohnya organisasi dan kepanitian nantinya. Apa yang seharusnya Anda lakukan untuk dapat berkontribusi di kegiatan tersebut?',
                'sifat' => 1,
            ],
            [
                'teks_pertanyaan' => 'Bagaimana Anda memotivasi diri sendiri untuk bekerja keras di saat Anda merasa lelah atau kurang semangat?',
                'sifat' => 1,
            ],
            [
                'teks_pertanyaan' => 'Ketika kamu menjadi bagian dari sebuah tim di mana ada keterbatasan alat dan sumber daya. Salah satu rekan tim kamu tidak memiliki alat yang diperlukan untuk menyelesaikan tugasnya, sementara kamu memiliki lebih dari satu. Apa yang akan Anda lakukan dalam situasi ini dan mengapa?',
                'sifat' => 2,
            ],
            [
                'teks_pertanyaan' => 'Menurut kamu, mengapa sikap berbagi sangat penting dalam suatu komunitas atau organisasi? Bagaimana kamu mempraktikkan sikap berbagi dalam kehidupan sehari-hari?',
                'sifat' => 2,
            ],
            [
                'teks_pertanyaan' => 'Ketika kamu menjadi pemimpin tim, bagaimana kamu akan memastikan bahwa semua anggota tim memiliki akses yang adil terhadap fasilitas yang ada? Bagaimana kamu akan mendorong budaya berbagi dalam tim kamu?',
                'sifat' => 2,
            ],
            [
                'teks_pertanyaan' => 'Sarah adalah seorang mahasiswa baru prodi Sains Data yang baru saja bergabung dengan kelompok studi untuk mata kuliah Statistik. Dia merasa kesulitan dengan materi dan sering kali tidak dapat mengikuti diskusi kelompok. Dia juga merasa kurang nyaman untuk meminta bantuan langsung dari teman-temannya. Selama pertemuan kelompok, beberapa anggota kelompok merasa frustasi karena Sarah tidak bisa mengikuti alur diskusi dengan baik. Bagaimana sebaiknya anggota kelompok menangani situasi tersebut?',
                'sifat' => 2,
            ],
            [
                'teks_pertanyaan' => 'Menurut kamu, sebagai mahasiswa pernyataan manakah yang menunjukkan kepedulian dan memberikan kontribusi lebih',
                'sifat' => 2,
            ],
            [
                'teks_pertanyaan' => 'Penggunaan APD merupakan hal penting untuk melindungi pekerja dari berbagai risiko ditempat kerja. Namun, masih adanya pekerja yang tidak mematuhi aturan ini dan mengancam keselamatan mereka sendiri dan pekerja lain di sekitarnya. Tindakan yang sebaiknya dilakukan adalah?',
                'sifat' => 3,
            ],
            [
                'teks_pertanyaan' => 'Sebuah universitas menghadapi masalah dengan pembuangan limbah laboratorium yang tidak dikelola dengan baik. Beberapa kali ditemukan tumpahan bahan kimia berbahaya di area laboratorium yang berpotensi membahayakan mahasiswa dan staf. Selain itu, beberapa gedung di kampus tidak memiliki tanda-tanda evakuasi yang jelas dan alat pemadam kebakaran yang memadai. Apa tindakan pertama yang seharusnya dilakukan oleh pihak universitas untuk mengatasi masalah ini?',
                'sifat' => 3,
            ],
            [
                'teks_pertanyaan' => 'Seorang mahasiswa menemukan zat kimia x berbahaya diluar laboratorium, jika anda adalah mahasiswa tersebut tindakan apa yang anda lakukan?',
                'sifat' => 3,
            ],
            [
                'teks_pertanyaan' => 'Universitas A dan B yang bergerak di bidang manufaktur ingin meningkatkan kinerja dan keberlanjutan mereka dengan menerapkan pilar keseimbangan dalam operasional mereka. Universitas menghadapi tantangan dalam mengelola dampak lingkungan, kesejahteraan karyawan, dan profitabilitas ekonomi. Tindakan apa yang perlu dilakukan oleh pihak Universitas?',
                'sifat' => 3,
            ],
            [
                'teks_pertanyaan' => 'Universitas x memiliki jumlah mahasiswa dan staf sebanyak 20.000. Terlalu banyak orang membuat masalah sampah yang banyak dan tidak dikelola dengan baik yang menyebabkan pencemaran diarea kampus. Tindakan apa yang seharusnya dilakukan?',
                'sifat' => 3,
            ],
        ];


        Question::query()->insert($question);
    }
}
