import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { useAos } from '@/lib/hooks/useAos';

function Page({}) {
    useAos()

  return (
    <div className="p-4">
      <div className="relative w-full h-12 mb-4">
        <input
          type="text"
          className="w-full h-full px-4 py-2 border rounded-full"
          placeholder="Relasi dan jaringan"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Top 3 Follower</h2>
        <div className="grid grid-cols-3 gap-4" data-aos="fade-up">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div>
              <div className="h-4 bg-gray-300 mb-1"></div>
              <div className="h-4 bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Urutan bsd viewer</h2>
        <div className="grid grid-cols-3 gap-4" data-aos="fade-up">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div>
              <div className="h-4 bg-gray-300 mb-1"></div>
              <div className="h-4 bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-3 py-1 mx-1 border rounded">&lt;&lt;</button>
        <button className="px-3 py-1 mx-1 border rounded">&lt;</button>
        <button className="px-3 py-1 mx-1 border rounded bg-gray-300">1</button>
        <button className="px-3 py-1 mx-1 border rounded">2</button>
        <button className="px-3 py-1 mx-1 border rounded">3</button>
        <button className="px-3 py-1 mx-1 border rounded">4</button>
        <button className="px-3 py-1 mx-1 border rounded">&gt;</button>
        <button className="px-3 py-1 mx-1 border rounded">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default Page;
