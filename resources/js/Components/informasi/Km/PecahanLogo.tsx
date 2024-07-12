import React from 'react'

import itera from "!assets/logokm/itera.png";
import kmPink from "!assets/logokm/km-tapi-pink.png";
import km from "!assets/logokm/km.png";
import sarjana from "!assets/logokm/sarjana.png";
import swarnabumi from "!assets/logokm/swarnabumi.png";
import tangan from "!assets/logokm/tangan.png";
import teleskop from "!assets/logokm/teleskop.png";

const PecahanLogo = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-center gap-14'>
            <div className='flex flex-col items-center justify-center gap-14'>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={itera} alt="logo" className='w-full h-full'/>
                </div>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={sarjana} alt="logo" className='w-full h-full'/>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-14'>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={kmPink} alt="logo" className='w-full h-full' />
                </div>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={km} alt="logo" className='w-full h-full p-2'/>
                </div>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={swarnabumi} alt="logo" className='w-full h-full'/>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-14'>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={tangan} alt="logo" className='w-full h-full'/>
                </div>
                <div className='md:w-44 md:h-44 flex items-center justify-center bg-white rounded-full overflow-hidden'>
                    <img src={teleskop} alt="logo" className='w-full h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PecahanLogo
