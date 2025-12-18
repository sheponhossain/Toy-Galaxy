import React, { useEffect, useState } from 'react';
import { FaStar, FaBoxOpen, FaEye } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router';

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
        <div className="mb-8 border-l-4 border-[#E91E63] pl-4">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase">
            UpComing <span className="text-[#673AB7]">Event</span>
          </h2>
          <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">
            Best of Toy Galaxy
          </p>
        </div>

        {/* স্লাইডার শুরু */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12" // Pagination এর জন্য নিচে একটু জায়গা
        >
          {toys.map((toy) => (
            <SwiperSlide key={toy.toyId || toy.id}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full mb-2">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={toy.pictureURL || toy.thumbnail} //
                    alt={toy.toyName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-bold text-[#673AB7] shadow-sm">
                    {toy.subCategory || toy.category}
                  </div>
                </div>

                <div className="p-4 flex flex-col">
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
                        <span className="font-bold">
                          {toy.availableQuantity}
                        </span>
                      </span>
                    </div>
                    <span>•</span>
                    <span>{toy.ageRange || 'All Ages'}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black text-[#E91E63]">
                        ৳{toy.price}
                      </span>
                    </div>

                    <Link
                      to={`/toys/${toy.toyId || toy.id}`}
                      className="flex items-center gap-1.5 bg-[#673AB7] text-white px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-[#E91E63] transition-all transform active:scale-90 shadow-md"
                    >
                      <FaEye size={12} /> View
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularToys;
