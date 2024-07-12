import React from 'react'

import yt from '!assets/sosmed/yt.png'
import ig from '!assets/sosmed/ig.png'
import tiktok from '!assets/sosmed/tiktok.png'
import x from '!assets/sosmed/x.png'
import www from '!assets/sosmed/www.png'


const SosmedKM = () => {
  return (
    <div className='flex items-center justify-center mt-32'>
        <div className='flex h-[315px] w-[600px] flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#B54419] to-[#90381C] shadow-2xl'>
          <h2 className='font-avigea text-[36px] text-white underline underline-offset-[24px] -mt-14 font-light pt-10'>SOSIAL MEDIA KM ITERA</h2>
          <div className='flex flex-row gap-6 pt-8 pb-6'>
            <div className='w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={x} alt="x" />
              </a>
            </div>
            <div className='w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={ig} alt="instagram" />
              </a>
            </div>
            <div className='w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={yt} alt="youtube" />
              </a>
            </div>
            <div className='w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
          </div>

          <p className='text-[16px] font-montserrat text-white pb-6 '>Website</p>
          <div className='h-[40px] w-[432px] rounded-md bg-white shadow-2xl flex flex-row items-center justify-center gap-4'>
            <img src={www} alt="www" />
            <a href="https://km.itera.ac.id/" className='font-montserrat text-[16px] text-black'>https://km.itera.ac.id/</a>
          </div>
        </div>
    </div>
  )
}

export default SosmedKM