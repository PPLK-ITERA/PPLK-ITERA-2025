import React from 'react'

import yt from '!assets/sosmed/yt.png'
import ig from '!assets/sosmed/ig.png'
import tiktok from '!assets/sosmed/tiktok.png'
import x from '!assets/sosmed/x.png'
import www from '!assets/sosmed/www.png'


const SosmedKM = () => {
  return (
    <div className='flex items-center justify-center mt-32 z-20'>
        <div className='flex sm:h-[315px] sm:w-[600px] h-[170px] w-[300px] flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#B54419] to-[#90381C] shadow-2xl z-20 pb-7'>
          <h2 className='font-avigea sm:text-[36px] text-[14px] text-white text-center sm:underline sm:underline-offset-[24px] underline-offset-[18px] font-light mt-16'>SOSIAL MEDIA KM ITERA</h2>
          <div className='flex flex-row sm:gap-6 pt-2 pb-1 sm:pt-10 gap-2'>
            <div className='flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={x} alt="x" className='p-3'/>
              </a>
            </div>
            <div className='flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={ig} alt="instagram" className='p-3'/>
              </a>
            </div>
            <div className='flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={yt} alt="youtube" className='p-2'/>
              </a>
            </div>
            <div className='flex items-center justify-center bg-white rounded-full overflow-hidden'>
              <a href="https://www.instagram.com/thebugitself/" target="_blank">
                <img src={tiktok} alt="tiktok" className='p-3'/>
              </a>
            </div>
          </div>

          <p className='sm:text-[16px] text-[14px] font-montserrat text-white'>Website</p>
          <div className='sm:h-[40px] sm:w-[432px] h-[30px] w-[270px] rounded-xl bg-white shadow-2xl flex flex-row items-center justify-center gap-1 mx-7 mb-10 sm:mt-4 sm:py-2 py-2 '>
            <img src={www} alt="www" />
            <a href="https://km.itera.ac.id/" className='font-montserrat text-[14px] sm:text-[16px] text-black'>https://km.itera.ac.id/</a>
          </div>
        </div>
    </div>
  )
}

export default SosmedKM