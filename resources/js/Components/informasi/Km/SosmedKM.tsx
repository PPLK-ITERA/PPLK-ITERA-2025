import React from 'react'

import yt from '!assets/sosmed/yt.png'
import ig from '!assets/sosmed/ig.png'
import tiktok from '!assets/sosmed/tiktok.png'
import x from '!assets/sosmed/x.png'
import www from '!assets/sosmed/www.png'


const SosmedKM = () => {
  return (
    <div className='flex items-center justify-center mt-32 z-20'>
        <div className='flex md:h-[315px] md:w-[600px] h-[250px] w-[400px] flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#B54419] to-[#90381C] shadow-2xl z-20'>
          <h2 className='font-avigea md:text-[36px] text-[20px] text-white underline md:underline-offset-[24px] underline-offset-[18px] font-light md:pt-10 mt-10'>SOSIAL MEDIA KM ITERA</h2>
          <div className='flex flex-row gap-6 pt-8 pb-6'>
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

          <p className='text-[16px] font-montserrat text-white pb-6 '>Website</p>
          <div className='md:h-[40px] md:w-[432px] h-[200px] w-[370px] rounded-md bg-white shadow-2xl flex flex-row items-center justify-center gap-4 mb-10 mx-7'>
            <img src={www} alt="www" />
            <a href="https://km.itera.ac.id/" className='font-montserrat text-[16px] text-black'>https://km.itera.ac.id/</a>
          </div>
        </div>
    </div>
  )
}

export default SosmedKM