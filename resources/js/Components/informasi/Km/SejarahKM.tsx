import React from 'react'

import km from '!assets/logokm/km.png'

const SejarahKM = () => {
  return (
    <div className='flex items-center justify-center md:mt-10 mt-80'>
        <div className='md:flex md:flex-row flex w-full xl:w-[1155px] flex-col items-center justify-center md:items-start rounded-[20px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] shadow-2xl md:px-10 pb-8'>
            <div className='md:flex md:flex-row md:h-[322px] md:w-[322px] rounded-[20px] w-[131px] h-[185px] bg-white md:mt-24 p-8 -mt-40 border border-black'>
                <img 
                src={km} 
                alt="logo" 
                className='md:object-cover object-fill w-full'
                />
            </div>
            <div className='flex flex-col w-full px-14 mt-8'>
                <h2 className='font-avigea text-[35px] md:text-[39px] text-white'>
                    SEJARAH & INFORMASI KM ITERA <br />
                </h2>
                <p className='font-montserrat text-[20px] text-white pr-10 font-light mt-7'>
                    KM-ITERA (Keluarga Mahasiswa Institut Teknologi Sumatera) merupakan organisasi kemahasiswaan intra perguruan tinggi yang diselenggarakan berdasarkan prinsip dari, oleh dan untuk mahasiswa demi menciptakan kader-kader bangsa yang berpotensi melanjutkan kesinambungan pembangunan nasional. <br /> <br />
                    Organisasi kemahasiswaan tertinggi di ITERA diwadahi dalam Keluarga Mahasiswa (KM) ITERA. Pada tanggal 16 Mei 2015 Badan Pendiri Keluarga Mahasiswa (BPKM) Itera telah menyelenggarakan forum mahasiswa yang menghasilkan pengesahan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) Keluarga Mahasiswa (KM) Itera. <br /> <br />
                    Dalam badan kelengkapan, Kabinet KM-ITERA memiliki fungsi sebagai lembaga pemegang kekuasaan eksekutif dalam kehidupan kemahasiswaan di Institut Teknologi Sumatera, sementara itu Senat KM-ITERA adalah dewan pemegang kekuasaan legislatif dalam kehidupan kemahasiswaan di Institut Teknologi Sumatera. Kabinet KM-ITERA memayungi HMPS (Himpunan Mahasiswa Program Studi) dan UKM (Unit Kegiatan Mahasiswa). 
                </p>
            </div>
        </div>
    </div>
  )
}

export default SejarahKM