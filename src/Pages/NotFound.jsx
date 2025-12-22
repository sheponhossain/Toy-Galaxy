import React from 'react';

import { FaRocket, FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="">
      <title>Error 404</title>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-black text-gray-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaRocket className="text-6xl md:text-8xl text-[#673AB7] animate-bounce" />
          </div>
        </div>

        <div className="max-w-md -mt-8">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 uppercase mb-4">
            Lost in <span className="text-[#E91E63]">Space?</span>
          </h2>
          <p className="text-gray-500 font-medium mb-8">
            The page you are looking for might have been moved, deleted, or
            never existed in our toy galaxy.
          </p>

          <Link to="/">
            <button className="inline-flex items-center gap-2 bg-[#673AB7] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#E91E63] transition-all duration-300 shadow-lg hover:shadow-[#E91E63]/30 transform hover:-translate-y-1">
              <FaHome className="text-xl" />
              BACK TO HOME
            </button>
          </Link>
        </div>

        <div className="mt-12 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#673AB7]/20"></div>
          <div className="w-3 h-3 rounded-full bg-[#E91E63]/20"></div>
          <div className="w-3 h-3 rounded-full bg-[#673AB7]/20"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
