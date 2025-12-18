import React from 'react';
import ToyGalaxyLogo from '../ToyGalaxyLogo/ToyGalaxyLogo';
import { FaUserAlt } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={'/'} className=" font-medium">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/profile'} className="text-[16px] font-medium">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="text-2xl p-2">
          <ToyGalaxyLogo></ToyGalaxyLogo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'} className="text-[16px] font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/profile'} className="text-[16px] font-medium">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <Link
          to={'/login'}
          className=" flex items-center gap-2 btn-ghost px-3 font-bold text-[16px]"
        >
          <FaUserAlt /> Login
        </Link>
        <div className="h-10 w-10 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
