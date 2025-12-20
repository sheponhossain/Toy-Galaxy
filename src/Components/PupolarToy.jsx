import React from 'react';
import { FaStar, FaStore, FaArrowRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularToys = () => {
  // আপনার দেওয়া JSON ডেটা এখানে ম্যাপ হবে
  const toys = [
    {
      toyId: 1,
      toyName: 'Lego Classic Bricks',
      sellerName: 'ToyGalaxy Store',
      price: 49.99,
      rating: 4.8,
      pictureURL:
        'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=500',
      subCategory: 'Building Blocks',
    },
    // ... আরও ডেটা
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f3f0ff] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading & See All */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <span className="bg-[#E91E63] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Top Picks
            </span>
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">
              Popular <span className="text-[#673AB7]">Toys</span>
            </h2>
            <p className="text-gray-500 font-medium">
              Discover the most loved toys in your galaxy!
            </p>
          </div>
          <Link
            to="/all-toys"
            className="group flex items-center gap-2 bg-white text-[#673AB7] px-6 py-3 rounded-2xl shadow-md hover:shadow-xl font-bold transition-all border border-purple-100"
          >
            See All Galaxy{' '}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toys.map((toy) => (
            <div
              key={toy.toyId}
              className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-200"
            >
              {/* Wishlist Button */}
              <button className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <FaHeart />
              </button>

              {/* Toy Image Container */}
              <div className="relative h-60 w-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-orange-500">
                  <FaStar className="text-yellow-400" /> {toy.rating}
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-5 px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-[#673AB7] transition-colors">
                    {toy.toyName}
                  </h3>
                </div>

                {/* Seller Info - Marketplace রিকোয়ারমেন্ট অনুযায়ী */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <FaStore className="text-[#673AB7]" />
                  <span>{toy.sellerName}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                      Price
                    </p>
                    <p className="text-2xl font-black text-[#673AB7]">
                      ${toy.price}
                    </p>
                  </div>
                  <Link
                    to={`/toy/${toy.toyId}`}
                    className="bg-[#673AB7] text-white p-4 rounded-2xl hover:bg-[#E91E63] transition-colors shadow-lg shadow-purple-200"
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
