import React from 'react';
import Home from '../Pages/Home';
import Slider from '../Components/Slider';
import PupolarToyLayOut from './PupolarToyLayOut';

document.title = 'ToyGalaxy | Home';
const HomeLayOut = () => {
  return (
    <div className="">
      <title>ToyGalaxy | Home</title>
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
        </div>

        <PupolarToyLayOut />
      </div>
    </div>
  );
};

export default HomeLayOut;
