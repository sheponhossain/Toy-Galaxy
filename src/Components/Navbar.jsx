import React, { use } from 'react';
import ToyGalaxyLogo from '../ToyGalaxyLogo/ToyGalaxyLogo';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';

const Navbar = () => {
  const { user } = use(AuthContext);
  const handleLogOut = () => {
    // eslint-disable-next-line no-undef
    logOut() // Apnar AuthContext theke asha logOut function
      .then(() => {
        // Logout successful hole SweetAlert dekhaite paren
        console.log('Logged out successfully');
      })
      .catch((error) => console.error(error));
  };
  // const user = true; // এখানে আপনার ইউজার অবস্থা থাকবে (লগইন/লগআউট)
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
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink
              to="/"
              className={
                ({ isActive }) =>
                  isActive
                    ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold' // অ্যাক্টিভ থাকলে এই ক্লাস পাবে
                    : 'text-gray-600 hover:text-[#673AB7] px-3 py-2 font-medium' // না থাকলে এই ক্লাস
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {
              <NavLink
                to={'/add-toy'}
                className={
                  ({ isActive }) =>
                    isActive
                      ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold' // অ্যাক্টিভ থাকলে এই ক্লাস পাবে
                      : 'text-gray-600 hover:text-[#673AB7] px-3 py-2 font-medium' // না থাকলে এই ক্লাস
                }
              >
                Add Toy
              </NavLink>
            }
          </li>
          <li>
            {user ? (
              <NavLink
                to={'/profile'}
                className={
                  ({ isActive }) =>
                    isActive
                      ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold' // অ্যাক্টিভ থাকলে এই ক্লাস পাবে
                      : 'text-gray-600 hover:text-[#673AB7] px-3 py-2 font-medium' // না থাকলে এই ক্লাস
                }
              >
                Profile
              </NavLink>
            ) : (
              ' '
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {user && user?.email ? (
          /* User thakle Logout button dekhabe */
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 btn-ghost px-3 font-bold text-[16px] hover:text-[#E91E63] transition-all"
          >
            <FaUserAlt /> Logout
          </button>
        ) : (
          /* User na thakle Login button dekhabe */
          <Link
            to="/login"
            className="flex items-center gap-2 btn-ghost px-3 font-bold text-[16px] hover:text-[#673AB7] transition-all"
          >
            <FaUserAlt /> Login
          </Link>
        )}
        {user && (
          <div className="relative group flex items-center gap-3">
            <div className="h-10 w-10 border-2 border-[#673AB7] rounded-full overflow-hidden cursor-pointer">
              <img
                src={
                  user?.photoURL ||
                  'https://i.ibb.co/mJR9Qxc/user-placeholder.png'
                }
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* হোভার করলে নাম দেখানোর অংশ */}
            <div className="absolute right-0 top-12 scale-0 group-hover:scale-100 transition-all duration-300 origin-top z-10">
              <div className="bg-[#673AB7] text-white text-xs font-bold py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
                {user?.displayName || 'Anonymous User'}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-[#673AB7] rotate-45"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
