import React, { useEffect, useState } from 'react';
import { FaStar, FaBoxOpen, FaEye } from 'react-icons/fa';

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('/PopularToys.json')
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">
            Popular <span className="text-[#E91E63]">Toys</span>
          </h2>
          <div className="h-1 w-20 bg-[#FFC107] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Compact Grid: Desktop e 4ta card thakbe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Thumbnail Container (Height chuto kora hoyeche) */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={toy.thumbnail}
                  alt={toy.toyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-bold text-[#673AB7] shadow-sm">
                  {toy.category}
                </div>
              </div>

              {/* Content Section (Padding komiye deya hoyeche) */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
                    {toy.toyName}
                  </h3>
                  <div className="flex items-center text-amber-500 font-bold text-xs">
                    <FaStar className="mr-0.5" /> {toy.rating}
                  </div>
                </div>

                <div className="flex items-center text-[11px] text-gray-500 mb-4 gap-2">
                  <div className="flex items-center gap-1">
                    <FaBoxOpen className="text-blue-400" />
                    <span>
                      Stock:{' '}
                      <span className="font-bold">{toy.availableQuantity}</span>
                    </span>
                  </div>
                  <span>•</span>
                  <span>{toy.ageRange}</span>
                </div>

                {/* Price and Button */}
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-[#E91E63]">
                      ৳{toy.price}
                    </span>
                  </div>

                  <button className="flex items-center gap-1.5 bg-[#673AB7] text-white px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-[#E91E63] transition-all transform active:scale-90 shadow-md">
                    <FaEye size={12} /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
