import React from 'react';
import Footer from '../Components/Footer';

const AuthLayOut = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center items-center  min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayOut;
