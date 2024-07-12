import React, { useState } from 'react';
import frame from '!assets/Frame Divisi PPLK.png';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Divisi = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const itemPerLoad = 6;

  const loadMore = () => setVisibleCount((count) => count + itemPerLoad);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className="font-avigea text-3xl text-candlelight-600 mb-16">
        SEMUA DIVISI PPLK
      </h2>
      <div className='flex gap-4 flex-wrap justify-center mb-10'>
        {data.slice(0, visibleCount).map((item, index) => (
          <div key={index}>
            <img 
              src={frame}
              alt="" 
            />
          </div>
        ))}
      </div>
      {visibleCount < data.length && (
        <div className="flex justify-center -mt-8 mb-2">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-jaffa-600 text-white rounded shadow"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Divisi;
