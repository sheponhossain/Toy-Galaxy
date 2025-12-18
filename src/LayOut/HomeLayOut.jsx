import React from 'react';
import Home from '../Pages/Home';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';

const HomeLayOut = () => {
  <title>Home</title>;
  return (
    <div className=" mx-auto ">
      <div className="h-6/12 w-full mb-5">
        <Slider />{' '}
      </div>

      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">
            Popular <span className="text-[#E91E63]">Toys</span>
          </h2>
          <div className="h-1 w-20 bg-[#FFC107] mx-auto mt-2 rounded-full"></div>
        </div>
        <PopularToys />
      </div>
    </div>
  );
};

export default HomeLayOut;
