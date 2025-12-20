import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <div>
      <title>ToyGalaxy</title>
      <Navbar />
      <div className="min-h-[calc(100vh-438px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
