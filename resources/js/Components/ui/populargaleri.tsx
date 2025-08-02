import { useState } from "react";

const PopupGaleri = ({ onClose }: { onClose: () => void }) => {
  const [selectedDay, setSelectedDay] = useState("Hari ke-1");

  const hariOptions = ["Hari ke-1", "Hari ke-2", "Hari ke-3"];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-[90%] max-w-4xl p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-lg"
          onClick={onClose}
        >
          ×
        </button>

        {/* Dropdown hari */}
        <div className="mb-4">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full md:w-1/3 text-lg font-Greek "
          >
            {hariOptions.map((hari, idx) => (
              <option key={idx} value={hari}>
                {hari}
              </option>
            ))}
          </select>
        </div>

        {/* Konten Galeri Berdasarkan Hari */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt={`Foto ${selectedDay} - ${i + 1}`}
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-[#BE3F00] to-orange-500 text-white py-2 px-6 rounded-md shadow-lg hover:scale-105 transition-transform">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupGaleri;
