import bg_4 from "!assets/dokumentasi/bg-4.png";

export default function dokumentasiBottom() {
    const imageUrl = "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80";
    return (

        <div className="relative w-full min-h-[50rem] my-20 py-44">
            {/* Background Image */}
            <img
                src={bg_4}
                alt="Gambar 1"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Konten di tengah */}
            <div>

                <div className="max-w-6xl absolute inset-0 my-20 space-y-10 mx-auto text-white ">
                    <p className="text-center font-greek text-2xl font-bold md:text-4xl">Kenangan pplk-itera 2024</p>

                    <div className="grid grid-cols-12 grid-rows-6 gap-2 px-2 md:gap-3 h-[600px]">
                        {/* Kartu 1 - Top left (medium) */}
                        <div className="col-span-4 row-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 1"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 2 - Top center (large) */}
                        <div className="col-span-5 row-span-2 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 2"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 3 - Top right (small) */}
                        <div className="col-span-3 row-span-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 3"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 4 - Middle left (medium) */}
                        <div className="col-span-3 row-span-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 4"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 5 - Middle center (large) */}
                        <div className="col-span-5 row-span-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 5"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 6 - Middle right top (small) */}
                        <div className="col-span-4 row-span-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 6"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 7 - Middle right bottom (small) */}
                        <div className="col-span-4 row-span-1 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 7"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 8 - Bottom left (medium) */}
                        <div className="col-span-3 row-span-2 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 8"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 9 - Bottom center (large) */}
                        <div className="col-span-5 row-span-2 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 9"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Kartu 10 - Bottom right (large) */}
                        <div className="col-span-4 row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img
                                src={imageUrl}
                                alt="Image 10"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}