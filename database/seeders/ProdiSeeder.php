<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Prodi;
use Illuminate\Support\Facades\DB;

class ProdiSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      // Fakultas
      $fakultasData = [
         ['nama_fakultas' => 'Fakultas Sains'],
         ['nama_fakultas' => 'Fakultas Teknologi Infrastruktur dan Kewilayahan'],
         ['nama_fakultas' => 'Fakultas Teknologi Industri']
      ];

      DB::table('fakultas')->insert($fakultasData);

      // Mendapatkan id fakultas
      $fs = DB::table('fakultas')->where('nama_fakultas', 'Fakultas Sains')->first()->id;
      $ftik = DB::table('fakultas')->where('nama_fakultas', 'Fakultas Teknologi Infrastruktur dan Kewilayahan')->first()->id;
      $fti = DB::table('fakultas')->where('nama_fakultas', 'Fakultas Teknologi Industri')->first()->id;

      // Prodi
      $prodiData = [
         ['fakultas_id' => $fs, 'nama_prodi' => 'BIOLOGI'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'FARMASI'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'FISIKA'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'KIMIA'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'MATEMATIKA'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'SAINS AKTUARIA'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'SAINS ATMOSFIR DAN KEPLANETAN'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'SAINS DATA'],
         ['fakultas_id' => $fs, 'nama_prodi' => 'SAINS LINGKUNGAN KELAUTAN'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'ARSITEKTUR'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'ARSITEKTUR LANSKAP'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'DESAIN KOMUNIKASI VISUAL'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'PARIWISATA'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'REKAYASA TATA KELOLA AIR TERPADU'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'TEKNIK GEOMATIKA'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'TEKNIK KELAUTAN'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'TEKNIK LINGKUNGAN'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'TEKNIK PERKERETAAPIAN'],
         ['fakultas_id' => $ftik, 'nama_prodi' => 'TEKNIK SIPIL'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'PERENCANAAN WILAYAH DAN KOTA'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'REKAYASA INSTRUMENTASI DAN AUTOMASI'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'REKAYASA KEHUTANAN'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'REKAYASA KEOLAHRAGAAN'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'REKAYASA KOSMETIK'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'REKAYASA MINYAK DAN GAS'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK BIOMEDIS'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK ELEKTRO'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK FISIKA'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK GEOFISIKA'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK GEOLOGI'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK INDUSTRI'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK INFORMATIKA'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK KIMIA'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK MATERIAL'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK MESIN'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK PERTAMBANGAN'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK SISTEM ENERGI'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK TELEKOMUNIKASI'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNIK BIOSISTEM'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNOLOGI INDUSTRI PERTANIAN'],
         ['fakultas_id' => $fti, 'nama_prodi' => 'TEKNOLOGI PANGAN'],
      ];

      Prodi::insert($prodiData);
   }
}
