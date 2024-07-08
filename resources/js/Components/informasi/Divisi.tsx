import React from 'react'


const data  = [1,2,3,4,5,5,6,7,8,9,10]

const Divisi = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className="font-avigea text-3xl text-candlelight-600">
                SEMUA DIVISI PPLK
        </h2>
        {<div className='flex gap-4 flex-wrap justify-center'>
            {data.map((item) => (
                <div className='bg-black w-56 h-56'>{item}</div>
            ))}
        </div>}
    </div>
  )
}

export default Divisi