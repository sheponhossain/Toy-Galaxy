import React, { useEffect, useState } from 'react';
import { FaStar, FaStore, FaArrowRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';
import AOS from 'aos'; // AOS ইম্পোর্ট
import 'aos/dist/aos.css'; // AOS CSS ইম্পোর্ট

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // AOS ইনিশিয়ালাইজ করা
    AOS.init({
      duration: 1000, // ১ সেকেন্ড ধরে অ্যানিমেশন হবে
      once: false, // প্রতিবার স্ক্রল করলে অ্যানিমেশন হবে
    });

    fetch('/PopularToy.json')
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(0, 4));
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f3f0ff] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div data-aos="fade-right" className="space-y-2">
            <span className="bg-[#E91E63] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Top Picks
            </span>
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">
              Popular <span className="text-[#673AB7]">Toys</span>
            </h2>
          </div>
          <Link
            to="/all-toys"
            data-aos="fade-left"
            className="group flex items-center gap-2 bg-white text-[#673AB7] px-6 py-3 rounded-2xl shadow-md font-bold transition-all border border-purple-100"
          >
            See All Galaxy{' '}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toys.map((toy, index) => (
            <div
              key={toy.toyId}
              // AOS attributes ব্যবহার করে খুব স্মুথ এনিমেশন
              data-aos="fade-up"
              data-aos-delay={index * 200} // একটার পর একটা আসার জন্য ডিলে
              className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-200"
            >
              {/* Wishlist Button */}
              <button className="absolute top-6 right-6 z-10 bg-white/80 p-2 rounded-full text-gray-400 hover:text-red-500 shadow-sm">
                <FaHeart />
              </button>

              {/* Image Container */}
              <div className="relative h-60 w-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-orange-500">
                  <FaStar className="text-yellow-400" /> {toy.rating}
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 px-2">
                <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-[#673AB7] transition-colors">
                  {toy.toyName}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <FaStore className="text-[#673AB7]" />
                  <span>{toy.sellerName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-[#673AB7]">
                      ${toy.price}
                    </p>
                  </div>
                  <Link
                    to={`/popular-toy-details/${toy.toyId}`}
                    className="bg-[#673AB7] text-white p-4 rounded-2xl hover:bg-[#E91E63] transition-all transform active:scale-90"
                  >
                    <FaArrowRight />
                  </Link>
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
