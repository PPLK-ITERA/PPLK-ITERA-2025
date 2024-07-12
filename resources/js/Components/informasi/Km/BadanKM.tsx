import React from 'react'
import bkkm from '!assets/bkkm.png'

const BadanKM = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
        <div className='flex flex-col md:h-[459px] md:w-[1155px] rounded-[20px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] shadow-2xl items-center justify-center'>
            <h2 className='font-avigea md:text-[39px] text-[25px] text-white pt-7'>
                BADAN KELENGKAPAN KM ITERA
            </h2>
            <div className='pt-7 pb-7 px-7'>
                <img 
                src={bkkm} 
                alt="logo" 
                className='object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default BadanKM