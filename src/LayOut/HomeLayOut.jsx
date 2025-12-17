import React from 'react';
import Home from '../Pages/Home';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';

const HomeLayOut = () => {
  return (
    <div className=" mx-auto bg-gray-500">
      <div className="h-6/12 w-full bg-gray-500 mb-5">
        <Slider />{' '}
      </div>

      <div className="">
        <PopularToys />
      </div>
    </div>
  );
};

export default HomeLayOut;
