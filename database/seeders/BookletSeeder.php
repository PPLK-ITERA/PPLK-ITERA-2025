<?php

namespace Database\Seeders;

use App\Models\Booklet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookletSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      Booklet::create([
         'nama_booklet' => 'Booklet 1',
         'url_booklet' => 'https://example.com/booklet1',
      ]);
      Booklet::create([
         'nama_booklet' => 'Booklet 2',
         'url_booklet' => 'https://example.com/booklet2',
      ]);
      Booklet::create([
         'nama_booklet' => 'Booklet 3',
         'url_booklet' => 'https://example.com/booklet3',
      ]);
   }
}