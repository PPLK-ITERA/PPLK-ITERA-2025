import React from 'react'
import logoPplk from '../../../../../resources/assets/logo-pplk-2024.png'

const SejarahKM = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
        <div className='flex h-[742px] w-[1155px] flex-row rounded-[20px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] shadow-2xl'>
            <div className='flex flex-row h-[322px] w-[322px] rounded-[20px] bg-white mt-24 ml-16 p-8'>
                <img 
                src={logoPplk} 
                alt="logo" 
                className='object-cover'
                />
            </div>
            <div className='flex flex-col w-full pl-14 mt-8'>
                <h2 className='font-avigea text-[39px] text-white'>
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